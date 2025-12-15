import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { 
  ShieldCheckIcon,
  LockClosedIcon,
  KeyIcon,
  ServerIcon,
  DocumentCheckIcon
} from '@heroicons/react/24/outline'

export default function SecurityPage() {
  const securityFeatures = [
    {
      title: 'データ暗号化',
      description: 'すべての通信はSSL/TLSで暗号化され、個人情報は安全に保護されています。',
      icon: LockClosedIcon,
    },
    {
      title: '認証システム',
      description: '多要素認証（MFA）に対応し、不正アクセスを防止します。',
      icon: KeyIcon,
    },
    {
      title: 'セキュアなサーバー',
      description: 'ISO 27001準拠のデータセンターで、24時間365日監視されています。',
      icon: ServerIcon,
    },
    {
      title: '定期的な監査',
      description: 'セキュリティ監査を定期的に実施し、脆弱性の早期発見・修正を行います。',
      icon: DocumentCheckIcon,
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <div className="bg-gray-50 border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <p className="text-sm text-indigo-600 font-semibold">セキュリティ</p>
            <h1 className="mt-2 text-3xl sm:text-4xl font-bold text-gray-900">セキュリティへの取り組み</h1>
            <p className="mt-4 text-lg text-gray-600">
              お客様の個人情報と医療情報を守るためのセキュリティ対策
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* セキュリティ方針 */}
          <div className="mb-16">
            <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-8">
              <div className="flex items-start">
                <ShieldCheckIcon className="h-8 w-8 text-indigo-600 mr-4 flex-shrink-0" />
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">セキュリティ方針</h2>
                  <p className="text-lg text-gray-700 leading-relaxed mb-4">
                    オンラインクリニックポータルは、お客様の個人情報と医療情報を最優先で保護することをお約束します。
                    医療情報は特に機密性が高いため、業界最高水準のセキュリティ対策を実施しています。
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    私たちは、継続的なセキュリティ改善と、最新の脅威に対する対策を実施し、
                    お客様に安心してご利用いただけるサービスを提供します。
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* セキュリティ機能 */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">セキュリティ機能</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {securityFeatures.map((feature) => (
                <div
                  key={feature.title}
                  className="bg-white border border-gray-200 rounded-lg p-6"
                >
                  <div className="flex items-start">
                    <feature.icon className="h-6 w-6 text-indigo-600 mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* データ保護 */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">データ保護</h2>
            <div className="bg-white border border-gray-200 rounded-lg p-8">
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">個人情報の取り扱い</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• 個人情報は暗号化して保存されます</li>
                    <li>• アクセスログを記録し、不正アクセスを監視します</li>
                    <li>• 必要最小限の情報のみを収集・保存します</li>
                    <li>• データの保存期間は法律に準拠して管理します</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">医療情報の保護</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• 診察記録や処方情報は厳重に保護されます</li>
                    <li>• 医療従事者のみがアクセス可能な権限管理を実施</li>
                    <li>• データのバックアップを定期的に実施</li>
                    <li>• 災害時にもデータを保護する体制を整備</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* コンプライアンス */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">コンプライアンス</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="font-semibold text-gray-900 mb-2">個人情報保護法</h3>
                <p className="text-sm text-gray-600">個人情報の保護に関する法律に準拠</p>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="font-semibold text-gray-900 mb-2">医療法</h3>
                <p className="text-sm text-gray-600">医療法に基づく適切な情報管理</p>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="font-semibold text-gray-900 mb-2">ISO 27001</h3>
                <p className="text-sm text-gray-600">情報セキュリティマネジメントシステム準拠</p>
              </div>
            </div>
          </div>

          {/* インシデント対応 */}
          <div className="bg-gray-50 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">インシデント対応</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                セキュリティインシデントが発生した場合、速やかに対応し、お客様にご報告いたします。
                また、再発防止のための対策を実施します。
              </p>
              <p>
                セキュリティに関するご質問やご報告は、<a href="/contact" className="text-indigo-600 hover:text-indigo-700 underline">お問い合わせ</a>ページよりご連絡ください。
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

