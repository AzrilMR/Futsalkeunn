export const runtime = "nodejs";

import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    const sepatu = await prisma.sepatu.findMany({
      orderBy: { id_sepatu: "desc" },
    });

    return NextResponse.json({ success: true, data: sepatu });
  } catch (error) {
    return NextResponse.json(
      { error: "Gagal menampilkan sepatu" },
      { status: 500 }
    );
  }
}