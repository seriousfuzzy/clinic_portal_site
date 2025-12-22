'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

interface ClinicBanner {
  id: string
  clinicName: string
  imageUrl?: string
  link: string
}

export function ClinicBannerSlider() {
  // サンプルデータ（実際にはAPIから取得）
  const [banners, setBanners] = useState<ClinicBanner[]>([])
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    // 実際の実装では、APIから登録済みクリニックのバナーを取得
    // 最初は登録順に表示、後で広告料金を取る
    const fetchBanners = async () => {
      try {
        const response = await fetch('/api/clinics/banners')
        if (response.ok) {
          const data = await response.json()
          setBanners(data.banners || [])
        }
      } catch (error) {
        console.error('Error fetching banners:', error)
      }
    }
    fetchBanners()
  }, [])

  useEffect(() => {
    if (banners.length > 0) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % banners.length)
      }, 4000)
      return () => clearInterval(interval)
    }
  }, [banners.length])

  if (banners.length === 0) {
    return null
  }

  return (
    <div className="bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">登録クリニック</h2>
        <div className="relative">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {banners.slice(currentIndex, currentIndex + 4).map((banner) => (
              <Link
                key={banner.id}
                href={banner.link}
                className="block bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow"
              >
                <div className="aspect-video bg-gradient-to-br from-indigo-100 to-purple-100 flex items-center justify-center">
                  {banner.imageUrl ? (
                    <img
                      src={banner.imageUrl}
                      alt={banner.clinicName}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <span className="text-2xl">🏥</span>
                  )}
                </div>
                <div className="p-3">
                  <p className="text-sm font-medium text-gray-900 text-center">
                    {banner.clinicName}
                  </p>
                </div>
              </Link>
            ))}
          </div>
          
          {banners.length > 4 && (
            <div className="absolute top-1/2 -translate-y-1/2 left-0 -ml-4">
              <button
                onClick={() => setCurrentIndex((prev) => (prev - 1 + banners.length) % banners.length)}
                className="bg-white rounded-full p-2 shadow-lg hover:bg-gray-50"
              >
                <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
            </div>
          )}
          
          {banners.length > 4 && (
            <div className="absolute top-1/2 -translate-y-1/2 right-0 -mr-4">
              <button
                onClick={() => setCurrentIndex((prev) => (prev + 1) % banners.length)}
                className="bg-white rounded-full p-2 shadow-lg hover:bg-gray-50"
              >
                <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

