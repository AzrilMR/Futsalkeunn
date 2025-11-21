import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { isAdminAuthenticated } from '@/lib/session'

export async function GET() {
    try {
        const jersey = await prisma.jersey.findMany()
        return NextResponse.json({ success: true, data: jersey })
    }catch (error) {
      return NextResponse.json({ error: 'Gagal Menampilkan data jersey' }, {status: 500 })  
    }
}

export async function POST(request: Request) {
    try {
        if (!(await isAdminAuthenticated())) {
            return NextResponse.json({ error: 'Gagal Menambahkan Jersey'}, { status: 401})
        }

        const data = await request.json()

        if (!data.nama_jersey || !data.harga_jersey) {
            return NextResponse.json({ error: 'Nama dan harga diperlukan' }, { status: 500 })
        }

        const jersey = await prisma.jersey.create({ data })
        return NextResponse.json({ success: true, data: jersey }, { status: 201 })
    } catch (error) {
        return NextResponse.json({ error: 'Gagal menambahkan jersey' })
    }
}