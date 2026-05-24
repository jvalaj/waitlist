const fs = require('fs');

let html = fs.readFileSync('index.html', 'utf8');

// Modify Section 3 HTML slightly to handle dark mode classes if needed, or we just do it in CSS
// Let's add a specific class "dark-mode" to chapter-science
if (!html.includes('chapter-science dark-mode')) {
    html = html.replace('class="chapter chapter-science"', 'class="chapter chapter-science dark-mode"');
}

fs.writeFileSync('index.html', html);

let css = fs.readFileSync('style.css', 'utf8');

// Add dark mode styles for the science section
if (!css.includes('.chapter.dark-mode')) {
    css += `\n
/* Dark Mode Section Overrides */
.chapter.dark-mode {
    background-color: var(--ink);
    color: var(--white);
}
.chapter.dark-mode .chapter-title {
    color: var(--white);
}
.chapter.dark-mode .chapter-body {
    color: rgba(255, 255, 255, 0.8);
}
.chapter.dark-mode .chapter-body strong,
.chapter.dark-mode .chapter-body em {
    color: var(--white);
}
.chapter.dark-mode .psych-card {
    background-color: rgba(255, 255, 255, 0.05);
    border-color: rgba(255, 255, 255, 0.1);
    color: var(--white);
}
.chapter.dark-mode .highlight-text {
    color: rgba(255, 255, 255, 0.7);
}
.chapter.dark-mode .psych-content h4 {
    color: var(--white);
}
.chapter.dark-mode .psych-content p {
    color: rgba(255, 255, 255, 0.6);
}

.chapter-science.dark-mode {
    padding-top: 40px; /* Reduce top padding */
    margin-top: -40px; /* Pull it slightly up, or adjust as needed */
}
`;
} else {
    // If it exists, let's just make sure padding-top is reduced
    css = css.replace(/\.chapter-science\.dark-mode\s*\{[\s\S]*?\}/, `.chapter-science.dark-mode {\n    padding-top: 40px;\n    border-top: none;\n}`);
}

// Ensure mobile padding is also reduced for science
css = css.replace(/(\.chapter-welcome\s*\{\s*min-height[^}]*})/, `$1\n    .chapter-science.dark-mode {\n        padding-top: 20px;\n    }`);


fs.writeFileSync('style.css', css);
console.log('Done fixing science section UI');
