import { PhoneOff } from 'lucide-react'

export function OverrideSection() {
  return (
    <section className="px-6 py-24 bg-white border-b border-border">
      <div className="max-w-[900px] mx-auto">
        <div className="max-w-sm mx-auto bg-white rounded-3xl p-7 shadow-sm border border-border fade-up flex flex-col gap-5">
          <p className="text-sm text-muted-foreground leading-relaxed">
            The limit popup appears. You tap <strong className="text-foreground">&lsquo;Ignore Limit&rsquo;</strong>.
            You haven&apos;t trained your mind. Only your thumb.
          </p>

          <div className="bg-[#F2F2F7] rounded-2xl overflow-hidden shadow-inner">
            <div className="px-6 pt-6 pb-4 flex flex-col items-center gap-1 text-center">
              <div className="w-10 h-10 rounded-full bg-white/80 flex items-center justify-center mb-1 shadow-sm">
                <PhoneOff className="w-5 h-5 text-[#3C3C43]" strokeWidth={1.8} />
              </div>
              <p className="font-black text-[15px]">Time Limit</p>
              <p className="text-xs text-[#6B7280] leading-snug max-w-[200px]">
                You&apos;ve used 1 hour on Social Networking today.
              </p>
            </div>
            <div className="px-4 pb-4 flex flex-col gap-2">
              <button className="w-full bg-[#007AFF] text-white text-[13px] font-bold rounded-xl py-2.5">
                OK
              </button>
              <button className="w-full border border-[#007AFF] text-[#007AFF] text-[13px] font-semibold rounded-xl py-2.5 bg-white">
                Ignore Limit for Today
              </button>
            </div>
            <div className="h-4 bg-[#E8E8ED] flex items-center justify-center">
              <div className="w-20 h-1 bg-[#C7C7CC] rounded-full" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
