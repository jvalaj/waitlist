import { PillLink } from '@/components/pill-button'
import { ShieldCard } from '@/components/shield-card'

export function HeroSection() {
  return (
    <section id="top" className="bg-gradient-to-b from-[#FCFCFC] to-[#F2F5FA] px-6 pb-24 pt-20">
      <div className="mx-auto grid max-w-[1040px] items-center gap-14 md:grid-cols-[1.15fr_1fr]">
        <div>
          <span className="fade-up inline-flex items-center gap-2 rounded-full border border-line bg-white px-3.5 py-1.5 text-[12px] font-bold text-ink shadow-[0_4px_8px_rgba(0,0,0,0.04)]">
            <span className="h-2 w-2 rounded-full bg-timer-green" />
            Now in beta · Launching soon
          </span>
          <h1 className="fade-up mt-6 text-[2.5rem] font-black leading-[1.08] tracking-tight text-ink sm:text-[3.2rem]">
            Can a well-timed check-in change how we scroll?
          </h1>
          <p className="fade-up mt-5 max-w-[540px] text-[17px] leading-relaxed text-sub">
            No More Scroll is an iOS app and a research project. It interrupts long sessions in
            social media and short-video apps with a short question, and studies whether that helps
            college students regulate their use without taking away their sense of control.
          </p>
          <div className="fade-up mt-9 flex flex-wrap gap-3">
            <PillLink href="#join">Join the beta waitlist</PillLink>
            <PillLink href="#research" filled={false}>Read the research</PillLink>
          </div>
          <p className="fade-up mt-5 text-[12px] font-semibold text-sub">
            Built by Jvalaj Pandey · Swift, Screen Time frameworks, on-device storage
          </p>
        </div>
        <div className="fade-up">
          <ShieldCard />
        </div>
      </div>
    </section>
  )
}
