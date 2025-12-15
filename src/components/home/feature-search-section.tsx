'use client'

import { useState } from 'react'
import Link from 'next/link'

export function FeatureSearchSection() {
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([])

  const features = {
    '診察時間': [
      { name: '土曜日診察可', count: 1740 },
      { name: '日曜日診察可', count: 258 },
      { name: '祝日診察可', count: 88 },
      { name: '18時以降診察可', count: 933 },
      { name: '20時以降診察可', count: 98 },
    ],
    '予約可能日': [
      { name: '今日予約可', count: 623 },
      { name: '明日予約可', count: 1566 },
    ],
    'トピック': [
      { name: 'セカンドオピニオン受診可能', count: 97 },
      { name: '初診オンライン診療可能', count: 1375 },
    ],
    '医療機関の特徴': [
      { name: '駅近', count: 522 },
      { name: '駐車場あり', count: 620 },
      { name: '女性医師', count: 328 },
      { name: '往診可', count: 184 },
      { name: 'バリアフリー', count: 415 },
      { name: 'キッズスペースあり', count: 112 },
      { name: 'クレジットカード対応', count: 637 },
      { name: 'マイナ受付', count: 698 },
      { name: '電子処方箋対応', count: 121 },
      { name: '院内感染対策', count: 596 },
      { name: '電子マネー対応', count: 300 },
    ],
    '対応言語': [
      { name: '対応言語(英語)', count: 170 },
      { name: '対応言語(中国語)', count: 29 },
      { name: '対応言語(韓国語)', count: 13 },
    ],
    '診療内容': [
      { name: 'アレルギーに関する診療・相談', count: 326 },
      { name: '女性特有の診療・相談', count: 354 },
      { name: '発熱外来', count: 312 },
      { name: '男性特有の診療・相談', count: 323 },
      { name: '健診・検査', count: 0 },
      { name: '予防接種', count: 0 },
    ],
  }

  const toggleFeature = (featureName: string) => {
    setSelectedFeatures(prev => 
      prev.includes(featureName)
        ? prev.filter(f => f !== featureName)
        : [...prev, featureName]
    )
  }

  const handleSearch = () => {
    const params = new URLSearchParams()
    selectedFeatures.forEach(feature => {
      params.append('feature', feature)
    })
    window.location.href = `/search?${params.toString()}`
  }

  return (
    <div className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">特徴からさがす</h2>
        
        <div className="space-y-8">
          {Object.entries(features).map(([category, items]) => (
            <div key={category}>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{category}</h3>
              <div className="flex flex-wrap gap-3">
                {items.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => toggleFeature(item.name)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                      selectedFeatures.includes(item.name)
                        ? 'bg-indigo-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {item.name}
                    {item.count > 0 && (
                      <span className="ml-2 text-xs opacity-75">({item.count})</span>
                    )}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>

        {selectedFeatures.length > 0 && (
          <div className="mt-8 text-center">
            <button
              onClick={handleSearch}
              className="inline-flex items-center rounded-lg bg-indigo-600 px-8 py-4 text-base font-semibold text-white hover:bg-indigo-700 transition-colors"
            >
              検索する
            </button>
            <button
              onClick={() => setSelectedFeatures([])}
              className="ml-4 inline-flex items-center rounded-lg border border-gray-300 px-8 py-4 text-base font-semibold text-gray-700 hover:bg-gray-50 transition-colors"
            >
              リセット
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

