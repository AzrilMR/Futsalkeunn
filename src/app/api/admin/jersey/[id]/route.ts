import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { isAdminAuthenticated } from '@/lib/session'

export async function GET(request: Request, { params }: { params: Promise<{ id:string }> }) {    
    try {
        const { id } = await params;
        const jersey = await prisma.jersey.findUnique({
            where: { id_jersey: Number(id) }
        })

        if (!jersey) {
            return NextResponse.json({ error: 'Jersey tidak ditemukan' }, { status: 404 })
        }

        return NextResponse.json({ success: true, data: jersey })
    } catch (error) {
        return NextResponse.json({ error: 'Gagal mengambil data jersey' }, { status: 500 })
    }
}

export async function PUT(request: Request, { params }: { params: Promise<{ id:string }> }) {
    try {
        if (!(await isAdminAuthenticated())) {
            return NextResponse.json({ error: 'Tidak memiliki akses' }, { status: 401 })
        }
        const { id } = await params;
        const data = await request.json()
        const jersey = await prisma.jersey.update({
            where: { id_jersey: parseInt(id) },
            data
        })
        return NextResponse.json({ success: true, data: jersey })
    } catch (error) {
        return NextResponse.json({ error: 'Gagal memperbarui data jersey' }, { status: 500 })
    }
}

export async function DELETE(request: Request, { params }: { params: Promise<{ id:string }> }) {
    try {
        if (!(await isAdminAuthenticated())) {
            return NextResponse.json({ error: 'Tidak memiliki akses' })
        }
        const { id } = await params;
        await prisma.jersey.delete({
            where: { id_jersey: parseInt(id) }
        })
        return NextResponse.json({ success:true, message: 'Jersey berhasil dihapus' })
    } catch (error) {
        return NextResponse.json({ error: 'Gagal menghapus jersey' }, { status:500 })
    }
}