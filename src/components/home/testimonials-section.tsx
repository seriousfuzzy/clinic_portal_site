import { StarIcon } from '@heroicons/react/20/solid'

export function TestimonialsSection() {
  const testimonials = [
    {
      id: 1,
      name: '田中 美咲',
      age: '32歳 会社員',
      location: '東京都',
      rating: 5,
      comment: '仕事が忙しくてなかなか病院に行けませんでしたが、オンライン診察のおかげで気軽に相談できるようになりました。先生も丁寧で安心できます。',
      treatment: 'ピル処方',
    },
    {
      id: 2,
      name: '佐藤 健太',
      age: '28歳 エンジニア',
      location: '大阪府',
      rating: 5,
      comment: 'AGA治療を始めたくても恥ずかしくて病院に行けずにいました。オンラインなら人目を気にせず相談できて、継続しやすいです。',
      treatment: 'AGA治療',
    },
    {
      id: 3,
      name: '山田 雅子',
      age: '45歳 主婦',
      location: '福岡県',
      rating: 5,
      comment: '地方に住んでいるので専門医が少なく困っていましたが、全国のクリニックから選べるのが嬉しいです。薬も自宅に届くので便利です。',
      treatment: '美容皮膚科',
    },
  ]

  return (
    <div className="bg-gray-50 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            患者様の声
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            実際にサービスをご利用いただいた患者様からの感想をご紹介します
          </p>
        </div>
        
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white rounded-2xl p-8 shadow-sm ring-1 ring-gray-200">
              <div className="flex items-center gap-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <StarIcon key={i} className="h-5 w-5 text-yellow-400" />
                ))}
              </div>
              
              <blockquote className="text-gray-700 mb-6">
                "{testimonial.comment}"
              </blockquote>
              
              <div className="border-t border-gray-200 pt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.age} • {testimonial.location}</div>
                  </div>
                  <div className="text-right">
                    <div className="inline-flex items-center rounded-full bg-indigo-100 px-3 py-1 text-xs font-medium text-indigo-700">
                      {testimonial.treatment}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-sm text-gray-600">
            ※ 個人の感想であり、効果には個人差があります。実際の治療は医師の診断に基づいて行われます。
          </p>
        </div>
      </div>
    </div>
  )
}
