'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

export function HeroBanner() {
  const banners = [
    {
      id: 1,
      title: 'オンライン診療で、いつもの医療が変わる',
      subtitle: '全国のクリニックと自宅から繋がる',
      image: '/images/hero-banner-1.jpg',
      alt: 'オンライン診療',
    },
    {
      id: 2,
      title: 'あなたの地域のオンクリ',
      subtitle: '地域密着のオンラインクリニック',
      image: '/images/hero-banner-2.jpg',
      alt: '地域密着',
    },
    {
      id: 3,
      title: '簡単・便利・安心',
      subtitle: '24時間予約可能なオンライン診療',
      image: '/images/hero-banner-3.jpg',
      alt: '簡単便利',
    },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % banners.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [banners.length])

  return (
    <div className="relative h-96 sm:h-[500px] lg:h-[600px] overflow-hidden bg-gradient-to-br from-indigo-500 to-purple-600">
      {/* プレースホルダー背景 */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500">
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      {/* コンテンツ */}
      <div className="relative h-full flex items-center justify-center">
        <div className="text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
            {banners[currentIndex].title}
          </h1>
          <p className="text-xl sm:text-2xl text-white/90 mb-8">
            {banners[currentIndex].subtitle}
          </p>
        </div>
      </div>

      {/* インジケーター */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {banners.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-2 rounded-full transition-all ${
              index === currentIndex ? 'w-8 bg-white' : 'w-2 bg-white/50'
            }`}
            aria-label={`スライド ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

