import Link from 'next/link'

export default function PrivacyPage() {
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
          <h1 className="text-3xl font-bold text-gray-900 mb-8">プライバシーポリシー</h1>
          
          <div className="prose prose-gray max-w-none">
            <p className="text-sm text-gray-600 mb-8">最終更新日: 2024年11月26日</p>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">1. 基本方針</h2>
              <p className="text-gray-700 mb-4">
                オンラインクリニックポータル（以下「当社」といいます。）は、個人情報の重要性を認識し、個人情報の保護に関する法律（個人情報保護法）を遵守し、適切な取り扱い、管理を行うことをお約束いたします。
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">2. 個人情報の定義</h2>
              <p className="text-gray-700 mb-4">
                本プライバシーポリシーにおいて、個人情報とは生存する個人に関する情報であって、氏名、生年月日、住所、電話番号、メールアドレスその他の記述等により特定の個人を識別することができるもの、および他の情報と容易に照合することができ、それにより特定の個人を識別することができることとなるものをいいます。
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">3. 個人情報の収集</h2>
              <p className="text-gray-700 mb-4">
                当社は、以下の場合に個人情報を収集することがあります。
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-4 ml-4">
                <li>サービスへの会員登録時</li>
                <li>お問い合わせ時</li>
                <li>サービス利用時</li>
                <li>アンケート回答時</li>
                <li>キャンペーン応募時</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">4. 個人情報の利用目的</h2>
              <p className="text-gray-700 mb-4">
                当社は、収集した個人情報を以下の目的で利用いたします。
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-4 ml-4">
                <li>サービスの提供・運営のため</li>
                <li>ユーザーからのお問い合わせに回答するため</li>
                <li>ユーザーにご案内をお送りするため</li>
                <li>メンテナンス、重要なお知らせなど必要に応じたご連絡のため</li>
                <li>利用規約に違反したユーザーや、不正・不当な目的でサービスを利用しようとするユーザーの特定をし、ご利用をお断りするため</li>
                <li>ユーザーにご自身の登録情報の閲覧や変更、削除、ご利用状況の閲覧を行っていただくため</li>
                <li>サービスの改善や新サービスの開発等に役立てるため</li>
                <li>サービスに関するご案内、お問い合わせ等への対応のため</li>
                <li>上記の利用目的に付随する目的</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">5. 個人情報の第三者提供</h2>
              <p className="text-gray-700 mb-4">
                当社は、以下のいずれかに該当する場合を除いて、あらかじめユーザーの同意を得ることなく、第三者に個人情報を提供することはありません。
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-4 ml-4">
                <li>法令に基づく場合</li>
                <li>人の生命、身体または財産の保護のために必要がある場合であって、本人の同意を得ることが困難であるとき</li>
                <li>公衆衛生の向上または児童の健全な育成の推進のために特に必要がある場合であって、本人の同意を得ることが困難であるとき</li>
                <li>国の機関もしくは地方公共団体またはその委託を受けた者が法令の定める事務を遂行することに対して協力する必要がある場合であって、本人の同意を得ることにより当該事務の遂行に支障を及ぼすおそれがあるとき</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">6. 個人情報の共同利用</h2>
              <p className="text-gray-700 mb-4">
                当社は、以下の場合において個人情報を共同利用することがあります。
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-4 ml-4">
                <li>医療サービス提供のため、登録医療機関との間で患者情報を共有する場合</li>
                <li>決済処理のため、決済代行会社との間で必要な情報を共有する場合</li>
                <li>配送のため、配送業者との間で配送先情報を共有する場合</li>
              </ul>
              <p className="text-gray-700 mb-4">
                共同利用する場合は、事前にユーザーの同意を得るものとします。
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">7. 個人情報の開示</h2>
              <p className="text-gray-700 mb-4">
                当社は、本人から個人情報の開示を求められたときは、本人に対し、遅滞なくこれを開示します。ただし、開示することにより次のいずれかに該当する場合は、その全部または一部を開示しないこともあり、開示しない決定をした場合には、その旨を遅滞なく通知します。
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-4 ml-4">
                <li>本人または第三者の生命、身体、財産その他の権利利益を害するおそれがある場合</li>
                <li>当社の業務の適正な実施に著しい支障を及ぼすおそれがある場合</li>
                <li>その他法令に違反することとなる場合</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">8. 個人情報の訂正および削除</h2>
              <p className="text-gray-700 mb-4">
                ユーザーは、当社の保有する自己の個人情報が誤った情報である場合には、当社が定める手続きにより、当社に対して個人情報の訂正、追加または削除（以下「訂正等」といいます。）を請求することができます。
              </p>
              <p className="text-gray-700 mb-4">
                当社は、ユーザーから前項の請求を受けてその請求に理由があると判断した場合には、遅滞なく、当該個人情報の訂正等を行うものとします。
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">9. 個人情報の利用停止等</h2>
              <p className="text-gray-700 mb-4">
                当社は、本人から、個人情報が、利用目的の範囲を超えて取り扱われているという理由、または不正の手段により取得されたものであるという理由により、その利用の停止または消去（以下「利用停止等」といいます。）を求められた場合には、遅滞なく必要な調査を行います。
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">10. Cookieの使用について</h2>
              <p className="text-gray-700 mb-4">
                当社のサービスは、ユーザーの利便性向上のためにCookie（クッキー）を使用することがあります。Cookie情報を通じてユーザーを個人的に特定することはありません。
              </p>
              <p className="text-gray-700 mb-4">
                Cookieの受け入れを希望されない場合は、ブラウザの設定でCookieの受け入れを拒否することができます。ただし、Cookieを拒否した場合、サービスの一部機能がご利用いただけない場合があります。
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">11. アクセス解析ツールについて</h2>
              <p className="text-gray-700 mb-4">
                当社は、サービスの利用状況を把握するため、Google Analyticsなどのアクセス解析ツールを使用することがあります。これらのツールはCookieを使用してデータを収集しますが、このデータは匿名で収集されており、個人を特定するものではありません。
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">12. プライバシーポリシーの変更</h2>
              <p className="text-gray-700 mb-4">
                当社は、必要に応じて、このプライバシーポリシーの内容を変更することがあります。この場合、変更後のプライバシーポリシーの施行時期と内容を適切な方法により周知または通知します。
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">13. お問い合わせ窓口</h2>
              <p className="text-gray-700 mb-4">
                本ポリシーに関するお問い合わせは、下記の窓口までお願いいたします。
              </p>
              <div className="bg-gray-50 p-4 rounded-md">
                <p className="text-gray-700">
                  <strong>オンラインクリニックポータル 個人情報保護窓口</strong><br />
                  メールアドレス: privacy@clinic-portal.com<br />
                  電話番号: 03-1234-5678<br />
                  受付時間: 平日 9:00-18:00
                </p>
              </div>
            </section>

            <div className="mt-12 pt-8 border-t border-gray-200">
              <p className="text-sm text-gray-600">
                以上
              </p>
              <p className="text-sm text-gray-600 mt-4">
                オンラインクリニックポータル運営事務局
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
