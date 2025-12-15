import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import Link from 'next/link'
import { CheckIcon } from '@heroicons/react/24/outline'

export default function PricingPage() {
  const plans = [
    {
      name: 'スタンダードプラン',
      price: '¥120,000',
      period: '年間',
      description: '基本的なオンライン診療機能を利用できるプラン',
      features: [
        'オンライン診療システム',
        '予約カレンダー管理',
        '患者管理機能',
        '処方・決済管理',
        'メール通知機能',
        '基本サポート',
      ],
      popular: false,
    },
    {
      name: 'プレミアムプラン',
      price: '¥180,000',
      period: '年間',
      description: '高度な機能と優先サポートが含まれるプラン',
      features: [
        'スタンダードプランの全機能',
        '高度な分析レポート',
        'カスタムブランディング',
        '優先サポート（24時間以内）',
        'API連携',
        '専任担当者サポート',
      ],
      popular: true,
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <div className="bg-gray-50 border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <p className="text-sm text-indigo-600 font-semibold">料金プラン</p>
            <h1 className="mt-2 text-3xl sm:text-4xl font-bold text-gray-900">クリニック向け料金プラン</h1>
            <p className="mt-4 text-lg text-gray-600">
              オンライン診療サービスを提供するための料金プランをご用意しています
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* 初回登録料 */}
          <div className="mb-16">
            <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-8 text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">初回登録料</h2>
              <div className="text-4xl font-bold text-indigo-600 mb-2">¥50,000</div>
              <p className="text-gray-600">（税込・初回のみ）</p>
              <p className="mt-4 text-sm text-gray-600">
                審査通過後、初回登録料をお支払いいただきます。<br />
                登録料には、システム初期設定・審査費用が含まれます。
              </p>
            </div>
          </div>

          {/* 年間利用料プラン */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">年間利用料プラン</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {plans.map((plan) => (
                <div
                  key={plan.name}
                  className={`relative rounded-lg border-2 p-8 ${
                    plan.popular
                      ? 'border-indigo-600 shadow-xl'
                      : 'border-gray-200 shadow-sm'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-indigo-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                        おすすめ
                      </span>
                    </div>
                  )}
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                    <p className="text-sm text-gray-600 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                      <span className="text-lg text-gray-600 ml-2">/{plan.period}</span>
                    </div>
                  </div>
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start">
                        <CheckIcon className="h-5 w-5 text-indigo-600 mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/clinic/register"
                    className={`block w-full text-center py-3 px-6 rounded-lg font-semibold transition-colors ${
                      plan.popular
                        ? 'bg-indigo-600 text-white hover:bg-indigo-700'
                        : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                    }`}
                  >
                    このプランで登録する
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* よくある質問 */}
          <div className="bg-gray-50 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">よくあるご質問</h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">支払い方法は？</h3>
                <p className="text-gray-600">
                  クレジットカード決済または銀行振込に対応しています。審査通過後、決済手続きのご案内をお送りします。
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">途中でプラン変更は可能ですか？</h3>
                <p className="text-gray-600">
                  はい、いつでもプラン変更が可能です。変更は次回更新時から適用されます。
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">解約は可能ですか？</h3>
                <p className="text-gray-600">
                  はい、いつでも解約可能です。解約は次回更新日の30日前までにお手続きください。
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">追加費用はかかりますか？</h3>
                <p className="text-gray-600">
                  決済手数料は別途かかります。その他の追加機能については、お問い合わせください。
                </p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-12 text-center">
            <p className="text-lg text-gray-600 mb-6">
              ご不明な点がございましたら、お気軽にお問い合わせください
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/clinic/register"
                className="inline-flex items-center justify-center bg-indigo-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors"
              >
                今すぐ登録する
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center bg-white text-indigo-600 border-2 border-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-indigo-50 transition-colors"
              >
                お問い合わせ
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

