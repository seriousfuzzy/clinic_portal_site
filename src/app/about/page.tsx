import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { 
  BuildingOfficeIcon,
  MapPinIcon,
  PhoneIcon,
  EnvelopeIcon,
  CalendarIcon,
  UserGroupIcon
} from '@heroicons/react/24/outline'

export default function AboutPage() {
  const companyInfo = [
    {
      label: '会社名',
      value: 'オンラインクリニックポータル株式会社',
      icon: BuildingOfficeIcon,
    },
    {
      label: '代表取締役',
      value: '田中 太郎',
      icon: UserGroupIcon,
    },
    {
      label: '設立',
      value: '2020年4月1日',
      icon: CalendarIcon,
    },
    {
      label: '所在地',
      value: '〒100-0001\n東京都千代田区千代田1-1-1\nオンラインクリニックビル 5F',
      icon: MapPinIcon,
    },
    {
      label: '電話番号',
      value: '03-1234-5678',
      icon: PhoneIcon,
    },
    {
      label: 'メールアドレス',
      value: 'info@clinic-portal.com',
      icon: EnvelopeIcon,
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <div className="bg-gray-50 border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <p className="text-sm text-indigo-600 font-semibold">会社概要</p>
            <h1 className="mt-2 text-3xl sm:text-4xl font-bold text-gray-900">会社概要</h1>
            <p className="mt-4 text-lg text-gray-600">
              オンライン診療で全国のクリニックと患者をつなぐプラットフォームを運営しています
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* 会社理念 */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">私たちのミッション</h2>
            <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-8">
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                オンラインクリニックポータルは、「いつもの医療が変わる」をコンセプトに、
                全国のクリニックと患者をつなぐプラットフォームを提供しています。
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                テクノロジーの力を活用し、誰もがアクセスしやすい医療サービスを実現することで、
                より良い医療体験を提供することを目指しています。
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                患者様には自宅にいながら専門医の診察を受けられる利便性を、
                クリニックには効率的な診療管理と新しい患者獲得の機会を提供します。
              </p>
            </div>
          </div>

          {/* 会社情報 */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">会社情報</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {companyInfo.map((info) => (
                <div
                  key={info.label}
                  className="bg-white border border-gray-200 rounded-lg p-6"
                >
                  <div className="flex items-start">
                    <info.icon className="h-6 w-6 text-indigo-600 mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-sm font-semibold text-gray-700 mb-2">{info.label}</h3>
                      <p className="text-gray-900 whitespace-pre-line">{info.value}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 事業内容 */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">事業内容</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">オンライン診療プラットフォーム</h3>
                <p className="text-gray-600">
                  クリニックと患者をつなぐオンライン診療システムの提供
                </p>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">予約管理システム</h3>
                <p className="text-gray-600">
                  クリニック向けの予約カレンダー・患者管理システム
                </p>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">決済・配送管理</h3>
                <p className="text-gray-600">
                  処方薬の決済処理と配送管理システム
                </p>
              </div>
            </div>
          </div>

          {/* 沿革 */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">沿革</h2>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center">
                  <span className="text-indigo-600 font-semibold">2020</span>
                </div>
                <div className="ml-6">
                  <h3 className="text-lg font-semibold text-gray-900">4月</h3>
                  <p className="text-gray-600">オンラインクリニックポータル株式会社設立</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center">
                  <span className="text-indigo-600 font-semibold">2021</span>
                </div>
                <div className="ml-6">
                  <h3 className="text-lg font-semibold text-gray-900">6月</h3>
                  <p className="text-gray-600">オンライン診療プラットフォーム正式リリース</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center">
                  <span className="text-indigo-600 font-semibold">2022</span>
                </div>
                <div className="ml-6">
                  <h3 className="text-lg font-semibold text-gray-900">3月</h3>
                  <p className="text-gray-600">登録クリニック数100件突破</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center">
                  <span className="text-indigo-600 font-semibold">2024</span>
                </div>
                <div className="ml-6">
                  <h3 className="text-lg font-semibold text-gray-900">現在</h3>
                  <p className="text-gray-600">全国1,200以上のクリニックが登録</p>
                </div>
              </div>
            </div>
          </div>

          {/* アクセス */}
          <div className="bg-gray-50 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">アクセス</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-semibold text-gray-900 mb-4">電車でのアクセス</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• JR東京駅 徒歩5分</li>
                  <li>• 東京メトロ丸ノ内線 東京駅 徒歩3分</li>
                  <li>• 東京メトロ千代田線 二重橋前駅 徒歩7分</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-4">お車でのアクセス</h3>
                <p className="text-gray-600 mb-2">
                  近隣にコインパーキングがございます。
                </p>
                <p className="text-sm text-gray-500">
                  ※駐車場のご用意はございませんので、公共交通機関のご利用をお願いいたします。
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

