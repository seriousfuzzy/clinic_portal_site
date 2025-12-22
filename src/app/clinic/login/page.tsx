'use client'

import { useState } from 'react'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { Input } from '@/components/ui'
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'

export default function ClinicLoginPage() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError('')

    try {
      const result = await signIn('credentials', {
        email,
        password,
        role: 'CLINIC',
        redirect: false,
      })

      if (result?.error) {
        setError('メールアドレスまたはパスワードが正しくありません')
      } else {
        router.push('/clinic/dashboard')
      }
    } catch (error) {
      setError('ログインに失敗しました')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
              クリニックログイン
            </h2>
            <p className="mt-2 text-center text-sm text-gray-600">
              クリニック登録がお済みの方はこちらからログインしてください
            </p>
            <p className="mt-2 text-center text-sm text-gray-600">
              まだ登録されていない方は{' '}
              <Link href="/clinic/register" className="font-medium text-indigo-600 hover:text-indigo-500">
                クリニック登録はこちら
              </Link>
            </p>
          </div>
          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <div className="space-y-4">
              <Input
                id="email"
                name="email"
                type="email"
                label="メールアドレス"
                autoComplete="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="メールアドレス"
              />
              <Input
                id="password"
                name="password"
                type="password"
                label="パスワード"
                autoComplete="current-password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="パスワード"
              />
            </div>

            {error && (
              <div className="text-red-600 text-sm text-center bg-red-50 p-3 rounded-md">{error}</div>
            )}

            <div>
              <button
                type="submit"
                disabled={isLoading}
                className="group relative flex w-full justify-center rounded-md bg-indigo-600 py-3 px-4 text-base font-semibold text-white hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:opacity-50"
              >
                {isLoading ? 'ログイン中...' : 'ログイン'}
              </button>
            </div>

            <div className="text-center">
              <Link href="/" className="text-sm text-indigo-600 hover:text-indigo-500">
                トップページに戻る
              </Link>
            </div>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  )
}

