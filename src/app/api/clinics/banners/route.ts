import { NextResponse } from 'next/server'

// 登録クリニックのバナーを取得
// 最初は登録順に表示、後で広告料金を取る
export async function GET() {
  try {
    // TODO: 実際のデータベースから取得
    // 現在はサンプルデータを返す
    const banners = [
      // サンプルデータ（実際にはデータベースから取得）
    ]

    return NextResponse.json({ banners })
  } catch (error) {
    console.error('Error fetching clinic banners:', error)
    return NextResponse.json({ banners: [] }, { status: 200 })
  }
}

