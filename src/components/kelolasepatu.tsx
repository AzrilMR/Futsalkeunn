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
  const [formData, setFormData] = useState<Partial<Sepatu>>({
    nama_sepatu: '',
    warna_sepatu: '',
    uk_sepatu: '',
    deskripsi_sepatu: '',
    harga_sepatu: 0,
    gambar_sepatu: ''
  })
  const [editingId, setEditingId] = useState<number | null>(null)
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')
  const [uploading, setUploading] = useState(false)

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: name === 'harga_sepatu' ? parseInt(value) || 0 : value
    }))
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

const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
  const file = e.target.files?.[0];
  if (!file) return;

  setUploading(true);
  setMessage('');

  try {
    if (!file.type.startsWith('image/')) {
      throw new Error('Hanya file gambar yang diizinkan');
    }

    if (file.size > 1 * 1024 * 1024) {
      throw new Error('Ukuran file maksimal 1MB');
    }

    const uploadFormData = new FormData();
    uploadFormData.append('file', file);

    const response = await fetch('/api/admin/upload', {
      method: 'POST',
      body: uploadFormData
    });

    const result = await response.json();

    if (result.success && result.url) {    
      setFormData(prev => ({
        ...prev,
        gambar_sepatu: result.url          
      }));

      setMessage('Gambar berhasil diupload');
    } else {
      throw new Error(result.error || 'Upload gambar gagal');
    }

  } catch (error) {
    console.error('Upload error:', error);
    if (error instanceof Error) {
      setMessage(error.message || 'Terjadi kesalahan saat upload');
    } else {
      setMessage('Terjadi kesalahan saat upload');
    }
  } finally {
    setUploading(false);
  }
};


  const resetForm = () => {
    setFormData({
      nama_sepatu: '',
      uk_sepatu: '',
      deskripsi_sepatu: '',
      harga_sepatu: 0,
      gambar_sepatu: ''
    })
    setEditingId(null)
    setMessage('')
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
      name="nama_sepatu"
      placeholder="Nama Sepatu"
      value={formData.nama_sepatu || ''}
      onChange={handleChange}
      className="p-2 border rounded focus:outline-none focus:ring-2 focus:ring-[#204B57]"
      required
    />
     <input
      type="text"
      name="warna_sepatu"
      placeholder="warna Sepatu"
      value={formData.warna_sepatu || ''}
      onChange={handleChange}
      className="p-2 border rounded focus:outline-none focus:ring-2 focus:ring-[#204B57]"
      required
    />
    <input
      type="text"
      name="uk_sepatu"
      placeholder="Ukuran"
      value={formData.uk_sepatu || ''}
      onChange={handleChange}
      className="p-2 border rounded focus:outline-none focus:ring-2 focus:ring-[#204B57]"
    />
    <input
      type="number"
      name="harga_sepatu"
      placeholder="Harga"
      value={formData.harga_sepatu || ''}
      onChange={handleChange}
      className="p-2 border rounded focus:outline-none focus:ring-2 focus:ring-[#204B57]"
      required
    />

    <div className="md:col-span-2">
      <label className="block text-sm font-medium mb-2 text-gray-700">
        Upload Gambar Sepatu
      </label>
      <input
        type="file"
        accept="image/*"
        onChange={handleImageUpload}
        className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-[#204B57]"
        disabled={uploading}
      />
      {uploading && (
        <p className="text-blue-600 text-sm mt-1">Mengupload gambar...</p>
      )}
    </div>
  </div>

  <textarea
    name="deskripsi_sepatu"
    placeholder="Deskripsi sepatu..."
    value={formData.deskripsi_sepatu || ''}
    onChange={handleChange}
    className="w-full p-2 border rounded mb-4 focus:outline-none focus:ring-2 focus:ring-[#204B57]"
    rows={3}
  />

  {formData.gambar_sepatu && (
    <div className="mt-3 mb-4 p-3 bg-green-50 rounded border border-green-200">
      <p className="text-sm text-green-700 font-medium mb-2">Preview Gambar:</p>
      <img 
        src={formData.gambar_sepatu}
        alt="Preview Sepatu"
        className="w-32 h-32 object-cover rounded border shadow-sm"
      />
    </div>
  )}

  <div className="flex gap-2">
    <button 
      type="submit"
      className="bg-[#204B57] text-white px-4 py-2 rounded hover:bg-[#16333A] disabled:opacity-50 transition-colors"
      disabled={loading || uploading}
    >
      {loading ? 'Processing...' : (editingId ? 'Update' : 'Tambah')} Sepatu
    </button>
    {editingId && (
      <button 
        type="button"
        onClick={resetForm}
        className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 transition-colors"
      >
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
                <td className="py-3 px-4 border-b">
                  {item.gambar_sepatu ? (
                    <img 
                      src={item.gambar_sepatu}
                      alt={item.nama_sepatu}
                      className="w-16 h-16 object-cover mx-auto rotate-14"
                    />
                  ) : (
                    <span className="text-gray-400 text-sm">No image</span>
                  )}
                </td>
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
