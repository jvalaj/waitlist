const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

const targetStr = `                    <div class="how-col">
                        <div class="demo-box">
                            <div class="mock-notification">
                                <div class="mock-notif-icon"></div>
                                <div class="mock-notif-text">
                                    <strong>Screen Time</strong>
                                    <span>Time Limit Reached</span>
                                </div>
                            </div>
                        </div>
                        <h4 class="comp-label">Apple Screen Time</h4>
                        <p class="comp-desc">Treats you like a child. Blocks your access. You just hit "Ignore" anyway.</p>
                    </div>`;

html = html.replace(targetStr, '');
fs.writeFileSync('index.html', html);
