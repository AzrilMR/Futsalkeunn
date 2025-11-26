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
      { error: "Gagal menampilkan jersey" },
      { status: 500 }
    );
  }
}