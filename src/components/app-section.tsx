import { ShieldCard } from '@/components/shield-card'

const steps = [
  {
    n: '1',
    title: 'Monitor',
    body: 'After a set number of minutes in the apps you select, iOS wakes a DeviceActivity monitor extension.',
  },
  {
    n: '2',
    title: 'Check in',
    body: 'A ManagedSettings shield appears over those apps with a check-in question suited to the context.',
  },
  {
    n: '3',
    title: 'Record',
    body: 'Your answer is stored on your device as a record of whether you saw the session as intentional. The shield lifts and monitoring restarts.',
  },
  {
    n: '4',
    title: 'Reflect',
    body: 'Screen Time charts and a daily mood rating from 1 to 10 show how use and wellbeing move together.',
  },
]

const limits = [
  'The shield allows only a title, a subtitle, an icon and two buttons.',
  'The app records how you answer, but cannot see your actual minutes or tell scrolling from watching.',
  'On its own it cannot show whether a check-in changed what you would have done anyway. That is what the study is for.',
]

export function AppSection() {
  return (
    <section id="app" className="bg-gradient-to-b from-[#F2F5FA] to-[#FCFCFC] px-6 py-24">
      <div className="mx-auto grid max-w-[1040px] items-start gap-14 md:grid-cols-[1.2fr_1fr]">
        <div>
          <p className="fade-up text-[12px] font-black uppercase tracking-[0.14em] text-brand-blue">The app</p>
          <h2 className="fade-up mt-3 text-[2rem] font-black leading-[1.12] tracking-tight text-ink sm:text-[2.4rem]">
            A short question, not a lock.
          </h2>
          <p className="fade-up mt-4 max-w-[560px] text-[16px] leading-relaxed text-sub">
            Because iOS keeps usage data inside system-run extensions, No More Scroll is built as
            five cooperating processes that share state through an app group. The app never gets
            direct access to what you do in other apps.
          </p>

          <ol className="mt-10 grid gap-4 sm:grid-cols-2">
            {steps.map(s => (
              <li key={s.n} className="fade-up rounded-3xl border border-line bg-white p-6 shadow-[0_4px_8px_rgba(0,0,0,0.03)]">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-ink text-[13px] font-black text-white">
                  {s.n}
                </span>
                <h3 className="mt-4 text-[17px] font-black text-ink">{s.title}</h3>
                <p className="mt-1.5 text-[14px] leading-relaxed text-sub">{s.body}</p>
              </li>
            ))}
          </ol>

          <div className="fade-up mt-8 rounded-3xl border border-line bg-white p-6">
            <h3 className="text-[15px] font-black text-ink">What the app cannot know</h3>
            <ul className="mt-3 space-y-2 text-[14px] leading-relaxed text-sub">
              {limits.map(l => (
                <li key={l} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-brand-blue" />
                  <span>{l}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="fade-up md:sticky md:top-28">
          <ShieldCard />
        </div>
      </div>
    </section>
  )
}
