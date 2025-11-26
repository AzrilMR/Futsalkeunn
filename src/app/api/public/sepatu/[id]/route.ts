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
    return NextResponse.json(
      { error: "Gagal menampilkan detail jersey" },
      { status: 500 }
    );
  }
}