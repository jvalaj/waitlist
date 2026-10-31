'use client'

import { useEffect } from 'react'
import type { CSSProperties } from 'react'

// Ported from the bapple store intro. Timings match bapple's store.js.
const TYPE_START = 500 // ms after load, so the nav has mostly landed
const TYPE_SPEED = 55 // ms per typed letter
const LETTER_STAGGER = 18 // keep in sync with .nms-letter transition-delay in globals.css
const REST_AFTER_TITLE = 350 // the last letter is still sharpening when the rest rises
const REVEAL_STAGGER = 90 // ms between things that scroll in together
const REVEAL_MAX_STEPS = 6

/** "Introducing", typed out with a caret. Screen readers get the whole word. */
export function TypedEyebrow({ text, className = '' }: { text: string; className?: string }) {
  return (
    <p className={`nms-eyebrow ${className}`} aria-label={text}>
      {[...text].map((char, i) => (
        <span key={i} className="nms-char" aria-hidden="true">
          {char === ' ' ? ' ' : char}
        </span>
      ))}
    </p>
  )
}

/** A headline whose letters flip down out of a blur, one after another. Lines only break between words. */
export function FlipTitle({ text, className = '' }: { text: string; className?: string }) {
  let index = 0
  const words = text.split(' ')
  return (
    <h1 className={`nms-title ${className}`} aria-label={text}>
      {words.map((word, w) => (
        <span key={w}>
          <span className="inline-block whitespace-nowrap" aria-hidden="true">
            {[...word].map((char, c) => (
              <span key={c} className="nms-letter" style={{ '--i': index++ } as CSSProperties}>
                {char}
              </span>
            ))}
          </span>
          {w < words.length - 1 ? ' ' : null}
        </span>
      ))}
    </h1>
  )
}

/** Runs the intro one step at a time, then reveals sections as they scroll into view. */
export function IntroController() {
  useEffect(() => {
    const root = document.documentElement
    if (!root.classList.contains('nms-intro')) return
    ;(window as unknown as { __nmsIntroRan?: boolean }).__nmsIntroRan = true

    const timers: number[] = []
    const wait = (ms: number) => new Promise<void>(resolve => timers.push(window.setTimeout(resolve, ms)))

    async function intro() {
      requestAnimationFrame(() => root.classList.add('nms-nav'))
      const eyebrow = document.querySelector('.nms-eyebrow')
      const title = document.querySelector('.nms-title')
      if (!eyebrow || !title) {
        root.classList.add('nms-rest')
        return
      }
      const chars = [...eyebrow.querySelectorAll('.nms-char')]
      const caret = document.createElement('span')
      caret.className = 'nms-caret'
      caret.setAttribute('aria-hidden', 'true')

      await wait(TYPE_START)
      eyebrow.prepend(caret)
      for (const char of chars) {
        char.classList.add('is-typed')
        char.after(caret)
        await wait(TYPE_SPEED)
      }
      await wait(250)
      caret.classList.add('is-done')
      title.classList.add('is-in')
      const letters = title.querySelectorAll('.nms-letter').length
      await wait((letters - 1) * LETTER_STAGGER + REST_AFTER_TITLE)
      root.classList.add('nms-rest')
      await wait(600)
      caret.remove()
    }

    intro()

    // Below the hero, things rise in as they scroll into view, one after another, top to bottom.
    const items = document.querySelectorAll('[data-reveal]')
    const observer = new IntersectionObserver(
      entries => {
        entries
          .filter(entry => entry.isIntersecting)
          .sort(
            (a, b) =>
              a.boundingClientRect.top - b.boundingClientRect.top ||
              a.boundingClientRect.left - b.boundingClientRect.left
          )
          .forEach((entry, order) => {
            const el = entry.target as HTMLElement
            observer.unobserve(el)
            el.style.setProperty('--nms-reveal-delay', `${Math.min(order, REVEAL_MAX_STEPS) * REVEAL_STAGGER}ms`)
            el.classList.add('is-revealed')
          })
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.15 }
    )
    items.forEach(el => observer.observe(el))

    return () => {
      timers.forEach(clearTimeout)
      observer.disconnect()
    }
  }, [])

  return null
}
