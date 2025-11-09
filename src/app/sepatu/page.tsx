import Image from "next/image";
import Link from "next/link"

export default function Home() {

    return(
        <div>
            <div className="relative h-80">
            <Image 
                src="/pxfuel.jpg"
                alt="sepatu"
                fill
                className="object-cover"
            />
            </div>

            <div className="flex flex-row justify-center flex-wrap">
                    <Link href="/detail_ortuslyberte">
                       <div className="m-8 p-5 bg-[#FAFAFA] shadow-lg w-[250] h-[310] rounded-xl hover:bg-gray-200">
                           <Image className="rotate-14 m-5" 
                               src="/catalystliberte_v4_in.png"
                               alt="sepatu1"
                               width={150}
                               height={100}
                           />
                           <h3>ORTUSEIGHT-CATALYST LIBERTE V4</h3>
                           <p className="text-xs">Navy</p>
                           <p>RP.649,000.00</p>
                       </div>
                    </Link>

                    <Link href="/detail_ortusjogorampage">
                        <div className="m-8 p-6 bg-[#FAFAFA] shadow-lg w-[250] h-[310] rounded-xl hover:bg-gray-200">
                           <Image className="rotate-14 m-5" 
                               src="/jogosala rampage v3 biru.png"
                               alt="sepatu2"
                               width={150}
                               height={100}
                           />
                           <h3>ORTUSEIGHT-JOGOSALA RAMPAGE V3</h3>
                           <p className="text-xs">Biru</p>
                           <p>RP.499,000.00</p>
                       </div>
                    </Link>

                    <Link href="/detail_ortusjogosala">
                       <div className="m-8 p-5 bg-[#FAFAFA] shadow-lg w-[250] h-[310] rounded-xl hover:bg-gray-200">
                           <Image className="rotate-14 m-5" 
                               src="/JOGOSALA_VANQUISh_GREY.png"
                               alt="sepatu3"
                               width={150}
                               height={100}
                           />
                           <h3>ORTUSEIGHT-JOGOSALA VANQUISH</h3>
                           <p className="text-xs">Abu-abu</p>
                           <p>RP.399,000.00</p>
                       </div>
                    </Link>

                    <Link href="/detail_ortuslegion">
                       <div className="m-8 p-6 bg-[#FAFAFA] shadow-lg w-[250] h-[310] rounded-xl hover:bg-gray-200">
                           <Image className="rotate-14 m-5" 
                               src="/catalyst legion v5 aqua.png"
                               alt="sepatu4"
                               width={150}
                               height={100}
                           />
                           <h3>ORTUSEIGHT-CATALYST LEGION V5</h3>
                           <p className="text-xs">Aqua</p>
                           <p>RP.299,550.00</p>
                       </div>
                       </Link>

                       <Link href="/detail_ortussirius">
                       <div className="m-8 p-6 bg-[#FAFAFA] shadow-lg w-[250] h-[310] rounded-xl hover:bg-gray-200">
                           <Image className="rotate-14 m-5" 
                               src="/ORTUS_SIRIUS_IN_.png"
                               alt="sepatu4"
                               width={150}
                               height={100}
                           />
                           <h3>ORTUSEIGHT-SIRIUS IN</h3>
                           <p className="text-xs">Hitam</p>
                           <p>RP.299,550.00</p>
                       </div>
                       </Link>

                       <Link href="/detail_specsviper">
                       <div className="m-8 p-6 bg-[#FAFAFA] shadow-lg w-[250] h-[310] rounded-xl hover:bg-gray-200">
                           <Image className="rotate-14 m-5" 
                               src="/specs viper hitam.png"
                               alt="sepatu4"
                               width={150}
                               height={100}
                           />
                           <h3>SPECS-VIPER</h3>
                           <p className="text-xs">Hitam</p>
                           <p>RP.299,550.00</p>
                       </div>
                       </Link>


                       <Link href="/detail_specsardent">
                       <div className="m-8 p-6 bg-[#FAFAFA] shadow-lg w-[250] h-[310] rounded-xl hover:bg-gray-200">
                           <Image className="rotate-14 m-5" 
                               src="/specs ardent in double putih.png"
                               alt="sepatu4"
                               width={150}
                               height={100}
                           />
                           <h3>SPECS-ARDENT IN DOUBLE</h3>
                           <p className="text-xs">Putih</p>
                           <p>RP.299,550.00</p>
                       </div>
                         </Link>

                        <Link href="/detail_specsessorer">
                       <div className="m-8 p-6 bg-[#FAFAFA] shadow-lg w-[250] h-[310] rounded-xl hover:bg-gray-200">
                           <Image className="rotate-14 m-5" 
                               src="/SPECS_ESSORER_INDESSERT_FLOWER.png"
                               alt="sepatu4"
                               width={150}
                               height={100}
                           />
                           <h3>SPECS-ESSORER IN DESSERT FLOWER</h3>
                           <p className="text-xs">Pink</p>
                           <p>RP.299,550.00</p>
                       </div>
                       </Link>

                        <Link href="/detail_specsreacto">
                       <div className="m-8 p-6 bg-[#FAFAFA] shadow-lg w-[250] h-[310] rounded-xl hover:bg-gray-200">
                           <Image className="rotate-14 m-5" 
                               src="/SPECS_REACTO_DEVIANT_PRO_IN.png"
                               alt="sepatu4"
                               width={150}
                               height={100}
                           />
                           <h3>SPECS-REACTO DEVIANT PRO IN</h3>
                           <p className="text-xs">Aqua</p>
                           <p>RP.299,550.00</p>
                       </div>
                        </Link>

                       </div>

        </div>
    );
};                                  