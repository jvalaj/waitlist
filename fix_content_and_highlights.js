const fs = require('fs');

let html = fs.readFileSync('index.html', 'utf8');

// 1. Remove highlight-text from non-paragraphs
html = html.replace(/<h2 class="chapter-title highlight-text">/g, '<h2 class="chapter-title">');
html = html.replace(/<div class="psychology-comparison highlight-text">/g, '<div class="psychology-comparison">');
html = html.replace(/<div class="psychology-comparison highlight-text" style="/g, '<div class="psychology-comparison" style="');
html = html.replace(/<div class="demo-box highlight-text">/g, '<div class="demo-box">');
html = html.replace(/class="highlight-text">(\s*The Autopilot Transition)/g, '>$1');

// 2. Rewrite Section 2 (Blockers)
const section2Start = html.indexOf('<!-- ====== SECTION 2: THE TWIST ====== -->');
const section3Start = html.indexOf('<!-- ====== SECTION 3: THE SCIENCE ====== -->');

if (section2Start !== -1 && section3Start !== -1) {
    const newSection2 = `<!-- ====== SECTION 2: THE TWIST ====== -->
        <section class="chapter chapter-blockers" id="chapter-blockers">
            <div class="chapter-inner">
                <div class="chapter-num">01</div>
                <h2 class="chapter-title">App blockers and screen time limits don't work. And you know it.</h2>
                <p class="chapter-body highlight-text">Screen-time apps treat you like a child. They throw up angry lock screens, but forced restrictions don't actually work. They just trigger two psychological traps:</p>
                
                <ul style="list-style: none; padding: 0; margin-bottom: 32px; font-size: 17px; line-height: 1.6; color: var(--sub);">
                    <li style="margin-bottom: 24px; position: relative; padding-left: 24px;">
                        <span style="position: absolute; left: 0; top: 0;">&bull;</span>
                        <strong style="color: var(--ink);">The Override Loop:</strong> When a limit popup appears, you don't put the phone down. You just tap 'Ignore'. <strong>You haven't trained your mind, only your thumb.</strong>
                        <div style="display: flex; align-items: center; gap: 20px; margin-top: 20px; font-weight: 800; font-size: 32px; color: var(--ink); opacity: 0.8;">
                            <img src="public/images/brain.png" alt="Brain" style="width: 64px; height: auto; object-fit: contain;">
                            <span>></span>
                            <img src="public/images/finger.jpg" alt="Finger" style="width: 64px; height: auto; object-fit: contain;">
                        </div>
                    </li>
                    <li style="position: relative; padding-left: 24px;">
                        <span style="position: absolute; left: 0; top: 0;">&bull;</span>
                        <strong style="color: var(--ink);">The Rebound Effect:</strong> Forcing yourself to quit triggers <em>reactance</em>. The exact second a block lifts, your brain goes into overdrive. You doom-scroll twice as fast to make up for lost time.
                    </li>
                </ul>
            </div>
        </section>

        `;
    
    html = html.substring(0, section2Start) + newSection2 + html.substring(section3Start);
}

fs.writeFileSync('index.html', html);
