
export function BlockersSection() {
  return (
    <section className="px-6 py-24 bg-[#F7F7F8] border-b border-border">
      <div className="max-w-[900px] mx-auto">
        {/* Header */}

        <h2 className="text-[2rem] sm:text-[2.4rem] font-black tracking-tight leading-[1.12] mb-10 fade-up max-w-xl">
          App blockers don&apos;t work. And you know it.
        </h2>

        <div className="bg-[#111113] text-white rounded-3xl p-7 shadow-sm fade-up flex flex-col justify-between gap-6">
          <div>
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
    </section>
  )
}
