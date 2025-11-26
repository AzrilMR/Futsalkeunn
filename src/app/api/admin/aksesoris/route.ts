import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET() {
  try {
    const aksesoris = await prisma.aksesoris.findMany()
    return NextResponse.json({ success: true, data: aksesoris })
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch aksesoris' }, { status: 500 })
  }
}

export async function POST(request: Request) {
  try {
    const data = await request.json()
    
    if (!data.nama_aksesoris || !data.harga_aksesoris) {
      return NextResponse.json({ error: 'Nama dan harga wajib diisi' }, { status: 400 })
    }

    const aksesoris = await prisma.aksesoris.create({ data })
    return NextResponse.json({ success: true, data: aksesoris }, { status: 201 })
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create aksesoris' }, { status: 500 })
  }
}
