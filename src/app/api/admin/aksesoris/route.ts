import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export const runtime = "nodejs";

export async function GET() {
  try {
    const aksesoris = await prisma.aksesoris.findMany({
      orderBy: { id_aksesoris: "desc" },
    });

    return NextResponse.json({ success: true, data: aksesoris });
  } catch (error) {
    return NextResponse.json(
      { error: "Gagal mengambil data aksesoris" },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const data = await request.json();

    if (!data.nama_aksesoris || !data.harga_aksesoris || !data.gambar) {
      return NextResponse.json(
        { error: "Nama, harga, dan gambar wajib diisi" },
        { status: 400 }
      );
    }

    const aksesoris = await prisma.aksesoris.create({ data });

    return NextResponse.json({ success: true, data: aksesoris }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: "Gagal membuat aksesoris" },
      { status: 500 }
    );
  }
}