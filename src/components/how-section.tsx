import Image from 'next/image'

export function HowSection() {
  return (
    <section className="px-6 py-24 bg-[#F7F7F8] border-b border-border">
      <div className="max-w-[900px] mx-auto">
        {/* Header */}
        <p className="text-xs font-black tracking-[0.2em] text-[#0066FF] uppercase mb-3 fade-up">03</p>
        <h2 className="text-[2rem] sm:text-[2.4rem] font-black tracking-tight leading-[1.12] mb-3 fade-up max-w-xl">
          The solution isn&apos;t force. It&apos;s self-realization.
        </h2>
        <p className="text-muted-foreground text-base mb-10 fade-up max-w-lg">
          No popups. No locks. Just a quiet mirror in your Dynamic Island.
        </p>

        {/* Bento grid */}
        <div className="grid grid-cols-1 sm:grid-cols-5 gap-4">

          {/* Main phone card — spans 3 cols */}
          <div className="sm:col-span-3 bg-white rounded-3xl p-8 shadow-sm border border-border fade-up flex flex-col items-center justify-center gap-6">
            {/* iPhone frame */}
            <div className="relative">
              <div
                className="rounded-[44px] p-[10px] shadow-2xl"
                style={{ background: 'linear-gradient(145deg, #2a2a2a, #111113)', border: '1px solid rgba(255,255,255,0.08)' }}
              >
                <div className="bg-white rounded-[36px] overflow-hidden w-[200px] h-[380px] flex flex-col">

                  {/* Status bar + Dynamic Island */}
                  <div className="bg-white pt-3 px-4 flex justify-center">
                    <div
                      className="flex items-center gap-2 px-4 py-[5px] rounded-full"
                      style={{ background: '#000' }}
                    >
                      <Image src="/images/logo.png" alt="Ticker" width={13} height={13} className="rounded-[3px]" />
                      <div className="w-px h-3 bg-white/20" />
                      <span className="text-[10px] font-black tabular-nums" style={{ color: '#34D399' }}>4:32</span>
                    </div>
                  </div>

                  {/* App content — fake Instagram feed */}
                  <div className="flex-1 flex flex-col px-3 pt-4 gap-3 overflow-hidden">
                    {/* Story row */}
                    <div className="flex gap-2 overflow-hidden">
                      {['bg-rose-400', 'bg-sky-400', 'bg-amber-400', 'bg-purple-400'].map((c, i) => (
                        <div key={i} className="flex flex-col items-center gap-1 flex-shrink-0">
                          <div className={`w-10 h-10 rounded-full ${c} border-2 border-rose-300`} />
                          <div className="w-7 h-1 bg-gray-200 rounded-full" />
                        </div>
                      ))}
                    </div>

                    {/* Post 1 */}
                    <div className="flex flex-col gap-1.5">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded-full bg-indigo-400" />
                        <div className="h-1.5 bg-gray-200 rounded-full w-16" />
                      </div>
                      <div className="w-full h-28 rounded-xl bg-gradient-to-br from-gray-100 to-gray-200" />
                      <div className="flex gap-3 text-gray-400 px-0.5">
                        <span className="text-sm">♡</span>
                        <span className="text-sm">💬</span>
                        <span className="text-sm">↗</span>
                      </div>
                      <div className="h-1.5 bg-gray-200 rounded-full w-24" />
                      <div className="h-1.5 bg-gray-100 rounded-full w-32" />
                    </div>
                  </div>

                  {/* Nav bar */}
                  <div className="border-t border-gray-100 py-2 px-6 flex justify-between text-gray-400">
                    {['⌂', '🔍', '＋', '♡', '👤'].map((icon, i) => (
                      <span key={i} className="text-xs">{icon}</span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Floating label */}
              <div
                className="absolute -top-2 left-1/2 -translate-x-1/2 bg-[#111113] text-white text-[10px] font-black px-3 py-1 rounded-full whitespace-nowrap"
                style={{ boxShadow: '0 0 16px rgba(52,211,153,0.4)' }}
              >
                🟢 4:32 on Instagram
              </div>
            </div>

            <p className="text-xs text-center text-muted-foreground max-w-[180px] leading-relaxed">
              Ticker lives quietly in your Dynamic Island — always visible, never intrusive.
            </p>
          </div>

          {/* Right column — two info cards */}
          <div className="sm:col-span-2 flex flex-col gap-4">

            {/* Timer states card */}
            <div className="bg-[#111113] text-white rounded-3xl p-6 fade-up flex-1 flex flex-col justify-between gap-4">
              <div>
                <p className="text-xs font-black tracking-widest uppercase text-white/40 mb-2">Awareness phases</p>
                <p className="text-sm text-white/60 leading-relaxed">
                  The timer shifts color as your session grows — a silent nudge, not a nag.
                </p>
              </div>
              <div className="flex flex-col gap-2">
                {[
                  { color: '#34D399', label: '0–30s', desc: 'Just started' },
                  { color: '#FBBF24', label: '30s–1m', desc: 'Getting long' },
                  { color: '#EF4444', label: '1m+', desc: 'Time to reflect' },
                ].map(({ color, label, desc }) => (
                  <div key={label} className="flex items-center gap-3">
                    <div className="w-2.5 h-2.5 rounded-full flex-shrink-0" style={{ background: color, boxShadow: `0 0 8px ${color}` }} />
                    <span className="text-xs font-black tabular-nums" style={{ color }}>{label}</span>
                    <span className="text-xs text-white/40 ml-auto">{desc}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* No blocking card */}
            <div className="bg-white rounded-3xl p-6 border border-border fade-up flex-1 flex flex-col justify-between gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#F0FDF9] flex items-center justify-center text-xl">🪞</div>
              <div>
                <p className="font-black text-base mb-1">Your choice. Always.</p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  No blocks. No locks. No guilt. Just absolute awareness, so you can decide for yourself.
                </p>
              </div>
              <div className="flex items-center gap-2 text-[11px] font-bold text-[#34D399]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#34D399]" />
                iOS 17+ · Dynamic Island required
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
