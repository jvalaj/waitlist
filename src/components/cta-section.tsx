'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

export function CTASection() {
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [queueNum, setQueueNum] = useState('#1,432')

  useEffect(() => {
    const saved = localStorage.getItem('ticker_waitlist')
    if (saved) {
      const data = JSON.parse(saved)
      setQueueNum(data.queue)
      setSuccess(true)
    }
  }, [])

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!email.trim() || loading) return
    setLoading(true)

    let queue = '#1,432'
    try {
      const res = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })
      if (res.ok) {
        const data = await res.json()
        queue = data.queueNumber || queue
      }
    } catch {
      const count = parseInt(localStorage.getItem('ticker_count') || '0')
      queue = `#${(1432 + count).toLocaleString()}`
      localStorage.setItem('ticker_count', (count + 1).toString())
    }

    localStorage.setItem('ticker_waitlist', JSON.stringify({ email, queue, ts: Date.now() }))
    setQueueNum(queue)
    setSuccess(true)
    setLoading(false)
  }

  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-24 bg-white text-center">
      <div className="max-w-[680px] w-full">
        <div className="max-w-[560px] mx-auto mb-12 fade-up">
          <Image
            src="/images/logo.png"
            alt="Ticker"
            width={72}
            height={72}
            className="rounded-[18px] mx-auto mb-7 shadow-md"
          />
          <h2 className="text-[2rem] sm:text-[2.2rem] font-black tracking-tight leading-snug mb-4">
            You&apos;ve been on this page for{' '}
            <span id="cta-time" className="text-[#0066FF]">
              0 seconds
            </span>
            .
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed mb-3">
            Imagine having that awareness every time you open Instagram, TikTok, or Twitter. No
            locks. No guilt. Just a quiet mirror.
          </p>
          <p className="text-sm text-muted-foreground/70">
            We&apos;re rolling out early access in weekly cohorts. Enter your email and we&apos;ll
            save your spot.
          </p>
        </div>

        <div className="max-w-[460px] mx-auto fade-up">
          {!success ? (
            <form onSubmit={handleSubmit}>
              <div className="flex items-center bg-secondary border border-border rounded-full p-1.5 focus-within:border-[#0066FF] focus-within:shadow-[0_0_0_4px_rgba(0,102,255,0.08)] transition-all duration-300">
                <Input
                  type="email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  required
                  autoComplete="email"
                  className="flex-1 min-w-0"
                />
                <Button type="submit" disabled={loading} className="flex-shrink-0">
                  {loading ? 'Saving…' : 'Join the waitlist'}
                </Button>
              </div>
              <p className="text-[11px] font-semibold text-muted-foreground mt-3">
                iOS 17+ required · No spam, ever
              </p>
            </form>
          ) : (
            <Card className="animate-pop-in text-center">
              <CardContent className="p-8">
                <div className="w-11 h-11 rounded-full bg-blue-50 text-[#0066FF] flex items-center justify-center text-lg font-black mx-auto mb-4">
                  ✓
                </div>
                <h3 className="text-xl font-black mb-2">You&apos;re on the list.</h3>
                <p className="text-sm text-muted-foreground mb-6">
                  We&apos;ve saved your spot. You&apos;ll hear from us soon.
                </p>
                <div className="inline-flex flex-col items-center bg-secondary border border-border rounded-2xl px-8 py-3">
                  <span className="text-[9px] font-black uppercase tracking-[0.12em] text-muted-foreground mb-1">
                    Your spot
                  </span>
                  <span className="text-2xl font-black tabular-nums">{queueNum}</span>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </section>
  )
}
