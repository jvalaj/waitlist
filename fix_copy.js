const fs = require('fs');

let html = fs.readFileSync('index.html', 'utf8');

// Title of section 2
html = html.replace(
    `<h2 class="chapter-title highlight-text">Traditional app blockers are fighting a losing war. And they're making you fail.</h2>`,
    `<h2 class="chapter-title highlight-text">App blockers are a scam. They are designed to make you fail.</h2>`
);

// Body of section 2
html = html.replace(
    `<p class="chapter-body highlight-text">Most screen-time apps treat you like a child. They throw up angry red lock screens, enforce password gates, and lecture you about how social media is "evil."</p>
                <p class="chapter-body highlight-text">But forcefully restricting your phone doesn't work. It triggers two major psychological traps:</p>`,
    `<p class="chapter-body highlight-text">Screen-time apps treat you like a child. They throw up angry red lock screens and password gates. But forceful restriction is completely useless. It actively backfires by triggering two psychological traps:</p>`
);

// List items in section 2
html = html.replace(
    `<strong style="color: var(--ink);"></strong> Software barriers on your own device are completely negotiable. When a popup says "You've hit your limit," you don't look away. Your thumb automatically taps "Ignore Limit for 15 Minutes." <strong>You haven't trained your mind; you've just trained your thumb to click a different button.</strong>`,
    `<strong style="color: var(--ink);"></strong> Software barriers are a joke. When a limit popup appears, you don't even look away. Your thumb automatically hits "Ignore for 15 Minutes." <strong>You haven't trained your mind; you've just trained your thumb to dismiss another annoying popup.</strong>`
);

html = html.replace(
    `<strong style="color: var(--ink);">The Psychological Rebound Effect:</strong> Forcing yourself to quit triggers <em>reactance</em>&mdash;the intense human urge to reclaim your freedom. The exact second a 15-minute block lifts, your brain goes into overdrive. You binge. You doom-scroll twice as fast and twice as hard to make up for lost time.`,
    `<strong style="color: var(--ink);">The Rebound Effect:</strong> Forcing yourself to quit triggers <em>reactance</em>&mdash;the urge to rebel. The exact second a block lifts, your brain goes into overdrive. You doom-scroll twice as fast to make up for lost time. Blockers actively accelerate the addiction.`
);

// Science section tightening
html = html.replace(
    `<p class="chapter-body highlight-text">Data from behavioral science and Yale psychology research reveals a massive nuance: <strong>Being social online isn't the problem.</strong></p>`,
    `<p class="chapter-body highlight-text">Yale psychology research reveals a vital truth: <strong>Being social online isn't the problem. The problem is autopilot.</strong></p>`
);

// Ticker Intro tightening
html = html.replace(
    `<h2 class="chapter-title highlight-text">A gentle reflection, right in your Dynamic Island.</h2>`,
    `<h2 class="chapter-title highlight-text">A quiet reflection in your Dynamic Island.</h2>`
);

fs.writeFileSync('index.html', html);
console.log('Copy updated.');
