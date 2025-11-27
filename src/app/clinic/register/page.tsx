'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

export default function ClinicRegisterPage() {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    // アカウント情報
    email: '',
    password: '',
    confirmPassword: '',
    // クリニック情報
    clinicName: '',
    doctorName: '',
    medicalLicenseNumber: '',
    phone: '',
    zipCode: '',
    prefecture: '',
    city: '',
    address: '',
    building: '',
    // ファイル
    medicalLicenseFront: null as File | null,
    medicalLicenseBack: null as File | null,
    clinicRegistration: null as File | null,
    doctorPhoto: null as File | null
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

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null
    setFormData({
      ...formData,
      [e.target.name]: file
    })
  }

  const handleZipCodeChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const zipCode = e.target.value
    setFormData({ ...formData, zipCode })

    // 郵便番号から住所を自動入力（簡易実装）
    if (zipCode.length === 7) {
      if (zipCode === '1000001') {
        setFormData(prev => ({
          ...prev,
          prefecture: '東京都',
          city: '千代田区千代田'
        }))
      }
    }
  }

  const handleNextStep = () => {
    if (step === 1) {
      // Step 1のバリデーション
      if (!formData.email || !formData.password || !formData.clinicName || !formData.doctorName) {
        setError('必須項目を入力してください')
        return
      }
      if (formData.password !== formData.confirmPassword) {
        setError('パスワードが一致しません')
        return
      }
      if (formData.password.length < 8) {
        setError('パスワードは8文字以上で入力してください')
        return
      }
    }
    setError('')
    setStep(step + 1)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError('')

    try {
      // ファイルアップロード処理（実際の実装では適切なファイルアップロードサービスを使用）
      const formDataToSend = new FormData()
      
      // 基本情報
      Object.entries(formData).forEach(([key, value]) => {
        if (value !== null && typeof value !== 'object') {
          formDataToSend.append(key, value as string)
        }
      })

      // ファイル
      if (formData.medicalLicenseFront) {
        formDataToSend.append('medicalLicenseFront', formData.medicalLicenseFront)
      }
      if (formData.medicalLicenseBack) {
        formDataToSend.append('medicalLicenseBack', formData.medicalLicenseBack)
      }
      if (formData.clinicRegistration) {
        formDataToSend.append('clinicRegistration', formData.clinicRegistration)
      }
      if (formData.doctorPhoto) {
        formDataToSend.append('doctorPhoto', formData.doctorPhoto)
      }

      const response = await fetch('/api/clinic/register', {
        method: 'POST',
        body: formDataToSend,
      })

      if (response.ok) {
        router.push('/clinic/register/success')
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
      <div className="max-w-3xl mx-auto">
        <div className="bg-white shadow-sm rounded-lg">
          <div className="px-6 py-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900">クリニック登録</h2>
              <p className="mt-2 text-gray-600">
                オンライン診察を提供するクリニックとして登録します
              </p>
              
              {/* ステップインジケーター */}
              <div className="mt-6">
                <div className="flex items-center justify-center space-x-4">
                  <div className={`flex items-center ${step >= 1 ? 'text-indigo-600' : 'text-gray-400'}`}>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step >= 1 ? 'bg-indigo-600 text-white' : 'bg-gray-200'}`}>
                      1
                    </div>
                    <span className="ml-2 text-sm font-medium">基本情報</span>
                  </div>
                  <div className="w-8 h-px bg-gray-300"></div>
                  <div className={`flex items-center ${step >= 2 ? 'text-indigo-600' : 'text-gray-400'}`}>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step >= 2 ? 'bg-indigo-600 text-white' : 'bg-gray-200'}`}>
                      2
                    </div>
                    <span className="ml-2 text-sm font-medium">書類アップロード</span>
                  </div>
                </div>
              </div>
            </div>

            {step === 1 && (
              <div className="space-y-6">
                {/* アカウント情報 */}
                <div className="border-b border-gray-200 pb-6">
                  <h3 className="text-lg font-medium text-gray-900 mb-4">アカウント情報</h3>
                  <div className="grid grid-cols-1 gap-4">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                        メールアドレス *
                      </label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                          パスワード *
                        </label>
                        <input
                          type="password"
                          name="password"
                          id="password"
                          required
                          value={formData.password}
                          onChange={handleChange}
                          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        />
                      </div>
                      <div>
                        <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
                          パスワード確認 *
                        </label>
                        <input
                          type="password"
                          name="confirmPassword"
                          id="confirmPassword"
                          required
                          value={formData.confirmPassword}
                          onChange={handleChange}
                          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* クリニック情報 */}
                <div className="border-b border-gray-200 pb-6">
                  <h3 className="text-lg font-medium text-gray-900 mb-4">クリニック情報</h3>
                  <div className="grid grid-cols-1 gap-4">
                    <div>
                      <label htmlFor="clinicName" className="block text-sm font-medium text-gray-700">
                        クリニック名 *
                      </label>
                      <input
                        type="text"
                        name="clinicName"
                        id="clinicName"
                        required
                        value={formData.clinicName}
                        onChange={handleChange}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="doctorName" className="block text-sm font-medium text-gray-700">
                          医師名 *
                        </label>
                        <input
                          type="text"
                          name="doctorName"
                          id="doctorName"
                          required
                          value={formData.doctorName}
                          onChange={handleChange}
                          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        />
                      </div>
                      <div>
                        <label htmlFor="medicalLicenseNumber" className="block text-sm font-medium text-gray-700">
                          医籍登録番号 *
                        </label>
                        <input
                          type="text"
                          name="medicalLicenseNumber"
                          id="medicalLicenseNumber"
                          required
                          value={formData.medicalLicenseNumber}
                          onChange={handleChange}
                          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                        電話番号 *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        id="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="03-1234-5678"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>
                  </div>
                </div>

                {/* 住所情報 */}
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-4">住所情報</h3>
                  <div className="grid grid-cols-1 gap-4">
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      <div>
                        <label htmlFor="zipCode" className="block text-sm font-medium text-gray-700">
                          郵便番号 *
                        </label>
                        <input
                          type="text"
                          name="zipCode"
                          id="zipCode"
                          required
                          value={formData.zipCode}
                          onChange={handleZipCodeChange}
                          placeholder="1234567"
                          maxLength={7}
                          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        />
                      </div>
                      <div className="sm:col-span-2">
                        <label htmlFor="prefecture" className="block text-sm font-medium text-gray-700">
                          都道府県 *
                        </label>
                        <select
                          name="prefecture"
                          id="prefecture"
                          required
                          value={formData.prefecture}
                          onChange={handleChange}
                          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        >
                          <option value="">選択してください</option>
                          {prefectures.map((prefecture) => (
                            <option key={prefecture} value={prefecture}>
                              {prefecture}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                    <div>
                      <label htmlFor="city" className="block text-sm font-medium text-gray-700">
                        市区町村 *
                      </label>
                      <input
                        type="text"
                        name="city"
                        id="city"
                        required
                        value={formData.city}
                        onChange={handleChange}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>
                    <div>
                      <label htmlFor="address" className="block text-sm font-medium text-gray-700">
                        番地 *
                      </label>
                      <input
                        type="text"
                        name="address"
                        id="address"
                        required
                        value={formData.address}
                        onChange={handleChange}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>
                    <div>
                      <label htmlFor="building" className="block text-sm font-medium text-gray-700">
                        建物名・部屋番号
                      </label>
                      <input
                        type="text"
                        name="building"
                        id="building"
                        value={formData.building}
                        onChange={handleChange}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>
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
                    type="button"
                    onClick={handleNextStep}
                    className="bg-indigo-600 text-white px-6 py-2 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  >
                    次へ
                  </button>
                </div>
              </div>
            )}

            {step === 2 && (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-4">必要書類のアップロード</h3>
                  <p className="text-sm text-gray-600 mb-6">
                    審査に必要な書類をアップロードしてください。すべての書類が必須です。
                  </p>
                  
                  <div className="space-y-6">
                    <div>
                      <label htmlFor="medicalLicenseFront" className="block text-sm font-medium text-gray-700">
                        医師免許証（表面） *
                      </label>
                      <input
                        type="file"
                        name="medicalLicenseFront"
                        id="medicalLicenseFront"
                        accept="image/*,.pdf"
                        required
                        onChange={handleFileChange}
                        className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="medicalLicenseBack" className="block text-sm font-medium text-gray-700">
                        医師免許証（裏面） *
                      </label>
                      <input
                        type="file"
                        name="medicalLicenseBack"
                        id="medicalLicenseBack"
                        accept="image/*,.pdf"
                        required
                        onChange={handleFileChange}
                        className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="clinicRegistration" className="block text-sm font-medium text-gray-700">
                        診療所開設届または法人登記簿謄本 *
                      </label>
                      <input
                        type="file"
                        name="clinicRegistration"
                        id="clinicRegistration"
                        accept="image/*,.pdf"
                        required
                        onChange={handleFileChange}
                        className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="doctorPhoto" className="block text-sm font-medium text-gray-700">
                        医師の顔写真（任意）
                      </label>
                      <input
                        type="file"
                        name="doctorPhoto"
                        id="doctorPhoto"
                        accept="image/*"
                        onChange={handleFileChange}
                        className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100"
                      />
                    </div>
                  </div>
                </div>

                <div className="bg-yellow-50 border border-yellow-200 rounded-md p-4">
                  <div className="flex">
                    <div className="ml-3">
                      <h3 className="text-sm font-medium text-yellow-800">
                        登録料について
                      </h3>
                      <div className="mt-2 text-sm text-yellow-700">
                        <p>• 初回登録料: ¥50,000</p>
                        <p>• 年間利用料: ¥120,000</p>
                        <p>審査完了後、決済手続きのご案内をお送りします。</p>
                      </div>
                    </div>
                  </div>
                </div>

                {error && (
                  <div className="text-red-600 text-sm text-center bg-red-50 p-3 rounded-md">
                    {error}
                  </div>
                )}

                <div className="flex justify-between">
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="text-sm text-indigo-600 hover:text-indigo-500"
                  >
                    ← 戻る
                  </button>
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="bg-indigo-600 text-white px-6 py-2 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:opacity-50"
                  >
                    {isLoading ? '登録中...' : '登録申請する'}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
