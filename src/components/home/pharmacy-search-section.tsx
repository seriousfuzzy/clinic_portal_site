import Link from 'next/link'

export function PharmacySearchSection() {
  const regions = [
    {
      name: '関東',
      prefectures: ['東京都', '神奈川県', '埼玉県', '千葉県', '茨城県', '栃木県', '群馬県']
    },
    {
      name: '関西',
      prefectures: ['大阪府', '兵庫県', '京都府', '滋賀県', '奈良県', '和歌山県']
    },
    {
      name: '東海',
      prefectures: ['愛知県', '静岡県', '岐阜県', '三重県']
    },
    {
      name: '北海道・東北',
      prefectures: ['北海道', '青森県', '岩手県', '宮城県', '秋田県', '山形県', '福島県']
    },
    {
      name: '甲信越・北陸',
      prefectures: ['山梨県', '長野県', '新潟県', '富山県', '石川県', '福井県']
    },
    {
      name: '中国・四国',
      prefectures: ['鳥取県', '島根県', '岡山県', '広島県', '山口県', '徳島県', '香川県', '愛媛県', '高知県']
    },
    {
      name: '九州・沖縄',
      prefectures: ['福岡県', '佐賀県', '長崎県', '熊本県', '大分県', '宮崎県', '鹿児島県', '沖縄県']
    },
  ]

  return (
    <div className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">地域から薬局をさがす</h2>
        <div className="space-y-8">
          {regions.map((region) => (
            <div key={region.name}>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{region.name}</h3>
              <div className="flex flex-wrap gap-3">
                {region.prefectures.map((prefecture) => (
                  <Link
                    key={prefecture}
                    href={`/search/pharmacy?prefecture=${encodeURIComponent(prefecture)}`}
                    className="px-4 py-2 rounded-md border border-gray-200 text-sm font-medium text-gray-900 hover:bg-gray-50 transition-colors"
                  >
                    {prefecture}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

