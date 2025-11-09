import Image from "next/image";
import Link from "next/link";

export default function Jersey() {
    return(
        <div>
            <div className="relative h-80">
                        <Image 
                            src="/jersey.jpg"
                            alt="jersey"
                            fill
                            className="object-cover"
                        />
                        </div>

                        <div className="flex flex-row justify-center flex-wrap">
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
    );
};