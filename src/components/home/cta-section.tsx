import Link from 'next/link'

export function CTASection() {
  return (
    <div className="bg-gray-50 py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            今すぐオンライン診察を始めませんか？
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-600">
            会員登録は無料です。全国のクリニックから、あなたに最適な医療を見つけてください。
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/patient/register"
              className="w-full sm:w-auto rounded-lg bg-indigo-600 px-8 py-4 text-base font-semibold text-white shadow-sm hover:bg-indigo-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition-all duration-200"
            >
              無料で患者登録
            </Link>
            <Link
              href="/clinic/register"
              className="w-full sm:w-auto rounded-lg border-2 border-indigo-600 px-8 py-4 text-base font-semibold text-indigo-600 hover:bg-indigo-600 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition-all duration-200"
            >
              クリニック登録
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
