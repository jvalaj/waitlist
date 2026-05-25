import Image from 'next/image'
import { Card, CardContent } from '@/components/ui/card'

export function BlockersSection() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-24 border-b border-border">
      <div className="max-w-[680px] w-full">
        <p className="text-xs font-black tracking-[0.2em] text-[#0066FF] uppercase mb-4 fade-up">01</p>
        <h2 className="text-[2.25rem] sm:text-[2.5rem] font-black tracking-tight leading-[1.12] mb-8 fade-up">
          App blockers and screen time limits don&apos;t work. And you know it.
        </h2>

        <div className="flex flex-col gap-6">
          {/* Override Loop */}
          <Card className="fade-up shadow-sm hover:shadow-md transition-shadow duration-300">
            <CardContent className="p-6">
              <p className="text-base leading-relaxed text-muted-foreground mb-5">
                <span className="font-bold text-foreground">The Override Loop:</span> When a limit
                popup appears, you don&apos;t put the phone down. You just tap &lsquo;Ignore&rsquo;.{' '}
                <strong className="text-foreground">
                  You haven&apos;t trained your mind, only your thumb.
                </strong>
              </p>
              <div className="flex items-center gap-4">
                <div className="bg-background border border-border rounded-2xl p-4 shadow-sm w-[88px] h-[88px] flex items-center justify-center flex-shrink-0">
                  <Image
                    src="/images/brain.png"
                    alt="Brain"
                    width={56}
                    height={56}
                    className="object-contain opacity-80"
                  />
                </div>
                <span className="text-2xl font-black text-muted-foreground/40">›</span>
                <div className="bg-background border border-border rounded-2xl p-4 shadow-sm w-[88px] h-[88px] flex items-center justify-center flex-shrink-0">
                  <Image
                    src="/images/finger.jpg"
                    alt="Finger"
                    width={56}
                    height={56}
                    className="object-contain opacity-80"
                    style={{ mixBlendMode: 'multiply' }}
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Rebound Effect */}
          <Card className="fade-up shadow-sm hover:shadow-md transition-shadow duration-300">
            <CardContent className="p-6">
              <p className="text-base leading-relaxed text-muted-foreground">
                <span className="font-bold text-foreground">The Rebound Effect:</span> Forcing
                yourself to quit triggers <em className="text-foreground">reactance</em>. The exact
                second a block lifts, your brain goes into overdrive. You doom-scroll twice as fast
                to make up for lost time.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
