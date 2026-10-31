import Image from 'next/image'

export function SiteNav() {
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-white/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-[1040px] items-center justify-between px-6">
        <a href="#top" className="flex items-center gap-2.5">
          <Image src="/images/logo.png" alt="No More Scroll" width={28} height={28} className="rounded-[7px]" />
          <span className="text-[17px] font-black text-ink" style={{ fontFamily: 'var(--font-kyiv)' }}>
            No More Scroll
          </span>
          <span className="ml-1 rounded-full border border-line bg-white px-2.5 py-0.5 text-[10px] font-black uppercase tracking-[0.14em] text-brand-blue">
            Beta
          </span>
        </a>
        <nav className="hidden items-center gap-7 text-[13px] font-semibold text-sub sm:flex">
          <a href="#evidence" className="hover:text-ink">Evidence</a>
          <a href="#app" className="hover:text-ink">The app</a>
          <a href="#research" className="hover:text-ink">Research</a>
          <a
            href="#join"
            className="rounded-full bg-ink px-4 py-2 text-white shadow-[0_4px_8px_rgba(20,20,26,0.12)] hover:opacity-90"
          >
            Join the waitlist
          </a>
        </nav>
      </div>
    </header>
  )
}
