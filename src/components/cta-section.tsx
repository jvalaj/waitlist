'use client'

import { useState, useEffect } from 'react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

export function CTASection() {
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    try {
      if (localStorage.getItem('nomorescroll_waitlist')) setSuccess(true)
    } catch {}
  }, [])

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!email.trim() || loading) return
    setLoading(true)
    setError('')
    try {
      const res = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })
      if (!res.ok) {
        const data = await res.json().catch(() => ({}))
        throw new Error(data.error || 'Something went wrong. Please try again.')
      }
      try {
        localStorage.setItem('nomorescroll_waitlist', JSON.stringify({ ts: Date.now() }))
      } catch {}
      setSuccess(true)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="join" className="bg-gradient-to-b from-[#FCFCFC] to-[#F2F5FA] px-6 py-28 text-center">
      <div className="mx-auto max-w-[560px]">
        <span className="fade-up inline-flex items-center gap-2 rounded-full border border-line bg-white px-3.5 py-1.5 text-[12px] font-bold text-ink">
          <span className="h-2 w-2 rounded-full bg-timer-green" />
          Now in beta · Launching soon
        </span>
        <h2 className="fade-up mt-6 text-[2rem] font-black leading-snug tracking-tight text-ink sm:text-[2.4rem]">
          Be among the first to try it.
        </h2>
        <p className="fade-up mt-4 text-[16px] leading-relaxed text-sub">
          Leave your email and we will write to you about beta access and the launch. No spam.
        </p>

        <div className="fade-up mx-auto mt-10 max-w-[460px]">
          {!success ? (
            <form onSubmit={handleSubmit}>
              <div className="flex items-center rounded-full border border-line bg-white p-1.5 transition-all duration-300 focus-within:border-brand-blue focus-within:shadow-[0_0_0_4px_rgba(0,102,255,0.08)]">
                <Input
                  type="email"
                  placeholder="you@school.edu"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  required
                  autoComplete="email"
                  className="min-w-0 flex-1"
                />
                <Button type="submit" disabled={loading} className="flex-shrink-0">
                  {loading ? 'Saving…' : 'Join the waitlist'}
                </Button>
              </div>
              {error && <p className="mt-3 text-[12px] font-semibold text-destructive">{error}</p>}
              <p className="mt-3 text-[11px] font-semibold text-sub">Needs iOS 17 or newer.</p>
            </form>
          ) : (
            <Card className="animate-pop-in text-center">
              <CardContent className="p-8">
                <div className="mx-auto mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-blue-50 text-lg font-black text-brand-blue">
                  ✓
                </div>
                <h3 className="mb-2 text-xl font-black">You are on the list.</h3>
                <p className="text-sm text-sub">We will email you about beta access and the launch.</p>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </section>
  )
}
