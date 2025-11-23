import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { isAdminAuthenticated } from '@/lib/session'

export async function GET(request: Request, { params }: { params: Promise<{ id:string }> }) {    
    try {
        const { id } = await params;
        const sepatu = await prisma.sepatu.findUnique({
            where: { id_sepatu: Number(id) }
        })

        if (!sepatu) {
            return NextResponse.json({ error: 'Sepatu tidak ditemukan' }, { status: 404 })
        }

        return NextResponse.json({ success: true, data: sepatu })
    } catch (error) {
        return NextResponse.json({ error: 'Gagal mengambil data sepatu' }, { status: 500 })
    }
}

export async function PUT(request: Request, { params }: { params: Promise<{ id:string }> }) {
    try {
        if (!(await isAdminAuthenticated())) {
            return NextResponse.json({ error: 'Tidak memiliki akses' }, { status: 401 })
        }
        const { id } = await params;
        const data = await request.json()
        const sepatu = await prisma.sepatu.update({
            where: { id_sepatu: parseInt(id) },
            data
        })
        return NextResponse.json({ success: true, data: sepatu })
    } catch (error) {
        return NextResponse.json({ error: 'Gagal memperbarui data sepatu' }, { status: 500 })
    }
}

export async function DELETE(request: Request, { params }: { params: Promise<{ id:string }> }) {
    try {
        if (!(await isAdminAuthenticated())) {
            return NextResponse.json({ error: 'Tidak memiliki akses' })
        }
        const { id } = await params;
        await prisma.sepatu.delete({
            where: { id_sepatu: parseInt(id) }
        })
        return NextResponse.json({ success:true, message: 'Sepatu berhasil dihapus' })
    } catch (error) {
        return NextResponse.json({ error: 'Gagal menghapus sepatu' }, { status:500 })
    }
}
