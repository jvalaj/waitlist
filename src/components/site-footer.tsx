import Image from 'next/image'

const refs = [
  'Braghieri, Levy & Makarin (2022). Study of the staggered arrival of Facebook at 775 U.S. colleges.',
  'Kim et al. (2019). GoalKeeper field study of smartphone lockout mechanisms.',
  'Monge Roffarello & De Russis (2023). Meta-analysis of digital self-control tools.',
]

export function SiteFooter() {
  return (
    <footer className="border-t border-line bg-white px-6 py-12">
      <div className="mx-auto max-w-[1040px]">
        <div className="flex flex-col gap-8 md:flex-row md:justify-between">
          <div className="max-w-[360px]">
            <div className="flex items-center gap-2.5">
              <Image src="/images/logo.png" alt="No More Scroll" width={24} height={24} className="rounded-[6px]" />
              <span className="text-[16px] font-black text-ink" style={{ fontFamily: 'var(--font-kyiv)' }}>
                No More Scroll
              </span>
            </div>
            <p className="mt-3 text-[13px] leading-relaxed text-sub">
              An iOS app and research project on context-aware check-ins for college students. Built
              by Jvalaj Pandey. Currently in beta.
            </p>
          </div>
          <div className="max-w-[460px]">
            <p className="text-[11px] font-black uppercase tracking-[0.14em] text-sub">References</p>
            <ul className="mt-3 space-y-2 text-[12px] leading-relaxed text-sub">
              {refs.map(r => (
                <li key={r}>{r}</li>
              ))}
            </ul>
          </div>
        </div>
        <p className="mt-10 text-[12px] text-sub">© 2026 No More Scroll</p>
      </div>
    </footer>
  )
}
