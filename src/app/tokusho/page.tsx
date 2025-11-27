import Link from 'next/link'

export default function TokushoPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* ヘッダー */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <Link href="/" className="text-2xl font-bold text-indigo-600">
            オンラインクリニック
          </Link>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">特定商取引法に基づく表記</h1>
          
          <div className="prose prose-gray max-w-none">
            <p className="text-sm text-gray-600 mb-8">最終更新日: 2024年11月26日</p>

            <div className="space-y-6">
              <div className="border-b border-gray-200 pb-6">
                <h2 className="text-lg font-semibold text-gray-900 mb-3">販売業者</h2>
                <p className="text-gray-700">オンラインクリニックポータル株式会社</p>
              </div>

              <div className="border-b border-gray-200 pb-6">
                <h2 className="text-lg font-semibold text-gray-900 mb-3">運営統括責任者</h2>
                <p className="text-gray-700">代表取締役 田中 太郎</p>
              </div>

              <div className="border-b border-gray-200 pb-6">
                <h2 className="text-lg font-semibold text-gray-900 mb-3">所在地</h2>
                <p className="text-gray-700">
                  〒100-0001<br />
                  東京都千代田区千代田1-1-1<br />
                  オンラインクリニックビル 5F
                </p>
              </div>

              <div className="border-b border-gray-200 pb-6">
                <h2 className="text-lg font-semibold text-gray-900 mb-3">電話番号</h2>
                <p className="text-gray-700">03-1234-5678</p>
                <p className="text-sm text-gray-600">受付時間: 平日 9:00-18:00（土日祝日を除く）</p>
              </div>

              <div className="border-b border-gray-200 pb-6">
                <h2 className="text-lg font-semibold text-gray-900 mb-3">メールアドレス</h2>
                <p className="text-gray-700">support@clinic-portal.com</p>
              </div>

              <div className="border-b border-gray-200 pb-6">
                <h2 className="text-lg font-semibold text-gray-900 mb-3">ホームページURL</h2>
                <p className="text-gray-700">https://clinic-portal.com</p>
              </div>

              <div className="border-b border-gray-200 pb-6">
                <h2 className="text-lg font-semibold text-gray-900 mb-3">販売価格</h2>
                <div className="text-gray-700">
                  <p className="mb-2"><strong>クリニック向けサービス:</strong></p>
                  <ul className="list-disc list-inside ml-4 mb-4">
                    <li>初回登録料: 50,000円（税込）</li>
                    <li>年間利用料: 120,000円（税込）</li>
                  </ul>
                  <p className="mb-2"><strong>患者向けサービス:</strong></p>
                  <ul className="list-disc list-inside ml-4">
                    <li>会員登録・基本利用: 無料</li>
                    <li>診察料・薬代: 各クリニックが設定する価格</li>
                  </ul>
                </div>
              </div>

              <div className="border-b border-gray-200 pb-6">
                <h2 className="text-lg font-semibold text-gray-900 mb-3">支払方法</h2>
                <div className="text-gray-700">
                  <ul className="list-disc list-inside">
                    <li>クレジットカード決済（VISA、MasterCard、JCB、American Express、Diners Club）</li>
                    <li>PayPay決済</li>
                    <li>銀行振込（クリニック登録料のみ）</li>
                  </ul>
                </div>
              </div>

              <div className="border-b border-gray-200 pb-6">
                <h2 className="text-lg font-semibold text-gray-900 mb-3">支払時期</h2>
                <div className="text-gray-700">
                  <ul className="list-disc list-inside">
                    <li>クリニック登録料: 審査承認後、サービス開始前</li>
                    <li>年間利用料: 毎年の契約更新時</li>
                    <li>診察料・薬代: 処方確定後、商品発送前</li>
                  </ul>
                </div>
              </div>

              <div className="border-b border-gray-200 pb-6">
                <h2 className="text-lg font-semibold text-gray-900 mb-3">商品の引渡時期</h2>
                <div className="text-gray-700">
                  <ul className="list-disc list-inside">
                    <li>サービス利用権: 決済完了後、即時</li>
                    <li>処方薬: 決済完了後、2-5営業日以内に発送</li>
                  </ul>
                </div>
              </div>

              <div className="border-b border-gray-200 pb-6">
                <h2 className="text-lg font-semibold text-gray-900 mb-3">返品・交換・キャンセルについて</h2>
                <div className="text-gray-700">
                  <p className="mb-3"><strong>クリニック向けサービス:</strong></p>
                  <ul className="list-disc list-inside ml-4 mb-4">
                    <li>サービス開始前: 全額返金可能</li>
                    <li>サービス開始後: 原則として返金不可</li>
                    <li>当社都合による場合: 全額返金</li>
                  </ul>
                  
                  <p className="mb-3"><strong>患者向けサービス（処方薬）:</strong></p>
                  <ul className="list-disc list-inside ml-4">
                    <li>商品の性質上、原則として返品・交換不可</li>
                    <li>商品に明らかな不備がある場合: 交換対応</li>
                    <li>配送中の破損・紛失: 再送または返金対応</li>
                  </ul>
                </div>
              </div>

              <div className="border-b border-gray-200 pb-6">
                <h2 className="text-lg font-semibold text-gray-900 mb-3">返品・交換の送料負担</h2>
                <div className="text-gray-700">
                  <ul className="list-disc list-inside">
                    <li>当社都合による返品・交換: 当社負担</li>
                    <li>お客様都合による返品・交換: お客様負担</li>
                    <li>商品不備による交換: 当社負担</li>
                  </ul>
                </div>
              </div>

              <div className="border-b border-gray-200 pb-6">
                <h2 className="text-lg font-semibold text-gray-900 mb-3">サービス提供条件</h2>
                <div className="text-gray-700">
                  <ul className="list-disc list-inside">
                    <li>インターネット接続環境が必要</li>
                    <li>推奨ブラウザ: Chrome、Safari、Firefox、Edge（最新版）</li>
                    <li>ビデオ通話にはカメラ・マイク機能が必要</li>
                    <li>処方薬の配送は日本国内のみ</li>
                  </ul>
                </div>
              </div>

              <div className="border-b border-gray-200 pb-6">
                <h2 className="text-lg font-semibold text-gray-900 mb-3">個人情報の取り扱い</h2>
                <p className="text-gray-700">
                  お客様の個人情報については、当社の「プライバシーポリシー」に基づき、適切に管理・保護いたします。
                  詳細は<Link href="/privacy" className="text-indigo-600 hover:text-indigo-500">プライバシーポリシー</Link>をご確認ください。
                </p>
              </div>

              <div className="border-b border-gray-200 pb-6">
                <h2 className="text-lg font-semibold text-gray-900 mb-3">その他</h2>
                <div className="text-gray-700">
                  <ul className="list-disc list-inside">
                    <li>本サービスは医療機関と患者をつなぐプラットフォームサービスです</li>
                    <li>実際の医療行為は各医療機関の責任において行われます</li>
                    <li>処方薬の販売は各医療機関が行います</li>
                    <li>サービス利用には利用規約への同意が必要です</li>
                  </ul>
                </div>
              </div>

              <div>
                <h2 className="text-lg font-semibold text-gray-900 mb-3">お問い合わせ</h2>
                <p className="text-gray-700 mb-4">
                  本表記に関するお問い合わせは、以下までご連絡ください。
                </p>
                <div className="bg-gray-50 p-4 rounded-md">
                  <p className="text-gray-700">
                    <strong>オンラインクリニックポータル株式会社</strong><br />
                    電話: 03-1234-5678<br />
                    メール: support@clinic-portal.com<br />
                    受付時間: 平日 9:00-18:00
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-gray-200">
              <p className="text-sm text-gray-600">
                以上
              </p>
              <p className="text-sm text-gray-600 mt-4">
                オンラインクリニックポータル株式会社
              </p>
            </div>
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/"
              className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-md font-medium hover:bg-indigo-700 transition-colors"
            >
              トップページに戻る
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
