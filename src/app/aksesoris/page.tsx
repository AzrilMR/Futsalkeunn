import Image from "next/image";
import Link from "next/link";
import Layout from "@/components/layout";

export const dynamic = 'force-dynamic';

interface Aksesoris {
    id_aksesoris: number
    nama_aksesoris: string
    deskripsi_aksesoris: string
    harga_aksesoris: number
    gambar: string

}

async function getAksesoris(): Promise<Aksesoris[]> {
  try {
      const res = await fetch(`/api/public/aksesoris`, { 
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error('Failed to fetch aksesoris')
    }

    const data = await res.json();
    return data.data || [];
  } catch (error) {
    console.error('Error fetching aksesoris:', error)
    return []
  }
}

export default async function AksesorisPage() {
    const aksesoris = await getAksesoris()

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
                  src="/aksesoris.jpeg"
                  alt="aksesoris"
                  fill
                  className="object-cover"
                />
                </div>

            <div className="flex flex-row justify-center flex-wrap">
                {aksesoris.length > 0 ? (
                    aksesoris.map((item) => (
                      <Link key={item.id_aksesoris} href={`/aksesoris/${item.id_aksesoris}`}>
                        <div className="m-8 p-5 bg-[#FAFAFA] shadow-lg w-[250] h-[310] rounded-xl hover:bg-gray-200">
                            <div className="rotate-14 m-5 flex justify-center">
                                {item.gambar ? (
                                    <Image 
                                    src={item.gambar}
                                    alt={item.nama_aksesoris}
                                    width={150}
                                    height={150}
                                    />
                                ) : (
                                    <div className="w-150 h-150 bg-gray-200 flex items-center justify-center">
                                      <span className="text-gray-400">No Image</span>
                                    </div>
                                )}
                            </div>
                            <h3 className="font-semibold mt-4">{item.nama_aksesoris}</h3>
                            <p className="mt-2">{formatCurrency(item.harga_aksesoris)}</p>
                        </div>
                      </Link>
                    ))
                ) : (
                    <div className="text-center py-12 w-full">
                        <h3 className="text-xl font-semibold text-gray-600 mb-2">No Aksesoris Available</h3>
                        <p className="text-gray-500">Belum ada Aksesoris yang tersedia</p>
                    </div>
                )}
            </div>
        </div>
        </Layout>
    );
}