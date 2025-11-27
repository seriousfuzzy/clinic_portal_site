import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const query = searchParams.get('q')
    const prefecture = searchParams.get('prefecture')
    const specialty = searchParams.get('specialty')

    // 検索条件を構築
    const where: any = {
      status: 'APPROVED',
      isActive: true
    }

    if (query) {
      where.OR = [
        { clinicName: { contains: query, mode: 'insensitive' } },
        { doctorName: { contains: query, mode: 'insensitive' } }
      ]
    }

    if (prefecture) {
      where.prefecture = prefecture
    }

    if (specialty) {
      where.specialties = {
        some: {
          specialty: {
            name: specialty
          }
        }
      }
    }

    const clinics = await prisma.clinic.findMany({
      where,
      include: {
        specialties: {
          include: {
            specialty: true
          }
        }
      },
      orderBy: {
        createdAt: 'desc'
      }
    })

    // レスポンス用にデータを整形
    const formattedClinics = clinics.map((clinic: any) => ({
      id: clinic.id,
      clinicName: clinic.clinicName,
      doctorName: clinic.doctorName,
      prefecture: clinic.prefecture,
      city: clinic.city,
      specialties: clinic.specialties.map((cs: any) => cs.specialty.name),
      isActive: clinic.isActive
    }))

    return NextResponse.json({
      clinics: formattedClinics,
      total: formattedClinics.length
    })
  } catch (error) {
    console.error('Clinic search error:', error)
    return NextResponse.json(
      { error: '検索に失敗しました' },
      { status: 500 }
    )
  }
}
