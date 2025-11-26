import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET() {
  try {
    const jersey = await prisma.jersey.findMany()
    return NextResponse.json({ success: true, data: jersey })
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch jersey' }, { status: 500 })
  }
}

export async function POST(request: Request) {
  try {
    const data = await request.json()
    
    if (!data.nama_jersey || !data.harga_jersey) {
      return NextResponse.json({ error: 'Nama dan harga wajib diisi' }, { status: 400 })
    }

    const jersey = await prisma.jersey.create({ data })
    return NextResponse.json({ success: true, data: jersey }, { status: 201 })
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create jersey' }, { status: 500 })
  }
}
