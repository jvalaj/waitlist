import Image from 'next/image'

// Real questions from the app's PromptLibrary, one per moment it's timed to.
const checkIns = [
  { question: 'Enjoying this, or just continuing?', when: 'Any time' },
  { question: '20 minutes in. Still the plan?', when: 'Deep into a long session' },
  { question: "It's late. Worth less sleep?", when: 'Late at night' },
]

const BETA_MAIL = 'mailto:jvalaj@usf.edu?subject=No%20More%20Scroll%20beta'

function Label({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-[12px] font-medium uppercase tracking-[0.17em] text-ink/60">{children}</h2>
  )
}

export default function Home() {
  return (
    <main className="mx-auto max-w-[620px] px-6 pb-16 pt-16 sm:pt-28">
      <div className="rise flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Image
            src="/images/icon.png"
            alt=""
            width={36}
            height={36}
            priority
            className="rounded-[9px] shadow-[0_6px_16px_rgba(8,7,8,0.10)]"
          />
          <span className="text-[17px] font-medium tracking-[-0.005em]">No More Scroll</span>
        </div>
        <span className="text-[13px] text-ink/60">Beta · iPhone</span>
      </div>

      <header className="rise mt-24 sm:mt-32" style={{ animationDelay: '60ms' }}>
        <h1 className="text-[34px] font-light leading-[1.18] tracking-[-0.01em] sm:text-[44px]">
          An iPhone app that interrupts autopilot scrolling with one short question.
        </h1>
        <p className="mt-7 text-[19px] font-light leading-[1.6] text-ink/60">
          After a set number of minutes in the apps you choose, No More Scroll covers the screen
          with a brief check-in. You decide whether to continue or stop. Nothing is blocked
          permanently.
        </p>
      </header>

      <section className="rise mt-20" style={{ animationDelay: '120ms' }}>
        <Label>Check-ins adapt to the moment</Label>
        <ul className="mt-6 space-y-6">
          {checkIns.map(c => (
            <li key={c.question}>
              <p className="text-[24px] font-light leading-snug">{c.question}</p>
              <p className="mt-1 text-[14px] text-ink/60">{c.when}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="rise mt-20 space-y-5 text-[17px] leading-[1.7] text-ink/80" style={{ animationDelay: '200ms' }}>
        <Label>The research</Label>
        <p>
          No More Scroll is the foundation of an ongoing research project in human-computer
          interaction. The central question: can an intervention change behavior without being so
          frustrating that people turn it off?
        </p>
        <p>
          The tools that cut use the most tend to frustrate people the most. In one field study,
          locking the phone for the rest of the day after a daily limit cut weekday use by about
          74 minutes, and also caused the most frustration.<sup className="ml-0.5 text-[11px]">1</sup>
        </p>
        <p>
          A proposed randomized field study with college students would compare three
          conditions: check-ins timed to context (late at night, or deep into a long session),
          check-ins on a fixed timer, and no check-ins. Outcomes would include how often
          participants stop, whether they keep the intervention enabled, and a daily mood rating.
        </p>
      </section>

      <section className="rise mt-20" style={{ animationDelay: '260ms' }}>
        <Label>Status</Label>
        <p className="mt-5 text-[24px] font-light leading-snug">In private beta. Launching soon on iPhone.</p>
        <nav className="mt-8 flex flex-col items-start gap-3 text-[17px]">
          <a href={BETA_MAIL} className="underline decoration-ink/25 underline-offset-[6px] transition hover:decoration-ink">
            Request beta access
          </a>
          <a href="mailto:jvalaj@usf.edu" className="underline decoration-ink/25 underline-offset-[6px] transition hover:decoration-ink">
            Contact
          </a>
        </nav>
      </section>

      <footer className="mt-28 border-t border-ink/10 pt-6 text-[13px] leading-relaxed text-ink/60">
        <p>
          1. Kim, J., Jung, H., Ko, M., &amp; Lee, U. (2019). GoalKeeper: Exploring interaction
          lockout mechanisms for regulating smartphone use. <em>Proc. ACM IMWUT</em>, 3(1).
        </p>
        <p className="mt-6">© 2026 No More Scroll · Jvalaj Pandey, University of South Florida</p>
      </footer>
    </main>
  )
}
