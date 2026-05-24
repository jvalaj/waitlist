const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

const chap2Start = html.indexOf('<!-- ====== CHAPTER 2: THE PROBLEM ====== -->');
const chap3Start = html.indexOf('<!-- ====== CHAPTER 3: THE TRAP ====== -->');
const chap4Start = html.indexOf('<!-- ====== CHAPTER 4: BLOCKERS DON\'T WORK ====== -->');
const chap5Start = html.indexOf('<!-- ====== CHAPTER 5: HOW IT WORKS ====== -->');

let chap2Part = html.slice(chap2Start, chap3Start);
let chap3Part = html.slice(chap3Start, chap4Start);
let chap4Part = html.slice(chap4Start, chap5Start);

const beforeChaps = html.slice(0, chap2Start);
const afterChaps = html.slice(chap5Start);

// Renumbering
let newChap4 = chap4Part.replace('<div class="chapter-num">03</div>', '<div class="chapter-num">01</div>');
newChap4 = newChap4.replace('CHAPTER 4', 'CHAPTER 2');

let newChap2Part = chap2Part.replace('<div class="chapter-num">01</div>', '<div class="chapter-num">02</div>').replace('CHAPTER 2', 'CHAPTER 3');
let newChap3Part = chap3Part.replace('<div class="chapter-num">02</div>', '<div class="chapter-num">03</div>').replace('CHAPTER 3', 'CHAPTER 4');

const finalHtml = beforeChaps + newChap4 + newChap2Part + newChap3Part + afterChaps;

fs.writeFileSync('index.html', finalHtml);
console.log("Success");
