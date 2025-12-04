import React from 'react';
import Link from 'next/link';

const Navbar = () => {
    return (
                <header className="bg-[#204B57] p-4 text-white">
                  <div className="flex flex-col gap-4 text-center md:flex-row justify-between">
                  <Link href="/">
                  <div className="text-2xl px-3x">FUTSALKEUN</div>
                  </Link>
                  <div className="mt-0 flex justify-center md:mt-2">
                  <nav className="flex flex-row gap-6">
                    <Link href="/">HOME</Link>  
          
                    <div className="relative group"><Link href="#">FUTSAL</Link>
                      <div className="absolute hidden group-hover:block group-focus-within:block bg-[#D9D9D9] z-10 text-center text-black rounded">
                        <div className="hover:bg-gray-400 px-4 py-2"><Link href="/sepatu">Sepatu</Link></div>
                        <div className="hover:bg-gray-400 px-4 py-2"><Link href="/jersey">Jersey</Link></div>
                        <div className="hover:bg-gray-400 px-4 py-2"><Link href="/aksesoris">Aksesoris</Link></div>
                      </div>
                    </div>
        
                    <Link href="/about">ABOUT</Link>
                    <Link href="/contact">CONTACT</Link>
                  </nav>
                  </div>
                  </div>
                </header>
    );
};

export default Navbar;