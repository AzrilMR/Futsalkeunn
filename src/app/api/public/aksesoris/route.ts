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
      { error: "Gagal menampilkan aksesoris" },
      { status: 500 }
    );
  }
}