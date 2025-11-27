import Link from 'next/link'
import { PlayCircleIcon } from '@heroicons/react/24/outline'

export function Hero() {
  return (
    <div className="relative bg-gradient-to-br from-indigo-50 via-white to-cyan-50 overflow-hidden">
      {/* 背景装飾 */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full h-full">
          <div className="w-full h-full bg-gradient-to-br from-indigo-100/20 to-purple-100/20 transform rotate-3"></div>
        </div>
      </div>
      
      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* 左側：テキストコンテンツ */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center rounded-full bg-indigo-100 px-4 py-2 text-sm font-medium text-indigo-700 mb-6">
              <span className="mr-2">🏥</span>
              いつもの医療が変わるプラットフォーム
            </div>
            
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
              <span className="block">オンライン診察で</span>
              <span className="block text-indigo-600">全国のクリニックと</span>
              <span className="block">繋がる</span>
            </h1>
            
            <p className="mt-6 text-lg leading-8 text-gray-600 max-w-2xl">
              自宅にいながら専門医の診察を受けられます。ED治療・AGA治療・美容皮膚科など、
              様々な診療科目に対応。簡単な審査でクリニックも開業できます。
            </p>
            
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <Link
                href="/patient/register"
                className="w-full sm:w-auto rounded-lg bg-indigo-600 px-8 py-4 text-base font-semibold text-white shadow-lg hover:bg-indigo-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition-all duration-200"
              >
                患者として始める
              </Link>
              <Link
                href="/clinic/register"
                className="w-full sm:w-auto rounded-lg border-2 border-indigo-600 px-8 py-4 text-base font-semibold text-indigo-600 hover:bg-indigo-600 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition-all duration-200"
              >
                クリニック登録
              </Link>
            </div>
            
            <div className="mt-8 flex items-center justify-center lg:justify-start">
              <button className="flex items-center text-indigo-600 hover:text-indigo-700 font-medium">
                <PlayCircleIcon className="h-6 w-6 mr-2" />
                サービス紹介動画を見る
              </button>
            </div>
          </div>
          
          {/* 右側：画像・イラスト */}
          <div className="relative">
            <div className="relative mx-auto w-full max-w-lg">
              {/* メインの画像プレースホルダー */}
              <div className="relative bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl p-8 shadow-2xl">
                <div className="bg-white rounded-xl p-6 space-y-4">
                  {/* スマートフォンのモックアップ */}
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center">
                      <span className="text-indigo-600 font-semibold">Dr</span>
                    </div>
                    <div>
                      <div className="h-3 bg-gray-200 rounded w-24 mb-2"></div>
                      <div className="h-2 bg-gray-100 rounded w-16"></div>
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="h-2 bg-gray-200 rounded w-full mb-2"></div>
                    <div className="h-2 bg-gray-200 rounded w-3/4 mb-2"></div>
                    <div className="h-2 bg-gray-200 rounded w-1/2"></div>
                  </div>
                  
                  <div className="flex space-x-2">
                    <div className="flex-1 bg-indigo-100 rounded-lg p-3">
                      <div className="h-2 bg-indigo-300 rounded w-full"></div>
                    </div>
                    <div className="w-12 h-12 bg-indigo-600 rounded-lg flex items-center justify-center">
                      <span className="text-white text-xl">📹</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* 装飾要素 */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-yellow-400 rounded-full opacity-20"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-pink-400 rounded-full opacity-20"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
