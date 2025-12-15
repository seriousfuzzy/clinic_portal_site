import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'

const faqs = [
  {
    question: 'オンライン診療を受けるにはどうすればよいですか？',
    answer: '患者登録を行い、検索ページから診療科・地域を選んで予約してください。予約時間になるとビデオ診察が始まります。'
  },
  {
    question: '対応している支払い方法は？',
    answer: 'クレジットカード決済に対応しています。クリニックによっては追加の決済手段を設定している場合があります。'
  },
  {
    question: '処方薬はどのように受け取れますか？',
    answer: 'オンライン服薬指導を受けたのち、登録住所へ配送されます。配送状況はクリニックまたは薬局からの連絡をご確認ください。'
  },
  {
    question: '再診や同じ薬の再処方は可能ですか？',
    answer: 'クリニックが再診を許可している場合、マイページまたはメールのリンクから再処方を依頼できます。'
  },
  {
    question: '個人情報の取り扱いは安全ですか？',
    answer: '通信は暗号化され、認可された医療機関・薬局のみが必要な情報へアクセスします。詳細はプライバシーポリシーをご確認ください。'
  }
]

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <div className="bg-gray-50 border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <p className="text-sm text-indigo-600 font-semibold">FAQ</p>
            <h1 className="mt-2 text-3xl sm:text-4xl font-bold text-gray-900">よくあるご質問</h1>
            <p className="mt-4 text-lg text-gray-600">
              オンライン診療・服薬指導・決済・配送に関するよくあるご質問をまとめました。
            </p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-4">
          {faqs.map((faq) => (
            <details key={faq.question} className="group border border-gray-200 rounded-lg bg-white shadow-sm">
              <summary className="cursor-pointer list-none px-4 py-4 sm:px-6 sm:py-5 flex items-start justify-between">
                <div className="text-left">
                  <h2 className="text-base sm:text-lg font-semibold text-gray-900">{faq.question}</h2>
                  <p className="text-sm text-gray-500 mt-1">クリックして回答を見る</p>
                </div>
                <span className="ml-4 text-indigo-600 group-open:rotate-45 transition-transform text-xl leading-5">+</span>
              </summary>
              <div className="px-4 pb-4 sm:px-6 sm:pb-5 text-gray-700 leading-relaxed">
                {faq.answer}
              </div>
            </details>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  )
}

