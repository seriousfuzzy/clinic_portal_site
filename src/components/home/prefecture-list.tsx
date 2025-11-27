import Link from 'next/link'

export function PrefectureList() {
  const prefectures = [
    { name: '北海道', count: 12 },
    { name: '青森県', count: 5 },
    { name: '岩手県', count: 3 },
    { name: '宮城県', count: 8 },
    { name: '秋田県', count: 2 },
    { name: '山形県', count: 4 },
    { name: '福島県', count: 6 },
    { name: '茨城県', count: 7 },
    { name: '栃木県', count: 5 },
    { name: '群馬県', count: 4 },
    { name: '埼玉県', count: 15 },
    { name: '千葉県', count: 12 },
    { name: '東京都', count: 45 },
    { name: '神奈川県', count: 18 },
    { name: '新潟県', count: 6 },
    { name: '富山県', count: 3 },
    { name: '石川県', count: 4 },
    { name: '福井県', count: 2 },
    { name: '山梨県', count: 3 },
    { name: '長野県', count: 5 },
    { name: '岐阜県', count: 4 },
    { name: '静岡県', count: 8 },
    { name: '愛知県', count: 16 },
    { name: '三重県', count: 4 },
    { name: '滋賀県', count: 3 },
    { name: '京都府', count: 9 },
    { name: '大阪府', count: 22 },
    { name: '兵庫県', count: 12 },
    { name: '奈良県', count: 4 },
    { name: '和歌山県', count: 2 },
    { name: '鳥取県', count: 1 },
    { name: '島根県', count: 2 },
    { name: '岡山県', count: 5 },
    { name: '広島県', count: 7 },
    { name: '山口県', count: 3 },
    { name: '徳島県', count: 2 },
    { name: '香川県', count: 3 },
    { name: '愛媛県', count: 4 },
    { name: '高知県', count: 2 },
    { name: '福岡県', count: 11 },
    { name: '佐賀県', count: 2 },
    { name: '長崎県', count: 3 },
    { name: '熊本県', count: 4 },
    { name: '大分県', count: 3 },
    { name: '宮崎県', count: 2 },
    { name: '鹿児島県', count: 3 },
    { name: '沖縄県', count: 4 },
  ]

  return (
    <div>
      <h3 className="text-2xl font-bold text-gray-900 mb-6">地域別クリニック一覧</h3>
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {prefectures.map((prefecture) => (
            <Link
              key={prefecture.name}
              href={`/search?prefecture=${encodeURIComponent(prefecture.name)}`}
              className="flex items-center justify-between p-3 rounded-md hover:bg-gray-50 transition-colors"
            >
              <span className="text-sm font-medium text-gray-900">
                {prefecture.name}
              </span>
              <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                {prefecture.count}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
