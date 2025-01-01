import HALF from "@/assets/Frame 57 (2).svg"
import half from '@/assets/Frame 56 (1).svg'
import Image from "next/image"
import full from '@/assets/Frame 57 (1).svg'
import Main_Picture from "@/assets/Rectangle 2.svg"
import main_picture from "@/assets/Rectangle 2 (2).svg"
import { Main } from "next/document"
import Hero_Vector from "@/assets/Vector (32).svg"
export default function Hero(){
    return(
        // <div className="bg-[#f2f0f1] w-[390px sm: w-full h-[853px] top-[98px] absolute sm:h-[663px] sm:top-[134px]">
        //    <div>
        //    <Image src={Main_Picture} alt="" className="left-11 " />
        //    </div>
        //     <h1 className=" top-[138px] w-[315px] h-[93px] mt-9 ml-5 sm:mt-[88px] sm:ml-20  sm:w-[577px] sm:h-[173px] left-[16px] text-[36px] leading-[34px] sm:top-[237px] sm:left-[100px] sm:text-[64px] sm:leading-[64px] font-bold text-black">
        //         FIND CLOTHES THAT MATCHES YOUR STYLE
        //     </h1>
        //     <p className=" text-[14px] top-[251px] w-[358px] mt-6 h-[50px] ml-5 sm:mt-9 sm:ml-20 left-[16px] sm:w-[545px]  sm:h-[33px] leading-[20px] font-normal sm:top-[442px] sm:left-[100px] sm:text-[16px] sm:leading-[22px] text-[#00000099]">
        //         Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.
        //     </p>
        //     <button className="top-[325px] w-[358px] sm:w-[210px] mt-7 sm:mt-9 ml-5 sm:ml-20 h-[52px] py-4 px-[54px] gap-3 left-[16px] rounded-[62px] sm:top-[507] font-medium text-white text-[14px] leading-[21.6px]  bg-black sm:left-[100px]">
        //     Shop Now
        //     </button>

        //     <div className="sm:top-[607px] hidden sm:gap-8 sm:mt-9 sm:ml-20 sm:left-[100px] sm:w-[596px] sm:flex justify-between h-[74px]">
        //        <Image src={full} alt="" />
        //     </div>
        //     <div className="left-14 top-[397px] flex  justify-center  sm:hidden ml-5 h-[74px]">
        //        <Image src={HALF} alt="" />
        //     </div>
        //     <div className="top-[461px] flex justify-center sm:hidden left-[144px]">
        //      <Image src={half} alt="" />
        //      </div>
        //      {/* <div className="sm:w-[1440px] w-[390px] h-[448px] top-[503px] sm:h-[663px] sm:top-[134px] relative">
        //     <Image src={pic} alt="" />
        //      </div> */}
        // </div>
       
//        <div className="bg-[#f2f0f1] w-[390px] sm:w-full h-[853px] top-[98px]  sm:h-[663px] sm:top-[134px] relative">
//              <Image src={pic} alt="" className="left-11 " /> 

//     <h1 className="top-[138px] w-[315px] h-[93px] mt-9 ml-5 sm:mt-[88px] sm:ml-20 sm:w-[577px] sm:h-[173px] left-[16px] text-[36px] leading-[34px] sm:top-[237px] sm:left-[100px] sm:text-[64px] sm:leading-[64px] font-bold text-black">
//         FIND CLOTHES THAT MATCHES YOUR STYLE
//     </h1>
//     <p className="text-[14px] top-[251px] w-[358px] mt-6 h-[50px] ml-5 sm:mt-9 sm:ml-20 left-[16px] sm:w-[545px] sm:h-[33px] leading-[20px] font-normal sm:top-[442px] sm:left-[100px] sm:text-[16px] sm:leading-[22px] text-[#00000099]">
//         Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.
//     </p>
//     <button className="top-[325px] w-[358px] sm:w-[210px] mt-7 sm:mt-9 ml-5 sm:ml-20 h-[52px] py-4 px-[54px] gap-3 left-[16px] rounded-[62px] sm:top-[507] font-medium text-white text-[14px] leading-[21.6px] bg-black sm:left-[100px]">
//         Shop Now
//     </button>

//     {/* <!-- Image positioned at the right corner --> */}
//     <div className="absolute top-[461px] right-0 sm:top-[607px] hidden sm:gap-8 sm:mt-9 sm:ml-20 sm:left-[100px] sm:flex justify-between h-[74px]">
//         <Image src={full} alt="" />
//     </div>

//     {/* <!-- For smaller screen sizes --> */}
//     <div className="absolute top-[461px] right-0 flex justify-center sm:hidden left-[144px]">
//         <Image src={HALF} alt="" />
//     </div>
// </div>

// {/* <div className="bg-[#f2f0f1] w-[390px] sm:w-full h-[853px] top-[98px] sm:h-[663px] md:top-[134px] absolute">
//     <div>
//     <Image src={Main_Picture} alt="Main image" className="absolute w-[600px] mx-[100px] top-[98px] right-0 sm:top-[134px] sm:right-0 w- [auto] sm:w -[auto]" /> 
//   </div>
//     <h1 className="top-[138px] w-[315px] h-[93px] mt-9 ml-5 sm:mt-[88px] sm:ml-20 sm:w-[577px] sm:h-[173px] left-[16px] text-[36px] leading-[34px] sm:top-[237px] sm:left-[100px] sm:text-[64px] sm:leading-[64px] font-bold text-black">
//         FIND CLOTHES THAT MATCHES YOUR STYLE
//     </h1>
//     <p className="text-[14px] top-[251px] w-[358px] mt-6 h-[50px] ml-5 sm:mt-9 sm:ml-20 left-[16px] sm:w-[545px] sm:h-[33px] leading-[20px] font-normal sm:top-[442px] sm:left-[100px] sm:text-[16px] sm:leading-[22px] text-[#00000099]">
//         Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.
//     </p>
//     <button className="top-[325px] w-[358px] sm:w-[210px] mt-7 sm:mt-9 ml-5 sm:ml-20 h-[52px] py-4 px-[54px] gap-3 left-[16px] rounded-[62px] sm:top-[507] font-medium text-white text-[14px] leading-[21.6px] bg-black sm:left-[100px]">
//         Shop Now
//     </button>

//     {/* <!-- Image positioned at the right corner for larger screens --> */}
//     <div className="absolut top-[461px] right-0 sm:top-[607px] sm:flex justify-between h-[74px]">
//         <Image src={full} alt="Full Image" />
//     </div>

//     {/* <!-- For smaller screen sizes, centered image --> */}
//     <div className="absolute top-[461px] right-0 flex justify-center sm:hidden left-[144px]">
//         <Image src={HALF} alt="Half Image" />
//     </div>
// </div> 
//  */}

<div className=" bg-[#f2f0f1] w- [390px] max-w-full  md:mt-11 h-[853px] top-[98px] sm:h-[663px] md:top-[134px]">
    <Image 
        src={Main_Picture} 
        alt="Main image" 
        className=" md:top-[134px] hi dden md:b lock md: absolute md: right-0 md: bottom-0 h-auto md:w-[100%]" 
    />
        {/* <Image 
        src={main_picture} 
        alt="Main image" 
        className="absolute top-[503px] md:hidden right-0 h-[448px] w-[418px] " 
    /> */}

    {/* <Image
     src={Hero_Vector} 
     alt=""
     className="w-[56px] h-[56px] top-[431px] left-[750px]"
     /> */}

    <div className="absolute  top-[98px] left-[26px] md:top-[237px]  md:left-[56px]">
        <h1 className="text-[36px]  md:left-[56px] md:w-[577px] md:h-[173px] leading-[34px] md:text-[64px] md:leading-[64px] font-bold text-black w-[315px] h-[93px]">
            FIND CLOTHES THAT MATCHES YOUR STYLE
        </h1>
        
        <p className="text-[14px] my-10 md:text-[16px] leading-[20px] md:leading-[22px] text-[#00000099] sm:w-[545px]">
            Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.
        </p>

        <button className=" py-4 px-[54px] gap-3 rounded-[62px] w-[358px] h-[52px]  md:w-[210px] md:h-[52px] bg-black">
           <h1 className="font-medium text-white text-[16px] leading-[21.6px]">
            Shop Now
           </h1>
        </button>

     <div className=" mt-5 md:hidden flex justify-around">   
      <div>
        <h1 className="font-bold text-[24px] leading-[32.4px] text-black ">
            200+
        </h1>
        <p className="font-normal text-[12px] leading-[22px] text-[#00000099]">
            International Brands
        </p>
      </div>

      <div className="h-[52px]  border border-[#0000001A]">
      </div>
  
      <div>
        <h1 className="font-bold text-[24px] leading-[32.4px] text-black ">
            2,000+
        </h1>
        <p className="font-normal text-[12px] leading-[22px] text-[#00000099]">
           High-Quality Products
        </p>
      </div>

     </div>

     <div className=" md:hidden flex justify-center items-center">
      <div>
        <h1 className="font-bold text-[24px] leading-[32.4px] text-black ">
            30,000+
        </h1>
        <p className="font-normal text-[12px] leading-[22px] text-[#00000099]">
            Happy Customers
        </p>
      </div>

     </div>


    </div>

    <Image
     src={Hero_Vector} 
     alt=""
     className=" absolute w-11 h-11 top-[640px] left-[27px] md:w-[56px] md:h-[56px] md:top-[431px] md:left-[690px]"
     />

    <Image
     src={Hero_Vector} 
     alt=""
     className=" absolute w-[76px] h-[76px] top-[543px]  left-[293px] md:w-[104px] md:h-[104px] md:top-[220px] md:left-[1180px]"
     />


</div>

    )
}
