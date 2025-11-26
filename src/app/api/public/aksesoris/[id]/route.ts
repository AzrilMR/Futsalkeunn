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
    return NextResponse.json(
      { error: "Gagal menampilkan detail aksesoris" },
      { status: 500 }
    );
  }
}