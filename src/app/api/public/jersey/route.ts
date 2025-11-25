import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET () {
    try {
        const jersey = await prisma.jersey.findMany({
            orderBy: { id_jersey: 'desc' }
        })
        return NextResponse.json({ success: true, data: jersey })
    } catch (error) {
        console.error('Public jersey fetch error:', error)
        return NextResponse.json({ error: 'Gagal menampilkan data jersey'}, { status: 500 })
    }
}