import Link from 'next/link'

export function FreeMedicalSearchSection() {
  const freeMedicalCategories = [
    {
      name: 'ED治療',
      description: 'バイアグラ、シアリスなどの処方',
      count: 89,
      icon: '💊',
      keywords: ['ED', '勃起不全', 'バイアグラ', 'シアリス'],
    },
    {
      name: 'AGA治療',
      description: '男性型脱毛症の治療',
      count: 76,
      icon: '👨‍⚕️',
      keywords: ['AGA', '男性型脱毛症', 'フィナステリド', 'ミノキシジル'],
    },
    {
      name: '女性AGA',
      description: '女性の薄毛・脱毛治療',
      count: 45,
      icon: '👩‍⚕️',
      keywords: ['女性AGA', '薄毛', '脱毛'],
    },
    {
      name: 'ピル診療',
      description: '低用量ピル、アフターピルの処方',
      count: 65,
      icon: '💊',
      keywords: ['ピル', '低用量ピル', 'アフターピル'],
    },
    {
      name: '肥満診察',
      description: '医療用ダイエット薬の処方',
      count: 43,
      icon: '⚖️',
      keywords: ['ダイエット', '肥満', '減量'],
    },
    {
      name: '美容皮膚診療',
      description: 'シミ、しわ、ニキビ治療',
      count: 54,
      icon: '✨',
      keywords: ['美容皮膚科', 'シミ', 'しわ', 'ニキビ'],
    },
  ]

  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">自由診療からさがす</h2>
        <p className="text-center text-gray-600 mb-8">
          自由診療の場合は、患者は保険証の提出義務はありません
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {freeMedicalCategories.map((category) => (
            <Link
              key={category.name}
              href={`/search?category=free-medical&specialty=${encodeURIComponent(category.name)}`}
              className="block bg-white border border-gray-200 rounded-lg p-6 hover:border-indigo-300 hover:shadow-md transition-all"
            >
              <div className="flex items-start">
                <div className="text-4xl mr-4">{category.icon}</div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{category.name}</h3>
                  <p className="text-sm text-gray-600 mb-3">{category.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                      {category.count}件
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

