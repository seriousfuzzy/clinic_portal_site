'use client'

import Link from 'next/link'

export default function SignUpPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            新規登録
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            登録するユーザータイプを選択してください
          </p>
        </div>

        <div className="space-y-4">
          <Link
            href="/patient/register"
            className="group relative flex w-full justify-center rounded-md bg-indigo-600 py-4 px-3 text-base font-semibold text-white hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            患者として登録
          </Link>

          <Link
            href="/clinic/register"
            className="group relative flex w-full justify-center rounded-md border border-indigo-600 bg-white py-4 px-3 text-base font-semibold text-indigo-600 hover:bg-indigo-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            クリニックとして登録
          </Link>
        </div>

        <div className="text-center space-y-2">
          <p className="text-sm text-gray-600">
            既にアカウントをお持ちの方は{' '}
            <Link href="/auth/signin" className="font-medium text-indigo-600 hover:text-indigo-500">
              ログイン
            </Link>
          </p>
          <Link href="/" className="block text-sm text-indigo-600 hover:text-indigo-500">
            トップページに戻る
          </Link>
        </div>
      </div>
    </div>
  )
}
