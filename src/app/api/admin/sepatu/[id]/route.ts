import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { isAdminAuthenticated } from '@/lib/session'

export async function GET(request: Request, { params }: { params: { id: string } }) {
    try {
        const sepatu = await prisma.sepatu.findUnique({
            where: { id_sepatu: Number(params.id) }
        })

        if (!sepatu) {
            return NextResponse.json({ error: 'sepatu tidak ditemukan' }, { status:404 })
        }

        return NextResponse.json({ success: true,data: sepatu })
    }catch (error) {
        return NextResponse.json({ error: 'Gagal mengambil data sepatu' }, { status: 500 })
    }
}

export async function PUT(request: Request, { params }: { params: { id: string} }) {
    try {
        if (!(await isAdminAuthenticated())) {
            return NextResponse.json({ error: 'Gagal Memperbarui'}, { status: 401})
        }
        const data = await request.json()
        const sepatu = await prisma.sepatu.update({
            where: { id_sepatu: parseInt(params.id)},
            data
        })

        return NextResponse.json({ success: true, data: sepatu })
        }catch (error) {
            return NextResponse.json({ error: 'Gagal memperbarui data sepatu' }, { status: 500})
    }
}

export async function DELETE(request: Request, { params }: { params: { id:string } }) {
    try {
        if (!(await isAdminAuthenticated())) {
            return NextResponse.json({ error: 'Unathorized' }, { status:401 })
        }

        await prisma.sepatu.delete({
            where: { id_sepatu: parseInt(params.id) }
        })
        return NextResponse.json({ success:true, message:'Sepatu berhasil dihapus!' })
    } catch (error) {
        return NextResponse.json({ error: 'Gagal menghapus sepatu' }, { status:500 })
    }
}