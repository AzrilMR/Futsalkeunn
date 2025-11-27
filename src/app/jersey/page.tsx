import Image from "next/image";
import Link from "next/link";
import Layout from "@/components/layout";

export const dynamic = 'force-dynamic';

interface Jersey {
    id_jersey: number
    nama_jersey: string
    uk_jersey: string
    deskripsi_jersey: string
    harga_jersey: number
    gambar_jersey: string

}

async function getJersey(): Promise<Jersey[]> {
  try {
    const baseUrl = process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : "http://localhost:3000";

    const res = await fetch(`${baseUrl}/api/public/jersey`, {
      cache: 'no-store'
    });

    if (!res.ok) {
      throw new Error('Failed to fetch jersey')
    }

    const data = await res.json();
    return data.data || [];
  } catch (error) {
    console.error('Error fetching jersey:', error)
    return []
  }
}

    export default async function JerseyPage() {
    const jersey = await getJersey()

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
             src="/jersey.jpg"
             alt="jersey"
             fill
             className="object-cover"
            />
            </div>

            <div className="flex flex-row justify-center flex-wrap">
                {jersey.length > 0 ? (
                    jersey.map((item) => (
                      <Link key={item.id_jersey} href={`/jersey/${item.id_jersey}`}>
                        <div className="m-8 p-5 bg-[#FAFAFA] shadow-lg w-[250] h-[310] rounded-xl hover:bg-gray-200">
                            <div className="rotate-14 m-5 flex justify-center">
                                {item.gambar_jersey ? (
                                    <Image 
                                    src={item.gambar_jersey}
                                    alt={item.nama_jersey}
                                    width={150}
                                    height={150}
                                    />
                                ) : (
                                    <div className="w-150 h-150 bg-gray-200 flex items-center justify-center">
                                      <span className="text-gray-400">No Image</span>
                                    </div>
                                )}
                            </div>
                            <h3 className="font-semibold mt-4">{item.nama_jersey}</h3>
                            <p className="mt-2">{formatCurrency(item.harga_jersey)}</p>
                        </div>
                      </Link>
                    ))
                ) : (
                    <div className="text-center py-12 w-full">
                        <h3 className="text-xl font-semibold text-gray-600 mb-2">No Jersey Available</h3>
                        <p className="text-gray-500">Belum ada jersey yang tersedia</p>
                    </div>
                )}
            </div>
        </div>
        </Layout>
    );
}
    
