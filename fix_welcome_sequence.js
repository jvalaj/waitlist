const fs = require('fs');

// 1. Update style.css
let css = fs.readFileSync('style.css', 'utf8');

// Replace chapter-welcome bg with a ::before element for animation
css = css.replace(/\.chapter-welcome\s*\{[\s\S]*?\}/, `.chapter-welcome {
    text-align: center;
    height: 100vh;
    min-height: 100vh;
    padding-top: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    background-color: var(--ink); /* solid dark base */
}
.chapter-welcome::before {
    content: '';
    position: absolute;
    inset: 0;
    background: radial-gradient(circle at center, rgba(255, 255, 255, 0.6) 0%, rgba(17, 17, 19, 0.7) 50%, rgba(17, 17, 19, 1) 100%);
    opacity: 0; /* start hidden */
    z-index: 0;
}
.welcome-brand-img, .welcome-tagline, .scroll-hint, .floating-island-container {
    opacity: 0; /* start hidden for sequence */
}`);

fs.writeFileSync('style.css', css);

// 2. Update app.js
let js = fs.readFileSync('app.js', 'utf8');

// Remove the old stagger underline timeout block at the bottom
js = js.replace(/\/\/ =====================================================================\s*\/\/ 4\. ANIMATE UNDERLINES ON LOAD\s*\/\/ =====================================================================\s*setTimeout\(\(\) => \{[\s\S]*?\}, 500\);\s*\}, 500\);/m, '');

// Append the new sequence timeline
js += `
    // =====================================================================
    // 4. SEQUENCED STARTUP ANIMATION (GSAP)
    // =====================================================================
    if (typeof gsap !== 'undefined') {
        const tl = gsap.timeline({ defaults: { ease: "power2.out" } });
        
        // Wait a slight moment after load to ensure smooth start
        tl.delay(0.2)
          // 1. Fade in the background gradient
          .to('.chapter-welcome::before', { opacity: 1, duration: 1.5, ease: "power1.inOut" })
          // 2. App icon pops in
          .fromTo('.welcome-brand-img', { scale: 0.8, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.8, ease: "back.out(1.5)" }, "-=0.5")
          // 3. Welcome tagline drops in
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
          .fromTo('.floating-island-container', { y: -40, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, ease: "back.out(1.2)" }, "+=0.5")
          // 7. Finally, scroll hint appears
          .fromTo('.scroll-hint', { opacity: 0 }, { opacity: 1, duration: 1 }, "-=0.2");
    }
`;

fs.writeFileSync('app.js', js);
