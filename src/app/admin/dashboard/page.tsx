import { redirect } from 'next/navigation'
import { isAdminAuthenticated } from '@/lib/session'
import Dashboard from '@/components/dashboard'

export default async function DashboardPage() {
  const isAuth = await isAdminAuthenticated()
  
  if (!isAuth) {
    redirect('/admin/login')
  }

  return <Dashboard />
}