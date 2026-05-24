const fs = require('fs');

let html = fs.readFileSync('index.html', 'utf8');

// Find the very first chapter-welcome
let parts = html.split('<section class="chapter chapter-blockers"');
let topHtml = parts[0]; 

// Find the very LAST chapter-cta 
let lastCtaIndex = html.lastIndexOf('<section class="chapter chapter-cta"');
let bottomHtml = html.substring(lastCtaIndex);

const newSections = `
        <!-- ====== SECTION 2: THE TWIST ====== -->
        <section class="chapter chapter-blockers" id="chapter-blockers">
            <div class="chapter-inner">
                <div class="chapter-num">01</div>
                <h2 class="chapter-title highlight-text">Traditional app blockers are fighting a losing war. And they're making you fail.</h2>
                <p class="chapter-body highlight-text">Most screen-time apps treat you like a child. They throw up angry red lock screens, enforce password gates, and lecture you about how social media is "evil."</p>
                <p class="chapter-body highlight-text">But forcefully restricting your phone doesn't work. It triggers two major psychological traps:</p>
                
                <ul style="list-style: none; padding: 0; margin-bottom: 32px; font-size: 17px; line-height: 1.6; color: var(--sub);" class="highlight-text">
                    <li style="margin-bottom: 24px; position: relative; padding-left: 24px;">
                        <span style="position: absolute; left: 0; top: 0;">&bull;</span>
                        <strong style="color: var(--ink);">The Overoverride Loop:</strong> Software barriers on your own device are completely negotiable. When a popup says "You've hit your limit," you don't look away. Your thumb automatically taps "Ignore Limit for 15 Minutes." <strong>You haven't trained your mind; you've just trained your thumb to click a different button.</strong>
                    </li>
                    <li style="position: relative; padding-left: 24px;">
                        <span style="position: absolute; left: 0; top: 0;">&bull;</span>
                        <strong style="color: var(--ink);">The Psychological Rebound Effect:</strong> Forcing yourself to quit triggers <em>reactance</em>&mdash;the intense human urge to reclaim your freedom. The exact second a 15-minute block lifts, your brain goes into overdrive. You binge. You doom-scroll twice as fast and twice as hard to make up for lost time.
                    </li>
                </ul>
            </div>
        </section>

        <!-- ====== SECTION 3: THE SCIENCE ====== -->
        <section class="chapter chapter-science" id="chapter-science">
            <div class="chapter-inner">
                <div class="chapter-num">02</div>
                <h2 class="chapter-title highlight-text">The psychological shift: Active vs. Passive Use</h2>
                <p class="chapter-body highlight-text">Data from behavioral science and Yale psychology research reveals a massive nuance: <strong>Being social online isn't the problem.</strong></p>
                
                <div class="psychology-comparison highlight-text">
                    <div class="psych-card active-use">
                        <div class="psych-icon">💬</div>
                        <div class="psych-content">
                            <h4>ACTIVE USE (Healthy Connection)</h4>
                            <p>Messaging friends &bull; Organizing meetups &bull; Sharing photos</p>
                        </div>
                    </div>
                </div>
                
                <div style="text-align: center; margin: 24px 0; color: var(--sub); font-size: 14px;" class="highlight-text">
                    The Autopilot Transition<br>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="margin-top: 8px;"><path d="M12 5v14M5 12l7 7 7-7"/></svg>
                </div>

                <div class="psychology-comparison highlight-text" style="margin-bottom: 32px;">
                    <div class="psych-card passive-use">
                        <div class="psych-icon">🧟</div>
                        <div class="psych-content">
                            <h4>PASSIVE CONSUMPTION</h4>
                            <p>Endlessly scrolling algorithm feeds. The primary driver of declining wellbeing and screen-time guilt.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- ====== SECTION 4: WHAT WE INTRODUCE ====== -->
        <section class="chapter chapter-how" id="chapter-how">
            <div class="chapter-inner">
                <div class="chapter-num">03</div>
                <h2 class="chapter-title highlight-text">A gentle reflection, right in your Dynamic Island.</h2>
                <p class="chapter-body highlight-text">Ticker runs a Live Activity that shows your elapsed time directly in the Dynamic Island. No popups. No blocking. Just a quiet number that keeps you honest.</p>
                
                <div class="how-demo">
                    <div class="how-col">
                        <div class="demo-box highlight-text">
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
                    </div>

                    <div class="how-col">
                        <div class="demo-box highlight-text">
                            <div class="comp-phone-screen ticker-screen">
                                <div class="comp-island">
                                    <span class="comp-island-dot"></span>
                                    <span class="comp-island-time">4:32</span>
                                </div>
                                <div class="ticker-content-lines">
                                    <div class="tcl"></div>
                                    <div class="tcl short"></div>
                                    <div class="tcl med"></div>
                                </div>
                            </div>
                        </div>
                        <h4 class="comp-label">Ticker</h4>
                        <p class="comp-desc">Treats you like an adult. Quietly shows you the time. You decide what to do with it.</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- ====== SECTION 5: THE CTA ====== -->
`;

let targetHtml = topHtml + newSections + bottomHtml;

fs.writeFileSync('index.html', targetHtml);
