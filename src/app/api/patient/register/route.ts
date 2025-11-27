import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import bcrypt from 'bcryptjs'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const {
      email,
      password,
      firstName,
      lastName,
      firstNameKana,
      lastNameKana,
      birthDate,
      gender,
      phone,
      zipCode,
      prefecture,
      city,
      address,
      building
    } = body

    // バリデーション
    if (!email || !password || !firstName || !lastName || !firstNameKana || !lastNameKana || !birthDate || !gender || !phone || !zipCode || !prefecture || !city || !address) {
      return NextResponse.json(
        { error: '必須項目が入力されていません' },
        { status: 400 }
      )
    }

    // メールアドレスの重複チェック
    const existingUser = await prisma.user.findUnique({
      where: { email }
    })

    if (existingUser) {
      return NextResponse.json(
        { error: 'このメールアドレスは既に登録されています' },
        { status: 400 }
      )
    }

    // パスワードのハッシュ化
    const hashedPassword = await bcrypt.hash(password, 12)

    // ユーザーと患者情報を作成
    const user = await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
        role: 'PATIENT',
        patient: {
          create: {
            firstName,
            lastName,
            firstNameKana,
            lastNameKana,
            birthDate: new Date(birthDate),
            gender,
            phone,
            zipCode,
            prefecture,
            city,
            address,
            building
          }
        }
      },
      include: {
        patient: true
      }
    })

    return NextResponse.json(
      { 
        message: '患者登録が完了しました',
        user: {
          id: user.id,
          email: user.email,
          role: user.role
        }
      },
      { status: 201 }
    )
  } catch (error) {
    console.error('Patient registration error:', error)
    return NextResponse.json(
      { error: '登録に失敗しました' },
      { status: 500 }
    )
  }
}
