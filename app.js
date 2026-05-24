document.addEventListener('DOMContentLoaded', () => {

    // =====================================================================
    // 1. LIVE TIMER — starts the moment the page loads
    // =====================================================================
    
    const startTime = Date.now();
    const liveTimer = document.getElementById('live-timer');
    const islandGlow = document.getElementById('island-glow');
    const ctaTime = document.getElementById('cta-time');
    
    // Color thresholds for the floating island (in seconds)
    const YELLOW_AT = 30;  // 30 seconds — quick demo
    const RED_AT = 90;     // 90 seconds
    
    let lastPhase = 'green';
    
    function updateLiveTimer() {
        const elapsed = Math.floor((Date.now() - startTime) / 1000);
        const mins = Math.floor(elapsed / 60);
        const secs = elapsed % 60;
        const timeStr = `${mins}:${secs.toString().padStart(2, '0')}`;
        
        liveTimer.textContent = timeStr;
        const inlineLiveTimer = document.getElementById('inline-live-timer');
        if (inlineLiveTimer) inlineLiveTimer.textContent = timeStr;
        // Determine phase
        let phase = 'green';
        if (elapsed >= RED_AT) phase = 'red';
        else if (elapsed >= YELLOW_AT) phase = 'yellow';
        
        // Update color
        if (phase !== lastPhase) {
            const colors = { green: '#34D399', yellow: '#FBBF24', red: '#EF4444' };
            liveTimer.style.color = colors[phase];
            if (inlineLiveTimer) inlineLiveTimer.style.color = colors[phase];
            islandGlow.className = 'island-glow';
            islandGlow.classList.add(`glow-${phase}`);
            
            lastPhase = phase;
        }
        
        // Generate human readable time
        let humanTime;
        if (elapsed < 60) {
            humanTime = `${elapsed} second${elapsed !== 1 ? 's' : ''}`;
        } else {
            humanTime = `${mins} minute${mins !== 1 ? 's' : ''} ${secs > 0 ? `${secs}s` : ''}`;
        }
        
        // Update CTA section time
        if (ctaTime) {
            ctaTime.textContent = humanTime;
        }
        
        requestAnimationFrame(updateLiveTimer);
    }
    
    // Start the green glow immediately
    islandGlow.classList.add('glow-green');
    
    requestAnimationFrame(updateLiveTimer);
    
    
    // =====================================================================
    // 2. DEMO SCRUBBER — Interactive phone island in "How It Works"
    // =====================================================================
    
    const demoScrubber = document.getElementById('demo-scrubber');
    const demoIslandTimer = document.getElementById('demo-island-timer');
    const demoIsland = document.getElementById('demo-island');
    const phaseGreen = document.getElementById('phase-green');
    const phaseYellow = document.getElementById('phase-yellow');
    const phaseRed = document.getElementById('phase-red');
    
    // Demo thresholds (in seconds out of 900 = 15 min)
    const DEMO_YELLOW = 300;  // 5 min
    const DEMO_RED = 600;     // 10 min
    
    function updateDemoIsland() {
        const val = parseInt(demoScrubber.value);
        const mins = Math.floor(val / 60);
        const secs = val % 60;
        demoIslandTimer.textContent = `${mins}:${secs.toString().padStart(2, '0')}`;
        
        // Determine color
        let color, phase;
        if (val >= DEMO_RED) {
            color = '#EF4444';
            phase = 'red';
        } else if (val >= DEMO_YELLOW) {
            color = '#FBBF24';
            phase = 'yellow';
        } else {
            color = '#34D399';
            phase = 'green';
        }
        
        demoIslandTimer.style.color = color;
        demoIsland.style.boxShadow = `0 2px 12px rgba(0,0,0,0.12), 0 0 20px ${color}44`;
        
        // Highlight correct phase card
        phaseGreen.classList.toggle('active-phase', phase === 'green');
        phaseYellow.classList.toggle('active-phase', phase === 'yellow');
        phaseRed.classList.toggle('active-phase', phase === 'red');
    }
    
    if (demoScrubber) {
        demoScrubber.addEventListener('input', updateDemoIsland);
        // Initialize
        phaseGreen.classList.add('active-phase');
    }
    
    
    // =====================================================================
    // 3. SCROLL FADE-IN ANIMATIONS
    // =====================================================================
    
    // Tag elements for fade-in
    const fadeTargets = document.querySelectorAll(
        '.chapter-num, .chapter-title, .chapter-body, .emphasis-card, ' +
        '.trap-visual, .blocker-comparison, .how-demo, .dash-preview, ' +
        '.cta-lockup, .cta-form-wrap'
    );
    
    fadeTargets.forEach(el => el.classList.add('fade-in'));
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.15,
        rootMargin: '0px 0px -40px 0px'
    });
    
    fadeTargets.forEach(el => observer.observe(el));
    
    
    // =====================================================================
    // 4. WAITLIST FORM
    // =====================================================================
    
    const form = document.getElementById('waitlist-form');
    const emailInput = document.getElementById('email-input');
    const successCard = document.getElementById('success-card');
    const queueNum = document.getElementById('queue-num');
    
    // Check if already signed up
    const saved = localStorage.getItem('ticker_waitlist');
    if (saved) {
        const data = JSON.parse(saved);
        showSuccess(data.queue);
    }
    
    if (form) {
        form.addEventListener('submit', async (e) => {
            e.preventDefault();
            const email = emailInput.value.trim();
            if (!email) return;
            
            let queue = '#1,432';
            
            try {
                const res = await fetch('/api/waitlist', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ email })
                });
                if (res.ok) {
                    const data = await res.json();
                    queue = data.queueNumber || queue;
                }
            } catch {
                // Server not running — simulate
                const count = parseInt(localStorage.getItem('ticker_count') || '0');
                queue = `#${(1432 + count).toLocaleString()}`;
                localStorage.setItem('ticker_count', (count + 1).toString());
            }
            
            localStorage.setItem('ticker_waitlist', JSON.stringify({ email, queue, ts: Date.now() }));
            showSuccess(queue);
        });
    }
    
    function showSuccess(queue) {
        if (form) form.classList.add('hidden');
        if (successCard) {
            successCard.classList.remove('hidden');
            queueNum.textContent = queue;
        }
    }
    

    // =====================================================================
    // 2. TEXT REVEAL ON SCROLL (GSAP)
    // =====================================================================
    if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
        gsap.registerPlugin(ScrollTrigger);

        const highlightTexts = document.querySelectorAll('.highlight-text');
        
        highlightTexts.forEach((textEl) => {
            // Get original HTML structure, preserve tags inside if needed, 
            // but for simple text nodes we can wrap words.
            // A simple strategy is to just animate opacity of words.
            
            // To handle nested tags like <strong> or <br>, it's easier to iterate over childNodes
            const wrapWords = (node) => {
                if (node.nodeType === Node.TEXT_NODE) {
                    const words = node.textContent.split(/(\s+)/); // keep spaces
                    const fragment = document.createDocumentFragment();
                    let hasWords = false;
                    
                    words.forEach(word => {
                        if (word.trim().length > 0) {
                            const span = document.createElement('span');
                            span.textContent = word;
                            span.className = 'reveal-word';
                            span.style.opacity = '0.15';
                            span.style.transition = 'color 0.1s ease';
                            fragment.appendChild(span);
                            hasWords = true;
                        } else {
                            fragment.appendChild(document.createTextNode(word));
                        }
                    });
                    
                    if (hasWords) {
                        node.parentNode.replaceChild(fragment, node);
                    }
                } else if (node.nodeType === Node.ELEMENT_NODE) {
                    // Recursively wrap text inside elements
                    Array.from(node.childNodes).forEach(wrapWords);
                }
            };

            Array.from(textEl.childNodes).forEach(wrapWords);

            // Animate
            const words = textEl.querySelectorAll('.reveal-word');
            if (words.length > 0) {
                gsap.to(words, {
                    opacity: 1,
                    stagger: 0.1,
                    scrollTrigger: {
                        trigger: textEl,
                        start: "top 85%",
                        end: "bottom 55%",
                        scrub: 1 // smooth scrubbing
                    }
                });
            }
        });
    }
});

    // =====================================================================
    // 3. FADE UP ON SCROLL (GSAP)
    // =====================================================================
    if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
        const fadeElements = document.querySelectorAll('.chapter-body, .psych-card, .emphasis-card, .trap-phase, .comparison-card, .how-demo, .cta-box');
        
        fadeElements.forEach((el) => {
            gsap.fromTo(el, 
                { y: 40, opacity: 0 },
                { 
                    y: 0, 
                    opacity: 1, 
                    duration: 0.8, 
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: el,
                        start: "top 90%",
                        toggleActions: "play none none none"
                    }
                }
            );
        });
    }

    // =====================================================================
    // 4. ANIMATE UNDERLINES ON LOAD
    // =====================================================================
    setTimeout(() => {
        document.querySelectorAll('.u-clock').forEach(el => {
            el.classList.add('is-visible');
        });
        
        setTimeout(() => {
            document.querySelectorAll('.u-scroll').forEach(el => {
                el.classList.add('is-visible');
            });
        }, 500); // Wait 500ms after clock ends to animate scroll
    }, 500);

    // =====================================================================
    // 4. SEQUENCED STARTUP ANIMATION (GSAP)
    // =====================================================================
    if (typeof gsap !== 'undefined') {
        const tl = gsap.timeline({ defaults: { ease: "power2.out" } });
        
        // Wait a slight moment after load to ensure smooth start
        tl.delay(0.2)
          // 1. App icon pops in
          .fromTo('.welcome-brand-img', { scale: 0.8, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.8, ease: "back.out(1.5)" })
          // 2. Welcome tagline drops in
          .fromTo('.welcome-tagline', { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8 }, "-=0.4")
          // 4. Animate Clock Underline
          .add(() => {
              document.querySelectorAll('.u-clock').forEach(el => el.classList.add('is-visible'));
          }, "+=0.2")
          // 5. Animate Scroll Underline
          .add(() => {
              document.querySelectorAll('.u-scroll').forEach(el => el.classList.add('is-visible'));
          }, "+=0.5")
          // 6. Notch drops in
          .fromTo('.floating-island-container', { y: -40, opacity: 0 }, { y: 0, opacity: 1, duration: 0.4, ease: "back.out(1.2)" }, "+=0.5")
          // 7. Finally, scroll hint appears
          .fromTo('.scroll-hint', { opacity: 0 }, { opacity: 1, duration: 1 }, "-=0.2");
    }
