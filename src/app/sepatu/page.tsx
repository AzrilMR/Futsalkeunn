import Image from "next/image";
import Link from "next/link";
import Layout from "@/components/layout";

interface Sepatu {
  id_sepatu: number
  nama_sepatu: string
  warna_sepatu: string
  uk_sepatu: string
  deskripsi_sepatu: string
  harga_sepatu: number
  gambar_sepatu: string
}

async function getSepatu(): Promise<Sepatu[]> {
  try {
    const baseUrl = process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : "http://localhost:3000";

    const res = await fetch(`${baseUrl}/api/public/sepatu`, {
      cache: 'no-store'
    });

    if (!res.ok) {
      throw new Error('Failed to fetch sepatu')
    }

    const data = await res.json();
    return data.data || [];
  } catch (error) {
    console.error('Error fetching sepatu:', error)
    return []
  }
}


export default async function SepatuPage() {
  const sepatu = await getSepatu()

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0
    }).format(amount)
  }

  return(
    <Layout>
      <div>
        <div className="relative h-120">
          <Image 
            src="/pxfuel.jpg"
            alt="sepatu"
            fill
            className="object-cover"
          />
        </div>

        <div className="flex flex-row justify-center flex-wrap">
          {sepatu.length > 0 ? (
            sepatu.map((item) => (
              <Link key={item.id_sepatu} href={`/sepatu/${item.id_sepatu}`}>
                <div className="m-8 p-5 bg-[#FAFAFA] shadow-lg w-[250] h-[310] rounded-xl hover:bg-gray-200">
                  <div className="rotate-14 m-5 flex justify-center">
                    {item.gambar_sepatu ? (
                      <Image 
                        src={item.gambar_sepatu}
                        alt={item.nama_sepatu}
                        width={150}
                        height={100}
                      />
                    ) : (
                      <div className="w-[150px] h-[100px] bg-gray-200 flex items-center justify-center">
                        <span className="text-gray-400">No Image</span>
                      </div>
                    )}
                  </div>
                  <h3 className="font-semibold mt-4">{item.nama_sepatu}</h3>
                  <p className="text-xs text-gray-600">{item.warna_sepatu}</p>
                  <p className="text-green-600 font-bold mt-2">
                    {formatCurrency(item.harga_sepatu)}
                  </p>
                </div>
              </Link>
            ))
          ) : (
            <div className="text-center py-12 w-full">
              <h3 className="text-xl font-semibold text-gray-600 mb-2">No Sepatu Available</h3>
              <p className="text-gray-500">Belum ada sepatu yang tersedia</p>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
}