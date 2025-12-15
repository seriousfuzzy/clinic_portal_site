import Link from 'next/link'

export function MedicationNotebookSection() {
  const features = [
    {
      title: '処方箋送信',
      description: '処方箋を事前に送信',
      detail: '医師から処方箋を受け取ったあと、薬局へ行く前にアプリから処方箋原本または処方内容（控え）を撮影・アップロードして調剤薬局へ送信することで、薬局での待ち時間を短縮できます。',
      image: '📄',
      link: '/how-to-use/prescription'
    },
    {
      title: 'お薬手帳',
      description: 'お薬手帳',
      detail: '服用しているお薬をアプリで管理できます。紙のお薬手帳のように忘れる心配もなく、薬剤師とお薬の飲み合わせの相談などがスムーズに行えます。',
      image: '📖',
      link: '/how-to-use/medication-notebook'
    },
  ]

  return (
    <div className="bg-gray-50 py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            melmoアプリなら普段のお薬の受け取り・管理もスマートに
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature) => (
            <div key={feature.title} className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
              <div className="text-center mb-6">
                <div className="text-6xl mb-4">{feature.image}</div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-lg text-gray-600 mb-4">{feature.description}</p>
              </div>
              <p className="text-gray-600 mb-6">{feature.detail}</p>
              <Link
                href={feature.link}
                className="inline-flex items-center text-indigo-600 hover:text-indigo-700 font-medium"
              >
                詳しい使い方を見る
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              スマートフォンアプリでのご利用もおすすめいたします
            </h3>
            <p className="text-gray-600 mb-6">
              診察予約〜オンライン診療・服薬指導からお薬手帳までひとつのアプリで管理できます。
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="#"
                className="inline-flex items-center rounded-lg bg-black px-6 py-3 text-base font-semibold text-white hover:bg-gray-800 transition-colors"
              >
                App Storeからダウンロード
              </a>
              <a
                href="#"
                className="inline-flex items-center rounded-lg bg-black px-6 py-3 text-base font-semibold text-white hover:bg-gray-800 transition-colors"
              >
                Google Playで手に入れよう
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

