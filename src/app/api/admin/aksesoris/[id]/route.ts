import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { isAdminAuthenticated } from '@/lib/session'

export async function GET(request: Request, { params }: { params: Promise<{ id:string }> }) {
    try {
        const { id } =await params;
        const aksesoris = await prisma.aksesoris.findUnique({
            where: { id_aksesoris: Number(id) } 
        })

        if (!aksesoris) {
            return NextResponse.json({ error: 'Aksesoris tidak ditemukan' }, { status: 404 })
        }

        return NextResponse.json({ success: true, data: aksesoris })
    } catch (error) {
        return NextResponse.json({ error: 'Gagal mengambil data aksesoris' }, { status: 500 })
    }
}

export async function POST(request: Request, { params }: { params: Promise<{ id:string }> }) {
    try {
        if (!(await isAdminAuthenticated())) {
            return NextResponse.json({ error: 'Tidak memiliki akses' }, { status: 401 })
        }
        const { id } = await params;
        const data = await request.json()
        const aksesoris =await prisma.aksesoris.update({
            where: { id_aksesoris: parseInt(id) },
            data
        })
        return NextResponse.json({ success: true, data: aksesoris })
    } catch (error) {
        return NextResponse.json({ error: 'Gagal memperbarui data aksesoris' }, { status: 500 })
    }
}

export async function DELETE(request: Request, { params }: { params: Promise<{ id:string }> }) {
    try {
        if (!(await isAdminAuthenticated())) {
            return NextResponse.json({ error: 'Tidak memiliki akses' })
        }
        const { id } = await params;
        await prisma.aksesoris.delete({
            where: { id_aksesoris: parseInt(id) }
        })
        return NextResponse.json({ success:true, message: 'Aksesoris berhasil dihapus' })
    } catch (error) {
        return NextResponse.json({ error: 'Gagal menghapus aksesoris' }, { status:500 })
    }
}