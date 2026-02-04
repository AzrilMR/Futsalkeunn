import Image from "next/image";
import Link from "next/link";
import Layout from "@/components/layout";
import RotatingCategory from "@/components/rotatingcategory";

export default function Home() {

    return(
        <Layout>
        <div>
            <div className="relative h-100">
            <Image 
                src="/home.jpg"
                alt="Home"              
                fill
                className="object-cover"
            />
            </div>
            <h1 className="text-4xl font-bold mt-5 px-4">Dari Futsal Lovers Bandung, untuk Futsal Lovers Indonesia.</h1>
            <h2 className="text-2xl mt-5 px-4">Kami memahami apa yang kamu butuhkan untuk bermain lebih baik.</h2>

            <div className="relative h-75 mt-10 mb-10">
            <Image 
                src="/jerseyicon.png"
                alt="Home2"              
                fill
                className="object-cover"
            />
            </div>
            
            <h2 className="text-2xl font-bold mt-8 px-4">Lihat koleksi{" "}<RotatingCategory />{" "}dari kami</h2> 

            <div className="flex flex-col gap-5 md:flex-row justify-center items-center mt-20 ">

            <div className="relative w-fit">
                <Image className="rounded px-4"
                    src="/h (2).png"
                    alt="high"
                    width={350}
                    height={250}
                />
                <Link href="/sepatu">
                <button className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white opacity-90 hover:opacity-100 p-3 rounded-full">
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
                <button className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white opacity-90 hover:opacity-100 p-3 rounded-full">
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
                <button className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white opacity-90 hover:opacity-100 p-3 rounded-full">
                    Lihat sekarang
                </button>
                </Link>
            </div>
            </div>            
        </div>
        </Layout>
    );
};                                  