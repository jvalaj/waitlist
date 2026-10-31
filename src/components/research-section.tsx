const conditions = [
  { name: 'Context-timed check-ins', body: 'Check-ins timed to moments such as late at night or deep into a long session.' },
  { name: 'Fixed-timer check-ins', body: 'Check-ins on a fixed timer, regardless of context.' },
  { name: 'No intervention', body: 'A comparison group that uses the app without check-ins.' },
]

const measures = [
  'App use',
  'Check-in responses',
  'Whether participants keep the intervention enabled',
  'Daily mood rating (secondary measure)',
]

export function ResearchSection() {
  return (
    <section id="research" className="border-y border-line bg-white px-6 py-24">
      <div className="mx-auto max-w-[1040px]">
        <p className="fade-up text-[12px] font-black uppercase tracking-[0.14em] text-brand-blue">Research</p>
        <h2 className="fade-up mt-3 max-w-[700px] text-[2rem] font-black leading-[1.12] tracking-tight text-ink sm:text-[2.4rem]">
          Can an intervention change behavior without frustrating people into turning it off?
        </h2>
        <p className="fade-up mt-4 max-w-[640px] text-[16px] leading-relaxed text-sub">
          The primary question: do check-ins timed to context lead people to stop more often, and to
          keep the tool turned on longer, than check-ins on a fixed timer?
        </p>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {conditions.map((c, i) => (
            <div key={c.name} className="fade-up rounded-3xl border border-line bg-gradient-to-b from-white to-[#F7F9FC] p-7">
              <p className="text-[11px] font-black uppercase tracking-[0.14em] text-sub">Condition {i + 1}</p>
              <h3 className="mt-2 text-[18px] font-black text-ink">{c.name}</h3>
              <p className="mt-2 text-[14px] leading-relaxed text-sub">{c.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-5 grid gap-5 md:grid-cols-2">
          <div className="fade-up rounded-3xl border border-line p-7">
            <h3 className="text-[15px] font-black text-ink">What would be measured</h3>
            <ul className="mt-3 space-y-2 text-[14px] text-sub">
              {measures.map(m => (
                <li key={m} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-brand-blue" />
                  <span>{m}</span>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-[14px] leading-relaxed text-sub">
              A follow-up period would show whether changes last, and interviews could explain why
              people accept or disable the tool.
            </p>
          </div>
          <div className="fade-up rounded-3xl border border-line bg-[#F7F9FC] p-7">
            <h3 className="text-[15px] font-black text-ink">Status and open limits</h3>
            <p className="mt-3 text-[14px] leading-relaxed text-sub">
              This is a proposed randomized field study with college students. It has not started,
              and the sample size, measures and timeline are still to be refined with faculty
              guidance.
            </p>
            <p className="mt-3 text-[14px] leading-relaxed text-sub">
              The main limitation is that the app cannot read Screen Time minutes. One option is to
              estimate use from DeviceActivity threshold events, which can fire without showing a
              check-in, and to check them against participants&apos; Screen Time screenshots.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
