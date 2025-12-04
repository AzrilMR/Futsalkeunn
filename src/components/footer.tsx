import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
    return (
         <footer className="bg-[#204B57] text-white mt-20"><hr />
          <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col gap-8 md:flex-row justify-between">
            <div className="">
              <h1 className="text-xl mb-3 font-semibold">FUTSALKEUN</h1>
              <p className="text-sm text-justify w-[300]">Tempat terbaik untuk menemukan perlengkapan futsal</p>
            </div>
            <div className="mt-4 md:mt-0">
              <h1 className="text-xl font-semibold mb-3">Jelajahi</h1>
              <div className="flex flex-row flex-nowrap gap-3 text-sm  md:flex-col text-center">
              <Link href="/sepatu" className="hover:underline">SEPATU</Link>
              <Link href="/jersey" className="hover:underline">JERSEY</Link>
              <Link href="/aksesoris" className="hover:underline">AKSESORIS</Link>
            </div>
            </div>

            <div className="mt-4 md:mt-0">
              <h1 className="text-xl font-semibold">Ikuti Sosial Media kami</h1>

                <div className="flex flex-row gap-5 mt-3">

              <a href="https://www.facebook.com/profile.php?id=61584050512831"> 
              <Image
              src="/facebook-circle-line.svg"
              alt="facebook"
              width={30}
              height={30} 
              />
              </a>     

              <a href="https://www.instagram.com/futsalkeun_id">
              <Image
              src="/instagram-line.svg"
              alt="instagram"
              width={30}
              height={30} 
              />
              </a>

              <a href="https://x.com/flwchart?t=pZnwEH1kWKzjgkAL8R54QQ&s=09">
              <Image
              src="/twitter-x-line.svg"
              alt="instagram"
              width={30}
              height={30} 
              />
              </a>
                </div>
                
                <div className="mt-4">
                  <h1 className="text-xl font-semibold">Hubungi Kami</h1>
                  <div className="flex flex-row gap-2 mt-2">
                                  <h3>Email :</h3>
                                  <a href="mailto:futsalkeun1428@email.com">
                                  <h3 className="hover:underline">futsalkeun1428@gmail.com</h3>               
                                   </a>
                                  </div>
                  
                                  <div className="flex flex-row gap-2 mt-2">  
                                  <h3>WhatsApp :</h3>
                                  <a href="https://wa.me/62895397432051">
                                  <h3 className="hover:underline">+62 895-3974-32051</h3>
                                  </a>
                                  </div>
                </div>
            </div>
            
            <div className="mt-4 md:mt-0">
              <h1 className="text-xl font-semibold mb-3">Lokasi</h1>
              <p>Jl.Terusan Pasir Koja</p>
            </div>
          </div>
          <div className="border-t border-white/20 mt-4">
            <div className="max-w-7xl mx-auto px-6 py-4 text-center text-sm text-white/80">
              © {new Date().getFullYear()} FUTSALKEUN. All rights reserved.
            </div>
          </div>
        </footer>
    );
};

export default Footer;