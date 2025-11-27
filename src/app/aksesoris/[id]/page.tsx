import Image from "next/image";
import Link from "next/link";
import Layout from "@/components/layout";
import { notFound } from "next/navigation";

export const dynamic = 'force-dynamic';

interface Aksesoris {
    id_aksesoris: number 
    nama_aksesoris: string
    deskripsi_aksesoris: string
    harga_aksesoris: number
    gambar: string

}

async function getAksesorisDetail(id: number): Promise<Aksesoris | null> {
  try {
    const baseUrl = process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : "http://localhost:3000";

    const res = await fetch(`${baseUrl}/api/public/aksesoris/${id}`, {
      cache: "no-store",
    });

    if (!res.ok) return null;

    const data = await res.json();
    return data.data;
  } catch (error) {
    console.error("Error fetching aksesoris detail:", error);
    return null;
  }
}

export default async function AksesorisDetailPage({ params }: { params: Promise<{ id:string }> }) {
    const { id } = await params
    const aksesoris = await getAksesorisDetail(parseInt(id))

    if (!aksesoris) {
        notFound()
    }

    const formatCurrency = (amount: number) => {
        return new Intl.NumberFormat('id-ID', {
            style: 'currency',
            currency: 'IDR',
            minimumFractionDigits: 0
        }).format(amount)
    }

    return(
        <Layout>
            <div className="flex flex-col md:flex-row md:gap-3">
                <Link href="/sepatu" className="font-bold p-2">←</Link>
                <div className="flex justify-center">
                    <div className="bg-[#FAFAFA] m-8 p-5 shadow-lg rounded-xl w-full max-w-[500px] h-auto">
                        {aksesoris.gambar ? (
                            <Image 
                            src ={aksesoris.gambar}
                            alt={aksesoris.nama_aksesoris}
                            width={500} 
                            height={500}
                            className="w-full h-auto"
                            />
                        ) : (
                            <div className="w-full h-[500px] bg-gray-200 flex items-center justify-center">
                                <span className="text-gray-500">No Image</span>
                            </div>
                        )}
                    </div>
                </div>

 <div className="flex flex-col gap-5 mt-10 px-4 md:px-0 md:mt-10">
           <h1 className="text-2xl font-bold md:text-4xl">{aksesoris.nama_aksesoris}</h1>
           </div>
 
           <div>
             <h2 className="text-xl font-semibold mb-2">DESKRIPSI</h2>
             <p className="text-lg text-justify w-full md:w-[700px] bg-[#FAFAFA] p-7 rounded-xl shadow-inner">
               {aksesoris.deskripsi_aksesoris|| 'Tidak ada deskripsi tersedia untuk produk ini.'}
             </p>
           </div>
 
           <h2 className="text-3xl font-bold">
             {formatCurrency(aksesoris.harga_aksesoris)}
           </h2>
 
           <div>
             <a href={`https://wa.me/62895397432051?text=Halo, saya ingin membeli ${aksesoris.nama_aksesoris} - ${formatCurrency(aksesoris.harga_aksesoris)}`}>
               <button className="text-2xl bg-[#204B57] text-white p-3 rounded-lg mt-3 hover:bg-[#163843] flex flex-row gap-4 items-center justify-center w-full md:w-auto">
                 <Image
                   src="/shopping-cart-line.svg"
                   alt="cart"                
                   width={30}
                   height={30}
                 />
                 BELI
               </button>
             </a>
           </div>
         </div>                         
        </Layout>
    )
}
    
