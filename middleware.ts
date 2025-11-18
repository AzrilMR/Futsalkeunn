import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { getAdminSession } from '@/lib/session';

export async function middleware (request: NextRequest) {
    const adminId = await getAdminSession();

     if (request.nextUrl.pathname.startsWith('/admin') && 
      !request.nextUrl.pathname.includes('/login') && 
      !adminId) {
    return NextResponse.redirect(new URL('/admin/login', request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/admin/:path*']
}