import Image from 'next/image'

const BETA_MAIL = 'mailto:jvalaj@usf.edu?subject=No%20More%20Scroll%20beta'

const steps = [
  {
    title: 'Pick your apps',
    body: 'Choose the apps where time slips away, like Instagram, TikTok or YouTube, and how often you would like a check-in.',
  },
  {
    title: 'Get a quick check-in',
    body: 'After that many minutes, one short question covers the app. "Enjoying this, or just continuing?" Late at night it might ask, "It\'s late. Worth less sleep?"',
  },
  {
    title: 'Make the call',
    body: 'Keep going and you are straight back in. Stop and you are sent home. Either way it is your decision, and nothing is blocked for good.',
  },
]

function Section({
  id,
  title,
  children,
}: {
  id?: string
  title: string
  children: React.ReactNode
}) {
  return (
    <section id={id} className="grid gap-6 border-t border-ink/10 py-16 md:grid-cols-12 md:gap-10 md:py-24">
      <h2 className="text-[28px] font-light leading-tight md:col-span-4 md:text-[34px]">{title}</h2>
      <div className="space-y-5 text-[18px] leading-[1.7] text-ink/85 md:col-span-8 md:text-[19px] lg:col-span-7">
        {children}
      </div>
    </section>
  )
}

function BetaButton() {
  return (
    <a
      href={BETA_MAIL}
      className="inline-flex items-center rounded-full bg-ink px-6 py-3 text-[15px] font-medium text-white shadow-[0_10px_24px_rgba(8,7,8,0.12)] transition-opacity hover:opacity-85"
    >
      Request beta access
    </a>
  )
}

export default function Home() {
  return (
    <div className="mx-auto max-w-[1180px] px-6 md:px-12">
      <div className="flex h-20 items-center justify-between md:h-24">
        <a href="#" className="flex items-center gap-3">
          <Image
            src="/images/icon.png"
            alt=""
            width={36}
            height={36}
            priority
            className="rounded-[9px] shadow-[0_6px_16px_rgba(8,7,8,0.10)]"
          />
          <span className="text-[17px] font-medium">No More Scroll</span>
        </a>
        <nav className="flex items-center gap-8 text-[15px] text-ink/70">
          <a href="#how" className="hidden transition-colors hover:text-ink sm:inline">How it works</a>
          <a href="#research" className="hidden transition-colors hover:text-ink sm:inline">Research</a>
          <a href="#beta" className="transition-colors hover:text-ink">Beta</a>
        </nav>
      </div>

      <main>
        <header className="rise pb-20 pt-4 md:pb-28 md:pt-6">
          <p className="text-[15px] text-ink/70">In private beta · Launching soon on iPhone</p>
          <h1 className="mt-5 max-w-[900px] text-[40px] font-light leading-[1.08] tracking-[-0.015em] sm:text-[56px] lg:text-[76px]">
            Scroll less, without being locked out.
          </h1>
          <p className="mt-8 max-w-[640px] text-[20px] leading-[1.6] text-ink/85 md:text-[22px]">
            No More Scroll is an iPhone app that notices when you have been scrolling for a while
            and asks you one honest question. You answer, then decide for yourself whether to keep
            going.
          </p>
          <div className="mt-10">
            <BetaButton />
          </div>
        </header>

        <Section title="Why it exists">
          <p>
            Most of us know the feeling. You open Instagram or TikTok for a minute, and half an hour
            disappears. You were not really choosing to stay. You were on autopilot.
          </p>
          <p>
            Screen time limits and app blockers try to fix this by locking you out. That can work,
            but it is frustrating. In one field study, locking the phone for the rest of the day
            after a daily limit cut use the most, by about 74 minutes, and it was also what people
            found most frustrating.<sup className="ml-0.5 text-[12px]">1</sup> A tool that
            frustrates you is easy to turn off.
          </p>
          <p>
            No More Scroll takes a gentler approach. Instead of a wall, it gives you a moment to
            notice what you are doing.
          </p>
        </Section>

        <section id="how" className="border-t border-ink/10 py-16 md:py-24">
          <h2 className="text-[28px] font-light leading-tight md:text-[34px]">How it works</h2>
          <ol className="mt-10 grid gap-10 md:mt-14 md:grid-cols-3 md:gap-12">
            {steps.map((s, i) => (
              <li key={s.title}>
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-[15px] font-medium shadow-[0_6px_16px_rgba(8,7,8,0.08)]">
                  {i + 1}
                </span>
                <h3 className="mt-5 text-[21px] font-medium">{s.title}</h3>
                <p className="mt-3 text-[18px] leading-[1.65] text-ink/85">{s.body}</p>
              </li>
            ))}
          </ol>
          <p className="mt-12 max-w-[720px] text-[18px] leading-[1.7] text-ink/85">
            Your answers stay on your phone. Over time, the app shows how they line up with a
            simple daily mood rating, so you can see whether less scrolling actually feels better.
          </p>
        </section>

        <Section id="research" title="The research behind it">
          <p>
            No More Scroll is also the starting point for a research project in human-computer
            interaction by Jvalaj Pandey, a computer science student at the University of South Florida. The question is
            simple: can a check-in change what people do without being so annoying that they turn
            it off?
          </p>
          <p>
            The planned study would compare three groups of college students. One gets check-ins
            timed to the moment, such as late at night or deep into a long session. One gets
            check-ins on a fixed timer. One gets none. It would look at how often people stop,
            whether they keep the app turned on, and how their daily mood changes.
          </p>
        </Section>

        <Section id="beta" title="Try it early">
          <p>
            No More Scroll is in private beta and launching soon on iPhone. If you would like early
            access, or want to talk about the research, send a note.
          </p>
          <div className="flex flex-wrap items-center gap-x-8 gap-y-4 pt-3">
            <BetaButton />
            <a
              href="mailto:jvalaj@usf.edu"
              className="text-[16px] underline decoration-ink/25 underline-offset-[6px] transition-colors hover:decoration-ink"
            >
              Contact
            </a>
          </div>
        </Section>
      </main>

      <footer className="grid gap-4 border-t border-ink/10 py-10 text-[14px] leading-relaxed text-ink/65 md:grid-cols-12 md:gap-10">
        <p className="md:col-span-4">© 2026 No More Scroll</p>
        <p className="md:col-span-8 lg:col-span-7">
          1. Kim, J., Jung, H., Ko, M., &amp; Lee, U. (2019). GoalKeeper: Exploring interaction
          lockout mechanisms for regulating smartphone use. <em>Proc. ACM IMWUT</em>, 3(1).
        </p>
      </footer>
    </div>
  )
}
