'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function LoginForm() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    try {
      const res = await fetch('/api/admin/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
      })

      const data = await res.json()

      if (res.ok && data.succes) {
        router.push('/admin/dashboard')
        router.refresh()
      } else {
        setError(data.error || 'Login gagal')
      }
    } catch (error) {
      setError('Terjadi kesalahan jaringan')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="flex items-center justify-center mt-20">
      <form 
        onSubmit={handleSubmit}
        className="bg-[#204B57] p-10 rounded-lg shadow-xl/30 items-center w-90 h-fit flex flex-col gap-4"
      >
        <h1 className="text-center text-3xl font-semibold text-white">
          Selamat Datang
        </h1>
        
        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-2 rounded text-sm w-60">
            {error}
          </div>
        )}
        
        <input
          placeholder="Username"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="border border-white-300 rounded-md p-2 w-60 mt-6 text-white bg-transparent placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent"
          required
          disabled={loading}
        />
        
        <input
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border border-white-300 rounded-md p-2 w-60 mt-4 text-white bg-transparent placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent"
          required
          disabled={loading}
        />
        
        <button 
          type="submit" 
          className="bg-[#fafafa] p-2 rounded-md mt-4 hover:bg-gray-200 cursor-pointer w-60 font-medium text-[#204B57] transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={loading}
        >
          {loading ? 'Memproses...' : 'Masuk'}
        </button>
      </form>
    </div>
  )
}