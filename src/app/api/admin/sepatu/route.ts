import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { isAdminAuthenticated } from '@/lib/session'

export async function GET() {
  try {
    const sepatu = await prisma.sepatu.findMany()
    return NextResponse.json({ success: true, data: sepatu })
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch sepatu' }, { status: 500 })
  }
}

export async function POST(request: Request) {
  try {
    if (!(await isAdminAuthenticated())) {
      return NextResponse.json({ error: 'Gagal menambahkan sepatu' }, { status: 401 })
    }

    const data = await request.json()
    
    if (!data.nama_sepatu || !data.harga_sepatu) {
      return NextResponse.json({ error: 'Nama and harga are required' }, { status: 400 })
    }

    const sepatu = await prisma.sepatu.create({ data })
    return NextResponse.json({ success: true, data: sepatu }, { status: 201 })
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create sepatu' }, { status: 500 })
  }
}