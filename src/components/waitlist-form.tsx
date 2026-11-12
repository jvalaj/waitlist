'use client'

import { FormEvent, useEffect, useState } from 'react'

const STORAGE_KEY = 'nms_waitlist'

type Saved = { email: string; queue: string; ts: number }

type Props = {
  onImage?: boolean
  className?: string
  id?: string
}

export function WaitlistForm({ onImage = false, className = '', id = 'nms-waitlist-email' }: Props) {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'done' | 'error'>('idle')
  const [queue, setQueue] = useState('#1,432')
  const [error, setError] = useState('')

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY)
      if (!raw) return
      const data = JSON.parse(raw) as Saved
      if (data?.queue) {
        setQueue(data.queue)
        setStatus('done')
      }
    } catch {
      /* ignore */
    }
  }, [])

  async function onSubmit(e: FormEvent) {
    e.preventDefault()
    const value = email.trim()
    if (!value || status === 'loading') return

    setStatus('loading')
    setError('')

    try {
      const res = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: value }),
      })
      const data = await res.json()
      if (!res.ok) {
        setError(data.error || 'Something went wrong. Try again.')
        setStatus('error')
        return
      }

      const nextQueue = data.queueNumber || '#1,432'
      setQueue(nextQueue)
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({ email: value, queue: nextQueue, ts: Date.now() } satisfies Saved)
      )
      setStatus('done')
    } catch {
      setError('Could not reach the server. Try again in a moment.')
      setStatus('error')
    }
  }

  if (status === 'done') {
    return (
      <div data-pop className={'w-full max-w-[420px] ' + className}>
        <div
          className={
            'rounded-[22px] px-5 py-4 ' +
            (onImage
              ? 'bg-white/95 text-ink shadow-[0_10px_30px_rgba(40,20,60,0.25)]'
              : 'bg-white text-ink shadow-[0_10px_24px_rgba(8,7,8,0.08)] ring-1 ring-ink/10')
          }
        >
          <p className="text-[15px] font-medium">You&apos;re on the list.</p>
          <p className={'mt-1 text-[14px] ' + (onImage ? 'text-ink/70' : 'text-ink/65')}>
            We&apos;ll email you when a spot opens.
          </p>
          <div className="mt-3 flex items-baseline justify-between gap-4 border-t border-ink/10 pt-3">
            <span className="text-[12px] uppercase tracking-[0.08em] text-ink/45">Your spot</span>
            <span className="text-[22px] font-medium tabular-nums tracking-[-0.02em]">{queue}</span>
          </div>
        </div>
      </div>
    )
  }

  const inputClass = onImage
    ? 'bg-white/95 text-ink placeholder:text-ink/40 shadow-[0_10px_30px_rgba(40,20,60,0.18)]'
    : 'bg-white text-ink placeholder:text-ink/40 shadow-[0_8px_20px_rgba(8,7,8,0.06)] ring-1 ring-ink/10'

  const buttonClass = onImage
    ? 'bg-ink text-white hover:opacity-90'
    : 'bg-ink text-white hover:opacity-90'

  return (
    <div data-pop className={'w-full max-w-[420px] ' + className}>
      <form onSubmit={onSubmit} className="space-y-3">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-stretch">
          <label className="sr-only" htmlFor={id}>
            Email
          </label>
          <input
            id={id}
            type="email"
            name="email"
            required
            autoComplete="email"
            inputMode="email"
            placeholder="your@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={status === 'loading'}
            className={
              'min-h-[48px] w-full flex-1 rounded-full px-5 text-[15px] outline-none transition ' +
              'focus:ring-2 focus:ring-accent/40 disabled:opacity-60 ' +
              inputClass
            }
          />
          <button
            type="submit"
            disabled={status === 'loading'}
            className={
              'inline-flex min-h-[48px] shrink-0 items-center justify-center rounded-full px-6 text-[14px] font-medium transition disabled:opacity-60 sm:text-[15px] ' +
              buttonClass
            }
          >
            {status === 'loading' ? 'Joining…' : 'Join the waitlist'}
          </button>
        </div>
        <p className={'text-[13px] ' + (onImage ? 'text-white/75' : 'text-ink/55')}>
          Early access and study recruitment. No spam.
        </p>
        {error && <p className="text-[13px] text-red-600">{error}</p>}
      </form>
    </div>
  )
}
