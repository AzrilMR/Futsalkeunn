import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export const runtime = "nodejs";

export async function GET() {
  try {
    const sepatu = await prisma.sepatu.findMany({
      orderBy: { id_sepatu: "desc" },
    });

    return NextResponse.json({ success: true, data: sepatu });
  } catch (error) {
    return NextResponse.json(
      { error: "Gagal mengambil data sepatu" },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const data = await request.json();

    if (!data.nama_sepatu || !data.harga_sepatu || !data.gambar_sepatu) {
      return NextResponse.json(
        { error: "Nama, harga, dan gambar wajib diisi" },
        { status: 400 }
      );
    }

    const sepatu = await prisma.sepatu.create({ data });

    return NextResponse.json({ success: true, data: sepatu }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: "Gagal membuat sepatu" },
      { status: 500 }
    );
  }
}