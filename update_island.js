const fs = require('fs');

let css = fs.readFileSync('style.css', 'utf8');

// Fix island-glow inset
css = css.replace(/inset: -6px -10px;/g, 'inset: -1px;');

// Increase app icon size
css = css.replace(/height: 96px;\s*\/\*\s*slightly larger for app icon shape vs text\s*\*\/\s*width: 96px;/g, 'height: 120px;\n    width: 120px;');
css = css.replace(/height: 80px;\s*width: 80px;/g, 'height: 96px;\n        width: 96px;');

// Change .island-inner border
css = css.replace(/border: 1px solid rgba\(255, 255, 255, 0.2\);/g, 'border: 1px solid rgba(255, 255, 255, 0.15);');

fs.writeFileSync('style.css', css);
