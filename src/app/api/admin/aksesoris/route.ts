export const runtime = "nodejs";

import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET() {
  try {
    const aksesoris = await prisma.aksesoris.findMany({
      orderBy: { id_aksesoris: "desc" }
    });
    return NextResponse.json({ success: true, data: aksesoris });
  } catch {
    return NextResponse.json({ error: "Gagal mengambil data" }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const data = await request.json();

    const aksesoris = await prisma.aksesoris.create({
      data: {
        nama_aksesoris: data.nama_aksesoris,
        deskripsi_aksesoris: data.deskripsi_aksesoris,
        harga_aksesoris: data.harga_aksesoris,
        gambar: data.gambar
      }
    });

    return NextResponse.json({ success: true, data: aksesoris }, { status: 201 });
  } catch {
    return NextResponse.json({ error: "Gagal tambah aksesoris" }, { status: 500 });
  }
}