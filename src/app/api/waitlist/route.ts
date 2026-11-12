import { NextRequest, NextResponse } from 'next/server'
import { list, put } from '@vercel/blob'
import fs from 'fs'
import path from 'path'

export const runtime = 'nodejs'

const BASE_QUEUE_NUM = 1432
const CSV_FILE_PATH = path.join(process.cwd(), 'submissions.csv')
const BLOB_PREFIX = 'waitlist/'

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function sanitizeEmail(email: string) {
  return email.trim().toLowerCase().replace(/["\n\r]/g, '')
}

function queueLabel(n: number) {
  return `#${n.toLocaleString('en-US')}`
}

function blobKeyForEmail(email: string) {
  // Keep pathnames URL-safe without double-encoding @ etc.
  const safe = email.replace(/[^a-z0-9._+-]/gi, '_')
  return `${BLOB_PREFIX}${safe}.json`
}

async function saveToBlob(email: string) {
  const key = blobKeyForEmail(email)
  const existing = await list({ prefix: BLOB_PREFIX, limit: 1000 })
  const already = existing.blobs.some(
    (b) => b.pathname === key || b.pathname.includes(email.replace('@', '%40'))
  )

  if (!already) {
    await put(
      key,
      JSON.stringify({ email, timestamp: new Date().toISOString() }),
      {
        access: 'private',
        addRandomSuffix: false,
        allowOverwrite: true,
        contentType: 'application/json',
      }
    )
  }

  const after = already ? existing : await list({ prefix: BLOB_PREFIX, limit: 1000 })
  return BASE_QUEUE_NUM + after.blobs.length
}

function saveToCsv(email: string) {
  let lineCount = 0
  const exists = fs.existsSync(CSV_FILE_PATH)

  if (exists) {
    const content = fs.readFileSync(CSV_FILE_PATH, 'utf-8')
    const lines = content.trim().split('\n').filter(Boolean)
    const emails = lines.slice(1).map((line) => {
      const match = line.match(/^"([^"]+)"/)
      return match?.[1]?.toLowerCase()
    })
    if (emails.includes(email)) {
      return BASE_QUEUE_NUM + Math.max(emails.length, 1)
    }
    lineCount = Math.max(lines.length - 1, 0)
  } else {
    fs.writeFileSync(CSV_FILE_PATH, 'Email,Timestamp,QueueNumber\n', 'utf-8')
  }

  const queueNumber = BASE_QUEUE_NUM + lineCount + 1
  const timestamp = new Date().toISOString()
  fs.appendFileSync(CSV_FILE_PATH, `"${email}",${timestamp},#${queueNumber}\n`, 'utf-8')
  return queueNumber
}

export async function POST(req: NextRequest) {
  let body: { email?: string }
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: 'Please provide a valid email address.' }, { status: 400 })
  }

  const email = sanitizeEmail(body.email || '')
  if (!email || !emailRegex.test(email)) {
    return NextResponse.json({ error: 'Please provide a valid email address.' }, { status: 400 })
  }

  try {
    const queueNumber = process.env.BLOB_READ_WRITE_TOKEN
      ? await saveToBlob(email)
      : saveToCsv(email)

    return NextResponse.json({
      success: true,
      message: 'Successfully added to waitlist.',
      queueNumber: queueLabel(queueNumber),
    })
  } catch (error) {
    console.error('[waitlist]', error)
    return NextResponse.json({ error: 'Internal server error.' }, { status: 500 })
  }
}
