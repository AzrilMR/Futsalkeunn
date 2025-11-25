import Image from "next/image";
import Link from "next/link";
import Layout from "@/components/layout";

export default function Home() {

    return(
        <Layout>
        <div>
            <div className="relative h-120">
            <Image 
                src="/home.jpg"
                alt="Home"              
                fill
                className="object-cover"
            />
            </div>
            <h1 className="text-4xl font-bold mt-20 px-4">Lihat koleksi perlengkapan futsal dari kami</h1> 

            <div className="flex flex-row justify-center items-center flex-wrap mt-20 ">

            <div className="relative w-fit">
                <Image className="rounded px-4"
                    src="/high (3).png"
                    alt="high"
                    width={400}
                    height={300}
                />
                <Link href="/sepatu">
                <button className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white hover:bg-white-200 p-3 rounded-full">
                    Lihat sekarang
                </button>
                </Link>
            </div>         
  

            <div className="relative w-fit">
                <Image className="rounded px-4"
                    src="/high (2).png"
                    alt="high"
                    width={400}
                    height={300}
                />
                <Link href="/jersey">
                <button className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white hover:bg-white-200 p-3 rounded-full">
                    Lihat sekarang
                </button>
                </Link>
            </div>

            <div className="relative w-fit">
                <Image className="rounded px-4"
                    src="/high (3).png"
                    alt="high"
                    width={400}
                    height={300}
                />
                <Link href="/aksesoris">
                <button className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white hover:bg-white-200 p-3 rounded-full">
                    Lihat sekarang
                </button>
                </Link>
            </div>
            </div>            

             <div className="relative h-90 mt-10 mb-10">
            <Image 
                src="/jerseyicon.png"
                alt="Home2"              
                fill
                className="object-cover"
            />
            </div>

           
          <div className="flex flex-row justify-center flex-wrap md:grid-row"> 
            <Link href="/detail_jerseymilan">
            <div className="m-8 p-5 bg-[#FAFAFA] shadow-lg w-[250] h-[310] rounded-xl hover:bg-gray-200">
                <Image className="m-5" 
                    src="/Ac_milan.png"
                    alt="jersey"
                    width={150}
                    height={100}
                />
                <h3 className="mb-3">AC MILAN HOME JERSEY 95/96</h3>
                <p>RP.799,000.00</p>
            </div>
            </Link>
            
            <Link href="/detail_jerseycity">
            <div className="m-8 p-5 bg-[#FAFAFA] shadow-lg w-[250] h-[310] rounded-xl hover:bg-gray-200">
                <Image className="m-7" 
                    src="/city away.jpg"
                    alt="jersey"
                    width={130}
                    height={100}
                />
                <h3 className="mb-3">MANCHESTER CITY AWAY 25/26</h3>
                <p>RP.650,000.00</p>
            </div>
            </Link>

            <Link href="/detail_jerseymadrid">
           <div className="m-8 p-5 bg-[#FAFAFA] shadow-lg w-[250] h-[310] rounded-xl hover:bg-gray-200">
                <Image className="m-5" 
                    src="/rma_away.png"
                    alt="jersey"
                    width={150}
                    height={100}
                />
                <h3 className="mb-3">REAL MADRID AWAY JERSEY 25/26</h3>
                <p>RP.699,999.99</p>
            </div>
            </Link>

            <Link href="/detail_jerseydortmund">
           <div className="m-8 p-5 bg-[#FAFAFA] shadow-lg w-[250] h-[310] rounded-xl hover:bg-gray-200">
                <Image className="m-5" 
                    src="/dortmund_Home.png"
                    alt="jersey"
                    width={150}
                    height={100}
                />
                <h3 className="mb-3">BORUSSIA DORTMUND HOME JERSEY 25/26</h3>
                <p>RP.540,000.00</p> 
            </div>
            </Link>

            </div>

        </div>
        </Layout>
    );
};                                  