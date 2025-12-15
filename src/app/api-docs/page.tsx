import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import Link from 'next/link'
import { 
  CodeBracketIcon,
  DocumentArrowDownIcon,
  KeyIcon,
  ServerIcon
} from '@heroicons/react/24/outline'

export default function APIDocsPage() {
  const apiFeatures = [
    {
      title: '予約管理API',
      description: '予約の作成・取得・更新・削除が可能',
      endpoints: ['POST /api/bookings', 'GET /api/bookings', 'PUT /api/bookings/:id', 'DELETE /api/bookings/:id'],
    },
    {
      title: '患者管理API',
      description: '患者情報の取得・更新が可能',
      endpoints: ['GET /api/patients', 'GET /api/patients/:id', 'PUT /api/patients/:id'],
    },
    {
      title: '処方管理API',
      description: '処方情報の作成・取得・更新が可能',
      endpoints: ['POST /api/prescriptions', 'GET /api/prescriptions', 'PUT /api/prescriptions/:id'],
    },
    {
      title: '決済管理API',
      description: '決済情報の取得・Webhook処理が可能',
      endpoints: ['GET /api/payments', 'POST /api/webhooks/payment'],
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <div className="bg-gray-50 border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <p className="text-sm text-indigo-600 font-semibold">API連携</p>
            <h1 className="mt-2 text-3xl sm:text-4xl font-bold text-gray-900">API ドキュメント</h1>
            <p className="mt-4 text-lg text-gray-600">
              クリニック管理システムと外部システムを連携するためのAPIをご提供しています
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* 概要 */}
          <div className="mb-16">
            <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">API概要</h2>
              <p className="text-gray-700 mb-4">
                当プラットフォームでは、RESTful APIを提供しており、クリニックの既存システムや
                カスタムアプリケーションとの連携が可能です。
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                <div className="bg-white rounded-lg p-4">
                  <CodeBracketIcon className="h-8 w-8 text-indigo-600 mb-2" />
                  <h3 className="font-semibold text-gray-900 mb-1">RESTful API</h3>
                  <p className="text-sm text-gray-600">標準的なREST API形式</p>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <KeyIcon className="h-8 w-8 text-indigo-600 mb-2" />
                  <h3 className="font-semibold text-gray-900 mb-1">認証</h3>
                  <p className="text-sm text-gray-600">APIキーによる認証</p>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <ServerIcon className="h-8 w-8 text-indigo-600 mb-2" />
                  <h3 className="font-semibold text-gray-900 mb-1">Webhook</h3>
                  <p className="text-sm text-gray-600">イベント通知に対応</p>
                </div>
              </div>
            </div>
          </div>

          {/* API機能 */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">利用可能なAPI</h2>
            <div className="space-y-6">
              {apiFeatures.map((feature) => (
                <div
                  key={feature.title}
                  className="bg-white border border-gray-200 rounded-lg p-6"
                >
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600 mb-4">{feature.description}</p>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="text-sm font-semibold text-gray-700 mb-2">エンドポイント:</h4>
                    <ul className="space-y-1">
                      {feature.endpoints.map((endpoint) => (
                        <li key={endpoint} className="font-mono text-sm text-gray-800">
                          {endpoint}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 認証方法 */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">認証方法</h2>
            <div className="bg-white border border-gray-200 rounded-lg p-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">APIキー認証</h3>
              <p className="text-gray-700 mb-4">
                すべてのAPIリクエストには、認証用のAPIキーが必要です。APIキーは管理画面から取得できます。
              </p>
              <div className="bg-gray-900 rounded-lg p-4 mb-4">
                <code className="text-green-400 text-sm">
                  Authorization: Bearer YOUR_API_KEY
                </code>
              </div>
              <p className="text-sm text-gray-600">
                ※APIキーは機密情報です。外部に公開しないようご注意ください。
              </p>
            </div>
          </div>

          {/* レート制限 */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">レート制限</h2>
            <div className="bg-white border border-gray-200 rounded-lg p-8">
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">標準プラン</h3>
                  <p className="text-gray-700">1分あたり100リクエスト</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">プレミアムプラン</h3>
                  <p className="text-gray-700">1分あたり500リクエスト</p>
                </div>
              </div>
            </div>
          </div>

          {/* サンプルコード */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">サンプルコード</h2>
            <div className="bg-white border border-gray-200 rounded-lg p-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">予約作成の例（JavaScript）</h3>
              <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
                <pre className="text-green-400 text-sm">
{`fetch('https://api.clinic-portal.com/api/bookings', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    patientId: 'patient_123',
    clinicId: 'clinic_456',
    date: '2024-01-15',
    time: '10:00'
  })
})
.then(response => response.json())
.then(data => console.log(data));`}
                </pre>
              </div>
            </div>
          </div>

          {/* お問い合わせ */}
          <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-8 text-center">
            <h2 className="text-xl font-bold text-gray-900 mb-4">API連携について</h2>
            <p className="text-gray-700 mb-6">
              API連携に関するご質問や、カスタム連携のご相談はお気軽にお問い合わせください
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-indigo-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors"
            >
              <DocumentArrowDownIcon className="h-5 w-5 mr-2" />
              お問い合わせ
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

