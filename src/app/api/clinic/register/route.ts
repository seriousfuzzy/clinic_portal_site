import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import bcrypt from 'bcryptjs'

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData()
    
    // フォームデータから値を取得
    const email = formData.get('email') as string
    const password = formData.get('password') as string
    const clinicName = formData.get('clinicName') as string
    const doctorName = formData.get('doctorName') as string
    const medicalLicenseNumber = formData.get('medicalLicenseNumber') as string
    const phone = formData.get('phone') as string
    const zipCode = formData.get('zipCode') as string
    const prefecture = formData.get('prefecture') as string
    const city = formData.get('city') as string
    const address = formData.get('address') as string
    const building = formData.get('building') as string

    // ファイル
    const medicalLicenseFront = formData.get('medicalLicenseFront') as File
    const medicalLicenseBack = formData.get('medicalLicenseBack') as File
    const clinicRegistration = formData.get('clinicRegistration') as File
    const doctorPhoto = formData.get('doctorPhoto') as File

    // バリデーション
    if (!email || !password || !clinicName || !doctorName || !medicalLicenseNumber || !phone || !zipCode || !prefecture || !city || !address) {
      return NextResponse.json(
        { error: '必須項目が入力されていません' },
        { status: 400 }
      )
    }

    if (!medicalLicenseFront || !medicalLicenseBack || !clinicRegistration) {
      return NextResponse.json(
        { error: '必須書類がアップロードされていません' },
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

    // ファイルの保存処理（実際の実装では適切なファイルストレージサービスを使用）
    // ここでは仮のファイルパスを設定
    const medicalLicenseFrontPath = `uploads/medical-license-front-${Date.now()}.${medicalLicenseFront.name.split('.').pop()}`
    const medicalLicenseBackPath = `uploads/medical-license-back-${Date.now()}.${medicalLicenseBack.name.split('.').pop()}`
    const clinicRegistrationPath = `uploads/clinic-registration-${Date.now()}.${clinicRegistration.name.split('.').pop()}`
    const doctorPhotoPath = doctorPhoto ? `uploads/doctor-photo-${Date.now()}.${doctorPhoto.name.split('.').pop()}` : null

    // ユーザーとクリニック情報を作成
    const user = await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
        role: 'CLINIC',
        clinic: {
          create: {
            clinicName,
            doctorName,
            medicalLicenseNumber,
            phone,
            zipCode,
            prefecture,
            city,
            address,
            building: building || null,
            status: 'PENDING',
            registrationFee: 50000,
            annualFee: 120000,
            medicalLicenseFront: medicalLicenseFrontPath,
            medicalLicenseBack: medicalLicenseBackPath,
            clinicRegistration: clinicRegistrationPath,
            doctorPhoto: doctorPhotoPath
          }
        }
      },
      include: {
        clinic: true
      }
    })

    // TODO: 実際のファイル保存処理を実装
    // TODO: 管理者への審査通知メール送信

    return NextResponse.json(
      { 
        message: 'クリニック登録申請が完了しました。審査結果をメールでお知らせします。',
        user: {
          id: user.id,
          email: user.email,
          role: user.role
        }
      },
      { status: 201 }
    )
  } catch (error) {
    console.error('Clinic registration error:', error)
    return NextResponse.json(
      { error: '登録に失敗しました' },
      { status: 500 }
    )
  }
}
