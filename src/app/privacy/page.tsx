import type { Metadata, Viewport } from 'next'

const CONTACT = 'jvalaj@usf.edu'

export const metadata: Metadata = {
  title: 'Privacy · No More Scroll',
  description:
    'Everything you tell No More Scroll stays on your iPhone. There are no accounts, ads, analytics or tracking.',
}

// No picture behind this page, so the browser bar matches the white page instead of the hero's violet
export const viewport: Viewport = {
  themeColor: '#ffffff',
}

// The app's privacy policy, hosted for its App Store listing. Word for word the same as the app's own
// privacy page (Autopilot/Settings/PrivacyPolicyView.swift in the iOS repo): change both together,
// with a new date.
const sections: { title: string; body: React.ReactNode }[] = [
  {
    title: 'The short version',
    body: 'Everything you tell No More Scroll stays on your iPhone. There are no accounts, ads, analytics or tracking, and nothing is sent to us or anyone else.',
  },
  {
    title: 'What stays on your phone',
    body: "Your onboarding answers (like your first name, goals and when you scroll most), your signed pledge, your daily mood, your check-in answers, and the times you tried to open the apps you chose to pause, with the reason you picked. It's kept in the app's own storage and is deleted when you delete the app.",
  },
  {
    title: 'Screen Time',
    body: "The apps you pick and the time you spend in them come from Apple's Screen Time. Apple only gives the app anonymous tokens for your apps, and shows your minutes in a view Apple draws itself. That data never leaves your phone, and we can't read it.",
  },
  {
    title: 'Purchases',
    body: 'Subscriptions are handled by Apple. We never see your payment details; Apple only tells the app whether your subscription is active.',
  },
  {
    title: 'Notifications',
    body: 'Reminders and the breath notification are scheduled on your phone. No server sends them.',
  },
  {
    title: 'If you email us',
    body: 'When you send feedback, we get your email address and your message, and use them only to reply.',
  },
  {
    title: 'Children',
    body: "No More Scroll isn't meant for children under 13.",
  },
  {
    title: 'Changes and questions',
    body: (
      <>
        If this policy changes, the new version will be here with a new date. Questions:{' '}
        <a href={`mailto:${CONTACT}`} className="border-b border-ink/25 transition-colors hover:border-ink">
          {CONTACT}
        </a>
      </>
    ),
  },
]

export default function Privacy() {
  return (
    <div className="overflow-x-clip">
      {/* The home page's nav bar as it looks over white, with just the name, which leads home */}
      <header className="nms-navbar sticky top-0 z-40">
        <span className="lg-glass nms-nav-glass" aria-hidden="true" />
        <div className="mx-auto flex h-16 max-w-[1180px] items-center justify-center px-6 md:h-[72px] md:justify-start md:px-12">
          <a href="/" className="flex items-center gap-2 text-[21px] font-medium leading-none tracking-[-0.015em] md:text-[23px]">
            <span className="nms-mark" aria-hidden="true" />
            No More Scroll
          </a>
        </div>
      </header>

      <div className="mx-auto max-w-[1180px] px-6 md:px-12">
        <main>
          <div className="relative pb-12 pt-14 md:pb-16 md:pt-20">
            <span className="nms-logo-bg" aria-hidden="true" />
            <p className="text-[15px] text-ink/60">
              Updated <time dateTime="2026-11-02">November 2, 2026</time>
            </p>
            <h1 className="mt-2 text-[44px] font-light leading-[1.1] tracking-[-0.01em] md:text-[54px]">Privacy</h1>
          </div>
          {sections.map(s => (
            <section key={s.title} className="grid gap-3 border-t border-ink/10 py-8 md:grid-cols-12 md:gap-10 md:py-10">
              <h2 className="text-[21px] font-medium leading-snug md:col-span-4">{s.title}</h2>
              <p className="text-[18px] leading-[1.7] text-ink/85 md:col-span-8 md:text-[19px] lg:col-span-7">{s.body}</p>
            </section>
          ))}
        </main>
        <footer className="border-t border-ink/10 py-10 text-[14px] leading-relaxed text-ink/80">
          <p>© 2026 No More Scroll</p>
        </footer>
      </div>
    </div>
  )
}
