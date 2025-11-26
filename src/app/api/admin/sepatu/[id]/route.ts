import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export const runtime = "nodejs";

export async function GET(
  request: Request,
  context: { params: { id: string } }
) {
  const id = Number(context.params.id);

  try {
    const sepatu = await prisma.sepatu.findUnique({
      where: { id_sepatu: id },
    });

    if (!sepatu) {
      return NextResponse.json({ error: "Sepatu tidak ditemukan" }, { status: 404 });
    }

    return NextResponse.json({ success: true, data: sepatu });
  } catch (error) {
    return NextResponse.json({ error: "Gagal mengambil data" }, { status: 500 });
  }
}

export async function PUT(
  request: Request,
  context: { params: { id: string } }
) {
  const id = Number(context.params.id);

  try {
    const data = await request.json();

    const updated = await prisma.sepatu.update({
      where: { id_sepatu: id },
      data,
    });

    return NextResponse.json({ success: true, data: updated });
  } catch (error) {
    return NextResponse.json({ error: "Gagal update" }, { status: 500 });
  }
}

export async function DELETE(
  request: Request,
  context: { params: { id: string } }
) {
  const id = Number(context.params.id);

  try {
    await prisma.sepatu.delete({
      where: { id_sepatu: id },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: "Gagal hapus" }, { status: 500 });
  }
}