import Link from 'next/link'

export function Hero() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
            いつもの医療が変わる
          </h1>
          <p className="mt-6 text-xl leading-8 text-gray-600 max-w-3xl mx-auto">
            オンライン診療で、全国のクリニックと繋がる。自宅にいながら専門医の診察を受けられます。
          </p>
          
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/patient/register"
              className="inline-flex items-center justify-center rounded-lg bg-indigo-600 px-8 py-4 text-base font-semibold text-white hover:bg-indigo-700 transition-colors"
            >
              患者登録
            </Link>
            <Link
              href="/pricing"
              className="inline-flex items-center justify-center rounded-lg border-2 border-indigo-600 px-8 py-4 text-base font-semibold text-indigo-600 hover:bg-indigo-600 hover:text-white transition-colors"
            >
              クリニック登録について
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
