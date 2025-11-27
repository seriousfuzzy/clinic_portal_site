'use client'

import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { CalendarIcon, ClockIcon, BeakerIcon, CreditCardIcon } from '@heroicons/react/24/outline'

interface Appointment {
  id: string
  clinicName: string
  doctorName: string
  appointmentDate: string
  startTime: string
  status: string
}

interface Prescription {
  id: string
  clinicName: string
  totalAmount: number
  status: string
  createdAt: string
}

export default function PatientDashboard() {
  const { data: session, status } = useSession()
  const router = useRouter()
  const [appointments, setAppointments] = useState<Appointment[]>([])
  const [prescriptions, setPrescriptions] = useState<Prescription[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (status === 'loading') return
    if (!session || session.user.role !== 'PATIENT') {
      router.push('/auth/signin')
      return
    }
    fetchDashboardData()
  }, [session, status, router])

  const fetchDashboardData = async () => {
    try {
      const [appointmentsRes, prescriptionsRes] = await Promise.all([
        fetch('/api/patient/appointments'),
        fetch('/api/patient/prescriptions')
      ])

      if (appointmentsRes.ok) {
        const appointmentsData = await appointmentsRes.json()
        setAppointments(appointmentsData.appointments)
      }

      if (prescriptionsRes.ok) {
        const prescriptionsData = await prescriptionsRes.json()
        setPrescriptions(prescriptionsData.prescriptions)
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

  return (
    <div className="min-h-screen bg-gray-50">
      {/* ヘッダー */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-gray-900">患者ダッシュボード</h1>
            <Link
              href="/search"
              className="bg-indigo-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-indigo-700"
            >
              クリニックを探す
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* 概要カード */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="flex items-center">
              <CalendarIcon className="h-8 w-8 text-indigo-600" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">今月の予約</p>
                <p className="text-2xl font-bold text-gray-900">
                  {appointments.filter(a => new Date(a.appointmentDate).getMonth() === new Date().getMonth()).length}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="flex items-center">
              <ClockIcon className="h-8 w-8 text-green-600" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">次回予約</p>
                <p className="text-2xl font-bold text-gray-900">
                  {appointments.filter(a => new Date(a.appointmentDate) > new Date()).length > 0 ? '有り' : '無し'}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="flex items-center">
              <BeakerIcon className="h-8 w-8 text-purple-600" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">処方履歴</p>
                <p className="text-2xl font-bold text-gray-900">{prescriptions.length}</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="flex items-center">
              <CreditCardIcon className="h-8 w-8 text-yellow-600" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">未払い</p>
                <p className="text-2xl font-bold text-gray-900">
                  {prescriptions.filter(p => p.status === 'PRESCRIBED').length}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* 予約一覧 */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200">
            <div className="px-6 py-4 border-b border-gray-200">
              <h3 className="text-lg font-medium text-gray-900">予約一覧</h3>
            </div>
            <div className="p-6">
              {appointments.length === 0 ? (
                <p className="text-gray-500 text-center py-4">予約はありません</p>
              ) : (
                <div className="space-y-4">
                  {appointments.slice(0, 5).map((appointment) => (
                    <div key={appointment.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                      <div>
                        <h4 className="font-medium text-gray-900">{appointment.clinicName}</h4>
                        <p className="text-sm text-gray-600">Dr. {appointment.doctorName}</p>
                        <p className="text-sm text-gray-500">
                          {new Date(appointment.appointmentDate).toLocaleDateString('ja-JP')} {appointment.startTime}
                        </p>
                      </div>
                      <div className="text-right">
                        <span className={`inline-block px-2 py-1 text-xs rounded-full ${
                          appointment.status === 'SCHEDULED' ? 'bg-blue-100 text-blue-800' :
                          appointment.status === 'CONFIRMED' ? 'bg-green-100 text-green-800' :
                          appointment.status === 'COMPLETED' ? 'bg-gray-100 text-gray-800' :
                          'bg-red-100 text-red-800'
                        }`}>
                          {appointment.status === 'SCHEDULED' ? '予約済み' :
                           appointment.status === 'CONFIRMED' ? '確認済み' :
                           appointment.status === 'COMPLETED' ? '完了' :
                           'キャンセル'}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
              <div className="mt-4 text-center">
                <Link
                  href="/patient/appointments"
                  className="text-indigo-600 hover:text-indigo-500 text-sm font-medium"
                >
                  すべての予約を見る →
                </Link>
              </div>
            </div>
          </div>

          {/* 処方履歴 */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200">
            <div className="px-6 py-4 border-b border-gray-200">
              <h3 className="text-lg font-medium text-gray-900">処方履歴</h3>
            </div>
            <div className="p-6">
              {prescriptions.length === 0 ? (
                <p className="text-gray-500 text-center py-4">処方履歴はありません</p>
              ) : (
                <div className="space-y-4">
                  {prescriptions.slice(0, 5).map((prescription) => (
                    <div key={prescription.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                      <div>
                        <h4 className="font-medium text-gray-900">{prescription.clinicName}</h4>
                        <p className="text-sm text-gray-600">¥{prescription.totalAmount.toLocaleString()}</p>
                        <p className="text-sm text-gray-500">
                          {new Date(prescription.createdAt).toLocaleDateString('ja-JP')}
                        </p>
                      </div>
                      <div className="text-right">
                        <span className={`inline-block px-2 py-1 text-xs rounded-full ${
                          prescription.status === 'PRESCRIBED' ? 'bg-yellow-100 text-yellow-800' :
                          prescription.status === 'PAID' ? 'bg-blue-100 text-blue-800' :
                          prescription.status === 'SHIPPED' ? 'bg-purple-100 text-purple-800' :
                          prescription.status === 'DELIVERED' ? 'bg-green-100 text-green-800' :
                          'bg-red-100 text-red-800'
                        }`}>
                          {prescription.status === 'PRESCRIBED' ? '処方済み' :
                           prescription.status === 'PAID' ? '支払い済み' :
                           prescription.status === 'SHIPPED' ? '発送済み' :
                           prescription.status === 'DELIVERED' ? '配達済み' :
                           'キャンセル'}
                        </span>
                        {prescription.status === 'PRESCRIBED' && (
                          <Link
                            href={`/patient/prescriptions/${prescription.id}/payment`}
                            className="block mt-1 text-indigo-600 hover:text-indigo-500 text-xs"
                          >
                            支払う
                          </Link>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              )}
              <div className="mt-4 text-center">
                <Link
                  href="/patient/prescriptions"
                  className="text-indigo-600 hover:text-indigo-500 text-sm font-medium"
                >
                  すべての処方履歴を見る →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
