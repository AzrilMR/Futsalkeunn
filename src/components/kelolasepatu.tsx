'use client'
import { useState, useEffect } from 'react'

interface Sepatu {
  id_sepatu: number
  nama_sepatu: string
  warna_sepatu: string
  uk_sepatu: string
  deskripsi_sepatu: string
  harga_sepatu: number
  gambar_sepatu: string
}

export default function KelolaSepatu() {
  const [sepatu, setSepatu] = useState<Sepatu[]>([])
  const [formData, setFormData] = useState<Partial<Sepatu>>({})
  const [editingId, setEditingId] = useState<number | null>(null)
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')

  useEffect(() => {
    fetchSepatu()
  }, [])

  const fetchSepatu = async () => {
    try {
      const res = await fetch('/api/admin/sepatu')
      const data = await res.json()
      if (data.success) setSepatu(data.data)
    } catch (error) {
      setMessage('Gagal mengambil data sepatu')
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setMessage('')

    try {
      const url = editingId 
        ? `/api/admin/sepatu/${editingId}`
        : '/api/admin/sepatu'
      
      const method = editingId ? 'PUT' : 'POST'
      
      const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })

      const data = await res.json()

      if (res.ok && data.success) {
        setMessage(editingId ? 'Berhasil update!' : 'Berhasil tambah!')
        fetchSepatu()
        resetForm()
      } else {
        setMessage(data.error)
      }
    } catch (error) {
      setMessage('Network error')
    } finally {
      setLoading(false)
    }
  }

  const handleEdit = (item: Sepatu) => {
    setFormData(item)
    setEditingId(item.id_sepatu)
  }

  const handleDelete = async (id: number) => {
    if (!confirm('Hapus item ini?')) return

    try {
      const res = await fetch(`/api/admin/sepatu/${id}`, { method: 'DELETE' })
      const data = await res.json()

      if (res.ok && data.success) {
        setMessage('Berhasil hapus!')
        fetchSepatu()
      } else {
        setMessage(data.error)
      }
    } catch (error) {
      setMessage('Network error')
    }
  }

  const resetForm = () => {
    setFormData({})
    setEditingId(null)
  }

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0
    }).format(amount)
  }

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6 text-[#204B57]">Kelola Sepatu</h2>
      
      {message && (
        <div className={`p-3 rounded mb-4 ${
          message.includes('error') ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'
        }`}>
          {message}
        </div>
      )}
      
      <form onSubmit={handleSubmit} className="bg-gray-50 p-4 rounded mb-6 border">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <input
            type="text"
            placeholder="Nama Sepatu"
            value={formData.nama_sepatu || ''}
            onChange={(e) => setFormData({...formData, nama_sepatu: e.target.value})}
            className="p-2 border rounded"
            required
          />
          <input
            type="text"
            placeholder="Warna"
            value={formData.warna_sepatu || ''}
            onChange={(e) => setFormData({...formData, warna_sepatu: e.target.value})}
            className="p-2 border rounded"
          />
          <input
            type="text"
            placeholder="Ukuran"
            value={formData.uk_sepatu || ''}
            onChange={(e) => setFormData({...formData, uk_sepatu: e.target.value})}
            className="p-2 border rounded"
          />
          <input
            type="number"
            placeholder="Harga"
            value={formData.harga_sepatu || ''}
            onChange={(e) => setFormData({...formData, harga_sepatu: parseInt(e.target.value)})}
            className="p-2 border rounded"
            required
          />
        </div>
        
        <textarea
          placeholder="Deskripsi"
          value={formData.deskripsi_sepatu || ''}
          onChange={(e) => setFormData({...formData, deskripsi_sepatu: e.target.value})}
          className="w-full p-2 border rounded mb-4"
          rows={3}
        />
        
        <input
          type="text"
          placeholder="URL Gambar"
          value={formData.gambar_sepatu || ''}
          onChange={(e) => setFormData({...formData, gambar_sepatu: e.target.value})}
          className="w-full p-2 border rounded mb-4"
        />
        
        <div className="flex gap-2">
          <button type="submit" className="bg-[#204B57] text-white px-4 py-2 rounded hover:bg-[#16333A] disabled:opacity-50" disabled={loading}>
            {loading ? 'Processing...' : (editingId ? 'Update' : 'Tambah')} Sepatu
          </button>
          {editingId && (
            <button type="button" onClick={resetForm} className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600">
              Cancel
            </button>
          )}
        </div>
      </form>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border">
          <thead className="bg-[#204B57] text-white">
            <tr>
              <th className="py-2 px-4 border-b">Nama</th>
              <th className="py-2 px-4 border-b">Warna</th>
              <th className="py-2 px-4 border-b">Ukuran</th>
              <th className="py-2 px-4 border-b">Harga</th>
              <th className="py-2 px-4 border-b">Gambar</th>
              <th className="py-2 px-4 border-b">Aksi</th>
            </tr>
          </thead>
          <tbody className="text-center">
            {sepatu.map((item) => (
              <tr key={item.id_sepatu} className="hover:bg-gray-50">
                <td className="py-2 px-4 border-b">{item.nama_sepatu}</td>
                <td className="py-2 px-4 border-b">{item.warna_sepatu}</td>
                <td className="py-2 px-4 border-b">{item.uk_sepatu}</td>
                <td className="py-2 px-4 border-b">{formatCurrency(item.harga_sepatu)}</td>
                <td className="py-2 px-4 border-b"></td>
                <td className="py-2 px-4 border-b">
                  <button
                    onClick={() => handleEdit(item)}
                    className="bg-yellow-500 text-white px-2 py-1 rounded mr-2 text-sm hover:bg-yellow-600"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(item.id_sepatu)}
                    className="bg-red-500 text-white px-2 py-1 rounded text-sm hover:bg-red-600"
                  >
                    Hapus
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}