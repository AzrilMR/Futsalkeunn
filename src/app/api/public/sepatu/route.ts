 import { NextResponse } from 'next/server'
 import { prisma } from '@/lib/prisma'

 export async function GET () {
    try {
        const sepatu = await prisma.sepatu.findMany({
            orderBy: { id_sepatu: 'desc' }
        })
        return NextResponse.json({ success: true, data: sepatu})
    } catch (error) {
        console.error('Public sepatu fetch error:', error)
        return NextResponse.json({ error: 'Gagal menampilkan data sepatu'}, { status: 500 })
    }
 }