'use client'

import { useState } from 'react'
import { useParams, useRouter } from 'next/navigation'
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { Input } from '@/components/ui'
import Link from 'next/link'

export default function CareerApplyPage() {
  const params = useParams()
  const router = useRouter()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    resume: null as File | null,
    coverLetter: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null
    setFormData({
      ...formData,
      resume: file
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // 実際の実装では、APIに送信
    setTimeout(() => {
      alert('応募が完了しました。ご応募ありがとうございます。')
      router.push('/careers')
    }, 1000)
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <div className="bg-gray-50 border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <Link href="/careers" className="text-indigo-600 hover:text-indigo-700 text-sm font-medium mb-4 inline-block">
              ← 採用情報に戻る
            </Link>
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">応募フォーム</h1>
            <p className="mt-4 text-lg text-gray-600">
              ご応募ありがとうございます。以下のフォームにご記入ください。
            </p>
          </div>
        </div>

        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <Input
                type="text"
                name="name"
                id="name"
                label="お名前 *"
                required
                value={formData.name}
                onChange={handleChange}
              />

              <Input
                type="email"
                name="email"
                id="email"
                label="メールアドレス *"
                required
                value={formData.email}
                onChange={handleChange}
              />

              <Input
                type="tel"
                name="phone"
                id="phone"
                label="電話番号 *"
                required
                value={formData.phone}
                onChange={handleChange}
                placeholder="090-1234-5678"
              />

              <div>
                <label htmlFor="resume" className="block text-sm font-medium text-gray-700 mb-2">
                  履歴書・職務経歴書 *
                </label>
                <input
                  type="file"
                  name="resume"
                  id="resume"
                  required
                  accept=".pdf,.doc,.docx"
                  onChange={handleFileChange}
                  className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100"
                />
                <p className="mt-2 text-sm text-gray-500">PDF、Word形式（最大5MB）</p>
              </div>

              <div>
                <label htmlFor="coverLetter" className="block text-sm font-medium text-gray-700 mb-2">
                  志望動機・自己PR *
                </label>
                <textarea
                  name="coverLetter"
                  id="coverLetter"
                  rows={8}
                  required
                  value={formData.coverLetter}
                  onChange={handleChange}
                  placeholder="志望動機や自己PRをご記入ください"
                  className="block w-full rounded-lg border border-gray-300 bg-white text-base text-gray-900 py-3 px-4 shadow-sm focus:border-indigo-600 focus:ring-indigo-600 focus:outline-none"
                />
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-sm text-gray-600">
                  <strong>個人情報の取り扱いについて</strong><br />
                  ご応募いただいた個人情報は、採用選考の目的のみに使用し、適切に管理いたします。
                  採用選考終了後、一定期間を経て適切に廃棄いたします。
                </p>
              </div>

              <div className="flex justify-between items-center">
                <Link
                  href="/careers"
                  className="text-indigo-600 hover:text-indigo-700 text-sm font-medium"
                >
                  キャンセル
                </Link>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-indigo-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? '送信中...' : '応募する'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

