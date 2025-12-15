'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { Input, Select, DateInput } from '@/components/ui'

export default function PatientRegisterPage() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    firstName: '',
    lastName: '',
    firstNameKana: '',
    lastNameKana: '',
    birthDate: '',
    gender: 'MALE',
    phone: '',
    zipCode: '',
    prefecture: '',
    city: '',
    address: '',
    building: ''
  })
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')
  const router = useRouter()

  const prefectures = [
    '北海道', '青森県', '岩手県', '宮城県', '秋田県', '山形県', '福島県',
    '茨城県', '栃木県', '群馬県', '埼玉県', '千葉県', '東京都', '神奈川県',
    '新潟県', '富山県', '石川県', '福井県', '山梨県', '長野県', '岐阜県',
    '静岡県', '愛知県', '三重県', '滋賀県', '京都府', '大阪府', '兵庫県',
    '奈良県', '和歌山県', '鳥取県', '島根県', '岡山県', '広島県', '山口県',
    '徳島県', '香川県', '愛媛県', '高知県', '福岡県', '佐賀県', '長崎県',
    '熊本県', '大分県', '宮崎県', '鹿児島県', '沖縄県'
  ]

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleZipCodeChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const zipCode = e.target.value
    setFormData({ ...formData, zipCode })

    // 郵便番号から住所を自動入力（簡易実装）
    if (zipCode.length === 7) {
      // 実際の実装では郵便番号APIを使用
      // ここでは例として固定値を設定
      if (zipCode === '1000001') {
        setFormData(prev => ({
          ...prev,
          prefecture: '東京都',
          city: '千代田区千代田'
        }))
      }
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError('')

    // バリデーション
    if (formData.password !== formData.confirmPassword) {
      setError('パスワードが一致しません')
      setIsLoading(false)
      return
    }

    if (formData.password.length < 8) {
      setError('パスワードは8文字以上で入力してください')
      setIsLoading(false)
      return
    }

    try {
      const response = await fetch('/api/patient/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        router.push('/auth/signin?message=registration-success')
      } else {
        const data = await response.json()
        setError(data.error || '登録に失敗しました')
      }
    } catch (error) {
      setError('登録に失敗しました')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white shadow-sm rounded-lg">
          <div className="px-6 py-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900">患者登録</h2>
              <p className="mt-2 text-gray-600">
                オンライン診察を受けるための患者登録を行います
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* アカウント情報 */}
              <div className="border-b border-gray-200 pb-6">
                <h3 className="text-lg font-medium text-gray-900 mb-4">アカウント情報</h3>
                <div className="grid grid-cols-1 gap-4">
                  <Input
                    type="email"
                    name="email"
                    id="email"
                    label="メールアドレス *"
                    required
                    value={formData.email}
                    onChange={handleChange}
                  />
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Input
                      type="password"
                      name="password"
                      id="password"
                      label="パスワード *"
                      required
                      value={formData.password}
                      onChange={handleChange}
                    />
                    <Input
                      type="password"
                      name="confirmPassword"
                      id="confirmPassword"
                      label="パスワード確認 *"
                      required
                      value={formData.confirmPassword}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>

              {/* 基本情報 */}
              <div className="border-b border-gray-200 pb-6">
                <h3 className="text-lg font-medium text-gray-900 mb-4">基本情報</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Input
                    type="text"
                    name="lastName"
                    id="lastName"
                    label="姓 *"
                    required
                    value={formData.lastName}
                    onChange={handleChange}
                  />
                  <Input
                    type="text"
                    name="firstName"
                    id="firstName"
                    label="名 *"
                    required
                    value={formData.firstName}
                    onChange={handleChange}
                  />
                  <Input
                    type="text"
                    name="lastNameKana"
                    id="lastNameKana"
                    label="セイ *"
                    required
                    value={formData.lastNameKana}
                    onChange={handleChange}
                    placeholder="カタカナで入力"
                  />
                  <Input
                    type="text"
                    name="firstNameKana"
                    id="firstNameKana"
                    label="メイ *"
                    required
                    value={formData.firstNameKana}
                    onChange={handleChange}
                    placeholder="カタカナで入力"
                  />
                  <DateInput
                    name="birthDate"
                    id="birthDate"
                    label="生年月日 *"
                    required
                    value={formData.birthDate}
                    onChange={handleChange}
                  />
                  <Select
                    name="gender"
                    id="gender"
                    label="性別 *"
                    required
                    value={formData.gender}
                    onChange={handleChange}
                    options={[
                      { value: 'MALE', label: '男性' },
                      { value: 'FEMALE', label: '女性' },
                      { value: 'OTHER', label: 'その他' },
                    ]}
                  />
                  <div className="sm:col-span-2">
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
                  </div>
                </div>
              </div>

              {/* 住所情報 */}
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-4">住所情報</h3>
                <div className="grid grid-cols-1 gap-4">
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <Input
                      type="text"
                      name="zipCode"
                      id="zipCode"
                      label="郵便番号 *"
                      required
                      value={formData.zipCode}
                      onChange={handleZipCodeChange}
                      placeholder="1234567"
                      maxLength={7}
                    />
                    <div className="sm:col-span-2">
                      <Select
                        name="prefecture"
                        id="prefecture"
                        label="都道府県 *"
                        required
                        value={formData.prefecture}
                        onChange={handleChange}
                        options={[
                          { value: '', label: '選択してください' },
                          ...prefectures.map((pref) => ({ value: pref, label: pref })),
                        ]}
                      />
                    </div>
                  </div>
                  <Input
                    type="text"
                    name="city"
                    id="city"
                    label="市区町村 *"
                    required
                    value={formData.city}
                    onChange={handleChange}
                  />
                  <Input
                    type="text"
                    name="address"
                    id="address"
                    label="番地 *"
                    required
                    value={formData.address}
                    onChange={handleChange}
                  />
                  <Input
                    type="text"
                    name="building"
                    id="building"
                    label="建物名・部屋番号"
                    value={formData.building}
                    onChange={handleChange}
                  />
                </div>
              </div>

              {error && (
                <div className="text-red-600 text-sm text-center bg-red-50 p-3 rounded-md">
                  {error}
                </div>
              )}

              <div className="flex justify-between">
                <Link
                  href="/auth/signup"
                  className="text-sm text-indigo-600 hover:text-indigo-500"
                >
                  ← 戻る
                </Link>
                <button
                  type="submit"
                  disabled={isLoading}
                  className="bg-indigo-600 text-white px-6 py-2 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:opacity-50"
                >
                  {isLoading ? '登録中...' : '登録する'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
