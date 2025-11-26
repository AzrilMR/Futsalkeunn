import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export const runtime = "nodejs";

export async function GET(
  request: Request,
  context: { params: { id: string } }
) {
  const id = Number(context.params.id);

  try {
    const jersey = await prisma.jersey.findUnique({
      where: { id_jersey: id },
    });

    if (!jersey) {
      return NextResponse.json({ error: "jersey tidak ditemukan" }, { status: 404 });
    }

    return NextResponse.json({ success: true, data: jersey });
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

    const updated = await prisma.jersey.update({
      where: { id_jersey: id },
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
    await prisma.jersey.delete({
      where: { id_jersey: id },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: "Gagal hapus" }, { status: 500 });
  }
}