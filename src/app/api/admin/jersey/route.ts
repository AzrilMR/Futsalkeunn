import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export const runtime = "nodejs";

export async function GET() {
  try {
    const jersey = await prisma.jersey.findMany({
      orderBy: { id_jersey: "desc" },
    });

    return NextResponse.json({ success: true, data: jersey });
  } catch (error) {
    return NextResponse.json(
      { error: "Gagal mengambil data jersey" },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const data = await request.json();

    if (!data.nama_jersey || !data.harga_jersey || !data.gambar_jersey) {
      return NextResponse.json(
        { error: "Nama, harga, dan gambar wajib diisi" },
        { status: 400 }
      );
    }

    const jersey = await prisma.jersey.create({ data });

    return NextResponse.json({ success: true, data: jersey }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: "Gagal membuat jersey" },
      { status: 500 }
    );
  }
}