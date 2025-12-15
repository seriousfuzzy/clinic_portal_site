'use client'

import { useState } from 'react'
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { Input, Select } from '@/components/ui'
import Link from 'next/link'
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'

export default function SymptomCheckerPage() {
  const [selectedSymptoms, setSelectedSymptoms] = useState<string[]>([])
  const [searchQuery, setSearchQuery] = useState('')
  const [results, setResults] = useState<Array<{ specialty: string; description: string }> | null>(null)

  const commonSymptoms = [
    '発熱', '頭痛', '腹痛', '咳', '鼻水', 'のどの痛み', 'めまい', '吐き気',
    '下痢', '便秘', 'かゆみ', '発疹', '倦怠感', '胸の痛み', '息切れ', '動悸'
  ]

  const handleSymptomToggle = (symptom: string) => {
    setSelectedSymptoms(prev => 
      prev.includes(symptom)
        ? prev.filter(s => s !== symptom)
        : [...prev, symptom]
    )
  }

  const handleSearch = () => {
    // 実際の実装では、APIを呼び出して症状から診療科を提案
    const mockResults = [
      {
        specialty: '内科',
        description: '発熱や頭痛などの一般的な症状は内科で診察できます。',
      },
      {
        specialty: '皮膚科',
        description: '発疹やかゆみなどの皮膚の症状は皮膚科で診察できます。',
      },
    ]
    setResults(mockResults)
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <div className="bg-indigo-50 border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <p className="text-sm text-indigo-600 font-semibold">症状チェッカー</p>
            <h1 className="mt-2 text-3xl sm:text-4xl font-bold text-gray-900">症状チェッカー</h1>
            <p className="mt-4 text-lg text-gray-600">
              気になる症状から関連する病気を調べ、受診に最適な診療科の病院・診療所をご提案します
            </p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* 症状選択 */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">症状を選択してください</h2>
            <div className="bg-white border border-gray-200 rounded-lg p-6 mb-6">
              <div className="flex flex-wrap gap-3">
                {commonSymptoms.map((symptom) => (
                  <button
                    key={symptom}
                    onClick={() => handleSymptomToggle(symptom)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                      selectedSymptoms.includes(symptom)
                        ? 'bg-indigo-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {symptom}
                  </button>
                ))}
              </div>
            </div>

            <div className="mb-6">
              <Input
                type="text"
                id="search"
                label="その他の症状を入力"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="症状を入力してください"
              />
            </div>

            <button
              onClick={handleSearch}
              disabled={selectedSymptoms.length === 0 && !searchQuery}
              className="w-full inline-flex items-center justify-center rounded-lg bg-indigo-600 px-8 py-4 text-base font-semibold text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              <MagnifyingGlassIcon className="mr-2 h-5 w-5" />
              診療科を検索
            </button>
          </div>

          {/* 検索結果 */}
          {results && (
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">おすすめの診療科</h2>
              <div className="space-y-4">
                {results.map((result, index) => (
                  <div
                    key={index}
                    className="bg-white border border-gray-200 rounded-lg p-6"
                  >
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{result.specialty}</h3>
                    <p className="text-gray-600 mb-4">{result.description}</p>
                    <Link
                      href={`/search?specialty=${encodeURIComponent(result.specialty)}`}
                      className="inline-flex items-center text-indigo-600 hover:text-indigo-700 font-medium"
                    >
                      {result.specialty}のクリニックを探す
                      <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 注意事項 */}
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
            <h3 className="font-semibold text-gray-900 mb-2">ご注意</h3>
            <p className="text-sm text-gray-700">
              症状チェッカーは参考情報を提供するものであり、診断を行うものではありません。
              緊急の場合は、すぐに医療機関を受診するか、救急車を呼んでください。
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

