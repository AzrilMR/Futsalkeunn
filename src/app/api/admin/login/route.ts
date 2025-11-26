import { verifyAdmin } from '@/lib/auth'
import { createAdminSession } from '@/lib/session'

export async function POST(request: Request) {
  try {
    const { username, password } = await request.json()

    if (!username || !password) {
      return Response.json({ error: 'Username dan password harus diisi' }, { status: 400 })
    }

    const result = await verifyAdmin(username, password)

    if (!result.success || !result.admin) {
      return Response.json({ error: 'Username atau password salah' }, { status: 401 })
    }

    return createAdminSession(result.admin.id)

  } catch (error) {
    return Response.json({ error: 'Login gagal' }, { status: 500 })
  }
}
