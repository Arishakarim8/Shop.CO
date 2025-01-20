import Email from "@/assets/Vector (6).svg";
import Image from "next/image";
import twitter from '@/assets/Vector (37).svg'
import facebook  from '@/assets/Vector (38).svg';
import insta from '@/assets/Group (5).svg'
import github from "@/assets/Vector (39).svg"
import visa from "@/assets/Visa.svg"
import masterCard from "@/assets/Mastercard (1).svg"
import paypal from "@/assets/Paypal (1).svg"
import applePay from "@/assets/ Pay.svg"
import Gpay from "@/assets/G Pay.svg"
import Link from "next/link";

export default function Footer(){
    return(
        <div className="  relativ absolute w-full ">
        <div className="bg-black max-w-[1260px] absolut relative text-white bottom -10  top-[100px] items-center max-h-[358px] flex flex-col justify-between  md:flex-row gap-10 sm:gap-3  overflow-hidden rounded-[20px] h-auto mx-6 lg:mx-auto lg:px-16 md:px-8 px-4 py-8 md:py-9">
         <h1 className= " md:text-[40px] font-black md:w-[60vw] md:leading-[45px] mx-5 md:mx-2 font-integral text-white text-[32px] leading-[35px] ">
         STAY UPTO DATE ABOUT OUR LATEST OFFERS
         </h1>

         <div className=" md:h-[108px] grid items-center justify-center gap-[14px]">
          <div className="w-[311px] lg:w-[349px] w -full md:h-[48px]  flex items-center h-[42px] top-[169px] py-[12px] px-[16px] gap-[12px] bg-white rounded-[62px]">
            <Image src={Email} alt="Email" />
            <h1 className="text-[#00000066] font-normal text-[14px] md:leading-[21.6px] md:text-[16px] leading-[18.9px] font-satoshi">
              Enter your email address
            </h1>
          </div>
          <div className="w-[311px] lg:w-[349px] w -full md:h-[46px] mx -5 flex justify-center items-center  h-[42px] top-[223px] left-[24px] md:left-0  py-[12px] px-[16px] gap-[12px] bg-white rounded-[62px]">
            <h1 className="text-medium text-black md:leading-[21.6px] md:text-[16px] text-[14px] leading-[18.9px] font-satoshi ">
            Subscribe to Newsletter
            </h1>
          </div>
         </div>

        </div>

        <div id="Footer" className=" absolut z-[200] relativ e top-20 -[200] pt-36  w-full min- h -full auto bg-[#f0f0f0]" >
        <div className="max-w-[1250px]  mx-6 relative lg:mx-auto "> 
            <div className="lg:flex gap-28 ">

            <div className="  h-[177px] md:flex md:flex-col bg-yellow-20 mb-5 md:justify -between  md:gap-[35px]">
              <div className="lg:w-[248px] h- flex flex-col justify-between  gap-5">
              <h1 className=" font-integral   md:text-[33.45px] md:leading-[40.15px] left-4 text-black  font-bold text-[28.85px] leading-[34.62px]" >
                SHOP.CO
              </h1>
                

              <p className="max-w-[500px]  left-[17px]  md:leading-5 md:text-[14px] text-greyy text-sm font-normal">
                 We have clothes that suits your style and which you’re proud to wear. From women to men.
              </p>

              <div className="w-[148px]   flex  justify-between h-[28px] left-[16px] ">
            <div className="w-7 bg-white flex items-center justify-center h-7 border border-[#00000033] rounded-[50px] py -[9.94px] px -[6.91px]">
              <Image src={twitter} alt="" />
            </div>

            <div className="w-7 bg-black flex items-center text-white justify-center h-7 border border-[#00000033] rounded-[50px] py -[9.94px] px -[6.91px]">
              <Image src={facebook} alt="" />
            </div>

            <div className="w-7 bg-white flex items-center justify-center h-7 border border-[#00000033] rounded-[50px] py -[9.94px] px -[6.91px]">
              <Image src={insta} alt="" />
            </div>

            <div className="w-7 bg-white flex items-center justify-center h-7 border border-[#00000033] rounded-[50px] py -[9.94px] px -[6.91px]">
               <Link href="https://github.com/Arishakarim8">
                  <Image src={github} alt="" />
               </Link>
            </div>
              </div>

              </div>
            </div>

            <div className="grid grid-cols-2  max-w-[1070px] sm:grid-cols-4 lg:flex justify-evenly gap-20">
<div className=" md:h-[177px] h-[146px] left -4 gap-4 md:gap-0 ">
  <h1 className="w-[98px] h-[18px] text-[14px] md:text-[16px] font-medium  text-black leading-[18px] tracking-[3px]">
    COMPANY 
  </h1>
  <div className="md:w-[104px] md:h-[133px] w-[] h-[112px] text-[14px] md:leading-[19px] leading-[16px]  md:text-[16px] flex flex-col justify-between mt-3 md:mt-6 font-normal text-gray-500">
    <a href="">About</a>
    <a href="">Features</a>
    <a href="">Works</a>
    <a href="">Career</a>
  </div>
</div>

<div className="w- [136px] h-[177px]">
  <h1 className="w-[49px] h-[18px] text-black text-[14px] md:text-[16px] font-medium leading-[18px] tracking-[3px]">
    HELP
  </h1>
  <div className="md:w-[136px] md:h-[133px] w-[91px] h-[112px] text-[14px] md:leading-[19px] leading-[16px]  md:text-[16px] whitespace-nowrap flex flex-col justify-between mt-3 md:mt-6 font-normal text-gray-500">
    <a href="">Customer Support</a>
    <a href="">Delivery Details</a>
    <a href="">Terms & Conditions</a>
    <a href="">Privacy Policy</a>
  </div>
</div>

<div className="w- [149px] h-[177px]">
  <h1 className="w-[49px] h-[18px] md:text-[16px] text-[14px] font-medium text-black leading-[18px] tracking-[3px]">
    FAQ
  </h1>
  <div className="w-[149px] md:h-[133px] h-[112px] text-[14px] md:leading-[19px] leading-[16px]  md:text-[16px] whitespace-nowrap flex flex-col justify-between mt-3 md:mt-6 font-normal text-gray-500">
    <a href="">Account</a>
    <a href="">Manage Deliveries</a>
    <a href="">Orders</a>
    <a href="">Payments</a>
  </div>
</div>

<div className="w- [149px] h-[177px] gap-[26px]">
  <h1 className="w-[49px] h-[18px] md:text-[16px] text-[14px] font-medium text-black leading-[18px] tracking-[3px]">
    RESOURCES
  </h1>
  <div className="w-[149px] md:h-[133px] h-[112px] text-[14px] md:leading-[19px] leading-[16px]  md:text-[16px] whitespace-nowrap  flex flex-col justify-between mt-3 md:mt-6 font-normal text-gray-500">
    <a href="">Free eBooks</a>
    <a href="">Development Tutorial</a>
    <a href="">How to - Blog</a>
    <a href="">Youtube Playlist</a>
  </div>
</div>

            </div> 
            </div>
            <div>

            <div className=' m- 2 md:my- 5 border-[1px] border-solid border-[#0000001A] '></div>

<div className=" flex  flex-col mx-10 md:flex-row absolut pb-7 justify-center items-center md:justify-between">
<div className="w-[269px] h-[19px] md:top -[490px] top -[880px] text-[14px] leading-[18.9px] font-normal text-greyy">
   Shop.co © 2000-2023, All Rights Reserve
</div>

<div className="w-[281.07px]  md:top -[490px] top-[900px] flex h-[30.03px]  gap-[10.12px] md:gap-3">
   <div className="w-[46.61px] bg-white h-[30.03px] border-[0.22px] rounded-[5.38px] py-[9.94px] px-[6.91px]">
     <Image src={visa} alt="" />
   </div>

   <div className="w-[46.61px] bg-white h-[30.03px] border-[0.22px] rounded-[5.38px] py-[9.94px] px-[6.91px]">
     <Image src={masterCard} alt="" />
   </div>

   <div className="w-[46.61px] bg-white h-[30.03px] border-[0.22px] rounded-[5.38px] py-[9.94px] px-[6.91px]">
     <Image src={paypal} alt="" />
   </div>

   <div className="w-[46.61px] bg-white h-[30.03px] border-[0.22px] rounded-[5.38px] py-[9.94px] px-[6.91px]">
     <Image src={applePay} alt="" />
   </div>

   <div className="w-[46.61px] bg-white h-[30.03px] border-[0.22px] rounded-[5.38px] py-[9.94px] px-[6.91px]">
     <Image src={Gpay} alt="" />
   </div>
</div>
</div>

            </div>
         </div>


        </div>
        </div>

    )
}

// export default function Footer() {
//   return (
//     <footer className="flex flex-col relativ   min-h-screen bg-[#f0f0f0]">
//       <div className="flex-grow relative">
//         <div
//           className="absolute bg-black text-white w-full max-w-[1180px] h-[50%] rounded-[20px] left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-8 md:p-16 flex flex-col md:flex-row justify-between"
//           style={{ bottom: '50%' }}
//         >
//           <h1 className="text-[32px] md:text-[40px] font-black leading-snug">
//             STAY UPTO DATE ABOUT OUR LATEST OFFERS
//           </h1>
//           <div className="flex flex-col gap-4 mt-4 md:mt-0">
//             <div className="flex items-center bg-white rounded-[62px] px-4 py-3">
//               <Image src={Email} alt="Email" className="w-5 h-5" />
//               <span className="text-gray-500 text-sm ml-3">
//                 Enter your email address
//               </span>
//             </div>
//             <button className="bg-white text-black rounded-[62px] px-6 py-3 text-sm">
//               Subscribe to Newsletter
//             </button>
//           </div>
//         </div>
//       </div>

//       <div className="bg-[#f0f0f0] pt-10">
//         <div className="container mx-auto px-4 md:px-14 flex flex-wrap gap-8 justify-between">
          
//           <div className="max-w-[248px]">
//             <h1 className="text-[28.85px] md:text-[33.45px] font-bold">SHOP.CO</h1>
//             <p className="text-gray-500 text-sm mt-3">
//               We have clothes that suit your style and which you’re proud to wear. From women to men.
//             </p>
//             <div className="flex gap-2 mt-4">

//               {[twitter, facebook, insta, github].map((icon, index) => (
//                 <div
//                   key={index}
//                   className="w-7 h-7 flex items-center justify-center border rounded-full"
//                 >
//                   <Image src={icon} alt="" />
//                 </div>
//               ))}
//             </div>
//           </div>

//           <div className="flex gap-8 flex-wrap">
//             {[
//               { title: 'COMPANY', links: ['About', 'Features', 'Works', 'Career'] },
//               { title: 'HELP', links: ['Customer Support', 'Delivery Details', 'Terms & Conditions', 'Privacy Policy'] },
//               { title: 'FAQ', links: ['Account', 'Manage Deliveries', 'Orders', 'Payments'] },
//               { title: 'RESOURCES', links: ['Free eBooks', 'Development Tutorial', 'How to - Blog', 'Youtube Playlist'] },
//             ].map((section, index) => (
//               <div key={index}>
//                 <h1 className="text-[14px] md:text-[16px] font-medium text-black uppercase">
//                   {section.title}
//                 </h1>
//                 <div className="flex flex-col gap-2 mt-3 text-gray-500 text-sm">
//                   {section.links.map((link, i) => (
//                     <a href="#" key={i}>
//                       {link}
//                     </a>
//                   ))}
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         <div className="border-t border-gray-300 my-6 mx-4" />

        // <div className="flex flex-col md:flex-row justify-between items-center mx-4 md:mx-14">
        //   <p className="text-gray-500 text-sm">
        //     Shop.co © 2000-2023, All Rights Reserved
        //   </p>
        //   <div className="flex gap-3 mt-4 md:mt-0">
        //     {[visa, masterCard, paypal, applePay, Gpay].map((icon, index) => (
        //       <div
        //         key={index}
        //         className="w-[46.61px] h-[30.03px] flex items-center justify-center border rounded-md"
        //       >
        //         <Image src={icon} alt="" />
        //       </div>
        //     ))}
        // </div>
        // </div>
//     </footer>
//   );
// }
