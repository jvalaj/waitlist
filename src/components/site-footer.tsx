import Image from 'next/image'

export function SiteFooter() {
  return (
    <footer className="border-t border-border py-8 px-6">
      <div className="max-w-[680px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <Image
            src="/images/logo.png"
            alt="Ticker"
            width={20}
            height={20}
            className="rounded-[5px]"
          />
          <span className="text-base font-black" style={{ fontFamily: 'var(--font-kyiv)' }}>
            ticker
          </span>
        </div>
        <p className="text-xs text-muted-foreground">© 2026 Ticker. Built for a present mind.</p>
      </div>
    </footer>
  )
}
