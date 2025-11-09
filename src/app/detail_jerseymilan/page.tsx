import Image from "next/image";
import Link from "next/link";

export default function Detail(){
    return(
        <div className="flex flex-col gap-10 md:flex-row gap-5">
             <div className=" ">
                <Image
            src="/Ac_milan.png"
            alt="Jersey Milan"
            width={500}
            height={500}
            className="bg-[#FAFAFA] m-8 p-5 shadow-lg rounded-xl w-[500] h-[500] items-center"
            />
            </div>
            <div className="flex flex-col gap-5 mt-10">
            <h1 className="text-2xl font-bold md:text-4xl font-bold">AC MILAN HOME JERSEY 95/96</h1>
            <h2 className="text-2xl">UKURAN</h2>
            <div className="flex flex-row gap-2">
            <p className="text-xl bg-[#ffff] w-[50] text-center opacity-80 rounded outline hover:bg-white-200">S</p>
            <p className="text-xl bg-[#ffff] w-[50] text-center opacity-80 rounded outline">M</p>
            <p className="text-xl bg-[#ffff] w-[50] text-center opacity-80 rounded outline">L</p>
            <p className="text-xl bg-[#ffff] w-[50] text-center opacity-80 rounded outline">XL</p>
            <p className="text-xl bg-[#ffff] w-[50] text-center opacity-80 rounded outline">XXL</p>
            </div>
            <p className="text-lg text-justify w-[700] bg-[#FAFAFA] opacity-75 p-7 rounded-xl inset-shadow-sm">Tampil klasik di lapangan dengan jersey retro legendaris AC Milan. 
            Desain ikonik Rossoneri dengan sponsor Opel yang akan membawa Anda kembali ke era keemasan sepak bola Italia.</p>
            <h2 className="text-3xl">RP. 799,000.00</h2>

            <div>
            <a href="https://wa.me/62895397432051">
            <button className="text-2xl bg-[#204B57] text-white p-3 rounded-lg mt-3 hover:bg-black-200 flex flex-row gap-4">
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
    );
};