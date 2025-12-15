import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import Link from 'next/link'
import { 
  BookOpenIcon,
  PlusIcon,
  MagnifyingGlassIcon,
  ShareIcon
} from '@heroicons/react/24/outline'

export default function MedicationNotebookPage() {
  const steps = [
    {
      step: 1,
      title: 'お薬手帳を開く',
      description: 'アプリのメニューから「お薬手帳」を選択します。',
      image: '📖',
    },
    {
      step: 2,
      title: 'お薬を追加する',
      description: '「お薬を追加」ボタンをタップし、薬名や服用方法を入力します。',
      image: '➕',
    },
    {
      step: 3,
      title: 'お薬を確認する',
      description: '登録したお薬の一覧を確認できます。服用中・過去の服用履歴も管理できます。',
      image: '🔍',
    },
    {
      step: 4,
      title: '薬剤師と共有する',
      description: '薬局でお薬を受け取る際に、お薬手帳の情報を薬剤師と共有できます。',
      image: '📤',
    },
  ]

  const features = [
    {
      title: '服用履歴の管理',
      description: '過去に服用したお薬の履歴を記録し、いつでも確認できます。',
    },
    {
      title: '飲み合わせチェック',
      description: '薬剤師とお薬の飲み合わせについて相談できます。',
    },
    {
      title: 'アレルギー情報の記録',
      description: 'アレルギー情報を記録し、処方時に自動で確認されます。',
    },
    {
      title: '家族の管理',
      description: 'ご家族のお薬手帳も管理できます（要設定）。',
    },
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
            <p className="text-sm text-indigo-600 font-semibold">お薬手帳</p>
            <h1 className="mt-2 text-3xl sm:text-4xl font-bold text-gray-900">お薬手帳の使い方</h1>
            <p className="mt-4 text-lg text-gray-600">
              服用しているお薬をアプリで管理できます。紙のお薬手帳のように忘れる心配もなく、薬剤師とお薬の飲み合わせの相談などがスムーズに行えます。
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

          {/* 主な機能 */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">主な機能</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {features.map((feature) => (
                <div
                  key={feature.title}
                  className="bg-white border border-gray-200 rounded-lg p-6"
                >
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* メリット */}
          <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-8 mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">お薬手帳を使うメリット</h2>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-indigo-600 mr-2">✓</span>
                紙のお薬手帳を忘れる心配がありません
              </li>
              <li className="flex items-start">
                <span className="text-indigo-600 mr-2">✓</span>
                複数の医療機関で処方されたお薬を一元管理できます
              </li>
              <li className="flex items-start">
                <span className="text-indigo-600 mr-2">✓</span>
                薬剤師とお薬の飲み合わせについて相談しやすくなります
              </li>
              <li className="flex items-start">
                <span className="text-indigo-600 mr-2">✓</span>
                過去の服用履歴を確認できるため、再診時に便利です
              </li>
            </ul>
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

