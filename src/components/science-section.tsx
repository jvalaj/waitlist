export function ScienceSection() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-24 bg-[#111113] text-white">
      <div className="max-w-[680px] w-full">
        <p className="text-xs font-black tracking-[0.2em] text-[#0066FF] uppercase mb-4 fade-up">02</p>
        <h2 className="text-[2.25rem] sm:text-[2.5rem] font-black tracking-tight leading-[1.12] mb-6 fade-up">
          The psychological shift: Active vs. Passive Use
        </h2>
        <p className="text-base text-white/70 leading-relaxed mb-10 highlight-text fade-up">
          Yale psychology research reveals a vital truth:{' '}
          <strong className="text-white">
            Being social online isn&apos;t the problem. The problem is autopilot.
          </strong>
        </p>

        <div className="flex flex-col gap-4">
          {/* Active Use Card */}
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 flex items-start gap-4 fade-up hover:bg-white/[0.07] transition-colors duration-300">
            <div className="w-12 h-12 rounded-xl bg-black flex items-center justify-center text-2xl flex-shrink-0">
              💬
            </div>
            <div>
              <h4 className="text-sm font-black tracking-widest uppercase text-white mb-2">
                Active Use — Healthy Connection
              </h4>
              <p className="text-sm text-white/60 leading-relaxed">
                Messaging friends · Organizing meetups · Sharing photos
              </p>
            </div>
          </div>

          {/* Arrow */}
          <div className="flex flex-col items-center gap-1 py-1 text-white/30 text-xs font-semibold tracking-wide fade-up">
            <span>The Autopilot Transition</span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
              <path d="M12 5v14M5 12l7 7 7-7" />
            </svg>
          </div>

          {/* Passive Consumption Card */}
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 flex items-start gap-4 fade-up hover:bg-white/[0.07] transition-colors duration-300">
            <div className="w-12 h-12 rounded-xl bg-black flex items-center justify-center text-2xl flex-shrink-0">
              🧟
            </div>
            <div>
              <h4 className="text-sm font-black tracking-widest uppercase text-white mb-2">
                Passive Consumption
              </h4>
              <p className="text-sm text-white/60 leading-relaxed">
                Endlessly scrolling algorithm feeds. The primary driver of declining wellbeing and
                screen-time guilt.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
