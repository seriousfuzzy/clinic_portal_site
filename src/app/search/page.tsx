'use client'

import { useState, useEffect, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
import { MagnifyingGlassIcon, MapPinIcon, ClockIcon } from '@heroicons/react/24/outline'

interface Clinic {
  id: string
  clinicName: string
  doctorName: string
  prefecture: string
  city: string
  specialties: string[]
  isActive: boolean
}

function SearchContent() {
  const searchParams = useSearchParams()
  const [clinics, setClinics] = useState<Clinic[]>([])
  const [loading, setLoading] = useState(true)
  const [searchQuery, setSearchQuery] = useState(searchParams.get('q') || '')
  const [selectedPrefecture, setSelectedPrefecture] = useState(searchParams.get('prefecture') || '')
  const [selectedSpecialty, setSelectedSpecialty] = useState(searchParams.get('specialty') || '')

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

  useEffect(() => {
    fetchClinics()
  }, [searchQuery, selectedPrefecture, selectedSpecialty])

  const fetchClinics = async () => {
    setLoading(true)
    try {
      const params = new URLSearchParams()
      if (searchQuery) params.set('q', searchQuery)
      if (selectedPrefecture) params.set('prefecture', selectedPrefecture)
      if (selectedSpecialty) params.set('specialty', selectedSpecialty)

      const response = await fetch(`/api/clinics/search?${params.toString()}`)
      if (response.ok) {
        const data = await response.json()
        setClinics(data.clinics)
      }
    } catch (error) {
      console.error('Error fetching clinics:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleSearch = () => {
    fetchClinics()
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* ヘッダー */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-2xl font-bold text-indigo-600">
              オンラインクリニック
            </Link>
          </div>
        </div>
      </div>

      {/* 検索フィルター */}
      <div className="bg-gradient-to-r from-indigo-50 to-purple-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
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
                  <option value="">すべて</option>
                  {prefectures.map((prefecture) => (
                    <option key={prefecture} value={prefecture}>
                      {prefecture}
                    </option>
                  ))}
                </select>
              </div>

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

            <div className="mt-6 flex flex-col sm:flex-row items-center justify-between">
              <button
                onClick={handleSearch}
                className="w-full sm:w-auto inline-flex items-center rounded-lg bg-indigo-600 px-8 py-3 text-base font-semibold text-white shadow-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-all duration-200"
              >
                <MagnifyingGlassIcon className="mr-2 h-5 w-5" />
                検索
              </button>
              
              <div className="mt-4 sm:mt-0 flex items-center text-sm text-gray-600">
                <span className="mr-4">並び替え:</span>
                <select className="rounded-md border-gray-300 text-sm">
                  <option>おすすめ順</option>
                  <option>評価順</option>
                  <option>料金安い順</option>
                  <option>新着順</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 検索結果 */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-gray-900">
            検索結果 {!loading && `(${clinics.length}件)`}
          </h2>
        </div>

        {loading ? (
          <div className="text-center py-12">
            <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-600"></div>
            <p className="mt-2 text-gray-600">検索中...</p>
          </div>
        ) : clinics.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-600">条件に一致するクリニックが見つかりませんでした。</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {clinics.map((clinic) => (
              <div key={clinic.id} className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg hover:border-indigo-200 transition-all duration-200 group">
                {/* クリニック画像プレースホルダー */}
                <div className="h-48 bg-gradient-to-br from-indigo-50 to-purple-50 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-purple-500/10"></div>
                  <div className="absolute top-4 right-4">
                    <div className="flex items-center bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-xs font-medium">
                      <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
                      診察可能
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-4">
                    <div className="bg-white/90 backdrop-blur-sm rounded-lg px-3 py-2">
                      <div className="flex items-center text-sm text-gray-700">
                        <MapPinIcon className="h-4 w-4 mr-1" />
                        {clinic.prefecture} {clinic.city}
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="mb-4">
                    <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors">
                      {clinic.clinicName}
                    </h3>
                    <p className="text-sm text-gray-600 flex items-center">
                      <span className="w-6 h-6 bg-indigo-100 rounded-full flex items-center justify-center mr-2 text-xs font-semibold text-indigo-600">
                        Dr
                      </span>
                      {clinic.doctorName}
                    </p>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {clinic.specialties.slice(0, 3).map((specialty) => (
                      <span
                        key={specialty}
                        className="inline-block bg-indigo-50 text-indigo-700 text-xs px-3 py-1 rounded-full font-medium"
                      >
                        {specialty}
                      </span>
                    ))}
                    {clinic.specialties.length > 3 && (
                      <span className="inline-block bg-gray-100 text-gray-600 text-xs px-3 py-1 rounded-full font-medium">
                        +{clinic.specialties.length - 3}
                      </span>
                    )}
                  </div>
                  
                  {/* 評価とレビュー（仮データ） */}
                  <div className="flex items-center justify-between mb-4 text-sm">
                    <div className="flex items-center">
                      <div className="flex text-yellow-400">
                        {'★'.repeat(5)}
                      </div>
                      <span className="ml-2 text-gray-600">4.8 (124件)</span>
                    </div>
                    <div className="text-gray-500">
                      最短今日診察可能
                    </div>
                  </div>
                  
                  <div className="flex space-x-2">
                    <Link
                      href={`/clinic/${clinic.id}`}
                      className="flex-1 bg-indigo-600 text-white text-center py-3 px-4 rounded-lg text-sm font-semibold hover:bg-indigo-700 transition-colors shadow-sm"
                    >
                      詳細を見る
                    </Link>
                    <Link
                      href={`/booking/${clinic.id}`}
                      className="flex-1 bg-white text-indigo-600 border-2 border-indigo-600 text-center py-3 px-4 rounded-lg text-sm font-semibold hover:bg-indigo-50 transition-colors"
                    >
                      予約する
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default function SearchPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-600"></div>
    </div>}>
      <SearchContent />
    </Suspense>
  )
}
