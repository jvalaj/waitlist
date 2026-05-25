export function BlockersSection() {
  return (
    <section className="px-6 py-24 bg-[#F7F7F8] border-b border-border">
      <div className="max-w-[900px] mx-auto">
        {/* Header */}
        <p className="text-xs font-black tracking-[0.2em] text-[#0066FF] uppercase mb-3 fade-up">01</p>
        <h2 className="text-[2rem] sm:text-[2.4rem] font-black tracking-tight leading-[1.12] mb-3 fade-up max-w-xl">
          App blockers don&apos;t work. And you know it.
        </h2>
        <p className="text-muted-foreground text-base mb-10 fade-up max-w-lg">
          Every method you&apos;ve tried has a built-in escape hatch.
        </p>

        {/* Bento grid */}
        <div className="grid grid-cols-1 sm:grid-cols-5 gap-4">

          {/* Card 1 — iOS Screen Time mockup */}
          <div className="sm:col-span-3 bg-white rounded-3xl p-7 shadow-sm border border-border fade-up flex flex-col gap-5">
            <div>
              <p className="text-xs font-black tracking-widest uppercase text-muted-foreground mb-1">The Override Loop</p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                The limit popup appears. You tap <strong className="text-foreground">&lsquo;Ignore Limit&rsquo;</strong>.
                You haven&apos;t trained your mind — only your thumb.
              </p>
            </div>

            {/* Simulated iOS Screen Time alert */}
            <div className="bg-[#F2F2F7] rounded-2xl overflow-hidden shadow-inner">
              <div className="px-6 pt-6 pb-4 flex flex-col items-center gap-1 text-center">
                <div className="text-3xl mb-1">📵</div>
                <p className="font-black text-[15px]">Time Limit</p>
                <p className="text-xs text-[#6B7280] leading-snug max-w-[200px]">
                  You&apos;ve used 1 hour on Social Networking today.
                </p>
              </div>
              <div className="px-4 pb-4 flex flex-col gap-2">
                <button className="w-full bg-[#007AFF] text-white text-[13px] font-bold rounded-xl py-2.5">
                  OK
                </button>
                <button className="w-full border border-[#007AFF] text-[#007AFF] text-[13px] font-semibold rounded-xl py-2.5 bg-white">
                  Ignore Limit for Today
                </button>
              </div>
              <div className="h-4 bg-[#E8E8ED] flex items-center justify-center">
                <div className="w-20 h-1 bg-[#C7C7CC] rounded-full" />
              </div>
            </div>
          </div>

          {/* Card 2 — Rebound Effect */}
          <div className="sm:col-span-2 bg-[#111113] text-white rounded-3xl p-7 shadow-sm fade-up flex flex-col justify-between gap-6">
            <div>
              <p className="text-xs font-black tracking-widest uppercase text-white/40 mb-2">The Rebound Effect</p>
              <p className="text-sm text-white/70 leading-relaxed">
                Forcing yourself to quit triggers <span className="text-white font-semibold">reactance</span>.
                The second a block lifts, you doom-scroll twice as fast to make up for lost time.
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-between text-xs font-semibold">
                <span className="text-white/40">Usage after block</span>
                <span className="text-[#EF4444]">+2×</span>
              </div>
              {/* Mini bar chart */}
              <div className="flex items-end gap-1 h-12">
                {[30, 45, 35, 50, 40, 38, 95].map((h, i) => (
                  <div
                    key={i}
                    className="flex-1 rounded-sm"
                    style={{
                      height: `${h}%`,
                      background: i === 6 ? '#EF4444' : 'rgba(255,255,255,0.15)',
                    }}
                  />
                ))}
              </div>
              <div className="flex justify-between text-[10px] text-white/30 font-medium">
                <span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span><span className="text-[#EF4444]">Sun</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
