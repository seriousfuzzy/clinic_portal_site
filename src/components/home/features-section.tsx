import { 
  VideoCameraIcon, 
  ClockIcon, 
  ShieldCheckIcon, 
  DevicePhoneMobileIcon,
  CurrencyYenIcon,
  MapPinIcon 
} from '@heroicons/react/24/outline'

export function FeaturesSection() {
  const features = [
    {
      name: 'オンライン診察',
      description: 'ビデオ通話で医師と直接相談。待ち時間なしで診察を受けられます。',
      icon: VideoCameraIcon,
    },
    {
      name: '24時間予約可能',
      description: 'いつでもどこでも予約が可能。忙しい方でも自分のペースで医療を受けられます。',
      icon: ClockIcon,
    },
    {
      name: '安心・安全',
      description: '医師免許の確認済み。すべての医療機関は厳格な審査を通過しています。',
      icon: ShieldCheckIcon,
    },
    {
      name: 'スマホ対応',
      description: 'スマートフォンから簡単にアクセス。専用アプリは不要です。',
      icon: DevicePhoneMobileIcon,
    },
    {
      name: '明確な料金',
      description: '事前に料金が分かるので安心。隠れた費用は一切ありません。',
      icon: CurrencyYenIcon,
    },
    {
      name: '全国対応',
      description: '47都道府県のクリニックが登録。お住まいの地域に関係なく利用できます。',
      icon: MapPinIcon,
    },
  ]

  return (
    <div className="bg-gray-50 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            なぜオンラインクリニックが選ばれるのか
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            従来の医療の課題を解決し、患者様とクリニック双方にメリットをもたらします
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <feature.icon className="h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                  {feature.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{feature.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
