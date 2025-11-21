import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { isAdminAuthenticated } from '@/lib/session'

export async function GET(request: Request, { params }: { params: { id: string } }) {
    try {
        const jersey = await prisma.jersey.findUnique({
            where: { id_jersey: Number(params.id) }
        })

        if (!jersey) {
            return NextResponse.json({ error: 'jersey tidak ditemukan' }, { status: 404 })
        }

        return NextResponse.json({ success: true, data: jersey })
    } catch (error) {
        return NextResponse.json({ error: 'Gagal mengambil data jersey' }, { status: 500})
    }
}

export async function PUT(request: Request, { params }: { params: { id:string } }) {
    try {
        if (!(await isAdminAuthenticated())) {
            return NextResponse.json({ error: 'Gagal memperbarui jersey' }, { status: 401 })
        }
        const data = await request.json()
        const jersey = await prisma.jersey.update({
            where: { id_jersey: parseInt(params.id) },
            data
        })

        return NextResponse.json({ success: true, data: jersey })
    } catch (error) {
         return NextResponse.json({ error: 'Gagal memperbarui data jersey' }, { status: 500 })
    }
}

export async function DELETE(request: Request, { params }: { params: { id:string } }) {
    try {
        if (!(await isAdminAuthenticated())) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
        }

        await prisma.jersey.delete({
            where: { id_jersey: parseInt(params.id) }
        })
        return NextResponse.json({ success:true, message:'Jersey berhasil dihapus!' })
    } catch (error) {
         return NextResponse.json({ error: 'Gagal menghapus jersey' }, { status:500 })
    }
}