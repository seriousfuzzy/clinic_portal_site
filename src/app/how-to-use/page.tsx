import Link from 'next/link'
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { HowItWorksSection } from '@/components/home/how-it-works-section'
import { SymptomCheckerSection } from '@/components/home/symptom-checker-section'
import { MedicationNotebookSection } from '@/components/home/medication-notebook-section'

export default function HowToUsePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <div className="bg-gray-50 border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <p className="text-sm text-indigo-600 font-semibold">ご利用方法</p>
            <h1 className="mt-2 text-3xl sm:text-4xl font-bold text-gray-900">オンライン診療の使い方</h1>
            <p className="mt-4 text-lg text-gray-600">
              予約から診察、お薬の受け取りまでの流れと、便利な機能をご紹介します。
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <Link href="/patient/register" className="px-6 py-3 rounded-lg bg-indigo-600 text-white font-semibold hover:bg-indigo-700">
                患者登録
              </Link>
              <Link href="/clinic/register" className="px-6 py-3 rounded-lg border border-indigo-600 text-indigo-600 font-semibold hover:bg-indigo-50">
                クリニック登録
              </Link>
            </div>
          </div>
        </div>

        <HowItWorksSection />
        <SymptomCheckerSection />
        <MedicationNotebookSection />
      </main>
      <Footer />
    </div>
  )
}

