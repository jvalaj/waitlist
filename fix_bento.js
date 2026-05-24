const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

const targetStr = `<div style="display: flex; align-items: center; gap: 20px; margin-top: 20px; font-weight: 800; font-size: 32px; color: var(--ink); opacity: 0.8;">
                            <img src="public/images/brain.png" alt="Brain" style="width: 64px; height: auto; object-fit: contain;">
                            <span>></span>
                            <img src="public/images/finger.jpg" alt="Finger" style="width: 64px; height: auto; object-fit: contain;">
                        </div>`;

const replacement = `<div style="display: flex; align-items: center; gap: 16px; margin-top: 24px;">
                            <div style="background: var(--white); border: 1px solid var(--border); border-radius: 20px; padding: 20px; box-shadow: 0 8px 24px rgba(0,0,0,0.04); display: flex; justify-content: center; align-items: center; width: 100px; height: 100px; flex-shrink: 0;">
                                <img src="public/images/brain.png" alt="Brain" style="width: 100%; height: 100%; object-fit: contain; opacity: 0.8;">
                            </div>
                            <span style="font-weight: 800; font-size: 24px; color: var(--sub); opacity: 0.5;">></span>
                            <div style="background: var(--white); border: 1px solid var(--border); border-radius: 20px; padding: 20px; box-shadow: 0 8px 24px rgba(0,0,0,0.04); display: flex; justify-content: center; align-items: center; width: 100px; height: 100px; flex-shrink: 0;">
                                <img src="public/images/finger.jpg" alt="Finger" style="width: 100%; height: 100%; object-fit: contain; mix-blend-mode: multiply; opacity: 0.8;">
                            </div>
                        </div>`;

if (html.includes(targetStr)) {
    html = html.replace(targetStr, replacement);
    fs.writeFileSync('index.html', html);
    console.log('Bento boxes added.');
} else {
    console.log('Target string not found. Please review the exact HTML.');
}
