import Link from 'next/link'

export function SpecialtyList() {
  const specialties = [
    {
      name: 'ED治療',
      description: 'バイアグラ、シアリスなどの処方',
      count: 89,
      icon: '💊'
    },
    {
      name: 'AGA治療',
      description: '男性型脱毛症の治療薬処方',
      count: 76,
      icon: '👨‍⚕️'
    },
    {
      name: 'ピル処方',
      description: '低用量ピル、アフターピルの処方',
      count: 65,
      icon: '💊'
    },
    {
      name: '美容皮膚科',
      description: 'シミ、しわ、ニキビ治療',
      count: 54,
      icon: '✨'
    },
    {
      name: 'ダイエット外来',
      description: '医療用ダイエット薬の処方',
      count: 43,
      icon: '⚖️'
    },
    {
      name: '内科',
      description: '一般的な内科診療',
      count: 98,
      icon: '🏥'
    },
    {
      name: '皮膚科',
      description: '皮膚疾患の診断・治療',
      count: 67,
      icon: '🧴'
    },
    {
      name: '精神科',
      description: 'うつ病、不安障害などの治療',
      count: 34,
      icon: '🧠'
    }
  ]

  return (
    <div>
      <h3 className="text-2xl font-bold text-gray-900 mb-6">診療科目別</h3>
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <div className="space-y-4">
          {specialties.map((specialty) => (
            <Link
              key={specialty.name}
              href={`/search?specialty=${encodeURIComponent(specialty.name)}`}
              className="block p-4 rounded-lg border border-gray-100 hover:border-indigo-200 hover:bg-indigo-50 transition-colors"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">{specialty.icon}</span>
                  <div>
                    <h4 className="font-semibold text-gray-900">{specialty.name}</h4>
                    <p className="text-sm text-gray-600">{specialty.description}</p>
                  </div>
                </div>
                <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                  {specialty.count}件
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
