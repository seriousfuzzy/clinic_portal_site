import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import Link from 'next/link'
import { CalendarIcon } from '@heroicons/react/24/outline'

export default function NewsPage() {
  const newsItems = [
    {
      id: 1,
      date: '2024年12月15日',
      category: 'お知らせ',
      title: '年末年始の営業について',
      content: '2024年12月29日（日）から2025年1月5日（日）まで、年末年始休業とさせていただきます。休業期間中のお問い合わせは、1月6日（月）以降に順次対応いたします。',
    },
    {
      id: 2,
      date: '2024年12月1日',
      category: '新機能',
      title: 'オンライン服薬指導機能をリリースしました',
      content: '薬局とのオンライン服薬指導機能を追加しました。処方箋データをアップロードすることで、薬局とのオンライン服薬指導が可能になりました。',
    },
    {
      id: 3,
      date: '2024年11月20日',
      category: 'お知らせ',
      title: '登録クリニック数1,200件を突破しました',
      content: '多くの医療機関様にご利用いただき、登録クリニック数が1,200件を突破いたしました。引き続き、より良いサービスを提供してまいります。',
    },
    {
      id: 4,
      date: '2024年11月10日',
      category: 'メンテナンス',
      title: 'システムメンテナンスのお知らせ',
      content: '2024年11月15日（金）22:00～23:00の間、システムメンテナンスを実施いたします。この間、サービスをご利用いただけません。ご不便をおかけいたしますが、何卒ご理解のほどお願いいたします。',
    },
    {
      id: 5,
      date: '2024年10月25日',
      category: '新機能',
      title: '症状チェッカー機能を追加しました',
      content: '気になる症状から関連する病気を調べ、受診に最適な診療科の病院・診療所をご提案する「症状チェッカー」機能を追加しました。',
    },
    {
      id: 6,
      date: '2024年10月1日',
      category: 'お知らせ',
      title: '利用規約を改定しました',
      content: '2024年10月1日より、利用規約を改定いたしました。主な変更点については、利用規約ページをご確認ください。',
    },
  ]

  const categories = ['すべて', 'お知らせ', '新機能', 'メンテナンス']

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <div className="bg-gray-50 border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <p className="text-sm text-indigo-600 font-semibold">お知らせ</p>
            <h1 className="mt-2 text-3xl sm:text-4xl font-bold text-gray-900">お知らせ</h1>
            <p className="mt-4 text-lg text-gray-600">
              サービスに関する最新情報をお届けします
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* カテゴリフィルター */}
          <div className="mb-8">
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <button
                  key={category}
                  className="px-4 py-2 rounded-lg border border-gray-300 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* お知らせ一覧 */}
          <div className="space-y-6">
            {newsItems.map((item) => (
              <article
                key={item.id}
                className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow"
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-3">
                      <span className="inline-flex items-center text-sm text-gray-500">
                        <CalendarIcon className="h-4 w-4 mr-1" />
                        {item.date}
                      </span>
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-indigo-100 text-indigo-700">
                        {item.category}
                      </span>
                    </div>
                    <h2 className="text-xl font-semibold text-gray-900 mb-3">
                      {item.title}
                    </h2>
                    <p className="text-gray-600 leading-relaxed">
                      {item.content}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* ページネーション */}
          <div className="mt-12 flex justify-center">
            <nav className="flex items-center gap-2">
              <button className="px-4 py-2 rounded-lg border border-gray-300 text-sm font-medium text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed">
                前へ
              </button>
              <button className="px-4 py-2 rounded-lg bg-indigo-600 text-white text-sm font-medium">
                1
              </button>
              <button className="px-4 py-2 rounded-lg border border-gray-300 text-sm font-medium text-gray-700 hover:bg-gray-50">
                2
              </button>
              <button className="px-4 py-2 rounded-lg border border-gray-300 text-sm font-medium text-gray-700 hover:bg-gray-50">
                3
              </button>
              <button className="px-4 py-2 rounded-lg border border-gray-300 text-sm font-medium text-gray-700 hover:bg-gray-50">
                次へ
              </button>
            </nav>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

