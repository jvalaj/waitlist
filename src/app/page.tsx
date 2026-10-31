import { SiteNav } from '@/components/site-nav'
import { HeroSection } from '@/components/hero-section'
import { EvidenceSection } from '@/components/evidence-section'
import { AppSection } from '@/components/app-section'
import { ResearchSection } from '@/components/research-section'
import { CTASection } from '@/components/cta-section'
import { SiteFooter } from '@/components/site-footer'
import { RevealObserver } from '@/components/reveal-observer'

export default function Home() {
  return (
    <>
      <RevealObserver />
      <SiteNav />
      <main>
        <HeroSection />
        <EvidenceSection />
        <AppSection />
        <ResearchSection />
        <CTASection />
      </main>
      <SiteFooter />
    </>
  )
}
