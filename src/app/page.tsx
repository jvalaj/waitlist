import { FloatingIsland } from '@/components/floating-island'
import { HeroSection } from '@/components/hero-section'
import { BlockersSection } from '@/components/blockers-section'
import { ScienceSection } from '@/components/science-section'
import { HowSection } from '@/components/how-section'
import { CTASection } from '@/components/cta-section'
import { SiteFooter } from '@/components/site-footer'
import { ScrollAnimations } from '@/components/scroll-animations'

export default function Home() {
  return (
    <>
      <FloatingIsland />
      <ScrollAnimations />
      <main>
        <HeroSection />
        <BlockersSection />
        <ScienceSection />
        <HowSection />
        <CTASection />
      </main>
      <SiteFooter />
    </>
  )
}
