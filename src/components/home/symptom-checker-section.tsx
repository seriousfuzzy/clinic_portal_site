import Link from 'next/link'

export function SymptomCheckerSection() {
  return (
    <div className="bg-indigo-50 py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            症状チェッカーで病院・診療所をさがす
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            気になる症状から関連する病気を調べ、受診に最適な診療科の病院・診療所をご提案します
          </p>
          <div className="mt-8">
            <Link
              href="/symptom-checker"
              className="inline-flex items-center rounded-lg bg-indigo-600 px-8 py-4 text-base font-semibold text-white hover:bg-indigo-700 transition-colors"
            >
              症状チェッカーを使ってみる
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

