'use client'

import { useEffect } from 'react'

export function ScrollAnimations() {
  useEffect(() => {
    // Fade-up on scroll
    const fadeEls = document.querySelectorAll('.fade-up')
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) entry.target.classList.add('visible')
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    )
    fadeEls.forEach(el => observer.observe(el))

    // GSAP word-reveal for .highlight-text
    async function initGSAP() {
      const { gsap } = await import('gsap')
      const { ScrollTrigger } = await import('gsap/ScrollTrigger')
      gsap.registerPlugin(ScrollTrigger)

      document.querySelectorAll('.highlight-text').forEach(textEl => {
        const wrapWords = (node: ChildNode) => {
          if (node.nodeType === Node.TEXT_NODE && node.textContent) {
            const words = node.textContent.split(/(\s+)/)
            const fragment = document.createDocumentFragment()
            let hasWords = false
            words.forEach(word => {
              if (word.trim().length > 0) {
                const span = document.createElement('span')
                span.textContent = word
                span.className = 'reveal-word'
                fragment.appendChild(span)
                hasWords = true
              } else {
                fragment.appendChild(document.createTextNode(word))
              }
            })
            if (hasWords && node.parentNode) node.parentNode.replaceChild(fragment, node)
          } else if (node.nodeType === Node.ELEMENT_NODE) {
            Array.from(node.childNodes).forEach(wrapWords)
          }
        }
        Array.from(textEl.childNodes).forEach(wrapWords)

        const words = textEl.querySelectorAll('.reveal-word')
        if (words.length > 0) {
          gsap.to(words, {
            opacity: 1,
            stagger: 0.08,
            scrollTrigger: {
              trigger: textEl,
              start: 'top 85%',
              end: 'bottom 55%',
              scrub: 1,
            },
          })
        }
      })

      // ── Island scroll-into-box animation ──
      const howSection = document.getElementById('how-section')
      const islandAnchor = document.getElementById('island-anchor')
      const islandEl = document.querySelector('.floating-island-wrap') as HTMLElement | null

      if (howSection && islandAnchor && islandEl) {
        let snapTween: gsap.core.Tween | null = null

        const getTargetTop = () => {
          // anchor is 1×1px at the box center; when sticky, getBCR is viewport-accurate
          const r = islandAnchor.getBoundingClientRect()
          return r.top - islandEl.offsetHeight / 2
        }

        const resetTop = (duration = 0.45) => {
          if (snapTween) snapTween.kill()
          snapTween = gsap.to(islandEl, { top: 16, duration, ease: 'power2.inOut', overwrite: true })
        }

        ScrollTrigger.create({
          trigger: howSection,
          start: 'top top',
          end: 'bottom bottom',
          onUpdate(self) {
            if (snapTween) { snapTween.kill(); snapTween = null }
            // Island travels to center over first 50% of section scroll, then holds
            const pct = Math.min(self.progress * 2, 1)
            const target = getTargetTop()
            islandEl.style.top = `${16 + (target - 16) * pct}px`
          },
          // Scrolled back above section top → return island to top
          onLeaveBack: () => resetTop(0.35),
          // Re-entering from below: island is already at center from onUpdate; just kill any snap tween
          onEnterBack() {
            if (snapTween) { snapTween.kill(); snapTween = null }
          },
        })
      }
    }

    initGSAP()
    return () => observer.disconnect()
  }, [])

  return null
}
