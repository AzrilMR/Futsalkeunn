import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import bcrypt from "bcryptjs";

export async function GET(request: Request) {
  const url = new URL(request.url);
  const username = url.searchParams.get("user");
  const password = url.searchParams.get("pass");

  if (!username || !password) {
    return NextResponse.json({ error: "user & pass wajib diisi" }, { status: 400 });
  }

  const hash = await bcrypt.hash(password, 10);

  await prisma.admin.deleteMany();

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
}
