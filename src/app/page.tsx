import { Header } from '@/components/layout/header'
import { Hero } from '@/components/home/hero'
import { SymptomCheckerSection } from '@/components/home/symptom-checker-section'
import { SearchSection } from '@/components/home/search-section'
import { PrefectureList } from '@/components/home/prefecture-list'
import { SpecialtyList } from '@/components/home/specialty-list'
import { FeatureSearchSection } from '@/components/home/feature-search-section'
import { HowItWorksSection } from '@/components/home/how-it-works-section'
import { MedicationNotebookSection } from '@/components/home/medication-notebook-section'
import { PharmacySearchSection } from '@/components/home/pharmacy-search-section'
import { CTASection } from '@/components/home/cta-section'
import { Footer } from '@/components/layout/footer'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <SymptomCheckerSection />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">病院・診療所をさがす</h2>
          <div className="mb-12">
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <a href="#region" className="px-6 py-3 rounded-lg bg-indigo-600 text-white font-semibold hover:bg-indigo-700 transition-colors">
                地域からさがす
              </a>
              <a href="#specialty" className="px-6 py-3 rounded-lg border border-gray-300 text-gray-700 font-semibold hover:bg-gray-50 transition-colors">
                診療科からさがす
              </a>
              <a href="#feature" className="px-6 py-3 rounded-lg border border-gray-300 text-gray-700 font-semibold hover:bg-gray-50 transition-colors">
                特徴からさがす
              </a>
            </div>
            <SearchSection />
          </div>
        </div>
        <div id="region" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <PrefectureList />
        </div>
        <div id="specialty" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 bg-gray-50">
          <SpecialtyList />
        </div>
        <div id="feature" className="py-16">
          <FeatureSearchSection />
        </div>
        <HowItWorksSection />
        <MedicationNotebookSection />
        <PharmacySearchSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  )
}