import Image from "next/image";

export default function About() {
    return (
        <div className="max-w-7xl mx-auto px-6 py-12">
            <h1 className="text-4xl text-left font-bold mb-8 md:text-center">Tentang Kami</h1>      

            <div className="flex flex-row flex-wrap gap-20 justify-center mt-10">       
                <div className="w-[400] text-justify mt-2 text-xs bg-[#FAFAFA] shadow-xl rounded-md md:basis-150">
                    <div className="relative h-50">
                                <Image
                                    src="/home.jpg"
                                    alt="visi"              
                                    fill
                                    className="object-cover rounded-t-md"
                                />
                                </div>
                    <h2 className="text-xl text-[#204B57] font-bold p-5">Visi Kami</h2>
                    <p className="p-5">Menyediakan perlengkapan futsal berkualitas dengan harga terjangkau, layanan cepat, dan pengalaman belanja yang mudah bagi semua pecinta futsal.</p>
                </div>

                 <div className="w-[400] text-justify mt-2 text-xs bg-[#FAFAFA] shadow-xl rounded-md"> 
                    <div className="relative h-50">
                                <Image
                                    src="/iconn.png"
                                    alt="misi"              
                                    fill
                                    className="object-cover rounded-t-md"
                                />
                                </div>
                    <h2 className="text-xl text-[#204B57] font-bold p-5">Misi Kami</h2>
                    <p className="p-5">Menyediakan perlengkapan futsal berkualitas dengan harga terjangkau, layanan cepat, dan pengalaman belanja yang mudah bagi semua pecinta futsal.</p>
                </div>

                <div className="w-[400] text-justify mt-2 text-xs bg-[#FAFAFA] shadow-xl rounded-md ">
                    <div className="relative h-50 rounded-t-md">
                                <Image 
                                    src="/jersey.jpg"
                                    alt="nilai"              
                                    fill
                                    className="object-cover rounded-t-md"
                                />
                                </div>
                    <h2 className="text-xl text-[#204B57] font-bold p-5">Nilai Kami</h2>
                    <p className="p-5">Kejujuran, kualitas, dan kepuasan pelanggan adalah prioritas. Kami memilih produk dengan standar tinggi dan mendukung perkembangan komunitas olahraga lokal.</p>
                </div>

                <div className="w-[400] text-justify mt-2 text-xs bg-[#FAFAFA] shadow-xl rounded-md md:basis-150">
                   <div className="relative h-50">
                                <Image
                                    src="/home.jpg"
                                    alt="tim"              
                                    fill
                                    className="object-cover rounded-t-md"
                                />
                                </div>  
                    <h2 className="text-xl mb-2 text-[#204B57] font-bold p-5">Tim & Kontak</h2>
                    <p className="p-5">Tim kami terdiri dari penggemar futsal dan profesional ritel. Untuk pertanyaan atau kerja sama, hubungi kami di futsalkeun@gmail.com atau lihat lebih lengkap di halaman contact</p>
                </div>

                <div className="w-[400] text-justify mt-2 text-xs bg-[#FAFAFA] shadow-xl rounded-md md:basis-220">
                    <div className="relative h-50">
                                <Image
                                    src="/pxfuel.jpg"
                                    alt="icon"              
                                    fill
                                    className="object-cover rounded-t-md"
                                />
                                </div>
                    <h2 className="text-xl text-[#204B57] font-bold p-5">Perjalanan Kami</h2>
                    <p className="p-5">Bermula dari seorang siswa SMK yang sedang melakukan PKL dia...................</p>
                </div>
            </div>
        </div>
    );
};              
