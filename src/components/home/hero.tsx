import Link from 'next/link'

export function Hero() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
            いつもの医療が変わるアプリ
          </h1>
          <p className="mt-6 text-xl leading-8 text-gray-600 max-w-3xl mx-auto">
            オンライン診療で、全国のクリニックと繋がる。自宅にいながら専門医の診察を受けられます。
          </p>
          
          {/* アプリダウンロードボタン */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#"
              className="inline-flex items-center justify-center rounded-lg bg-black px-6 py-3 text-base font-semibold text-white hover:bg-gray-800 transition-colors min-w-[200px]"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 2L3 7v11h4v-6h6v6h4V7l-7-5z"/>
              </svg>
              App Storeからダウンロード
            </a>
            <a
              href="#"
              className="inline-flex items-center justify-center rounded-lg bg-black px-6 py-3 text-base font-semibold text-white hover:bg-gray-800 transition-colors min-w-[200px]"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 2L3 7v11h4v-6h6v6h4V7l-7-5z"/>
              </svg>
              Google Playで手に入れよう
            </a>
          </div>

          {/* 症状チェッカー */}
          <div className="mt-12">
            <Link
              href="/symptom-checker"
              className="inline-flex items-center rounded-lg bg-indigo-600 px-8 py-4 text-base font-semibold text-white hover:bg-indigo-700 transition-colors"
            >
              症状チェッカーで病院・診療所をさがす
            </Link>
            <p className="mt-4 text-sm text-gray-600">
              気になる症状から関連する病気を調べ、受診に最適な診療科の病院・診療所をご提案します
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
