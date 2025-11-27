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

            <div className="flex flex-col gap-5 md:flex-row justify-center items-center mt-20 ">

            <div className="relative w-fit">
                <Image className="rounded px-4"
                    src="/h (2).png"
                    alt="high"
                    width={350}
                    height={250}
                />
                <Link href="/sepatu">
                <button className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white hover:bg-white-200 p-3 rounded-full">
                    Lihat sekarang
                </button>
                </Link>
            </div>         
  

            <div className="relative w-fit">
                <Image className="rounded-xl px-4"
                    src="/h (3).png"
                    alt="high"
                    width={350}
                    height={250}
                />
                <Link href="/jersey">
                <button className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white hover:bg-white-200 p-3 rounded-full">
                    Lihat sekarang
                </button>
                </Link>
            </div>

            <div className="relative w-fit">
                <Image className="rounded px-4"
                    src="/h (1).png"
                    alt="high"
                    width={350}
                    height={250}
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
        </div>
        </Layout>
    );
};                                  