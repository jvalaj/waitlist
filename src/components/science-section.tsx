import { MessageCircle, CalendarDays, Camera, Infinity, FlaskConical } from 'lucide-react'

export function ScienceSection() {
  return (
    <section className="px-6 py-24 bg-white border-b border-border">
      <div className="max-w-[900px] mx-auto">
        {/* Header */}

        <h2 className="text-[2rem] sm:text-[2.4rem] font-black tracking-tight leading-[1.12] mb-3 fade-up max-w-xl">
          The real problem is scrolling without thinking.
        </h2>
        <p className="text-muted-foreground text-base mb-10 fade-up max-w-lg highlight-text">
          Research shows that{' '}
          <strong className="text-foreground">talking to people online isn&apos;t actually bad for you. The bad part is scrolling on autopilot.</strong>
        </p>

        {/* Two-card bento */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

          {/* Active Use — light blue */}
          <div className="bg-[#EFF6FF] border border-[#BFDBFE] rounded-3xl p-8 fade-up flex flex-col gap-4">
            <div className="w-11 h-11 bg-[#3B82F6]/20 rounded-2xl flex items-center justify-center">
              <MessageCircle className="w-5 h-5 text-[#2563EB]" strokeWidth={2} />
            </div>
            <div>
              <span className="inline-block text-[11px] font-black tracking-widest uppercase text-[#2563EB] bg-[#3B82F6]/15 rounded-full px-3 py-1 mb-3">
                ✓ Connected
              </span>
              <h3 className="text-xl font-black mb-2 text-foreground">Talking to people</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Texting friends, planning hangouts, and sharing photos. This keeps you connected and feels good.
              </p>
            </div>
            <div className="mt-auto flex items-center gap-2 pt-4 border-t border-[#BFDBFE]">
              <div className="flex gap-1">
                {[
                  <MessageCircle key="msg" className="w-4 h-4 text-[#2563EB]" strokeWidth={2} />,
                  <CalendarDays key="cal" className="w-4 h-4 text-[#2563EB]" strokeWidth={2} />,
                  <Camera key="cam" className="w-4 h-4 text-[#2563EB]" strokeWidth={2} />,
                ].map((icon, i) => (
                  <div key={i} className="w-8 h-8 bg-white rounded-lg flex items-center justify-center shadow-sm border border-[#BFDBFE]">
                    {icon}
                  </div>
                ))}
              </div>
              <span className="text-xs text-muted-foreground ml-1">This part is fine</span>
            </div>
          </div>

          {/* Passive Consumption — light orange */}
          <div className="bg-[#FFF7ED] border border-[#FED7AA] rounded-3xl p-8 fade-up flex flex-col gap-4">
            <div className="w-11 h-11 bg-[#F97316]/20 rounded-2xl flex items-center justify-center">
              <Infinity className="w-5 h-5 text-[#EA580C]" strokeWidth={2} />
            </div>
            <div>
              <span className="inline-block text-[11px] font-black tracking-widest uppercase text-[#EA580C] bg-[#F97316]/15 rounded-full px-3 py-1 mb-3">
                ↓ Feeling guilty
              </span>
              <h3 className="text-xl font-black mb-2 text-foreground">Scrolling feeds</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Just scrolling through feeds with no actual goal. This is what makes you feel bad and guilty.
              </p>
            </div>
            <div className="mt-auto pt-4 border-t border-[#FED7AA]">
              <div className="flex items-center justify-between mb-1">
                <span className="text-[11px] text-muted-foreground font-semibold">Scrolling without thinking</span>
                <span className="text-[11px] text-[#EA580C] font-black">47 min</span>
              </div>
              <div className="w-full bg-[#FFEDD5] rounded-full h-1.5">
                <div className="bg-[#EA580C] h-1.5 rounded-full w-[85%]" />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
