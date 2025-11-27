import Link from 'next/link'

export function CTASection() {
  return (
    <div className="bg-indigo-600">
      <div className="px-6 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            今すぐオンライン診察を始めませんか？
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-indigo-100">
            会員登録は無料です。全国1,200以上のクリニックから、あなたに最適な医療を見つけてください。
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/patient/register"
              className="w-full sm:w-auto rounded-lg bg-white px-8 py-4 text-base font-semibold text-indigo-600 shadow-sm hover:bg-indigo-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition-all duration-200"
            >
              無料で患者登録
            </Link>
            <Link
              href="/search"
              className="w-full sm:w-auto rounded-lg border-2 border-white px-8 py-4 text-base font-semibold text-white hover:bg-white hover:text-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition-all duration-200"
            >
              クリニックを探す
            </Link>
          </div>
          
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-2xl font-bold text-white">無料</div>
              <div className="text-sm text-indigo-100">患者登録料</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-white">24時間</div>
              <div className="text-sm text-indigo-100">予約受付</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-white">全国対応</div>
              <div className="text-sm text-indigo-100">47都道府県</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
