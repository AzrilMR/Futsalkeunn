import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export const runtime = "nodejs";

export async function GET(
  request: Request,
  context: { params: { id: string } }
) {
  const id = Number(context.params.id);

  try {
    const aksesoris = await prisma.aksesoris.findUnique({
      where: { id_aksesoris: id },
    });

    if (!aksesoris) {
      return NextResponse.json({ error: "aksesoris tidak ditemukan" }, { status: 404 });
    }

    return NextResponse.json({ success: true, data: aksesoris });
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

    const updated = await prisma.aksesoris.update({
      where: { id_aksesoris: id },
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
    await prisma.aksesoris.delete({
      where: { id_aksesoris: id },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: "Gagal hapus" }, { status: 500 });
  }
}