import Image from "next/image";
import Link from "next/link";
import Layout from "@/components/layout";
import { notFound } from 'next/navigation'

export const dynamic = 'force-dynamic';

interface Sepatu {
  id_sepatu: number
  nama_sepatu: string
  warna_sepatu: string
  uk_sepatu: string
  deskripsi_sepatu: string
  harga_sepatu: number
  gambar_sepatu: string
}

async function getSepatuDetail(id: number): Promise<Sepatu | null> {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/public/sepatu/${id}`, {
      cache: "no-store",
    });

    if (!res.ok) return null;

    const data = await res.json();
    return data.data;   
  } catch (error) {
    console.error("Error fetching sepatu detail:", error);
    return null;
  }
}


export default async function SepatuDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const sepatu = await getSepatuDetail(parseInt(id))

  if (!sepatu) {
    notFound()
  }

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0
    }).format(amount)
  }

  
  const sizes = sepatu.uk_sepatu ? sepatu.uk_sepatu.split(',').map(size => size.trim()) : ['One Size']

  return(
    <Layout>
      <div className="flex flex-col md:flex-row md:gap-3">
        <Link href="/sepatu" className="font-bold p-2 text-2xl">←</Link>
        <div className="flex justify-center">
          <div className="bg-[#FAFAFA] m-8 p-5 shadow-lg rounded-xl w-full max-w-[500px] h-auto">
            {sepatu.gambar_sepatu ? (
              <Image
                src={sepatu.gambar_sepatu}
                alt={sepatu.nama_sepatu}
                width={500}
                height={500}
                className="w-full h-auto"
              />
            ) : (
              <div className="w-full h-[500px] bg-gray-200 flex items-center justify-center">
                <span className="text-gray-400 text-2xl">No Image</span>
              </div>
            )}
          </div>
        </div>

        <div className="flex flex-col gap-5 mt-10 px-4 md:px-0 md:mt-10">
          <h1 className="text-2xl font-bold md:text-4xl">{sepatu.nama_sepatu}</h1>

          <div>
            <h2 className="text-xl font-semibold mb-2">WARNA</h2>
            <p className="text-lg">{sepatu.warna_sepatu || 'Tidak tersedia'}</p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">UKURAN</h2>
            <div className="flex flex-row gap-2 flex-wrap">
              {sizes.map((size, index) => (
                <p 
                  key={index}
                  className="text-xl bg-[#ffff] w-12 text-center opacity-80 rounded outline hover:bg-gray-200"
                >
                  {size}
                </p>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">DESKRIPSI</h2>
            <p className="text-lg text-justify w-full md:w-[700px] bg-[#FAFAFA] p-7 rounded-xl shadow-inner">
              {sepatu.deskripsi_sepatu || 'Tidak ada deskripsi tersedia untuk produk ini.'}
            </p>
          </div>

          <h2 className="text-3xl font-bold">
            {formatCurrency(sepatu.harga_sepatu)}
          </h2>

          <div>
            <a href={`https://wa.me/62895397432051?text=Halo, saya ingin membeli ${sepatu.nama_sepatu} - ${formatCurrency(sepatu.harga_sepatu)}`}>
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
      </div>
    </Layout>
  );
}