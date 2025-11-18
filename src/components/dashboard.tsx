'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState('sepatu')
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const handleLogout = async () => {
    setLoading(true)
    try {
      await fetch('/api/admin/logout', { method: 'POST' })
      window.location.href = '/admin/login'
    } catch (error) {
      console.error('Logout failed')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-[#204B57]">Admin Dashboard</h1>
        <button
          onClick={handleLogout}
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition duration-300 disabled:opacity-50"
          disabled={loading}
        >
          {loading ? 'Loading...' : 'Logout'}
        </button>
      </div>

      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <button
          onClick={() => setActiveTab('sepatu')}
          className={`text-center p-8 m-2 rounded-lg transition duration-300 ${
            activeTab === 'sepatu' 
              ? 'bg-[#16333A] text-white' 
              : 'bg-[#204B57] text-white hover:bg-[#16333A]'
          }`}
        >
          <h1 className="text-2xl font-semibold">SEPATU</h1>
        </button>
        
        <button
          onClick={() => setActiveTab('jersey')}
          className={`text-center p-8 m-2 rounded-lg transition duration-300 ${
            activeTab === 'jersey' 
              ? 'bg-[#16333A] text-white' 
              : 'bg-[#204B57] text-white hover:bg-[#16333A]'
          }`}
        >
          <h1 className="text-2xl font-semibold">JERSEY</h1>
        </button>
        
        <button
          onClick={() => setActiveTab('aksesoris')}
          className={`text-center p-8 m-2 rounded-lg transition duration-300 ${
            activeTab === 'aksesoris' 
              ? 'bg-[#16333A] text-white' 
              : 'bg-[#204B57] text-white hover:bg-[#16333A]'
          }`}
        >
          <h1 className="text-2xl font-semibold">AKSESORIS</h1>
        </button>
      </div>

    </div>
  )
}