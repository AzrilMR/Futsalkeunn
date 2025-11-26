import Image from "next/image";
import Link from "next/link";
import Layout from "@/components/layout";

export default function Detail(){
    return(
        <Layout>
        <div className="flex flex-col gap-10 md:flex-row md:gap-5">
             <div className="flex justify-center">
                <Image
            src="/Ac_milan.png"
            alt="Jersey Milan"
            width={500}
            height={500}
            className="bg-[#FAFAFA] m-8 p-5 shadow-lg rounded-xl w-full max-w-[500px] h-auto"
            />
            </div>
            <div className="flex flex-col gap-5 mt-10 px-4 md:px-0 md:mt-10">
            <h1 className="text-2xl font-bold md:text-4xl">AC MILAN HOME JERSEY 95/96</h1>
            <h2 className="text-xl">UKURAN</h2>
            <div className="flex flex-row gap-2 flex-wrap">
            <p className="text-xl bg-[#ffff] w-12 text-center opacity-80 rounded outline hover:bg-gray-200 cursor-pointer">S</p>
            <p className="text-xl bg-[#ffff] w-12 text-center opacity-80 rounded outline hover:bg-gray-200 cursor-pointer">M</p>
            <p className="text-xl bg-[#ffff] w-12 text-center opacity-80 rounded outline hover:bg-gray-200 cursor-pointer">L</p>
            <p className="text-xl bg-[#ffff] w-12 text-center opacity-80 rounded outline hover:bg-gray-200 cursor-pointer">XL</p>
            <p className="text-xl bg-[#ffff] w-12 text-center opacity-80 rounded outline hover:bg-gray-200 cursor-pointer">XXL</p>
            </div>
            <p className="text-lg text-justify w-full md:w-[700px] bg-[#FAFAFA] p-7 rounded-xl shadow-inner">Tampil klasik di lapangan dengan jersey retro legendaris AC Milan. 
            Desain ikonik Rossoneri dengan sponsor Opel yang akan membawa Anda kembali ke era keemasan sepak bola Italia.</p>
            <h2 className="text-3xl">RP. 799,000.00</h2>

            <div>
            <a href="https://wa.me/62895397432051">
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
};