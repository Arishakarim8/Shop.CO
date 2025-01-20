import HALF from "@/assets/Frame 57 (2).svg"
import half from '@/assets/Frame 56 (1).svg'
import Image from "next/image"
import full from '@/assets/Frame 57 (1).svg'
import MAIN_PICTURE from "@/assets/fina.jpeg"
import Main_Picture from "@/assets/Rectangle 2.svg"
import main_picture from "@/assets/Rectangle 2 (2).svg"
import { Main } from "next/document"
import Hero_Vector from "@/assets/Vector (32).svg"
       

export default function Hero(){
    return(
 <div className="bg-[#f2f0f1] w-[100%] max-w-[1400px]  flex flex-col md:flex-row justify-between items-start absolut relative mt-6 md :mt-0 h-[953px] top- [98px] md:h-[552] lg:h-[663px] md:top- [134px] overflow-hidden">
   <Image 
        src={MAIN_PICTURE} 
        alt="Main image" 
        className="absolute bottom-0 w-[590px] md:w-[440px] lg:w-[550px] md:h-[492px] lg:h-[592px]  h-[648px] top-[533px] object-cover right -[50px] sm:right -[100px]  md:right-[2px] lg:right-[30px] md:top-24"
    />
        <Image
        src={Hero_Vector} 
        alt=""
        className="absolute w-11 h-11  top-[630px]  md:w-[56px] md:h-[56px] md:top-[281px] left-[17px] md:left-[360px] lg:left-[590px] xl:left-[690px]"
    />
    <div className="absolute top-[78px] left-[26px] md:top-[117px] md:left-[56px] lg:left-[56px]">

        
        <h1 className="text-[36px] leading-[34px]  max-w-[577px] lg:text-[64px] lg:leading-[64px] font-black text-black lg:w-[577px]  md:w-[315px] sm:w-[540px] w-[315px]">
            FIND CLOTHES THAT MATCHES YOUR STYLE
        </h1>
        
        <p className="text-[14px] my-10 md:text-[16px] leading-[20px] md:leading-[22px] text-[#00000099] w-[315px] sm:w-[540px] md:w-[405px] lg:w-[545px]">
            Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.
        </p>

        <button className="py-4 px-[54px] gap-3 rounded-[62px]  w-[328px] sm:w-[540px] md:w-[210px] h-[52px] bg-black">
            <h1 className="font-medium text-white text-[16px] leading-[21.6px]">
                Shop Now
            </h1>
        </button>
        </div>

        <div className="top-[387px] sm:top-[354px] ml-8 gap-4 md:hidden  max-w-[600px] absolute  flex flex-wrap items-center justify-around"> 
            <div>
                <h1 className="font-bold text-[24px] leading-[32.4px] text-black">
                    200+
                </h1>
                <p className="font-normal text-[12px] leading-[22px] text-[#00000099]">
                    International Brands
                </p>
            </div>

            {/* <div className="h-[52px] border border-[#0000001A]"></div> */}

            <div>
                <h1 className="font-bold text-[24px] leading-[32.4px] text-black">
                    2,000+
                </h1>
                <p className="font-normal text-[12px] leading-[22px] text-[#00000099]">
                    High-Quality Products
                </p>
            </div>
            <div>
                <h1 className="font-bold text-[24px] leading-[32.4px] text-black">
                    30,000+
                </h1>
                <p className="font-normal text-[12px] leading-[22px] text-[#00000099]">
                    Happy Customers
                </p>
            </div>

    </div>
     <div className="md:left-[350px] absolut">
    <Image
        src={Hero_Vector} 
        alt=""
        className="absolute w-[66px] h-[66px] top-[543px] right-5 sm:right-[50px] md:w-[104px] md:h-[104px] md:top-[80px] md:right-[30px] lg:right-[50px]"
    />
    </div>
     </div> 



//  <div className="bg-[#f2f0f1] w-[100%] max-w-[1400px]  flex flex-col md:flex-row justify-between items-start absolut relative mt-6 md:mt-0 h-[953px] top-[98px] md:h-[552] lg:h-[663px] md:top-[134px] overflow-hidden">
//    <Image 
//         src={MAIN_PICTURE} 
//         alt="Main image" 
//         className="absolute bottom-0 w-[590px] md:w-[440px] lg:w-[550px] md:h-[492px] lg:h-[592px]  h-[648px] top-[533px] object-cover right -[50px] sm:right -[100px]  md:right-[2px] lg:right-[30px] md:top-24"
//     />
//         <Image
//         src={Hero_Vector} 
//         alt=""
//         className="absolute w-11 h-11  top-[630px]  md:w-[56px] md:h-[56px] md:top-[281px] left-[17px] md:left-[360px] lg:left-[590px] xl:left-[690px]"
//     />
//     <div className="absolute top-[78px] left-[26px] md:top-[117px] md:left-[56px] lg:left-[56px]">

        
//         <h1 className="text-[36px] leading-[34px]  max-w-[577px] lg:text-[64px] lg:leading-[64px] font-black text-black lg:w-[577px]  md:w-[315px] sm:w-[540px] w-[315px]">
//             FIND CLOTHES THAT MATCHES YOUR STYLE
//         </h1>
        
//         <p className="text-[14px] my-10 md:text-[16px] leading-[20px] md:leading-[22px] text-[#00000099] w-[315px] sm:w-[540px] md:w-[405px] lg:w-[545px]">
//             Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.
//         </p>

//         <button className="py-4 px-[54px] gap-3 rounded-[62px]  w-[328px] sm:w-[540px] md:w-[210px] h-[52px] bg-black">
//             <h1 className="font-medium text-white text-[16px] leading-[21.6px]">
//                 Shop Now
//             </h1>
//         </button>
//         </div>

//         <div className="top-[387px] sm:top-[354px] ml-8 gap-4 md:hidden  max-w-[600px] absolute  flex flex-wrap items-center justify-around"> 
//             <div>
//                 <h1 className="font-bold text-[24px] leading-[32.4px] text-black">
//                     200+
//                 </h1>
//                 <p className="font-normal text-[12px] leading-[22px] text-[#00000099]">
//                     International Brands
//                 </p>
//             </div>

//             {/* <div className="h-[52px] border border-[#0000001A]"></div> */}

//             <div>
//                 <h1 className="font-bold text-[24px] leading-[32.4px] text-black">
//                     2,000+
//                 </h1>
//                 <p className="font-normal text-[12px] leading-[22px] text-[#00000099]">
//                     High-Quality Products
//                 </p>
//             </div>
//             <div>
//                 <h1 className="font-bold text-[24px] leading-[32.4px] text-black">
//                     30,000+
//                 </h1>
//                 <p className="font-normal text-[12px] leading-[22px] text-[#00000099]">
//                     Happy Customers
//                 </p>
//             </div>

//     </div>
//      <div className="md:left-[350px] absolut">
//     <Image
//         src={Hero_Vector} 
//         alt=""
//         className="absolute w-[66px] h-[66px] top-[543px] right-5 sm:right-[50px] md:w-[104px] md:h-[104px] md:top-[80px] md:right-[30px] lg:right-[50px]"
//     />
//     </div>
//      </div> 


    )
}
