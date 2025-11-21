import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { isAdminAuthenticated } from '@/lib/session'

export async function GET(request: Request, { params }: { params: { id: string } }) {
    try {
        const aksesoris = await prisma.aksesoris.findUnique({
            where: { id_aksesoris: Number(params.id) }
        })

        if (!aksesoris) {
            return NextResponse.json({ error: 'aksesoris tidak ditemukan' }, { status: 404 })
        }

        return NextResponse.json({ success: true, data: aksesoris})
    } catch (error) {
        return NextResponse.json({ error: 'Gagal mengambil data aksesoris' }, { status: 500 })
    }
 }

 export async function PUT(request: Request, { params }: { params: { id:string } }) {
    try {
        if (!(await isAdminAuthenticated())) {
            return NextResponse.json({ error: 'Gagal memperbarui aksesoris' }, { status: 401 })
        }
        const data = await request.json()
        const aksesoris = await prisma.aksesoris.update({
            where: { id_aksesoris: parseInt(params.id) },
            data
        })

        return NextResponse.json({ success: true, data: aksesoris })
    } catch (error) {
        return NextResponse.json({ error: 'Gagal memperbarui data aksesoris' })
    }
 }

 export async function DELETE(request: Request, { params }: { params: { id:string } }) {
    try {
        if (!(await isAdminAuthenticated())) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
        }

        await prisma.aksesoris.delete({
            where: { id_aksesoris: parseInt(params.id) }
        })
        return NextResponse.json({  success:true, message:'Aksesoris berhasil dihapus!' })
    } catch (error) {
         return NextResponse.json({ error: 'Gagal menghapus aksesoris' }, { status:500 } )
    }
 }