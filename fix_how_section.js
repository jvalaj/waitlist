const fs = require('fs');

let html = fs.readFileSync('index.html', 'utf8');

// The How Section (Section 4)
html = html.replace(
    `<h2 class="chapter-title">A quiet reflection in your Dynamic Island.</h2>
                <p class="chapter-body highlight-text">Ticker runs a Live Activity that shows your elapsed time directly in the Dynamic Island. No popups. No blocking. Just a quiet number that keeps you honest.</p>`,
    `<h2 class="chapter-title">The solution isn't force. It's self-realization.</h2>
                <p class="chapter-body highlight-text">You don't need a parent locking your apps. You need a mirror. Ticker runs a quiet Live Activity in your Dynamic Island to show your elapsed time. No popups. No blocking. Just absolute awareness, letting you make your own choices.</p>`
);

fs.writeFileSync('index.html', html);
console.log("Rewrote how section")
