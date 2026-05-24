const fs = require('fs');

let css = fs.readFileSync('style.css', 'utf8');

// Update chapter-welcome background
css = css.replace(/\.chapter-welcome\s*\{[\s\S]*?\}/, `.chapter-welcome {
    text-align: center;
    height: 100vh;
    min-height: 100vh;
    padding-top: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    background: radial-gradient(circle at center, #ffffff 0%, #111113 100%);
}`);

// Change welcome text colors to stand out on dark background
// Subtitle color: 
css = css.replace(/\.welcome-tagline\s*\{[\s\S]*?\}/, `.welcome-tagline {
    font-size: 28px;
    font-weight: 700;
    color: #000;
    max-width: 520px;
    line-height: 1.65;
    margin-bottom: 64px;
    position: relative;
    z-index: 2;
    text-shadow: 0 0 20px rgba(255,255,255,0.8);
}`);

css = css.replace(/\.welcome-eyebrow\s*\{[\s\S]*?\}/, `.welcome-eyebrow {
    font-size: 12px;
    font-weight: 700;
    letter-spacing: 0.22em;
    text-transform: uppercase;
    color: var(--blue);
    margin-bottom: 12px;
    position: relative;
    z-index: 2;
}`);

// Add underline styles
css += `
.anim-underline {
    position: relative;
    display: inline-block;
    white-space: nowrap;
}
.anim-underline::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -2px;
    width: 100%;
    height: 3px;
    background-color: var(--blue);
    transform: scaleX(0);
    transform-origin: left center;
    transition: transform 1s cubic-bezier(0.22, 1, 0.36, 1);
}
.anim-underline.is-visible::after {
    transform: scaleX(1);
}
`;

fs.writeFileSync('style.css', css);
