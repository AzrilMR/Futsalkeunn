import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET(request: Request, { params }: { params: Promise<{ id:string }> }) {
    try {
        const { id } = await params
        const jersey = await prisma.jersey.findUnique({
            where: {id_jersey: parseInt (id) }
        })

        if (!jersey) {
            return NextResponse.json({ error: 'Jersey tidak ditemukan' }, { status:404 })
        }

        return NextResponse.json({ success: true, data: jersey })
    } catch (error) {
        console.error('Detail jersey publik error:', error)
        return NextResponse.json({ error: 'Gagal menampilkan detail jersey' }, { status: 500 })
    }
}