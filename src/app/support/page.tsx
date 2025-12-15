import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import Link from 'next/link'
import { 
  EnvelopeIcon, 
  PhoneIcon, 
  DocumentTextIcon,
  QuestionMarkCircleIcon,
  BookOpenIcon,
  ChatBubbleLeftRightIcon
} from '@heroicons/react/24/outline'

export default function SupportPage() {
  const supportOptions = [
    {
      title: 'よくある質問',
      description: 'よくあるご質問と回答をまとめました',
      icon: QuestionMarkCircleIcon,
      href: '/faq',
      iconBgClass: 'bg-indigo-100',
      iconTextClass: 'text-indigo-600',
    },
    {
      title: 'ご利用方法',
      description: 'オンライン診療の使い方を詳しく解説',
      icon: BookOpenIcon,
      href: '/how-to-use',
      iconBgClass: 'bg-green-100',
      iconTextClass: 'text-green-600',
    },
    {
      title: 'お問い合わせ',
      description: 'メールでお気軽にお問い合わせください',
      icon: EnvelopeIcon,
      href: '/contact',
      iconBgClass: 'bg-blue-100',
      iconTextClass: 'text-blue-600',
    },
    {
      title: '利用規約',
      description: 'サービス利用規約をご確認ください',
      icon: DocumentTextIcon,
      href: '/terms',
      iconBgClass: 'bg-purple-100',
      iconTextClass: 'text-purple-600',
    },
  ]

  const contactMethods = [
    {
      name: 'メール',
      value: 'support@clinic-portal.com',
      icon: EnvelopeIcon,
      description: '24時間受付（返信は2-3営業日以内）',
    },
    {
      name: '電話',
      value: '03-1234-5678',
      icon: PhoneIcon,
      description: '平日 9:00-18:00',
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <div className="bg-gray-50 border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <p className="text-sm text-indigo-600 font-semibold">サポート</p>
            <h1 className="mt-2 text-3xl sm:text-4xl font-bold text-gray-900">サポートセンター</h1>
            <p className="mt-4 text-lg text-gray-600">
              クリニック向けサポート情報とお問い合わせ方法をご案内します
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* サポートオプション */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">サポートメニュー</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {supportOptions.map((option) => (
                <Link
                  key={option.title}
                  href={option.href}
                  className="group bg-white border border-gray-200 rounded-lg p-6 hover:border-indigo-300 hover:shadow-md transition-all"
                >
                  <div className="flex items-start">
                    <div className={`flex-shrink-0 w-12 h-12 ${option.iconBgClass} rounded-lg flex items-center justify-center`}>
                      <option.icon className={`h-6 w-6 ${option.iconTextClass}`} />
                    </div>
                    <div className="ml-4 flex-1">
                      <h3 className="text-lg font-semibold text-gray-900 group-hover:text-indigo-600 transition-colors">
                        {option.title}
                      </h3>
                      <p className="mt-2 text-sm text-gray-600">{option.description}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* お問い合わせ方法 */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">お問い合わせ方法</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {contactMethods.map((method) => (
                <div
                  key={method.name}
                  className="bg-white border border-gray-200 rounded-lg p-6"
                >
                  <div className="flex items-start">
                    <method.icon className="h-6 w-6 text-indigo-600 mr-4 mt-1" />
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{method.name}</h3>
                      <p className="text-xl font-medium text-gray-900 mb-1">{method.value}</p>
                      <p className="text-sm text-gray-600">{method.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* サポート内容 */}
          <div className="bg-gray-50 rounded-lg p-8 mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">サポート内容</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-semibold text-gray-900 mb-4">技術サポート</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• システムの使い方</li>
                  <li>• トラブルシューティング</li>
                  <li>• 機能のご質問</li>
                  <li>• バグ報告</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-4">ビジネスサポート</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• 料金プランについて</li>
                  <li>• 登録・審査について</li>
                  <li>• 機能追加のご相談</li>
                  <li>• その他のご質問</li>
                </ul>
              </div>
            </div>
          </div>

          {/* 営業時間 */}
          <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-6 mb-12">
            <h3 className="font-semibold text-gray-900 mb-4">営業時間</h3>
            <div className="space-y-2 text-gray-700">
              <p>平日: 9:00 - 18:00</p>
              <p>土曜: 9:00 - 17:00</p>
              <p>日祝: 休業</p>
              <p className="text-sm text-gray-600 mt-4">
                ※メールでのお問い合わせは24時間受付しております。返信は営業時間内に順次対応いたします。
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-indigo-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors"
            >
              <ChatBubbleLeftRightIcon className="h-5 w-5 mr-2" />
              お問い合わせフォームへ
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

