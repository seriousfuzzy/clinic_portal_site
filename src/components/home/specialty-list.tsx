import Link from 'next/link'

export function SpecialtyList() {
  const categories = [
    {
      name: '内科系',
      specialties: [
        { name: '内科', count: 1592 },
        { name: '循環器内科', count: 395 },
        { name: '神経内科', count: 134 },
        { name: '腎臓内科', count: 75 },
        { name: '血液内科', count: 23 },
        { name: '代謝・内分泌内科', count: 120 },
      ]
    },
    {
      name: '外科系',
      specialties: [
        { name: '外科・小児外科', count: 245 },
        { name: '整形外科', count: 288 },
        { name: '心臓・血管外科', count: 34 },
        { name: '脳神経外科', count: 145 },
        { name: '乳腺・甲状腺外科', count: 61 },
        { name: 'リハビリテーション科', count: 223 },
      ]
    },
    {
      name: '小児科系',
      specialties: [
        { name: '小児科', count: 496 },
      ]
    },
    {
      name: '産婦人科系',
      specialties: [
        { name: '産婦人科', count: 336 },
      ]
    },
    {
      name: '眼科・耳鼻科・皮膚科・アレルギー科系',
      specialties: [
        { name: '眼科', count: 63 },
        { name: '耳鼻咽喉科', count: 152 },
        { name: '皮膚科', count: 358 },
        { name: 'アレルギー科', count: 281 },
      ]
    },
    {
      name: '呼吸器科系',
      specialties: [
        { name: '呼吸器科', count: 238 },
      ]
    },
    {
      name: '消化器科系',
      specialties: [
        { name: '消化器科', count: 469 },
      ]
    },
    {
      name: '泌尿器科・肛門科系',
      specialties: [
        { name: '泌尿器科', count: 195 },
        { name: '肛門科', count: 71 },
      ]
    },
    {
      name: '美容系',
      specialties: [
        { name: '形成外科・美容外科', count: 121 },
        { name: '美容皮膚科', count: 187 },
      ]
    },
    {
      name: '精神科系',
      specialties: [
        { name: '精神科・心療内科', count: 324 },
      ]
    },
    {
      name: 'その他',
      specialties: [
        { name: '放射線科', count: 47 },
        { name: '救急科', count: 17 },
        { name: '麻酔科', count: 59 },
      ]
    },
  ]

  return (
    <div>
      <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">診療科からさがす</h2>
      <div className="space-y-8">
        {categories.map((category) => (
          <div key={category.name}>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">{category.name}</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
              {category.specialties.map((specialty) => (
                <Link
                  key={specialty.name}
                  href={`/search?specialty=${encodeURIComponent(specialty.name)}`}
                  className="flex items-center justify-between p-3 rounded-md hover:bg-gray-50 transition-colors border border-gray-200"
                >
                  <span className="text-sm font-medium text-gray-900">
                    {specialty.name}
                  </span>
                  <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full ml-2">
                    {specialty.count}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
