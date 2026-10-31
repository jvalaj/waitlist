'use client'

import { useEffect } from 'react'
import type { CSSProperties } from 'react'

/*
 * The page intro, adapted from the bapple store's "iPhone Duo" title: every piece of text hangs from
 * its top edge, tipped back and blurred, and swings down into place. Nothing else moves.
 *
 * 1. A preloader draws a week of screen time, each day's bar shorter than the last, then lifts.
 * 2. The nav bar slides down.
 * 3. Text on screen flips in one block at a time, in reading order: each block waits until the one
 *    before it has nearly landed.
 * 4. Text further down flips in the same way, one block at a time, as it scrolls into view.
 *
 * Headings and labels go letter by letter (data-flip="letters"); running text goes word by word
 * (data-flip="words") so long paragraphs don't take forever. Everything is only hidden under
 * html.nms-intro (set by an inline script in layout.tsx, skipped for reduced motion).
 */

const PRELOADER_MIN = 1400 // ms the chart stays up, so the bars finish drawing
const LETTER_STEP = 18 // ms between letters, like bapple's title but quicker for longer lines
const WORD_STEP = 28 // ms between words
const MAX_SPREAD = 900 // a block never takes longer than this to start its last unit
const NAV_SLIDE = 700 // ms after the preloader starts lifting before the first text block
const SETTLE = 450 // after a block's last unit starts, wait this long before the next block
const BACKLOG_EASE = 4000 // ms of queued text at which handoffs reach their quickest
const MIN_PACE = 0.3 // quickest handoff, as a share of the normal one

// A week of screen time, trending down. Purely decorative.
const WEEK = [0.92, 0.78, 0.84, 0.6, 0.48, 0.36, 0.24]
const DAYS = ['M', 'T', 'W', 'T', 'F', 'S', 'S']

export function Preloader() {
  const width = 18
  const gap = 14
  const height = 96
  const chartWidth = WEEK.length * width + (WEEK.length - 1) * gap
  return (
    <div className="nms-preloader" aria-hidden="true">
      <svg width={chartWidth} height={height + 26} viewBox={`0 0 ${chartWidth} ${height + 26}`}>
        <line x1="0" x2={chartWidth} y1={height + 0.5} y2={height + 0.5} stroke="currentColor" strokeOpacity="0.12" />
        {WEEK.map((value, i) => {
          const x = i * (width + gap)
          const h = Math.round(value * (height - 6))
          return (
            <g key={i}>
              <rect
                className="nms-bar"
                style={{ '--b': i } as CSSProperties}
                x={x}
                y={height - h}
                width={width}
                height={h}
                rx="5"
                fill={i === WEEK.length - 1 ? '#3772FF' : 'currentColor'}
              />
              <text
                x={x + width / 2}
                y={height + 20}
                textAnchor="middle"
                fontSize="11"
                fill="currentColor"
                fillOpacity="0.5"
                fontFamily="Jost, system-ui, sans-serif"
              >
                {DAYS[i]}
              </text>
            </g>
          )
        })}
      </svg>
    </div>
  )
}

// Wraps every word (and, for letters, every character) of an element's text in spans, keeping any
// inline markup (links, <sup>, <em>) intact. Lines only ever break between words.
function split(el: HTMLElement): number {
  const mode = el.dataset.flip === 'words' ? 'words' : 'letters'
  const clean = (node: Element) => node.textContent?.replace(/\s+/g, ' ').trim() ?? ''
  const label = clean(el)
  // Letter spans can read oddly in some screen readers, so links and headings keep their text as a label
  if (mode === 'letters') {
    el.querySelectorAll('a').forEach(link => link.setAttribute('aria-label', clean(link)))
    if (label && !['DIV', 'SPAN'].includes(el.tagName)) el.setAttribute('aria-label', label)
  }
  let count = 0
  const walker = document.createTreeWalker(el, NodeFilter.SHOW_TEXT)
  const nodes: Text[] = []
  while (walker.nextNode()) nodes.push(walker.currentNode as Text)

  for (const node of nodes) {
    const parts = (node.textContent ?? '').split(/(\s+)/)
    const fragment = document.createDocumentFragment()
    for (const part of parts) {
      if (!part) continue
      if (/^\s+$/.test(part)) {
        fragment.append(document.createTextNode(' '))
        continue
      }
      const word = document.createElement('span')
      word.className = 'nms-word'
      if (mode === 'words') {
        word.classList.add('nms-unit')
        word.style.setProperty('--i', String(count++))
        word.textContent = part
      } else {
        for (const char of part) {
          const letter = document.createElement('span')
          letter.className = 'nms-unit'
          letter.style.setProperty('--i', String(count++))
          letter.textContent = char
          word.append(letter)
        }
      }
      fragment.append(word)
    }
    node.replaceWith(fragment)
  }

  const step = Math.min(mode === 'words' ? WORD_STEP : LETTER_STEP, MAX_SPREAD / Math.max(count - 1, 1))
  el.style.setProperty('--step', `${step}ms`)
  el.classList.add('is-split')
  return Math.max(count - 1, 0) * step
}

export function IntroController() {
  useEffect(() => {
    const root = document.documentElement
    if (!root.classList.contains('nms-intro')) return
    ;(window as unknown as { __nmsIntroRan?: boolean }).__nmsIntroRan = true

    const timers: number[] = []
    const later = (ms: number, run: () => void) => timers.push(window.setTimeout(run, ms))

    // Split everything up front, while it's hidden, and remember how long each block takes.
    const spread = new Map<Element, number>()
    document.querySelectorAll<HTMLElement>('[data-flip]').forEach(el => spread.set(el, split(el)))
    const blocks = [...document.querySelectorAll<HTMLElement>('[data-flip], [data-fade]')]

    // One block after another, in reading order, across everything that arrives.
    let nextFree = 0
    function play(el: Element) {
      const now = performance.now()
      const start = Math.max(now, nextFree)
      // Still one at a time after a fast scroll, just quicker the more is waiting
      const pace = Math.max(MIN_PACE, 1 - (start - now) / BACKLOG_EASE)
      nextFree = start + ((spread.get(el) ?? 0) + SETTLE) * pace
      later(start - now, () => el.classList.add('is-in'))
    }

    const observer = new IntersectionObserver(
      entries => {
        entries
          .filter(entry => entry.isIntersecting)
          .map(entry => entry.target)
          .sort((a, b) => (a.compareDocumentPosition(b) & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : 1))
          .forEach(el => {
            observer.unobserve(el)
            play(el)
          })
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0 }
    )

    const begin = () => blocks.forEach(el => observer.observe(el))

    // The preloader stays until the chart has drawn and the font is ready, then lifts.
    const shown = performance.now()
    const fontReady = document.fonts?.ready ?? Promise.resolve()
    fontReady.then(() => {
      const left = Math.max(0, PRELOADER_MIN - (performance.now() - shown))
      later(left, () => {
        root.classList.add('nms-loaded')
        later(NAV_SLIDE, begin)
      })
    })

    return () => {
      timers.forEach(clearTimeout)
      observer.disconnect()
    }
  }, [])

  return null
}

/*
 * The landing background: a fixed picture behind the first screen that fades to the white page as
 * you scroll, so the sections below sit on white. Also tells the nav when it's over the picture,
 * so its glass turns smoky with white text there and light with dark text over the white page.
 */
const FADE_DISTANCE = 0.75 // share of the screen height over which the picture fades out

export function HeroBackdrop() {
  useEffect(() => {
    const root = document.documentElement
    const nav = document.querySelector('.nms-navbar')
    const hero = document.getElementById('hero')
    let queued = false

    function update() {
      queued = false
      const fade = Math.min(1, Math.max(0, window.scrollY / (window.innerHeight * FADE_DISTANCE)))
      root.style.setProperty('--nms-hero-fade', fade.toFixed(3))
      if (nav && hero) {
        const navHeight = (nav as HTMLElement).offsetHeight
        nav.classList.toggle('is-over-hero', hero.getBoundingClientRect().bottom > navHeight / 2 && fade < 0.6)
      }
    }
    function onScroll() {
      if (queued) return
      queued = true
      requestAnimationFrame(update)
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    update()
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  return <div className="nms-hero-bg" aria-hidden="true" />
}
