export function HowSection() {
  return (
    <section
      id="how-section"
      className="relative bg-[#F7F7F8] border-b border-border"
      style={{ minHeight: '200vh' }}
    >
      <div className="sticky top-0 h-screen flex flex-col justify-center items-center px-6 gap-8 overflow-hidden">
        <div className="w-full max-w-[900px]">
          <h2 className="text-[2rem] sm:text-[2.4rem] font-black tracking-tight leading-[1.12] mb-3 fade-up max-w-xl">
            Enter self-realization.
          </h2>
          <p className="text-muted-foreground text-base fade-up max-w-lg">
            No popups. No locks. Just a mirror in your Dynamic Island.
          </p>
        </div>

        {/* Landing box — island animates down to center of this */}
        <div
          id="island-box"
          className="relative bg-white rounded-[44px] border border-border shadow-xl fade-up flex-shrink-0"
          style={{ width: 260, height: 400 }}
        >
          {/* Invisible 1px anchor at box center — used to calculate target top */}
          <div
            id="island-anchor"
            className="absolute top-1/2 left-1/2"
            style={{ transform: 'translate(-50%, -50%)', width: 1, height: 1, pointerEvents: 'none' }}
          />

          {/* Faint landing indicator */}
          <div
            className="absolute top-1/2 left-1/2 rounded-full border border-dashed"
            style={{
              transform: 'translate(-50%, -50%)',
              width: 140,
              height: 36,
              borderColor: 'rgba(0,0,0,0.08)',
            }}
          />

          {/* Ghosted phone UI for context */}
          <div
            className="absolute inset-0 rounded-[44px] overflow-hidden pointer-events-none"
            style={{ opacity: 0.08 }}
          >
            <div className="flex flex-col px-5 pt-10 gap-4">
              <div className="flex gap-2 justify-center">
                {['#FB7185', '#38BDF8', '#FBB024', '#A78BFA'].map((c, i) => (
                  <div key={i} className="w-9 h-9 rounded-full" style={{ background: c }} />
                ))}
              </div>
              <div className="mt-2 flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-indigo-400" />
                  <div className="h-1.5 bg-gray-400 rounded-full w-16" />
                </div>
                <div className="w-full h-28 rounded-xl bg-gray-300" />
                <div className="h-1.5 bg-gray-200 rounded-full w-20" />
                <div className="h-1.5 bg-gray-200 rounded-full w-32" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
