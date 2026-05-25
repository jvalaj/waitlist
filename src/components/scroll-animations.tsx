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
    }

    initGSAP()
    return () => observer.disconnect()
  }, [])

  return null
}
