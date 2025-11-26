export const runtime = "nodejs";

import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET() {
  try {
    const sepatu = await prisma.sepatu.findMany({
      orderBy: { id_sepatu: "desc" }
    });
    return NextResponse.json({ success: true, data: sepatu });
  } catch {
    return NextResponse.json({ error: "Gagal mengambil data" }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const data = await request.json();

    const sepatu = await prisma.sepatu.create({
      data: {
        nama_sepatu: data.nama_sepatu,
        warna_sepatu: data.warna_sepatu,
        uk_sepatu: data.uk_sepatu,
        deskripsi_sepatu: data.deskripsi_sepatu,
        harga_sepatu: data.harga_sepatu,
        gambar_sepatu: data.gambar_sepatu
      }
    });

    return NextResponse.json({ success: true, data: sepatu }, { status: 201 });
  } catch {
    return NextResponse.json({ error: "Gagal tambah sepatu" }, { status: 500 });
  }
}