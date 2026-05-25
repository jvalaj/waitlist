import { Eye } from 'lucide-react'

export function AwarenessSection() {
  return (
    <section className="px-6 py-24 bg-[#F7F7F8] border-b border-border">
      <div className="max-w-[900px] mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

          <div className="bg-[#111113] text-white rounded-3xl p-6 fade-up flex flex-col justify-between gap-4">
            <div>
              <p className="text-xs font-black tracking-widest uppercase text-white/40 mb-2">Awareness phases</p>
              <p className="text-sm text-white/60 leading-relaxed">
                The timer shifts color as your session grows. A silent nudge, not a nag.
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

          <div className="bg-white rounded-3xl p-6 border border-border fade-up flex flex-col justify-between gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#F0FDF9] flex items-center justify-center">
              <Eye className="w-5 h-5 text-[#059669]" strokeWidth={1.8} />
            </div>
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
    </section>
  )
}
