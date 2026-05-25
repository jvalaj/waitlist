'use client'

import { useEffect } from 'react'
import Image from 'next/image'

export function HeroSection() {
  useEffect(() => {
    async function runAnimations() {
      const gsapMod = await import('gsap')
      const { gsap } = gsapMod
      const { ScrollTrigger } = await import('gsap/ScrollTrigger')
      gsap.registerPlugin(ScrollTrigger)

      const tl = gsap.timeline({ defaults: { ease: 'power2.out' } })
      tl.delay(0.2)
        .fromTo('#hero-icon', { scale: 0.8, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.8, ease: 'back.out(1.5)' })
        .fromTo('#hero-tagline', { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8 }, '-=0.4')
        .add(() => {
          document.querySelectorAll('.u-clock').forEach(el => el.classList.add('is-visible'))
        }, '+=0.2')
        .add(() => {
          document.querySelectorAll('.u-scroll').forEach(el => el.classList.add('is-visible'))
        }, '+=0.5')
        .fromTo('.floating-island-wrap', { y: -40, opacity: 0 }, { y: 0, opacity: 1, duration: 0.4, ease: 'back.out(1.2)' }, '+=0.5')
        .fromTo('#scroll-hint', { opacity: 0 }, { opacity: 1, duration: 1 }, '-=0.2')
    }

    runAnimations()
  }, [])

  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 bg-[#111113] overflow-hidden"
    >
      {/* Radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(circle at center, rgba(255,255,255,0.08) 0%, rgba(17,17,19,0.5) 50%, rgba(17,17,19,1) 100%)',
        }}
      />

      <div className="relative z-10 flex flex-col items-center">
        <Image
          id="hero-icon"
          src="/images/logo.png"
          alt="Ticker"
          width={120}
          height={120}
          className="rounded-[28px] mb-8 shadow-[0_0_60px_rgba(255,255,255,0.12)]"
          style={{ opacity: 0 }}
          priority
        />

        <p
          id="hero-tagline"
          className="text-white font-bold text-2xl sm:text-3xl max-w-lg leading-relaxed mb-16"
          style={{ opacity: 0, textShadow: '0 2px 10px rgba(0,0,0,0.3)' }}
        >
          Put a{' '}
          <span className="anim-underline u-clock">clock</span>{' '}
          <span
            id="inline-live-timer"
            className="inline-flex items-center justify-center tabular-nums font-bold rounded-lg px-2 py-0.5 text-lg mx-1 align-middle"
            style={{
              background: 'rgba(52,211,153,0.15)',
              color: '#34D399',
              verticalAlign: 'middle',
            }}
          >
            0:00
          </span>{' '}
          on your{' '}
          <span className="anim-underline u-scroll">scroll</span>
          <Image
            src="/images/fingerscroll.png"
            alt="finger scroll"
            width={40}
            height={40}
            className="inline-block ml-2 align-middle"
          />
          .
        </p>
      </div>

      {/* Scroll hint */}
      <div
        id="scroll-hint"
        className="absolute bottom-10 left-1/2 animate-float-hint flex flex-col items-center gap-3 text-white/60 text-xs font-semibold tracking-wide"
        style={{ opacity: 0 }}
      >
        <span>Scroll to understand why</span>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-5 h-5">
          <path d="M12 5v14M5 12l7 7 7-7" />
        </svg>
      </div>
    </section>
  )
}
