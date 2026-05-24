const fs = require('fs');

let js = fs.readFileSync('app.js', 'utf8');

js = js.replace(/setTimeout\(\(\) => \{\s*document\.querySelectorAll\('.anim-underline'\)\.forEach\(el => \{\s*el\.classList\.add\('is-visible'\);\s*\}\);\s*\}, 500\);/g, 
`setTimeout(() => {
        document.querySelectorAll('.u-clock').forEach(el => {
            el.classList.add('is-visible');
        });
        
        setTimeout(() => {
            document.querySelectorAll('.u-scroll').forEach(el => {
                el.classList.add('is-visible');
            });
        }, 500); // Wait 500ms after clock ends to animate scroll
    }, 500);`);

fs.writeFileSync('app.js', js);
