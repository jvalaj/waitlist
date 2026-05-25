import { NextRequest, NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

const CSV_FILE_PATH = path.join(process.cwd(), 'submissions.csv')
const BASE_QUEUE_NUM = 1432

export async function POST(req: NextRequest) {
  const { email } = await req.json()

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!email || !emailRegex.test(email)) {
    return NextResponse.json({ error: 'Please provide a valid email address.' }, { status: 400 })
  }

  try {
    let lineCount = 0
    const exists = fs.existsSync(CSV_FILE_PATH)

    if (exists) {
      const content = fs.readFileSync(CSV_FILE_PATH, 'utf-8')
      const lines = content.trim().split('\n')
      lineCount = lines.length - 1
    } else {
      fs.writeFileSync(CSV_FILE_PATH, 'Email,Timestamp,QueueNumber\n', 'utf-8')
    }

    const queueNumber = BASE_QUEUE_NUM + lineCount
    const sanitizedEmail = email.replace(/["\n\r]/g, '')
    const timestamp = new Date().toISOString()

    fs.appendFileSync(
      CSV_FILE_PATH,
      `"${sanitizedEmail}",${timestamp},#${queueNumber}\n`,
      'utf-8'
    )

    return NextResponse.json({
      success: true,
      message: 'Successfully added to waitlist.',
      queueNumber: `#${queueNumber.toLocaleString()}`,
    })
  } catch {
    return NextResponse.json({ error: 'Internal server error.' }, { status: 500 })
  }
}
