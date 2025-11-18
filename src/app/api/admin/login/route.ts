import { NextResponse } from 'next/server'
import { verifyAdmin } from '@/lib/auth'
import { createAdminSession } from '@/lib/session'

export async function POST(request: Request) {
  try {
    const { username, password } = await request.json()
    
    if (!username || !password) {
      return NextResponse.json({ error: 'Username dan password harus diisi' }, { status: 400 })
    }

    const result = await verifyAdmin(username, password)
    
    if (result.succes && result.admin) {
      await createAdminSession(result.admin.id)
      return NextResponse.json({ succes: true })
    } else {
      return NextResponse.json({ error: 'Username atau password salah' }, { status: 401 })
    }
  } catch (error) {
    return NextResponse.json({ error: 'Login gagal' }, { status: 500 })
  }
}