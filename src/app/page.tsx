import { HeroBackdrop, IntroController, Preloader } from '@/components/intro'
import { PhoneMock } from '@/components/phone-mock'

const BETA_MAIL = 'mailto:jvalaj@usf.edu?subject=No%20More%20Scroll%20beta'

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
  logo = false,
}: {
  id?: string
  title: string
  children: React.ReactNode
  logo?: boolean
}) {
  return (
    <section id={id} className="relative grid gap-6 border-t border-ink/10 py-16 md:grid-cols-12 md:gap-10 md:py-24">
      {logo && <span className="nms-logo-bg" aria-hidden="true" />}
      <h2 data-flip="letters" className="text-[28px] font-light leading-tight md:col-span-4 md:text-[34px]">
        {title}
      </h2>
      <div className="space-y-5 text-[18px] leading-[1.7] text-ink/85 md:col-span-8 md:text-[19px] lg:col-span-7">
        {children}
      </div>
    </section>
  )
}

function Actions({ onImage = false, className = '' }: { onImage?: boolean; className?: string }) {
  return (
    <div data-pop className={'flex flex-wrap items-center gap-3 ' + className}>
      <a
        href={BETA_MAIL}
        className={
          'inline-flex items-center rounded-full px-5 py-3 text-[14px] font-medium transition-opacity hover:opacity-85 sm:px-6 sm:text-[15px] ' +
          (onImage
            ? 'bg-white text-ink shadow-[0_10px_30px_rgba(40,20,60,0.25)]'
            : 'bg-ink text-white shadow-[0_10px_24px_rgba(8,7,8,0.12)]')
        }
      >
        <span>Request beta access</span>
      </a>
    </div>
  )
}

export default function Home() {
  return (
    // overflow-x: clip here rather than on <body>: on <body> it passes up to the window, which can
    // still be scrolled sideways. Here it clips the full-bleed layers without breaking the sticky nav.
    <div className="overflow-x-clip">
      <Preloader />
      <IntroController />
      <HeroBackdrop />
      <header className="nms-navbar is-over-hero sticky top-0 z-40">
        <span className="lg-glass nms-nav-glass" aria-hidden="true" />
        <div className="mx-auto flex h-16 max-w-[1180px] items-center justify-center px-6 md:h-[72px] md:justify-between md:px-12">
          <a href="#" className="flex items-center gap-2 text-[21px] font-medium leading-none tracking-[-0.015em] md:text-[23px]">
            <span className="nms-mark" aria-hidden="true" />
            No More Scroll
          </a>
          <nav className="hidden items-center gap-8 text-[15px] md:flex">
            <a href="#how" className="nms-nav-link">How it works</a>
            <a href="#research" className="nms-nav-link">Research</a>
            <a href="#beta" className="nms-nav-link">Availability</a>
          </nav>
        </div>
      </header>

      <div className="mx-auto max-w-[1180px] px-6 md:px-12">
        <main>
          <section
            id="hero"
            className="grid items-center gap-12 pt-12 text-center text-white lg:min-h-[calc(100svh-72px)] lg:grid-cols-[minmax(0,1fr)_auto] lg:gap-16 lg:pb-32 lg:pt-10 lg:text-left"
          >
            <div>
              <h1
                data-flip="letters"
                className="nms-on-image mx-auto max-w-[820px] text-[32px] font-light leading-[1.12] tracking-[-0.01em] sm:text-[42px] lg:mx-0 lg:text-[54px]"
              >
                Reduce compulsive scrolling without restricting access.
              </h1>
              {/* A shorter line on phones and tablets */}
              <p
                data-flip="words"
                className="nms-on-image mx-auto mt-5 max-w-[360px] text-[17px] leading-[1.55] text-white sm:max-w-[460px] sm:text-[19px] lg:hidden"
              >
                An iOS app that <span className="nms-hl" style={{ '--k': 0 } as React.CSSProperties}>interrupts</span> long
                scrolling sessions with a quick, <span className="nms-hl" style={{ '--k': 1 } as React.CSSProperties}>context-aware check-in</span>.
                You stay <span className="nms-hl" style={{ '--k': 2 } as React.CSSProperties}>in control</span>.
              </p>
              <p data-flip="words" className="nms-on-image mt-8 hidden max-w-[640px] text-[22px] leading-[1.6] text-white lg:block">
                No More Scroll is an iOS application that{' '}
                <span className="nms-hl" style={{ '--k': 0 } as React.CSSProperties}>interrupts</span> extended sessions in social media and
                short-video apps with a brief, <span className="nms-hl" style={{ '--k': 1 } as React.CSSProperties}>context-aware check-in</span>.
                Users remain <span className="nms-hl" style={{ '--k': 2 } as React.CSSProperties}>in control</span> of whether to continue.
              </p>
              <div className="mt-8 lg:mt-10">
                <Actions onImage className="justify-center lg:justify-start" />
              </div>
            </div>
            {/* The app's Today screen: beside the text on large screens */}
            <div data-pop className="hidden lg:block">
              <div>
                <PhoneMock width={300} uid="wide" />
              </div>
            </div>
            {/* ...and on phones, under the text, showing its top three quarters */}
            <div data-pop className="lg:hidden">
              <div>
                <div className="nms-phone-peek">
                  <PhoneMock width={280} uid="narrow" />
                </div>
              </div>
            </div>
          </section>

          <Section title="Background" logo>
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
                    data-flip="letters"
                    data-fade
                    className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-[15px] font-medium shadow-[0_6px_16px_rgba(8,7,8,0.08)]"
                  >
                    {String(i + 1)}
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

        </main>

        <div className="nms-end pt-[28vh]">
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
          <footer className="grid gap-4 border-t border-ink/10 py-10 text-[14px] leading-relaxed text-ink/80 md:grid-cols-12 md:gap-10">
            <div className="space-y-2 md:col-span-4">
              <p data-flip="letters">© 2026 No More Scroll</p>
              <p>
                <a href="/privacy" data-flip="letters" className="border-b border-ink/25 transition-colors hover:border-ink">
                  Privacy
                </a>
              </p>
            </div>
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
      </div>
    </div>
  )
}
