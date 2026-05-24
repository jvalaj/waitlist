const fs = require('fs');

// 1. Update app.js
let js = fs.readFileSync('app.js', 'utf8');

// Find updateLiveTimer function and add update for inline-live-timer
js = js.replace(/liveTimer\.textContent = timeStr;\s*/, "liveTimer.textContent = timeStr;\n        const inlineLiveTimer = document.getElementById('inline-live-timer');\n        if (inlineLiveTimer) inlineLiveTimer.textContent = timeStr;\n        ");

// Also update the inline timer color
js = js.replace(/liveTimer\.style\.color = colors\[phase\];\s*/, "liveTimer.style.color = colors[phase];\n            if (inlineLiveTimer) inlineLiveTimer.style.color = colors[phase];\n            ");

fs.writeFileSync('app.js', js);

// 2. Update style.css
let css = fs.readFileSync('style.css', 'utf8');
css = css.replace(/\.welcome-brand-img\s*\{[\s\S]*?\}/, `.welcome-brand-img {
    height: 60px;
    width: auto;
    margin-bottom: 24px;
    border-radius: 24px;
    filter: drop-shadow(0 0 25px rgba(255, 255, 255, 0.25)); /* slight white gradient shadow */
}`);

fs.writeFileSync('style.css', css);

