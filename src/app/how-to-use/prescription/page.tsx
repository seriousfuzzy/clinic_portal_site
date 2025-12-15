import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import Link from 'next/link'
import { 
  DocumentArrowUpIcon,
  CameraIcon,
  ClockIcon,
  CheckCircleIcon
} from '@heroicons/react/24/outline'

export default function PrescriptionPage() {
  const steps = [
    {
      step: 1,
      title: '処方箋を受け取る',
      description: 'オンライン診察後、医師から処方箋を受け取ります。',
      image: '📋',
    },
    {
      step: 2,
      title: '処方箋を撮影する',
      description: 'アプリから処方箋原本または処方内容（控え）を撮影します。',
      image: '📷',
    },
    {
      step: 3,
      title: '薬局を選択する',
      description: '処方箋を送信する薬局を選択します。',
      image: '🏥',
    },
    {
      step: 4,
      title: '送信して完了',
      description: '処方箋を送信すると、薬局で事前に調剤準備ができます。',
      image: '✅',
    },
  ]

  const tips = [
    '処方箋は鮮明に撮影してください',
    '処方箋の全内容が写るように撮影してください',
    '送信後、薬局から確認の連絡が来ます',
    '薬局での待ち時間が短縮されます',
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <div className="bg-gray-50 border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <Link href="/how-to-use" className="text-indigo-600 hover:text-indigo-700 text-sm font-medium mb-4 inline-block">
              ← ご利用方法に戻る
            </Link>
            <p className="text-sm text-indigo-600 font-semibold">処方箋送信</p>
            <h1 className="mt-2 text-3xl sm:text-4xl font-bold text-gray-900">処方箋送信の使い方</h1>
            <p className="mt-4 text-lg text-gray-600">
              医師から処方箋を受け取ったあと、薬局へ行く前にアプリから処方箋原本または処方内容（控え）を撮影・アップロードして調剤薬局へ送信することで、薬局での待ち時間を短縮できます。
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* 使い方の流れ */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">使い方の流れ</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {steps.map((step) => (
                <div
                  key={step.step}
                  className="bg-white border border-gray-200 rounded-lg p-6 text-center"
                >
                  <div className="text-6xl mb-4">{step.image}</div>
                  <div className="inline-flex items-center justify-center w-8 h-8 bg-indigo-600 text-white rounded-full text-sm font-semibold mb-3">
                    {step.step}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-sm text-gray-600">{step.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* メリット */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">処方箋送信のメリット</h2>
            <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-8">
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start">
                  <ClockIcon className="h-5 w-5 text-indigo-600 mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong className="font-semibold">待ち時間の短縮</strong>
                    <p className="text-sm text-gray-600 mt-1">薬局で事前に調剤準備ができるため、待ち時間が短縮されます。</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon className="h-5 w-5 text-indigo-600 mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong className="font-semibold">確実な調剤</strong>
                    <p className="text-sm text-gray-600 mt-1">処方箋の内容を事前に確認できるため、調剤ミスを防げます。</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <DocumentArrowUpIcon className="h-5 w-5 text-indigo-600 mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong className="font-semibold">簡単な手続き</strong>
                    <p className="text-sm text-gray-600 mt-1">アプリから簡単に処方箋を送信できます。</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* ポイント */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">撮影のポイント</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {tips.map((tip, index) => (
                <div
                  key={index}
                  className="bg-white border border-gray-200 rounded-lg p-6"
                >
                  <div className="flex items-start">
                    <CameraIcon className="h-5 w-5 text-indigo-600 mr-3 mt-0.5 flex-shrink-0" />
                    <p className="text-gray-700">{tip}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <Link
              href="/patient/register"
              className="inline-flex items-center justify-center bg-indigo-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors"
            >
              患者登録して始める
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

