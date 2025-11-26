export const runtime = "nodejs";

import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET(request: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params;

    const aksesoris = await prisma.aksesoris.findUnique({
      where: { id_aksesoris: Number(id) }
    });

    if (!aksesoris) {
      return NextResponse.json({ error: "aksesoris tidak ditemukan" }, { status: 404 });
    }

    return NextResponse.json({ success: true, data: aksesoris });
  } catch {
    return NextResponse.json({ error: "Gagal mengambil data aksesoris" }, { status: 500 });
  }
}

export async function PUT(request: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params;
    const data = await request.json();

    const aksesoris = await prisma.aksesoris.update({
      where: { id_aksesoris: Number(id) },
      data
    });

    return NextResponse.json({ success: true, data: aksesoris });
  } catch {
    return NextResponse.json({ error: "Gagal update aksesoris" }, { status: 500 });
  }
}

export async function DELETE(request: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params;

    await prisma.aksesoris.delete({
      where: { id_aksesoris: Number(id) }
    });

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Gagal hapus aksesoris" }, { status: 500 });
  }
}