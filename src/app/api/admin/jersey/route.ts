export const runtime = "nodejs";

import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET() {
  try {
    const jersey = await prisma.jersey.findMany({
      orderBy: { id_jersey: "desc" }
    });
    return NextResponse.json({ success: true, data: jersey });
  } catch {
    return NextResponse.json({ error: "Gagal mengambil data" }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const data = await request.json();

    const jersey = await prisma.jersey.create({
      data: {
        nama_jersey: data.nama_jersey,
        uk_jersey: data.uk_jersey,
        deskripsi_jersey: data.deskripsi_jersey,
        harga_jersey: data.harga_jersey,
        gambar_jersey: data.gambar_jersey
      }
    });

    return NextResponse.json({ success: true, data: jersey }, { status: 201 });
  } catch {
    return NextResponse.json({ error: "Gagal tambah jersey" }, { status: 500 });
  }
}