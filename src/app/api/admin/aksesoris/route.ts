import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { isAdminAuthenticated } from '@/lib/session'

export async function GET() {
    try {
        const aksesoris = await prisma.aksesoris.findMany()
        return NextResponse.json({ success: true, data: aksesoris })
    } catch (error) {
        return NextResponse.json({ error: 'Gagal menampilkan data aksesoris' }, { status: 500 })
    }
}

export async function POST(request: Request) {
    try {
        if (!(await isAdminAuthenticated())) {
            return NextResponse.json({ error: 'Gagal menambahkan aksesoris' }, { status: 401 })
        }

        const data = await request.json()

        if (!data.nama_aksesoris || !data.harga_aksesoris) {
            return NextResponse.json({ error: 'Nama dan harga diperlukan' }, { status: 500 })
        }

        const aksesoris = await prisma.aksesoris.create({ data })
        return NextResponse.json({ success: true, data: aksesoris }, { status: 201 })
    } catch (error) {
        return NextResponse.json({ error: 'Gagal menambahkan aksesoris' })
    }
}