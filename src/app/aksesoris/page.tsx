import Image from "next/image";
import Link from "next/link";

export default function Aksesoris() {
    return(
        <div>
            <div className="relative h-80">
                        <Image 
                            src="/aksesoris.jpeg"
                            alt="aksesoris"
                            fill
                            className="object-cover"
                        />
                        </div>

                           <div className="flex flex-row justify-center flex-wrap">
                                       <Link href="/aksesoris/detail_ortuszealball">
                                       <div className="m-8 p-5 bg-[#FAFAFA] shadow-lg w-[250] h-[310] rounded-xl hover:bg-gray-200">
                                           <Image className="m-5" 
                                               src="/ortus zeal ball.png"
                                               alt="aksesoris"
                                               width={150}
                                               height={100}
                                           />
                                           <h3 className="mb-3">ORTUSEIGHT-ZEAL FS BALL</h3>
                                           <p>RP.229,000.00</p>
                                       </div>
                                       </Link>

                                       <Link href="/aksesoris/detail_ortusultimaball">
                                       <div className="m-8 p-5 bg-[#FAFAFA] shadow-lg w-[250] h-[310] rounded-xl hover:bg-gray-200">
                                           <Image className="m-7" 
                                               src="/ortus ultima ball.png"
                                               alt="aksesoris"
                                               width={130}
                                               height={100}
                                           />
                                           <h3 className="mb-3">ORTUSEIGHT-ULTIMA FS BALL</h3>
                                           <p>RP.250,000.00</p>
                                       </div>
                                        </Link>   


                                      <Link href="/aksesoris/detail_ortuslibertesocks">
                                      <div className="m-8 p-5 bg-[#FAFAFA] shadow-lg w-[250] h-[310] rounded-xl hover:bg-gray-200">
                                           <Image className="m-5" 
                                               src="/ortus liberte sleeve.png"
                                               alt="aksesoris"
                                               width={150}
                                               height={100}
                                           />
                                           <h3 className="mb-3">ORTUSEIGHT-LIBERTE SLEEVE SOCKS</h3>
                                           <p>RP.55,000.00</p>
                                       </div>
                                       </Link>

                                       <Link href="/aksesoris/detail_ortushyperblastsocks">
                                      <div className="m-8 p-5 bg-[#FAFAFA] shadow-lg w-[250] h-[310] rounded-xl hover:bg-gray-200">
                                           <Image className="m-5" 
                                               src="/ortus hyperblast socks.png"
                                               alt="aksesoris"
                                               width={150}
                                               height={100}
                                           />
                                           <h3 className="mb-3">ORTUSEIGHT-HYPERBLAST SOCKS</h3>
                                           <p>RP.45,000.00</p>
                                       </div>
                                       </Link>
                                       </div>
                           

        </div>
    );
};