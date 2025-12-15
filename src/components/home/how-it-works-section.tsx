export function HowItWorksSection() {
  const steps = [
    {
      id: 1,
      title: '病院・診療所をさがす',
      description: '地域や診療科目から、最適な病院・診療所を検索します。',
      image: '🔍'
    },
    {
      id: 2,
      title: '診察を予約する',
      description: '空いている日時を選択して診察を予約します。',
      image: '📅'
    },
    {
      id: 3,
      title: '予約した日時に診察を受ける',
      description: '呼び出しが来たら、アプリまたはブラウザでビデオチャットを起動し診察を開始します。',
      image: '💻'
    },
    {
      id: 4,
      title: '会計をする',
      description: '診察後、登録したクレジットカードにて自動で決済されます。',
      image: '💳'
    },
  ]

  const onlineMedicationSteps = [
    {
      id: 1,
      title: 'オンライン服薬指導の申し込みをする',
      description: '病院・診療所から受領した処方箋データをもとに、薬局へオンライン服薬指導の申し込みをします。',
      image: '📋'
    },
    {
      id: 2,
      title: '薬局とのオンライン服薬指導',
      description: '申し込みした日時にビデオチャットで薬剤師と服薬指導を行い、お薬を用意してもらいます。',
      image: '💊'
    },
    {
      id: 3,
      title: '会計後、配達されたお薬を受け取る',
      description: '調剤料もクレジットカードで決済でき、お薬も登録住所に配達されます。',
      image: '📦'
    },
  ]

  return (
    <div className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            オンライン診療の使い方
          </h2>
        </div>
        
        <div className="mx-auto mt-16 max-w-6xl">
          <div className="space-y-12">
            {/* オンライン診療の流れ */}
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-8 text-center">オンライン診療</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {steps.map((step) => (
                  <div key={step.id} className="text-center">
                    <div className="text-6xl mb-4">{step.image}</div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h4>
                    <p className="text-sm text-gray-600">{step.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* オンライン服薬指導の流れ */}
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-8 text-center">オンライン服薬指導</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {onlineMedicationSteps.map((step) => (
                  <div key={step.id} className="text-center">
                    <div className="text-6xl mb-4">{step.image}</div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h4>
                    <p className="text-sm text-gray-600">{step.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
