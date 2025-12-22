'use client'

import Link from 'next/link'
import { useSession, signOut } from 'next-auth/react'

export function Footer() {
  const { data: session } = useSession()
  const navigation = {
    patients: [
      { name: '患者登録', href: '/patient/register' },
      { name: 'クリニック検索', href: '/search' },
      { name: 'ご利用方法', href: '/how-to-use' },
      { name: 'よくある質問', href: '/faq' },
    ],
    clinics: [
      { name: 'クリニック登録', href: '/clinic/register' },
      { name: '料金プラン', href: '/pricing' },
      { name: 'サポート', href: '/support' },
      { name: 'API連携', href: '/api-docs' },
    ],
    company: [
      { name: '会社概要', href: '/about' },
      { name: 'お知らせ', href: '/news' },
      { name: '採用情報', href: '/careers' },
      { name: 'お問い合わせ', href: '/contact' },
    ],
    legal: [
      { name: '利用規約', href: '/terms' },
      { name: 'プライバシーポリシー', href: '/privacy' },
      { name: '特定商取引法', href: '/tokusho' },
      { name: 'セキュリティ', href: '/security' },
    ],
  }

  return (
    <footer className="bg-gray-900" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">🏥</span>
              </div>
              <span className="text-xl font-bold text-white">
                オンクリ
              </span>
            </div>
            <p className="text-sm leading-6 text-gray-300">
              あなたの地域のオンクリ・オンクリのポータルサイト<br />
              地域密着のオンクリ<br />
              いつもの医療が変わるプラットフォーム
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-gray-300">
                <span className="sr-only">Facebook</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-300">
                <span className="sr-only">Twitter</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
            </div>
          </div>
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-white">患者の方</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.patients.map((item) => (
                    <li key={item.name}>
                      <Link href={item.href} className="text-sm leading-6 text-gray-300 hover:text-white">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-white">クリニックの方</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.clinics.map((item) => (
                    <li key={item.name}>
                      <Link href={item.href} className="text-sm leading-6 text-gray-300 hover:text-white">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                  {session && session.user.role === 'CLINIC' && (
                    <>
                      <li>
                        <Link href="/clinic/dashboard" className="text-sm leading-6 text-gray-300 hover:text-white">
                          ダッシュボード
                        </Link>
                      </li>
                      <li>
                        <button
                          onClick={() => signOut()}
                          className="text-sm leading-6 text-gray-300 hover:text-white text-left"
                        >
                          ログアウト
                        </button>
                      </li>
                    </>
                  )}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-white">会社情報</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.company.map((item) => (
                    <li key={item.name}>
                      <Link href={item.href} className="text-sm leading-6 text-gray-300 hover:text-white">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-white">法的事項</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.legal.map((item) => (
                    <li key={item.name}>
                      <Link href={item.href} className="text-sm leading-6 text-gray-300 hover:text-white">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16 border-t border-gray-900/10 pt-8 sm:mt-20 lg:mt-24">
          <div className="flex flex-col items-center justify-between sm:flex-row">
            <p className="text-xs leading-5 text-gray-400">
              &copy; 2024 オンクリ. All rights reserved.
            </p>
            <div className="mt-4 sm:mt-0">
              <p className="text-xs leading-5 text-gray-400">
                医療機関向けプラットフォーム事業者 | 厚生労働省届出済み
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
