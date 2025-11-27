import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, subject, message, userType } = body

    // バリデーション
    if (!name || !email || !subject || !message || !userType) {
      return NextResponse.json(
        { error: '必須項目が入力されていません' },
        { status: 400 }
      )
    }

    // メールアドレスの形式チェック
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: '有効なメールアドレスを入力してください' },
        { status: 400 }
      )
    }

    // TODO: 実際の実装では以下を行う
    // 1. データベースにお問い合わせ内容を保存
    // 2. 管理者にメール通知を送信
    // 3. 自動返信メールを送信

    console.log('お問い合わせ受信:', {
      name,
      email,
      subject,
      message,
      userType,
      timestamp: new Date().toISOString()
    })

    // 仮の処理として、コンソールにログ出力
    // 実際の実装では、メール送信やデータベース保存を行う

    return NextResponse.json(
      { 
        message: 'お問い合わせを受け付けました',
        success: true
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'お問い合わせの送信に失敗しました' },
      { status: 500 }
    )
  }
}
