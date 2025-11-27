import { Header } from '@/components/layout/header'
import { Hero } from '@/components/home/hero'
import { SearchSection } from '@/components/home/search-section'
import { FeaturesSection } from '@/components/home/features-section'
import { HowItWorksSection } from '@/components/home/how-it-works-section'
import { StatsSection } from '@/components/home/stats-section'
import { TestimonialsSection } from '@/components/home/testimonials-section'
import { PrefectureList } from '@/components/home/prefecture-list'
import { SpecialtyList } from '@/components/home/specialty-list'
import { CTASection } from '@/components/home/cta-section'
import { Footer } from '@/components/layout/footer'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <StatsSection />
        <FeaturesSection />
        <HowItWorksSection />
        <SearchSection />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <PrefectureList />
            <SpecialtyList />
          </div>
        </div>
        <TestimonialsSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  )
}