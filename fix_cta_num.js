const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');
html = html.replace('<div class="chapter-num">07</div>', '<div class="chapter-num">04</div>');
html = html.replace('<div class="chapter-num">06</div>', '<div class="chapter-num">04</div>');
html = html.replace('<div class="chapter-num">05</div>', '<div class="chapter-num">04</div>');
fs.writeFileSync('index.html', html);
