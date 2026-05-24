const fs = require('fs');

let html = fs.readFileSync('index.html', 'utf8');

// The chapters we want to keep are:
// 1. chapter-welcome (unchanged content, keep as is)
// 2. chapter-blockers (update text)
// 3. chapter-problem/trap merged into -> chapter-science (update text)
// 4. chapter-how (What we introduce)
// 5. chapter-cta (Waitlist)

// We replace everything from chapter-blockers down to chapter-cta to ensure clean state.

let topHtmlPath = html.split('<!-- ====== CHAPTER 2: TRADITIONAL BLOCKERS ====== -->')[0];
if (!topHtmlPath.trim()) {
    topHtmlPath = html.split('<section class="chapter chapter-blockers"')[0];
}

let bottomHtmlPath = html.split('<!-- ====== CHAPTER 7: THE CTA ====== -->')[1];
if (!bottomHtmlPath) {
    bottomHtmlPath = html.split('<!-- ====== CHAPTER 7: THE CTA (Waitlist) ====== -->')[1] || html.split('<!-- ====== CHAPTER CTA ====== -->')[1];
}
if (!bottomHtmlPath) {
    // try to split by chapter-cta section closing tag if needed, but let's just replace from blocker to cta start
    bottomHtmlPath = html.substring(html.indexOf('<section class="chapter chapter-cta"'));
}

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
                <h2 class="chapter-title">A gentle reflection, right in your Dynamic Island.</h2>
                <p class="chapter-body">Ticker runs a Live Activity that shows your elapsed time directly in the Dynamic Island. No popups. No blocking. Just a quiet number that keeps you honest.</p>
                
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

let targetHtml = topHtmlPath;
// Remove any trailing whitespace before injecting
let ctaIndex = html.indexOf('<section class="chapter chapter-cta"');
let bottomHtml = html.substring(ctaIndex);
bottomHtml = bottomHtml.replace('<div class="chapter-num">07</div>', '<div class="chapter-num">04</div>'); // fix numbering
bottomHtml = bottomHtml.replace('<div class="chapter-num">06</div>', '<div class="chapter-num">04</div>'); // in case it was 6
bottomHtml = bottomHtml.replace('<div class="chapter-num">05</div>', '<div class="chapter-num">04</div>'); 
targetHtml += newSections + bottomHtml;

fs.writeFileSync('index.html', targetHtml);

// 2. CSS updates
let css = fs.readFileSync('style.css', 'utf8');

// Modify chapter spacing for mobile
if (!css.includes('@media (max-width: 768px) {')) {
    console.err('Cannot find mobile media query');
} else {
    css = css.replace(/@media \(max-width: 768px\) \{/, `@media (max-width: 768px) {
    .chapter {
        min-height: auto; 
        padding: 60px 24px;
        border-bottom: none; /* Flow continuously without harsh lines */
    }
    .chapter-welcome {
        min-height: 100vh; /* keep welcome as full screen */
        border-bottom: 1px solid var(--border); /* Optional keep boundary for the hero */
    }
    .chapter-cta {
        min-height: 100vh; /* let CTA take full screen as well if needed, or remove rule */
    }`);
}

fs.writeFileSync('style.css', css);

