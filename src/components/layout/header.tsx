'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useSession, signOut } from 'next-auth/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { data: session } = useSession()

  const navigation = [
    { name: 'ホーム', href: '/' },
    { name: 'クリニックを探す', href: '/search' },
    { name: '患者登録', href: '/patient/register' },
    { name: 'クリニック登録', href: '/clinic/register' },
    { name: 'お問い合わせ', href: '/contact' },
  ]

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50 backdrop-blur-sm bg-white/95">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div className="flex w-full items-center justify-between py-4 lg:py-6">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">🏥</span>
              </div>
              <span className="text-xl font-bold text-gray-900">
                オンラインクリニック
              </span>
            </Link>
          </div>
          
          {/* Desktop navigation */}
          <div className="ml-10 hidden space-x-6 lg:flex">
            {navigation.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-gray-600 hover:text-indigo-600 transition-colors px-3 py-2 rounded-md hover:bg-indigo-50"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* User menu */}
          <div className="ml-6 flex items-center space-x-3">
            {session ? (
              <div className="flex items-center space-x-3">
                <Link
                  href={
                    session.user.role === 'PATIENT' ? '/patient/dashboard' :
                    session.user.role === 'CLINIC' ? '/clinic/dashboard' :
                    '/admin/dashboard'
                  }
                  className="text-sm font-medium text-gray-600 hover:text-indigo-600 transition-colors px-3 py-2 rounded-md hover:bg-indigo-50"
                >
                  ダッシュボード
                </Link>
                <button
                  onClick={() => signOut()}
                  className="text-sm font-medium text-gray-600 hover:text-red-600 transition-colors px-3 py-2 rounded-md hover:bg-red-50"
                >
                  ログアウト
                </button>
              </div>
            ) : (
              <>
                <Link
                  href="/auth/signin"
                  className="text-sm font-medium text-gray-600 hover:text-indigo-600 transition-colors px-4 py-2 rounded-md hover:bg-indigo-50"
                >
                  ログイン
                </Link>
                <Link
                  href="/auth/signup"
                  className="inline-flex items-center rounded-lg bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition-all duration-200"
                >
                  新規登録
                </Link>
              </>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden">
            <div className="fixed inset-0 z-10" />
            <div className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
              <div className="flex items-center justify-between">
                <Link href="/" className="-m-1.5 p-1.5">
                  <span className="text-xl font-bold text-indigo-600">
                    オンラインクリニック
                  </span>
                </Link>
                <button
                  type="button"
                  className="-m-2.5 rounded-md p-2.5 text-gray-700"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
              <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-gray-500/10">
                  <div className="space-y-2 py-6">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                  <div className="py-6">
                    {session ? (
                      <div className="space-y-2">
                        <Link
                          href={
                            session.user.role === 'PATIENT' ? '/patient/dashboard' :
                            session.user.role === 'CLINIC' ? '/clinic/dashboard' :
                            '/admin/dashboard'
                          }
                          className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          ダッシュボード
                        </Link>
                        <button
                          onClick={() => {
                            signOut()
                            setMobileMenuOpen(false)
                          }}
                          className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 w-full text-left"
                        >
                          ログアウト
                        </button>
                      </div>
                    ) : (
                      <div className="space-y-2">
                        <Link
                          href="/auth/signin"
                          className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          ログイン
                        </Link>
                        <Link
                          href="/auth/signup"
                          className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-indigo-600 hover:bg-gray-50"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          新規登録
                        </Link>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
