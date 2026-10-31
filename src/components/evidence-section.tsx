const stats = [
  {
    figure: '+7% / +20%',
    label: 'Severe depression / anxiety disorders',
    body: 'Braghieri, Levy and Makarin (2022) studied the staggered arrival of Facebook at 775 U.S. colleges and found it increased severe depression by 7% and anxiety disorders by 20%.',
    cite: 'Braghieri, Levy & Makarin, 2022',
  },
  {
    figure: '−74 min',
    label: 'Largest drop in use, and the most frustration',
    body: 'In the GoalKeeper field study, locking the phone for the rest of the day after a daily limit cut use the most, by about 74 minutes. It also frustrated people the most.',
    cite: 'Kim et al., 2019',
  },
  {
    figure: 'Few',
    label: 'Evaluations test whether changes last',
    body: 'A 2023 meta-analysis of digital self-control tools found that few evaluations test whether the changes they produce last.',
    cite: 'Monge Roffarello & De Russis, 2023',
  },
]

export function EvidenceSection() {
  return (
    <section id="evidence" className="border-y border-line bg-white px-6 py-24">
      <div className="mx-auto max-w-[1040px]">
        <p className="fade-up text-[12px] font-black uppercase tracking-[0.14em] text-brand-blue">Why this matters</p>
        <h2 className="fade-up mt-3 max-w-[640px] text-[2rem] font-black leading-[1.12] tracking-tight text-ink sm:text-[2.4rem]">
          Existing tools face a tradeoff between effectiveness and control.
        </h2>
        <p className="fade-up mt-4 max-w-[600px] text-[16px] leading-relaxed text-sub">
          Heavy phone use matters for students in particular, but the tools that cut use the most
          can feel the most restrictive, and people turn off what frustrates them.
        </p>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {stats.map(s => (
            <article
              key={s.cite}
              className="fade-up flex flex-col rounded-3xl border border-line bg-gradient-to-b from-white to-[#F7F9FC] p-7 shadow-[0_4px_8px_rgba(0,0,0,0.03)]"
            >
              <p className="text-[2.2rem] font-black tabular-nums leading-none text-ink">{s.figure}</p>
              <p className="mt-2 text-[13px] font-bold text-brand-blue">{s.label}</p>
              <p className="mt-4 flex-1 text-[14px] leading-relaxed text-sub">{s.body}</p>
              <p className="mt-5 border-t border-line pt-4 text-[11px] font-bold uppercase tracking-[0.1em] text-sub">
                {s.cite}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
