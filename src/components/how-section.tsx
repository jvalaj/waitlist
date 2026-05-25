export function HowSection() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-24 border-b border-border">
      <div className="max-w-[680px] w-full">
        <p className="text-xs font-black tracking-[0.2em] text-[#0066FF] uppercase mb-4 fade-up">03</p>
        <h2 className="text-[2.25rem] sm:text-[2.5rem] font-black tracking-tight leading-[1.12] mb-6 fade-up">
          The solution isn&apos;t force. It&apos;s self-realization.
        </h2>
        <p className="text-base text-muted-foreground leading-relaxed mb-12 highlight-text fade-up">
          You don&apos;t need a parent locking your apps. You need a mirror. Ticker runs a quiet
          Live Activity in your Dynamic Island to show your elapsed time.{' '}
          <strong className="text-foreground">No popups. No blocking. Just absolute awareness</strong>,
          letting you make your own choices.
        </p>

        <div className="flex justify-center fade-up">
          {/* Phone mockup */}
          <div className="flex flex-col items-center gap-3">
            <div className="w-[160px] h-[220px] rounded-[24px] overflow-hidden border border-border shadow-xl bg-white flex flex-col items-center pt-3">
              {/* Dynamic Island */}
              <div className="bg-black px-3 py-1 rounded-full flex items-center gap-1.5 mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-[#34D399]" />
                <span className="text-[10px] font-black text-[#34D399] tabular-nums">4:32</span>
              </div>
              {/* Content lines */}
              <div className="flex flex-col gap-2 w-4/5">
                <div className="h-2 bg-border/60 rounded-full" />
                <div className="h-2 bg-border/60 rounded-full w-3/5" />
                <div className="h-2 bg-border/60 rounded-full w-4/5" />
                <div className="h-2 bg-border/60 rounded-full w-2/5 mt-2" />
                <div className="h-2 bg-border/60 rounded-full" />
              </div>
            </div>
            <span className="text-base font-black">Ticker</span>
          </div>
        </div>
      </div>
    </section>
  )
}
