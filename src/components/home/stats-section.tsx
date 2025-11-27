export function StatsSection() {
  const stats = [
    { id: 1, name: '登録クリニック数', value: '1,200+', suffix: '施設' },
    { id: 2, name: '累計診察数', value: '50,000+', suffix: '件' },
    { id: 3, name: '対応診療科目', value: '15+', suffix: '科目' },
    { id: 4, name: '患者満足度', value: '98%', suffix: '' },
  ]

  return (
    <div className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              信頼される医療プラットフォーム
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              多くの医療機関と患者様にご利用いただいています
            </p>
          </div>
          <dl className="mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.id} className="flex flex-col bg-gray-400/5 p-8">
                <dt className="text-sm font-semibold leading-6 text-gray-600">{stat.name}</dt>
                <dd className="order-first text-3xl font-bold tracking-tight text-gray-900">
                  {stat.value}
                  {stat.suffix && <span className="text-lg text-gray-600 ml-1">{stat.suffix}</span>}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
