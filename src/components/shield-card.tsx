import { Hourglass } from 'lucide-react'

/**
 * Illustrative mock-up of the in-app check-in. iOS limits a ManagedSettings shield to a
 * title, a subtitle, an icon and two buttons, so the mock-up uses exactly those elements.
 */
export function ShieldCard() {
  return (
    <figure className="mx-auto w-full max-w-[340px]">
      <div className="rounded-[32px] border border-line bg-gradient-to-b from-white to-[#F2F5FA] p-8 text-center shadow-[0_24px_60px_rgba(20,20,26,0.10)]">
        <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-brand-blue/10">
          <Hourglass className="h-7 w-7 text-brand-blue" strokeWidth={1.75} />
        </div>
        <p className="text-[22px] font-bold leading-tight text-ink">Quick check-in</p>
        <p className="mx-auto mt-2 max-w-[250px] text-[14px] leading-relaxed text-sub">
          You have been scrolling for a while. Is this session intentional?
        </p>
        <div className="mt-7 flex flex-col gap-3">
          <span className="rounded-full bg-ink py-3.5 text-[15px] font-bold text-white shadow-[0_4px_8px_rgba(20,20,26,0.12)]">
            Yes, I meant to
          </span>
          <span className="rounded-full border border-line bg-white py-3.5 text-[15px] font-bold text-ink">
            Take a break
          </span>
        </div>
      </div>
      <figcaption className="mt-3 text-center text-[11px] font-semibold uppercase tracking-[0.12em] text-sub">
        Illustrative mock-up of the check-in
      </figcaption>
    </figure>
  )
}
