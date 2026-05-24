const fs = require('fs');

let html = fs.readFileSync('index.html', 'utf8');

const targetStr = `<strong>You haven't trained your mind; you've just trained your thumb to click a different button.</strong>`;

const replacement = `${targetStr}
                        <div style="display: flex; align-items: center; gap: 20px; margin-top: 20px; font-weight: 800; font-size: 32px; color: var(--ink); opacity: 0.8;">
                            <img src="public/images/brain.png" alt="Brain" style="width: 64px; height: auto; object-fit: contain;">
                            <span>></span>
                            <img src="public/images/finger.png" alt="Finger" style="width: 64px; height: auto; object-fit: contain;">
                        </div>`;

html = html.replace(targetStr, replacement);

fs.writeFileSync('index.html', html);
console.log('Added graphic.');
