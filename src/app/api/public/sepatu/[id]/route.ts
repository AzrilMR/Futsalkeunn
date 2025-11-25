import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET(request: Request, { params }: { params:Promise<{ id:string }> }) {
    try {
        const { id } = await params
        const sepatu = await prisma.sepatu.findUnique({
            where: {id_sepatu: parseInt (id) }
         })

         if (!sepatu) {
            return NextResponse.json({ error: 'Sepatu tidak ditemukan' }, { status:404 })
         }

        return NextResponse.json({ succes: true, data: sepatu })
    } catch (error) {
        console.error('Detail sepatu publik error:', error)
        return NextResponse.json({ error: 'Gagal menampilkan detail sepatu' }, { status: 500 })
    }
}