import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import bcrypt from "bcryptjs";

export async function POST(request: Request) {
  try {
    const { username, password } = await request.json();

    if (!username || !password) {
      return NextResponse.json(
        { error: "Username dan password harus diisi" },
        { status: 400 }
      );
    }

    // Hash password
    const hash = await bcrypt.hash(password, 10);

    // Hapus admin lama untuk menghindari duplicate
    await prisma.admin.deleteMany();

    // Buat admin baru
    const admin = await prisma.admin.create({
      data: {
        username,
        password: hash,
      },
    });

    return NextResponse.json({
      success: true,
      admin,
    });
  } catch (error: any) {
    return NextResponse.json(
      { error: "Gagal membuat admin", detail: error.message },
      { status: 500 }
    );
  }
}
