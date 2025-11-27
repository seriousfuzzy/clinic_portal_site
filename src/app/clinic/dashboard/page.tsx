'use client'

import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { 
  CalendarIcon, 
  UserGroupIcon, 
  CurrencyYenIcon, 
  ClockIcon,
  ExclamationTriangleIcon 
} from '@heroicons/react/24/outline'

interface DashboardStats {
  todayAppointments: number
  totalPatients: number
  monthlyRevenue: number
  pendingPrescriptions: number
  clinicStatus: string
}

export default function ClinicDashboard() {
  const { data: session, status } = useSession()
  const router = useRouter()
  const [stats, setStats] = useState<DashboardStats | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (status === 'loading') return
    if (!session || session.user.role !== 'CLINIC') {
      router.push('/auth/signin')
      return
    }
    fetchDashboardData()
  }, [session, status, router])

  const fetchDashboardData = async () => {
    try {
      const response = await fetch('/api/clinic/dashboard')
      if (response.ok) {
        const data = await response.json()
        setStats(data.stats)
      }
    } catch (error) {
      console.error('Error fetching dashboard data:', error)
    } finally {
      setLoading(false)
    }
  }

  if (status === 'loading' || loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-600"></div>
      </div>
    )
  }

  if (!stats) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <p className="text-gray-600">データの読み込みに失敗しました</p>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* ヘッダー */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-gray-900">クリニックダッシュボード</h1>
            <div className="flex space-x-4">
              <Link
                href="/clinic/calendar"
                className="bg-indigo-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-indigo-700"
              >
                予約カレンダー
              </Link>
              <Link
                href="/clinic/settings"
                className="bg-white text-gray-700 border border-gray-300 px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-50"
              >
                設定
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* ステータス警告 */}
        {stats.clinicStatus !== 'APPROVED' && (
          <div className="mb-6 bg-yellow-50 border border-yellow-200 rounded-md p-4">
            <div className="flex">
              <ExclamationTriangleIcon className="h-5 w-5 text-yellow-400" />
              <div className="ml-3">
                <h3 className="text-sm font-medium text-yellow-800">
                  {stats.clinicStatus === 'PENDING' ? '審査待ち' :
                   stats.clinicStatus === 'REJECTED' ? '審査不合格' :
                   'アカウント停止中'}
                </h3>
                <div className="mt-2 text-sm text-yellow-700">
                  {stats.clinicStatus === 'PENDING' ? 
                    '現在、提出いただいた書類の審査を行っております。審査完了まで今しばらくお待ちください。' :
                   stats.clinicStatus === 'REJECTED' ?
                    '審査の結果、登録を承認できませんでした。詳細はメールをご確認ください。' :
                    'アカウントが停止されています。詳細はサポートまでお問い合わせください。'
                  }
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 概要カード */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="flex items-center">
              <CalendarIcon className="h-8 w-8 text-indigo-600" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">本日の予約</p>
                <p className="text-2xl font-bold text-gray-900">{stats.todayAppointments}</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="flex items-center">
              <UserGroupIcon className="h-8 w-8 text-green-600" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">総患者数</p>
                <p className="text-2xl font-bold text-gray-900">{stats.totalPatients}</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="flex items-center">
              <CurrencyYenIcon className="h-8 w-8 text-purple-600" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">今月の売上</p>
                <p className="text-2xl font-bold text-gray-900">¥{stats.monthlyRevenue.toLocaleString()}</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="flex items-center">
              <ClockIcon className="h-8 w-8 text-yellow-600" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">処方待ち</p>
                <p className="text-2xl font-bold text-gray-900">{stats.pendingPrescriptions}</p>
              </div>
            </div>
          </div>
        </div>

        {/* メインコンテンツ */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* 今日の予約 */}
          <div className="lg:col-span-2 bg-white rounded-lg shadow-sm border border-gray-200">
            <div className="px-6 py-4 border-b border-gray-200">
              <h3 className="text-lg font-medium text-gray-900">今日の予約</h3>
            </div>
            <div className="p-6">
              {stats.todayAppointments === 0 ? (
                <p className="text-gray-500 text-center py-8">本日の予約はありません</p>
              ) : (
                <div className="space-y-4">
                  {/* 実際の実装では、今日の予約データを表示 */}
                  <p className="text-gray-600">予約データを読み込み中...</p>
                </div>
              )}
            </div>
          </div>

          {/* サイドバー - お知らせ・広告 */}
          <div className="space-y-6">
            {/* お知らせ */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200">
              <div className="px-6 py-4 border-b border-gray-200">
                <h3 className="text-lg font-medium text-gray-900">お知らせ</h3>
              </div>
              <div className="p-6">
                <div className="space-y-3">
                  <div className="text-sm">
                    <p className="font-medium text-gray-900">システムメンテナンスのお知らせ</p>
                    <p className="text-gray-600">2024年12月1日 2:00-4:00</p>
                  </div>
                  <div className="text-sm">
                    <p className="font-medium text-gray-900">新機能リリース</p>
                    <p className="text-gray-600">処方箋管理機能を追加しました</p>
                  </div>
                </div>
              </div>
            </div>

            {/* 広告枠 */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200">
              <div className="px-6 py-4 border-b border-gray-200">
                <h3 className="text-lg font-medium text-gray-900">おすすめ</h3>
              </div>
              <div className="p-6">
                <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg p-4 text-white">
                  <h4 className="font-medium">医療機器レンタル</h4>
                  <p className="text-sm opacity-90 mt-1">最新の診療機器を月額でレンタル</p>
                  <button className="mt-2 bg-white text-blue-600 px-3 py-1 rounded text-sm font-medium">
                    詳細を見る
                  </button>
                </div>
              </div>
            </div>

            {/* クイックアクション */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200">
              <div className="px-6 py-4 border-b border-gray-200">
                <h3 className="text-lg font-medium text-gray-900">クイックアクション</h3>
              </div>
              <div className="p-6 space-y-3">
                <Link
                  href="/clinic/appointments"
                  className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-md"
                >
                  予約一覧を見る
                </Link>
                <Link
                  href="/clinic/prescriptions"
                  className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-md"
                >
                  処方履歴を見る
                </Link>
                <Link
                  href="/clinic/patients"
                  className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-md"
                >
                  患者一覧を見る
                </Link>
                <Link
                  href="/clinic/medications"
                  className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-md"
                >
                  薬品管理
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
