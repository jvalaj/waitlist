import Image from 'next/image'
import { Github } from 'lucide-react'
import { IntroController, Preloader } from '@/components/intro'

const BETA_MAIL = 'mailto:jvalaj@usf.edu?subject=No%20More%20Scroll%20beta'
const GITHUB_URL = 'https://github.com/jvalaj/nomorescroll'

const steps = [
  {
    title: 'Selection',
    body: 'Users select the applications to monitor, such as Instagram, TikTok or YouTube, and the interval at which check-ins should occur.',
  },
  {
    title: 'Check-in',
    body: 'When the interval is reached, a system shield covers the application and presents a single question suited to the context, such as the time of day or the length of the session.',
  },
  {
    title: 'Decision',
    body: 'The user chooses whether to continue or to stop. The application never blocks access permanently, so the decision remains with the user.',
  },
]

// Every piece of text flips in out of a blur (see components/intro.tsx).
// data-flip="letters" for headings and short labels, "words" for running text.

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
      <h2 data-flip="letters" className="text-[28px] font-light leading-tight md:col-span-4 md:text-[34px]">
        {title}
      </h2>
      <div className="space-y-5 text-[18px] leading-[1.7] text-ink/85 md:col-span-8 md:text-[19px] lg:col-span-7">
        {children}
      </div>
    </section>
  )
}

function Actions() {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <a
        href={BETA_MAIL}
        data-fade
        className="inline-flex items-center rounded-full bg-ink px-6 py-3 text-[15px] font-medium text-white shadow-[0_10px_24px_rgba(8,7,8,0.12)] transition-opacity hover:opacity-85"
      >
        <span data-flip="letters">Request beta access</span>
      </a>
      <a
        href={GITHUB_URL}
        target="_blank"
        rel="noopener noreferrer"
        data-fade
        className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-[15px] font-medium text-ink shadow-[0_6px_16px_rgba(8,7,8,0.08)] transition-shadow hover:shadow-[0_10px_24px_rgba(8,7,8,0.12)]"
      >
        <Github className="h-[18px] w-[18px]" strokeWidth={1.75} aria-hidden />
        <span data-flip="letters">View on GitHub</span>
      </a>
    </div>
  )
}

export default function Home() {
  return (
    <>
      <Preloader />
      <IntroController />
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
            <span data-flip="letters" className="text-[17px] font-medium">No More Scroll</span>
          </a>
          <nav className="flex items-center gap-8 text-[15px] text-ink/70">
            <a href="#how" data-flip="letters" className="hidden transition-colors hover:text-ink sm:inline">How it works</a>
            <a href="#research" data-flip="letters" className="hidden transition-colors hover:text-ink sm:inline">Research</a>
            <a href="#beta" data-flip="letters" className="transition-colors hover:text-ink">Availability</a>
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              data-flip="letters"
              className="hidden transition-colors hover:text-ink sm:inline"
            >
              GitHub
            </a>
          </nav>
        </div>

        <main>
          <header className="pb-20 pt-4 md:pb-28 md:pt-6">
            <h1
              data-flip="letters"
              className="max-w-[820px] text-[34px] font-light leading-[1.12] tracking-[-0.01em] sm:text-[44px] lg:text-[54px]"
            >
              Reducing compulsive scrolling without restricting access.
            </h1>
            <p data-flip="words" className="mt-8 max-w-[640px] text-[20px] leading-[1.6] text-ink/85 md:text-[22px]">
              No More Scroll is an iOS application that interrupts extended sessions in social media
              and short-video apps with a brief, context-aware check-in. Users remain in control of
              whether to continue.
            </p>
            <div className="mt-10">
              <Actions />
            </div>
          </header>

          <Section title="Background">
            <p data-flip="words">
              Prolonged, passive use of social media and short-video platforms is common among
              college students and has been linked to adverse mental health outcomes. A study of
              Facebook&apos;s staggered introduction at 775 U.S. colleges found that its arrival
              increased severe depression by 7% and anxiety disorders by 20%.
              <sup className="ml-0.5 text-[12px]">1</sup>
            </p>
            <p data-flip="words">
              Most digital self-control tools rely on restriction. In the GoalKeeper field study,
              locking the phone for the remainder of the day after a usage limit produced the largest
              reduction in weekday use, approximately 74 minutes, but also the greatest
              frustration.<sup className="ml-0.5 text-[12px]">2</sup> This points to a tradeoff
              between effectiveness and acceptability.
            </p>
            <p data-flip="words">
              No More Scroll explores a non-restrictive alternative: brief check-ins that prompt
              reflection rather than enforce limits.
            </p>
          </Section>

          <section id="how" className="border-t border-ink/10 py-16 md:py-24">
            <h2 data-flip="letters" className="text-[28px] font-light leading-tight md:text-[34px]">
              How it works
            </h2>
            <ol className="mt-10 grid gap-10 md:mt-14 md:grid-cols-3 md:gap-12">
              {steps.map((s, i) => (
                <li key={s.title}>
                  <span
                    data-fade
                    className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-[15px] font-medium shadow-[0_6px_16px_rgba(8,7,8,0.08)]"
                  >
                    <span data-flip="letters">{String(i + 1)}</span>
                  </span>
                  <h3 data-flip="letters" className="mt-5 text-[21px] font-medium">{s.title}</h3>
                  <p data-flip="words" className="mt-3 text-[18px] leading-[1.65] text-ink/85">{s.body}</p>
                </li>
              ))}
            </ol>
            <p data-flip="words" className="mt-12 max-w-[720px] text-[18px] leading-[1.7] text-ink/85">
              All responses are stored on the device. Each one records whether the user considered the
              session intentional, and is shown alongside a daily mood rating from 1 to 10.
            </p>
          </section>

          <Section id="research" title="Research">
            <p data-flip="words">
              No More Scroll is the basis of a research project in human-computer interaction by
              Jvalaj Pandey, a computer science student at the University of South Florida. The
              central question is whether an intervention can change behavior without becoming so
              frustrating that users disable it.
            </p>
            <p data-flip="words">
              A proposed randomized field study with college students would compare three
              conditions: check-ins timed to context, such as late at night or deep into a long
              session; check-ins at a fixed interval; and no intervention. Outcomes would include app
              use, check-in responses and whether participants keep the intervention enabled, with
              daily mood as a secondary measure. A follow-up period would assess whether any changes
              persist.
            </p>
          </Section>

          <Section id="beta" title="Availability">
            <p data-flip="words">
              No More Scroll is currently in private beta and will be released on iOS soon. For beta
              access or research inquiries, please get in touch.
            </p>
            <div className="flex flex-wrap items-center gap-x-8 gap-y-4 pt-3">
              <Actions />
              <a
                href="mailto:jvalaj@usf.edu"
                data-flip="letters"
                className="border-b border-ink/25 pb-1 text-[16px] transition-colors hover:border-ink"
              >
                Contact
              </a>
            </div>
          </Section>
        </main>

        <footer className="grid gap-4 border-t border-ink/10 py-10 text-[14px] leading-relaxed text-ink/65 md:grid-cols-12 md:gap-10">
          <p data-flip="letters" className="md:col-span-4">© 2026 No More Scroll</p>
          <div className="space-y-2 md:col-span-8 lg:col-span-7">
            <p data-flip="words">
              1. Braghieri, L., Levy, R., &amp; Makarin, A. (2022). Social media and mental health.{' '}
              <em>American Economic Review</em>, 112(11), 3660–3693.
            </p>
            <p data-flip="words">
              2. Kim, J., Jung, H., Ko, M., &amp; Lee, U. (2019). GoalKeeper: Exploring interaction
              lockout mechanisms for regulating smartphone use. <em>Proc. ACM IMWUT</em>, 3(1).
            </p>
          </div>
        </footer>
      </div>
    </>
  )
}
