import {  NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET(request: Request, { params }: { params:Promise<{ id:string }> }) {
    try {
        const { id } = await params
        const aksesoris = await prisma.aksesoris.findUnique({
            where: {id_aksesoris: parseInt (id) }
        })

        if (!aksesoris) {
            return NextResponse.json({ error: 'Aksesoris tidak ditemukan' }, { status:404 })
        }

        return NextResponse.json({ succes: true, data: aksesoris })
    } catch (error) {
        console.error('Detail aksesoris publik error:', error)
        return NextResponse.json({ error: 'Gagal menampilkan detail aksesoris' })
    }
}