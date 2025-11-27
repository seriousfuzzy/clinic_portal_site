import Link from 'next/link'
import { CheckCircleIcon } from '@heroicons/react/24/outline'

export default function ClinicRegisterSuccessPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <CheckCircleIcon className="mx-auto h-16 w-16 text-green-500" />
          <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
            登録申請完了
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            クリニック登録申請が正常に完了しました
          </p>
        </div>

        <div className="bg-white shadow rounded-lg p-6">
          <h3 className="text-lg font-medium text-gray-900 mb-4">今後の流れ</h3>
          <div className="space-y-4">
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <div className="w-6 h-6 bg-indigo-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-medium">1</span>
                </div>
              </div>
              <div className="ml-3">
                <h4 className="text-sm font-medium text-gray-900">書類審査</h4>
                <p className="text-sm text-gray-600">
                  提出いただいた書類の審査を行います（通常3-5営業日）
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0">
                <div className="w-6 h-6 bg-gray-300 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-medium">2</span>
                </div>
              </div>
              <div className="ml-3">
                <h4 className="text-sm font-medium text-gray-900">審査結果通知</h4>
                <p className="text-sm text-gray-600">
                  審査結果をメールでお知らせします
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0">
                <div className="w-6 h-6 bg-gray-300 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-medium">3</span>
                </div>
              </div>
              <div className="ml-3">
                <h4 className="text-sm font-medium text-gray-900">決済手続き</h4>
                <p className="text-sm text-gray-600">
                  審査通過後、登録料・年間利用料の決済手続きを行います
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0">
                <div className="w-6 h-6 bg-gray-300 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-medium">4</span>
                </div>
              </div>
              <div className="ml-3">
                <h4 className="text-sm font-medium text-gray-900">サービス開始</h4>
                <p className="text-sm text-gray-600">
                  決済完了後、オンライン診察サービスを開始できます
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-md p-4">
          <div className="flex">
            <div className="ml-3">
              <h3 className="text-sm font-medium text-blue-800">
                料金について
              </h3>
              <div className="mt-2 text-sm text-blue-700">
                <p>• 初回登録料: ¥50,000</p>
                <p>• 年間利用料: ¥120,000</p>
                <p>審査通過後に決済手続きのご案内をお送りします。</p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center space-y-2">
          <p className="text-sm text-gray-600">
            ご質問がございましたら、お気軽にお問い合わせください。
          </p>
          <div className="space-x-4">
            <Link
              href="/"
              className="text-sm text-indigo-600 hover:text-indigo-500"
            >
              トップページ
            </Link>
            <Link
              href="/contact"
              className="text-sm text-indigo-600 hover:text-indigo-500"
            >
              お問い合わせ
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
