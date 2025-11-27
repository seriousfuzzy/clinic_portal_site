import { UserPlusIcon, MagnifyingGlassIcon, CalendarIcon, VideoCameraIcon, BeakerIcon, TruckIcon } from '@heroicons/react/24/outline'

export function HowItWorksSection() {
  const steps = [
    {
      id: 1,
      name: '会員登録',
      description: '簡単な情報入力で会員登録完了',
      icon: UserPlusIcon,
    },
    {
      id: 2,
      name: 'クリニック検索',
      description: '地域や診療科目で最適なクリニックを検索',
      icon: MagnifyingGlassIcon,
    },
    {
      id: 3,
      name: '予約',
      description: '空いている時間を選んで予約',
      icon: CalendarIcon,
    },
    {
      id: 4,
      name: 'オンライン診察',
      description: 'ビデオ通話で医師と診察',
      icon: VideoCameraIcon,
    },
    {
      id: 5,
      name: '処方・決済',
      description: '処方薬の確認と決済',
      icon: BeakerIcon,
    },
    {
      id: 6,
      name: '薬の配送',
      description: 'ご自宅まで薬をお届け',
      icon: TruckIcon,
    },
  ]

  return (
    <div className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            ご利用の流れ
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            6つの簡単なステップで、自宅にいながら医療サービスを受けられます
          </p>
        </div>
        
        <div className="mx-auto mt-16 max-w-6xl">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {steps.map((step, stepIdx) => (
              <div key={step.id} className="relative">
                <div className="flex flex-col items-center text-center">
                  {/* ステップ番号とアイコン */}
                  <div className="relative">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-indigo-600 text-white">
                      <step.icon className="h-8 w-8" aria-hidden="true" />
                    </div>
                    <div className="absolute -top-2 -right-2 flex h-6 w-6 items-center justify-center rounded-full bg-indigo-100 text-xs font-bold text-indigo-600">
                      {step.id}
                    </div>
                  </div>
                  
                  {/* コネクター（最後以外） */}
                  {stepIdx < steps.length - 1 && (
                    <div className="absolute top-8 left-full w-full h-0.5 bg-gray-200 hidden lg:block transform translate-x-4" />
                  )}
                  
                  {/* ステップ内容 */}
                  <div className="mt-6">
                    <h3 className="text-lg font-semibold text-gray-900">{step.name}</h3>
                    <p className="mt-2 text-sm text-gray-600">{step.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <div className="inline-flex items-center rounded-full bg-indigo-50 px-6 py-3">
            <span className="text-sm font-medium text-indigo-700">
              💡 初回利用の方は診察料が無料のクリニックもあります
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
