'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'

const YELLOW_AT = 30
const RED_AT = 90

export function FloatingIsland() {
  const timerRef = useRef<HTMLSpanElement>(null)
  const glowRef = useRef<HTMLDivElement>(null)
  const lastPhaseRef = useRef<'green' | 'yellow' | 'red'>('green')
  const startTime = useRef(Date.now())

  useEffect(() => {
    const colors = { green: '#34D399', yellow: '#FBBF24', red: '#EF4444' }
    const glowClasses = { green: 'glow-green', yellow: 'glow-yellow', red: 'glow-red' }

    if (glowRef.current) glowRef.current.classList.add('glow-green')

    let rafId: number

    function tick() {
      const elapsed = Math.floor((Date.now() - startTime.current) / 1000)
      const mins = Math.floor(elapsed / 60)
      const secs = elapsed % 60
      const timeStr = `${mins}:${secs.toString().padStart(2, '0')}`

      if (timerRef.current) timerRef.current.textContent = timeStr

      const inlineTimer = document.getElementById('inline-live-timer')
      if (inlineTimer) inlineTimer.textContent = timeStr

      let phase: 'green' | 'yellow' | 'red' = 'green'
      if (elapsed >= RED_AT) phase = 'red'
      else if (elapsed >= YELLOW_AT) phase = 'yellow'

      if (phase !== lastPhaseRef.current) {
        if (timerRef.current) timerRef.current.style.color = colors[phase]
        if (inlineTimer) inlineTimer.style.color = colors[phase]
        if (glowRef.current) {
          glowRef.current.className = `absolute inset-[-1px] rounded-full z-10 pointer-events-none transition-all duration-700 ${glowClasses[phase]}`
        }
        lastPhaseRef.current = phase

        // update CTA human time
        const ctaTime = document.getElementById('cta-time')
        if (ctaTime) {
          let humanTime: string
          if (elapsed < 60) {
            humanTime = `${elapsed} second${elapsed !== 1 ? 's' : ''}`
          } else {
            humanTime = `${mins} minute${mins !== 1 ? 's' : ''}${secs > 0 ? ` ${secs}s` : ''}`
          }
          ctaTime.textContent = humanTime
        }
      }

      const ctaTime = document.getElementById('cta-time')
      if (ctaTime) {
        let humanTime: string
        if (elapsed < 60) {
          humanTime = `${elapsed} second${elapsed !== 1 ? 's' : ''}`
        } else {
          humanTime = `${mins} minute${mins !== 1 ? 's' : ''}${secs > 0 ? ` ${secs}s` : ''}`
        }
        ctaTime.textContent = humanTime
      }

      rafId = requestAnimationFrame(tick)
    }

    rafId = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(rafId)
  }, [])

  return (
    <div className="floating-island-wrap fixed top-4 left-1/2 -translate-x-1/2 z-[9999] flex flex-col items-center gap-2 pointer-events-none" style={{ opacity: 0 }}>
      <div className="relative pointer-events-auto">
        <div className="flex items-center gap-2.5 bg-black px-4 py-1.5 pl-2 rounded-full border border-white/15 shadow-2xl relative z-20">
          <Image
            src="/images/logo.png"
            alt="Ticker"
            width={24}
            height={24}
            className="rounded-md border border-white/10"
          />
          <div className="w-px h-4 bg-white/15" />
          <span
            ref={timerRef}
            className="font-bold text-base tabular-nums tracking-tight min-w-[42px] transition-colors duration-700"
            style={{ color: '#34D399' }}
          >
            0:00
          </span>
        </div>
        <div
          ref={glowRef}
          className="absolute inset-[-1px] rounded-full z-10 pointer-events-none transition-all duration-700 glow-green"
        />
      </div>
    </div>
  )
}
