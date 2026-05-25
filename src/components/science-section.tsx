export function ScienceSection() {
  return (
    <section className="px-6 py-24 bg-white border-b border-border">
      <div className="max-w-[900px] mx-auto">
        {/* Header */}
        <p className="text-xs font-black tracking-[0.2em] text-[#0066FF] uppercase mb-3 fade-up">02</p>
        <h2 className="text-[2rem] sm:text-[2.4rem] font-black tracking-tight leading-[1.12] mb-3 fade-up max-w-xl">
          Active vs. Passive. That&apos;s the only distinction that matters.
        </h2>
        <p className="text-muted-foreground text-base mb-10 fade-up max-w-lg highlight-text">
          Yale psychology research reveals:{' '}
          <strong className="text-foreground">being social online isn&apos;t the problem. Autopilot is.</strong>
        </p>

        {/* Two-card bento */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

          {/* Active Use — light green */}
          <div className="bg-[#F0FDF9] border border-[#A7F3D0] rounded-3xl p-8 fade-up flex flex-col gap-4">
            <div className="w-11 h-11 bg-[#34D399]/20 rounded-2xl flex items-center justify-center text-2xl">
              💬
            </div>
            <div>
              <span className="inline-block text-[11px] font-black tracking-widest uppercase text-[#059669] bg-[#34D399]/15 rounded-full px-3 py-1 mb-3">
                ✓ Healthy Connection
              </span>
              <h3 className="text-xl font-black mb-2">Active Use</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Messaging friends · Organizing meetups · Sharing meaningful content. You&apos;re present and intentional.
              </p>
            </div>
            <div className="mt-auto flex items-center gap-2 pt-4 border-t border-[#A7F3D0]">
              <div className="flex gap-1">
                {['💬', '📅', '📸'].map((e, i) => (
                  <div key={i} className="w-8 h-8 bg-white rounded-lg flex items-center justify-center text-base shadow-sm border border-[#A7F3D0]">
                    {e}
                  </div>
                ))}
              </div>
              <span className="text-xs text-muted-foreground ml-1">Intentional, purposeful, connected</span>
            </div>
          </div>

          {/* Passive Consumption — dark */}
          <div className="bg-[#111113] rounded-3xl p-8 text-white fade-up flex flex-col gap-4">
            <div className="w-11 h-11 bg-white/10 rounded-2xl flex items-center justify-center text-2xl">
              🧟
            </div>
            <div>
              <span className="inline-block text-[11px] font-black tracking-widest uppercase text-[#EF4444] bg-[#EF4444]/10 rounded-full px-3 py-1 mb-3">
                ↓ Declining Wellbeing
              </span>
              <h3 className="text-xl font-black mb-2 text-white">Passive Consumption</h3>
              <p className="text-sm text-white/60 leading-relaxed">
                Endlessly scrolling algorithm feeds. No goal. No end. The primary driver of screen-time guilt and anxiety.
              </p>
            </div>
            <div className="mt-auto pt-4 border-t border-white/10">
              <div className="flex items-center justify-between mb-1">
                <span className="text-[11px] text-white/40 font-semibold">Autopilot scroll session</span>
                <span className="text-[11px] text-[#EF4444] font-black">47 min</span>
              </div>
              <div className="w-full bg-white/10 rounded-full h-1.5">
                <div className="bg-[#EF4444] h-1.5 rounded-full w-[85%]" />
              </div>
            </div>
          </div>

          {/* Bottom full-width insight card */}
          <div className="sm:col-span-2 bg-[#F7F7F8] border border-border rounded-3xl p-7 fade-up flex items-center gap-6">
            <div className="text-4xl flex-shrink-0">🔬</div>
            <div>
              <p className="text-sm font-semibold text-foreground leading-relaxed">
                Yale research shows active social media use <span className="text-[#34D399] font-black">increases wellbeing</span>,
                while passive consumption <span className="text-[#EF4444] font-black">decreases it</span> — even with the same amount of time spent online.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
