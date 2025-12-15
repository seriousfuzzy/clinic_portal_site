import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import Link from 'next/link'
import { 
  BriefcaseIcon,
  MapPinIcon,
  ClockIcon,
  CurrencyYenIcon
} from '@heroicons/react/24/outline'

export default function CareersPage() {
  const jobOpenings = [
    {
      id: 1,
      title: 'フロントエンドエンジニア',
      department: 'エンジニアリング',
      location: '東京都千代田区（リモート可）',
      type: '正社員',
      salary: '応相談',
      description: 'Next.js、Reactを使用したWebアプリケーションの開発を行います。UI/UXの改善や新機能の実装を担当していただきます。',
      requirements: [
        'React/Next.jsの実務経験2年以上',
        'TypeScriptの使用経験',
        'チーム開発の経験',
      ],
    },
    {
      id: 2,
      title: 'バックエンドエンジニア',
      department: 'エンジニアリング',
      location: '東京都千代田区（リモート可）',
      type: '正社員',
      salary: '応相談',
      description: 'API開発、データベース設計、システムアーキテクチャの設計・実装を行います。',
      requirements: [
        'Node.js/Python等のバックエンド開発経験2年以上',
        'データベース設計の経験',
        'API設計の経験',
      ],
    },
    {
      id: 3,
      title: 'カスタマーサポート',
      department: 'カスタマーサクセス',
      location: '東京都千代田区',
      type: '正社員',
      salary: '応相談',
      description: 'クリニック・患者様からのお問い合わせ対応、サポート業務を行います。',
      requirements: [
        'カスタマーサポート経験1年以上',
        'コミュニケーション能力',
        '医療・ヘルスケア業界への興味',
      ],
    },
    {
      id: 4,
      title: 'プロダクトマネージャー',
      department: 'プロダクト',
      location: '東京都千代田区（リモート可）',
      type: '正社員',
      salary: '応相談',
      description: 'プロダクトの戦略立案、機能設計、開発チームとの連携を行います。',
      requirements: [
        'プロダクトマネージャー経験3年以上',
        '医療・ヘルスケア業界経験歓迎',
        'データ分析スキル',
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <div className="bg-gray-50 border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <p className="text-sm text-indigo-600 font-semibold">採用情報</p>
            <h1 className="mt-2 text-3xl sm:text-4xl font-bold text-gray-900">採用情報</h1>
            <p className="mt-4 text-lg text-gray-600">
              医療を変えるチームの一員として、一緒に働きませんか？
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* メッセージ */}
          <div className="mb-16">
            <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">私たちと一緒に働きませんか？</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                オンラインクリニックポータルは、テクノロジーの力で医療を変革することを目指しています。
                私たちのチームは、多様なバックグラウンドを持つメンバーで構成されており、
                それぞれが専門性を活かしながら、協力してプロダクトを改善しています。
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                医療への情熱と、テクノロジーへの興味をお持ちの方、ぜひご応募ください。
              </p>
            </div>
          </div>

          {/* 募集職種 */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">募集職種</h2>
            <div className="space-y-6">
              {jobOpenings.map((job) => (
                <div
                  key={job.id}
                  className="bg-white border border-gray-200 rounded-lg p-8 hover:shadow-md transition-shadow"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{job.title}</h3>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-4">
                        <span className="flex items-center">
                          <BriefcaseIcon className="h-4 w-4 mr-1" />
                          {job.department}
                        </span>
                        <span className="flex items-center">
                          <MapPinIcon className="h-4 w-4 mr-1" />
                          {job.location}
                        </span>
                        <span className="flex items-center">
                          <ClockIcon className="h-4 w-4 mr-1" />
                          {job.type}
                        </span>
                        <span className="flex items-center">
                          <CurrencyYenIcon className="h-4 w-4 mr-1" />
                          {job.salary}
                        </span>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-700 mb-6 leading-relaxed">{job.description}</p>
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">必須スキル・経験</h4>
                    <ul className="space-y-2">
                      {job.requirements.map((req, index) => (
                        <li key={index} className="flex items-start text-gray-700">
                          <span className="text-indigo-600 mr-2">•</span>
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Link
                    href={`/careers/${job.id}/apply`}
                    className="inline-flex items-center justify-center bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors"
                  >
                    この職種に応募する
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* 福利厚生 */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">福利厚生</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="font-semibold text-gray-900 mb-2">給与・賞与</h3>
                <p className="text-sm text-gray-600">年俸制・賞与年2回（業績による）</p>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="font-semibold text-gray-900 mb-2">休暇</h3>
                <p className="text-sm text-gray-600">有給休暇、夏季休暇、年末年始休暇</p>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="font-semibold text-gray-900 mb-2">リモートワーク</h3>
                <p className="text-sm text-gray-600">フレックスタイム・リモートワーク可</p>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="font-semibold text-gray-900 mb-2">社会保険</h3>
                <p className="text-sm text-gray-600">健康保険、厚生年金、雇用保険、労災保険</p>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="font-semibold text-gray-900 mb-2">研修制度</h3>
                <p className="text-sm text-gray-600">技術書購入補助、カンファレンス参加支援</p>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="font-semibold text-gray-900 mb-2">その他</h3>
                <p className="text-sm text-gray-600">交通費支給、各種手当</p>
              </div>
            </div>
          </div>

          {/* 応募方法 */}
          <div className="bg-gray-50 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">応募方法</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                各職種の「この職種に応募する」ボタンから応募フォームに進み、必要事項をご記入の上ご応募ください。
              </p>
              <p>
                ご不明な点がございましたら、<Link href="/contact" className="text-indigo-600 hover:text-indigo-700 underline">お問い合わせ</Link>ページよりご連絡ください。
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

