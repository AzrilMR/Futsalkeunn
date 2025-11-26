export const runtime = "nodejs";

import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET(request: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params;

    const sepatu = await prisma.sepatu.findUnique({
      where: { id_sepatu: Number(id) }
    });

    if (!sepatu) {
      return NextResponse.json({ error: "Sepatu tidak ditemukan" }, { status: 404 });
    }

    return NextResponse.json({ success: true, data: sepatu });
  } catch {
    return NextResponse.json({ error: "Gagal mengambil data sepatu" }, { status: 500 });
  }
}

export async function PUT(request: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params;
    const data = await request.json();

    const sepatu = await prisma.sepatu.update({
      where: { id_sepatu: Number(id) },
      data
    });

    return NextResponse.json({ success: true, data: sepatu });
  } catch {
    return NextResponse.json({ error: "Gagal update sepatu" }, { status: 500 });
  }
}

export async function DELETE(request: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params;

    await prisma.sepatu.delete({
      where: { id_sepatu: Number(id) }
    });

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Gagal hapus sepatu" }, { status: 500 });
  }
}