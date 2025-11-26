export const runtime = "nodejs";

import { NextResponse } from "next/server";
import { put } from "@vercel/blob";

export async function POST(req: Request) {
  try {
    const formData = await req.formData();
    const file = formData.get("file") as File;

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    const fileName = `${Date.now()}-${file.name}`;
    const blob = await put(`uploads/${fileName}`, buffer, { access: "public" });

    return NextResponse.json({
      success: true,
      url: blob.url
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Gagal upload file" }, { status: 500 });
  }
}