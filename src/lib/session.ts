'use server'
import { cookies } from 'next/headers'

export async function createAdminSession(adminId: number) {
  const cookieStore = await cookies()
  
  cookieStore.set('admin-session', adminId.toString(), {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    maxAge: 60 * 60 * 24,
    path: '/', 
  })
}

export async function deleteAdminSession() {
  const cookieStore = await cookies()
  cookieStore.delete('admin-session')
}

export async function getAdminSession(): Promise<number | null> {
  const cookieStore = await cookies()
  const sessionCookie = cookieStore.get('admin-session')
  
  if (!sessionCookie?.value) {
    return null
  }

  return parseInt(sessionCookie.value)
}

export async function isAdminAuthenticated(): Promise<boolean> {
  const adminId = await getAdminSession()
  return adminId !== null
}