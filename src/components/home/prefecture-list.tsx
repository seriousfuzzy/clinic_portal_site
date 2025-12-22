'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ChevronDownIcon, ChevronRightIcon } from '@heroicons/react/24/outline'

export function PrefectureList() {
  const [expandedPrefectures, setExpandedPrefectures] = useState<Set<string>>(new Set())
  const regions = [
    {
      name: '関東',
      prefectures: [
        { name: '東京都', count: 610 },
        { name: '神奈川県', count: 245 },
        { name: '埼玉県', count: 140 },
        { name: '千葉県', count: 116 },
        { name: '茨城県', count: 46 },
        { name: '栃木県', count: 29 },
        { name: '群馬県', count: 34 },
      ]
    },
    {
      name: '関西',
      prefectures: [
        { name: '大阪府', count: 264 },
        { name: '兵庫県', count: 134 },
        { name: '京都府', count: 63 },
        { name: '滋賀県', count: 15 },
        { name: '奈良県', count: 20 },
        { name: '和歌山県', count: 14 },
      ]
    },
    {
      name: '東海',
      prefectures: [
        { name: '愛知県', count: 153 },
        { name: '静岡県', count: 71 },
        { name: '岐阜県', count: 35 },
        { name: '三重県', count: 28 },
      ]
    },
    {
      name: '北海道・東北',
      prefectures: [
        { name: '北海道', count: 91 },
        { name: '青森県', count: 17 },
        { name: '岩手県', count: 16 },
        { name: '宮城県', count: 26 },
        { name: '秋田県', count: 12 },
        { name: '山形県', count: 12 },
        { name: '福島県', count: 18 },
      ]
    },
    {
      name: '甲信越・北陸',
      prefectures: [
        { name: '山梨県', count: 14 },
        { name: '長野県', count: 20 },
        { name: '新潟県', count: 28 },
        { name: '富山県', count: 26 },
        { name: '石川県', count: 22 },
        { name: '福井県', count: 14 },
      ]
    },
    {
      name: '中国・四国',
      prefectures: [
        { name: '鳥取県', count: 10 },
        { name: '島根県', count: 17 },
        { name: '岡山県', count: 38 },
        { name: '広島県', count: 57 },
        { name: '山口県', count: 22 },
        { name: '徳島県', count: 19 },
        { name: '香川県', count: 17 },
        { name: '愛媛県', count: 33 },
        { name: '高知県', count: 8 },
      ]
    },
    {
      name: '九州・沖縄',
      prefectures: [
        { name: '福岡県', count: 118 },
        { name: '佐賀県', count: 13 },
        { name: '長崎県', count: 19 },
        { name: '熊本県', count: 42 },
        { name: '大分県', count: 24 },
        { name: '宮崎県', count: 13 },
        { name: '鹿児島県', count: 28 },
        { name: '沖縄県', count: 36 },
      ]
    },
  ]

  const togglePrefecture = (prefectureName: string) => {
    setExpandedPrefectures(prev => {
      const newSet = new Set(prev)
      if (newSet.has(prefectureName)) {
        newSet.delete(prefectureName)
      } else {
        newSet.add(prefectureName)
      }
      return newSet
    })
  }

  // 都道府県ごとの市町村データ（サンプル）
  const cities: Record<string, string[]> = {
    '東京都': ['千代田区', '中央区', '港区', '新宿区', '文京区', '台東区', '墨田区', '江東区'],
    '神奈川県': ['横浜市', '川崎市', '相模原市', '横須賀市', '鎌倉市', '藤沢市'],
    '大阪府': ['大阪市', '堺市', '東大阪市', '枚方市', '豊中市', '吹田市'],
    // 他の都道府県も同様に追加可能
  }

  return (
    <div>
      <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">地域から病院・診療所をさがす</h2>
      <div className="space-y-4">
        {regions.map((region) => (
          <div key={region.name}>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">{region.name}</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-3">
              {region.prefectures.map((prefecture) => {
                const isExpanded = expandedPrefectures.has(prefecture.name)
                const hasCities = cities[prefecture.name] && cities[prefecture.name].length > 0
                
                return (
                  <div key={prefecture.name} className="border border-gray-200 rounded-md">
                    <div className="flex items-center justify-between p-3">
                      <Link
                        href={`/search?prefecture=${encodeURIComponent(prefecture.name)}`}
                        className="flex-1 flex items-center justify-between hover:bg-gray-50 transition-colors rounded-md p-2 -m-2"
                      >
                        <span className="text-sm font-medium text-gray-900">
                          {prefecture.name}
                        </span>
                        <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full ml-2">
                          {prefecture.count}
                        </span>
                      </Link>
                      {hasCities && (
                        <button
                          onClick={() => togglePrefecture(prefecture.name)}
                          className="ml-2 p-1 hover:bg-gray-100 rounded"
                        >
                          {isExpanded ? (
                            <ChevronDownIcon className="h-4 w-4 text-gray-600" />
                          ) : (
                            <ChevronRightIcon className="h-4 w-4 text-gray-600" />
                          )}
                        </button>
                      )}
                    </div>
                    {isExpanded && hasCities && (
                      <div className="px-3 pb-3 pt-2 border-t border-gray-100">
                        <div className="grid grid-cols-2 gap-2">
                          {cities[prefecture.name].map((city) => (
                            <Link
                              key={city}
                              href={`/search?prefecture=${encodeURIComponent(prefecture.name)}&city=${encodeURIComponent(city)}`}
                              className="text-xs text-gray-600 hover:text-indigo-600 hover:underline p-1"
                            >
                              {city}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
