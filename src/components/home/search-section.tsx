'use client'

import { useState } from 'react'
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import { Select } from '@/components/ui'

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
    <div className="bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {/* 都道府県選択 */}
            <Select
              id="prefecture"
              label="都道府県"
              value={selectedPrefecture}
              onChange={(e) => setSelectedPrefecture(e.target.value)}
              options={[
                { value: '', label: 'すべて' },
                ...prefectures.map((pref) => ({ value: pref, label: pref })),
              ]}
            />

            {/* 診療科目選択 */}
            <Select
              id="specialty"
              label="診療科"
              value={selectedSpecialty}
              onChange={(e) => setSelectedSpecialty(e.target.value)}
              options={[
                { value: '', label: 'すべて' },
                ...specialties.map((spec) => ({ value: spec, label: spec })),
              ]}
            />

            {/* 検索ボタン */}
            <div className="flex items-end">
              <button
                onClick={handleSearch}
                disabled={isSearching}
                className="w-full inline-flex items-center justify-center rounded-lg bg-indigo-600 px-6 py-2 text-base font-semibold text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
              >
                {isSearching ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                    検索中...
                  </>
                ) : (
                  <>
                    <MagnifyingGlassIcon className="mr-2 h-5 w-5" />
                    検索
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
