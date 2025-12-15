'use client'

import { useState } from 'react'
import Link from 'next/link'
import { EnvelopeIcon, PhoneIcon, MapPinIcon } from '@heroicons/react/24/outline'
import { Input, Select } from '@/components/ui'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    userType: 'patient'
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setIsSubmitted(true)
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
          userType: 'patient'
        })
      } else {
        alert('送信に失敗しました。もう一度お試しください。')
      }
    } catch (error) {
      alert('送信に失敗しました。もう一度お試しください。')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gray-50">
        {/* ヘッダー */}
        <div className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <Link href="/" className="text-2xl font-bold text-indigo-600">
              オンラインクリニック
            </Link>
          </div>
        </div>

        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              お問い合わせを受け付けました
            </h2>
            <p className="text-gray-600 mb-8">
              お問い合わせいただきありがとうございます。<br />
              内容を確認の上、2-3営業日以内にご返信いたします。
            </p>
            <Link
              href="/"
              className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-md font-medium hover:bg-indigo-700 transition-colors"
            >
              トップページに戻る
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* ヘッダー */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <Link href="/" className="text-2xl font-bold text-indigo-600">
            オンラインクリニック
          </Link>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              お問い合わせ
            </h1>
            <p className="text-lg text-gray-600">
              ご質問やご不明な点がございましたら、お気軽にお問い合わせください。
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {/* 連絡先情報 */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-6">連絡先情報</h3>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <EnvelopeIcon className="h-6 w-6 text-indigo-600 mt-1 mr-3" />
                    <div>
                      <p className="font-medium text-gray-900">メール</p>
                      <p className="text-gray-600">support@clinic-portal.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <PhoneIcon className="h-6 w-6 text-indigo-600 mt-1 mr-3" />
                    <div>
                      <p className="font-medium text-gray-900">電話</p>
                      <p className="text-gray-600">03-1234-5678</p>
                      <p className="text-sm text-gray-500">平日 9:00-18:00</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <MapPinIcon className="h-6 w-6 text-indigo-600 mt-1 mr-3" />
                    <div>
                      <p className="font-medium text-gray-900">住所</p>
                      <p className="text-gray-600">
                        〒100-0001<br />
                        東京都千代田区千代田1-1-1<br />
                        オンラインクリニックビル 5F
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-gray-200">
                  <h4 className="font-medium text-gray-900 mb-3">営業時間</h4>
                  <div className="space-y-1 text-sm text-gray-600">
                    <p>平日: 9:00 - 18:00</p>
                    <p>土曜: 9:00 - 17:00</p>
                    <p>日祝: 休業</p>
                  </div>
                </div>
              </div>
            </div>

            {/* お問い合わせフォーム */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-6">お問い合わせフォーム</h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
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
                  </div>

                  <Select
                    name="userType"
                    id="userType"
                    label="お問い合わせ種別 *"
                    required
                    value={formData.userType}
                    onChange={handleChange}
                    options={[
                      { value: 'patient', label: '患者として' },
                      { value: 'clinic', label: 'クリニックとして' },
                      { value: 'general', label: '一般的なお問い合わせ' },
                      { value: 'technical', label: '技術的なお問い合わせ' },
                      { value: 'business', label: '事業提携について' },
                    ]}
                  />

                  <Input
                    type="text"
                    name="subject"
                    id="subject"
                    label="件名 *"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="お問い合わせの件名を入力してください"
                  />

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      お問い合わせ内容 *
                    </label>
                    <textarea
                      name="message"
                      id="message"
                      rows={6}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="お問い合わせ内容を詳しくご記入ください"
                      className="block w-full rounded-lg border border-gray-300 bg-white text-base text-gray-900 placeholder:text-gray-400 py-3 px-4 shadow-sm focus:border-indigo-600 focus:ring-indigo-600 focus:outline-none"
                    />
                  </div>

                  <div className="bg-gray-50 p-4 rounded-md">
                    <p className="text-sm text-gray-600">
                      <strong>個人情報の取り扱いについて</strong><br />
                      お預かりした個人情報は、お問い合わせへの回答のためにのみ使用し、
                      適切に管理いたします。第三者への提供は行いません。
                    </p>
                  </div>

                  <div className="flex justify-between items-center">
                    <Link
                      href="/"
                      className="text-indigo-600 hover:text-indigo-500 text-sm font-medium"
                    >
                      ← トップページに戻る
                    </Link>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="bg-indigo-600 text-white px-8 py-3 rounded-md font-medium hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? '送信中...' : '送信する'}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
