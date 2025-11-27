'use client'

import { useState } from 'react'
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'

export function SearchSection() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedPrefecture, setSelectedPrefecture] = useState('')
  const [selectedSpecialty, setSelectedSpecialty] = useState('')
  const [isSearching, setIsSearching] = useState(false)

  const prefectures = [
    '北海道', '青森県', '岩手県', '宮城県', '秋田県', '山形県', '福島県',
    '茨城県', '栃木県', '群馬県', '埼玉県', '千葉県', '東京都', '神奈川県',
    '新潟県', '富山県', '石川県', '福井県', '山梨県', '長野県', '岐阜県',
    '静岡県', '愛知県', '三重県', '滋賀県', '京都府', '大阪府', '兵庫県',
    '奈良県', '和歌山県', '鳥取県', '島根県', '岡山県', '広島県', '山口県',
    '徳島県', '香川県', '愛媛県', '高知県', '福岡県', '佐賀県', '長崎県',
    '熊本県', '大分県', '宮崎県', '鹿児島県', '沖縄県'
  ]

  const specialties = [
    'ED治療', 'AGA治療', 'ピル処方', '美容皮膚科', 'ダイエット外来',
    '内科', '皮膚科', '精神科', '婦人科', '泌尿器科'
  ]

  const handleSearch = () => {
    setIsSearching(true)
    const params = new URLSearchParams()
    if (searchQuery) params.set('q', searchQuery)
    if (selectedPrefecture) params.set('prefecture', selectedPrefecture)
    if (selectedSpecialty) params.set('specialty', selectedSpecialty)
    
    setTimeout(() => {
      window.location.href = `/search?${params.toString()}`
    }, 500)
  }

  return (
    <div className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            あなたに最適なクリニックを見つけよう
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            お住まいの地域や診療科目から、1,200以上のクリニックを検索できます
          </p>
        </div>

        <div className="mt-12 max-w-5xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
              {/* 検索キーワード */}
              <div className="md:col-span-2">
                <label htmlFor="search" className="block text-sm font-medium text-gray-700 mb-2">
                  🔍 キーワード検索
                </label>
                <input
                  type="text"
                  id="search"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="クリニック名、医師名、症状など"
                  className="block w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm py-3 px-4"
                />
              </div>

              {/* 都道府県選択 */}
              <div>
                <label htmlFor="prefecture" className="block text-sm font-medium text-gray-700 mb-2">
                  📍 都道府県
                </label>
                <select
                  id="prefecture"
                  value={selectedPrefecture}
                  onChange={(e) => setSelectedPrefecture(e.target.value)}
                  className="block w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm py-3 px-4"
                >
                  <option value="">全国</option>
                  {prefectures.map((prefecture) => (
                    <option key={prefecture} value={prefecture}>
                      {prefecture}
                    </option>
                  ))}
                </select>
              </div>

              {/* 診療科目選択 */}
              <div>
                <label htmlFor="specialty" className="block text-sm font-medium text-gray-700 mb-2">
                  🏥 診療科目
                </label>
                <select
                  id="specialty"
                  value={selectedSpecialty}
                  onChange={(e) => setSelectedSpecialty(e.target.value)}
                  className="block w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm py-3 px-4"
                >
                  <option value="">すべて</option>
                  {specialties.map((specialty) => (
                    <option key={specialty} value={specialty}>
                      {specialty}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="mt-8 text-center">
              <button
                onClick={handleSearch}
                disabled={isSearching}
                className="inline-flex items-center rounded-lg bg-indigo-600 px-8 py-4 text-base font-semibold text-white shadow-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
              >
                {isSearching ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                    検索中...
                  </>
                ) : (
                  <>
                    <MagnifyingGlassIcon className="mr-2 h-5 w-5" />
                    クリニックを検索
                  </>
                )}
              </button>
            </div>
          </div>

          {/* 人気の検索キーワード */}
          <div className="mt-8 text-center">
            <p className="text-sm text-gray-600 mb-4">人気の検索キーワード</p>
            <div className="flex flex-wrap justify-center gap-2">
              {['ED治療', 'AGA治療', 'ピル処方', '美容皮膚科', 'ダイエット外来'].map((keyword) => (
                <button
                  key={keyword}
                  onClick={() => {
                    setSelectedSpecialty(keyword)
                    handleSearch()
                  }}
                  className="inline-flex items-center rounded-full bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-indigo-100 hover:text-indigo-700 transition-colors"
                >
                  {keyword}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
