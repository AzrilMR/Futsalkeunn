import { NextResponse } from "next/server";

export function createAdminSession(adminId: number) {
  const res = NextResponse.json({ success: true });

  res.cookies.set("admin-session", adminId.toString(), {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24,
  });

  return res;
}

export function deleteAdminSession() {
  const res = NextResponse.json({ success: true });

  res.cookies.set("admin-session", "", {
    path: "/",
    maxAge: 0,
  });

  return res;
}

export function getAdminSession(request: Request): number | null {
  const cookie = request.headers.get("cookie") || "";
  const match = cookie.match(/admin-session=(\d+)/);

  if (!match) return null;

  return Number(match[1]);
}