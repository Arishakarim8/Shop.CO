"use client"

import arrow from "@/assets/Vector (21).svg"
import Image from "next/image"
import Link from "next/link"
import Navbar from "@/components/Navbar"
import BrandName from "@/components/BrandName"
import Filter from "../Filter/page"
import Skinny_Jeans from '@/assets/Frame 33 (1).svg'
import Pr from "../Products/page"
import Multi_shirt from "@/assets/Frame 33 (2).svg"
import Polo_Shirt from "@/assets/Frame 34 (1).svg"
import Black_Striped from "@/assets/Frame 38 (1).svg"
import Checkered_Shirt from '@/assets/Frame 113.svg'
import Sleeve_Striped from '@/assets/Frame 114.svg'
import Vertical_Striped from "@/assets/Frame 32.svg"
import Courage_Graphic from "@/assets/Frame 33.svg"
import LOOSE_SHORTS from "@/assets/Frame 34.svg"
import Shop from '@/assets/Vector (2).svg'
import Filters02 from "@/assets/Frame 19.svg"
import Filters from "@/assets/Vector (26).svg"
import Footer from "@/components/Footer"
import ICON from "@/assets/Icon.svg"
export default function Casual(){
    return (
        <div className=" relativ">
             <div className="md:w-[106px] flex md:h-[22px] w-[89px] h-[19px] absolute top-[118px] md:top-[158px] left-[16px]  md:left-[56px] gap-[6px] md:gap-3">
             <Link href="/" className="md:text-[16px] text-[14px] leading-[18.9px] gap-1 md:leading-[21.6px] font-normal text-[#00000099]">
             Home
             </Link>
             <div className=" w-[11.5px] md:mt-[5px] mt-[3px]  h-[6.5px] top-[13.75px] left-[5.25px]">
              <Image src={arrow} alt="" />
             </div>
             <h1 className="text-[14px] leading-[18.9px] md:text-[16px] md:leading-[21.6px] font-normal w-[31px] h-[22px] text-black">
              Casual
             </h1>
             </div>
             <Filter />
            <div className=" flex flex-col lg:flex-row gap-1 lg:w-7/12 xl:w-8/12  lg:justify-between left-[16px] md:left-[385px] top-[149px] absolute md:top-[184px]">
             <h1 className=" absolut  font-bold left-[16px] md:left-[415px] leading-[32.4px] text-[24px] md:text-[32px] md:leading-[43.2px] text-black">
             Casual 
             </h1>

             <div className="md:w-[396px] md:h-4 flex flex-col sm:flex-row text-nowrap text-[#00000099] gap-1 lg:mt-3 lg:right-6 md:gap-3 w-[183px] h-[10px]  ">
               <h1 className="md:leading-[21.6px] text-nowrap md:text-[16px] font-normal leading-[18.9px] text-[14px]">
               Showing 1-10 of 100 Products
               </h1>
               <div className=" flex w-[175px] font-normal leading-[18.9px] text-[14px] md:leading-[21.6px] md:text-[16px]">
               Sort by: <span className="font-medium text-black"> Most Popular </span>
               <Image src={Shop} alt="" className='w-[11.5px] md:mt-2 m-[6px] h-[6.5px] top-[5.25px]  '/>
               </div>
             </div>
             </div>
             <Image 
                     src={Filters02} 
                     alt="Filters" 
                     onClick={() => {
                      window.location.href = "/"; 
                    }}
                     className=" w-8 h-8  top-[149px] mb-2 rounded-[62px] relativ absolute right-6 flex md:hidden "
                 />
             <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-2  lg:grid-cols-3 gap-2 left-4 md:left-[365px] absolute top-[240px] sm:top-[220px] md:top-[263px] ">
               <Pr
  image={Multi_shirt}
  title="Gradient Graphic T-shirt"
  rating={3.5}
  price={145}
/>
<Pr
  image={Polo_Shirt}
  title="Polo with Tipping Details"
  rating={4.5}
  price={180}
/>

<Pr
  image={Black_Striped}
  title="Black Striped T-shirt"
  rating={5.0}
  price={120}
  discount={30}
  originalPrice={150}
/>
{/* </div>

<div className="md:top-[707px] absolute flex md:left-[416px] "> */}
<Pr
  image={Skinny_Jeans}
  title="Skinny Fit Jeans"
  rating={3.5}
  price={240}
  discount={20}
  originalPrice={260}
/>
<div className="md:h-[420px] h-[280px]">

<Pr
  image={Checkered_Shirt}
  title="Checkered Shirt"
  rating={4.5}
  price={180}
/>
</div>
<Pr
  image={Sleeve_Striped}
  title="Sleeve Striped T-shirt"
  rating={4.5}
  price={130}
  discount={30}
  originalPrice={160}
/>

<div className="md:h-[420px] h-[280px] ">

<Pr
  image={Vertical_Striped}
  title="Vertical Striped Shirt"
  rating={5.0}
  price={212}
  discount={20}
  originalPrice={232}
/>
</div>

<Pr
  image={Courage_Graphic}
  title="Courage Graphic T-Shirt"
  rating={4.0}
  price={145}
/>
<Pr
  image={LOOSE_SHORTS}
  title="Loose Fit Bermuda Shorts"
  rating={3.0}
  price={180}
/>
</div>

<div className="w- [359px] sm: max-w-[600px] md:w- [925px] lg:w- [1200px] mx- auto relative border md:left-[365px] right-10 border-[#0000001A]  md:top-[1591px] ">
</div>
<div className="flex items-center justify-between  font-medium leading-5 text-[12px] md:text-[14px]  md:top-[1661px] absolute top-[1773px]   md:left-[345px] w-full  md:w-4/6  px-4 py-2 mx-auto  sm:max -w-lg">
  <button className="flex items-center gap-2 px-4 py-2  text-gray-600 border rounded-lg hover:bg-gray-100">
     <Image src={ICON} alt="" />
    Previous
  </button>

  <div className="flex items-center gap-2">
    <button className="w-8 h-8 text-black bg-[#0000000F] rounded-lg">1</button>
    <button className="w-8 h-8 text-gray-800 border rounded-lg hover:bg-gray-100">2</button>
    <button className="w-8 h-8 text-gray-800 border rounded-lg hidden lg:block hover:bg-gray-100">3</button>
    <span className="text-gray-500">...</span>
    <button className="w-8 h-8 text-gray-800 border rounded-lg hidden lg:block hover:bg-gray-100">8</button>
    <button className="w-8 h-8 text-gray-800 border rounded-lg hover:bg-gray-100">9</button>
    <button className="w-8 h-8 text-gray-800 border rounded-lg hover:bg-gray-100">10</button>
  </div>

  <button className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-600 border rounded-lg hover:bg-gray-100">
    Next
    <Image src={ICON} alt="" className="rotate-180"/>

  </button>
</div>


             {/* <div className="flex items-center justify-between  font-medium leading-5 text-[12px] md:text-[14px]  md:top-[1661px] absolute top-[1773px]   md:left-[345px] w-full  md:w-4/6  px-4 py-2 mx-auto  sm:max -w-lg">
  <button className="flex items-center gap-2 px-4 py-2  text-gray-600 border rounded-lg hover:bg-gray-100">
     <Image src={ICON} alt="" />
    Previous
  </button>

  <div className="flex items-center gap-2">
    <button className="w-8 h-8 text-black bg-[#0000000F] rounded-lg">1</button>
    <button className="w-8 h-8 text-gray-800 border rounded-lg hover:bg-gray-100">2</button>
    <button className="w-8 h-8 text-gray-800 border rounded-lg hidden lg:block hover:bg-gray-100">3</button>
    <span className="text-gray-500">...</span>
    <button className="w-8 h-8 text-gray-800 border rounded-lg hidden lg:block hover:bg-gray-100">8</button>
    <button className="w-8 h-8 text-gray-800 border rounded-lg hover:bg-gray-100">9</button>
    <button className="w-8 h-8 text-gray-800 border rounded-lg hover:bg-gray-100">10</button>
  </div>

  <button className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-600 border rounded-lg hover:bg-gray-100">
    Next
    <Image src={ICON} alt="" className="rotate-180"/>

  </button>
</div> */}

           {/* <div className="md:w-[925px] w-[359px] absolute border border-[#0000001A]  top-[1052px] left-[16px] md:top-[1591px]  md:left-[365px] "> </div>
          
          <div className="md:w-[920px] md:h-10 md:top-[1611px] flex justify-between font-medium leading-5 text-[12px] md:text-[14px]  absolute md:left-[365px] md:gap-[216px] w-[359px] h-[36px] top-[1073px] left-[15px] rounded-[8px]">
            <div className="w-[90px] md:w-[110px] gap-2 h-9 rounded-[8px] py-2 px-[14px] border-1  border-[#0000001A]">
              <h1 className=" ">
                Previous
              </h1>
            </div>
            <div className="w-9 h-9 rounded-[8px]">
               1
            </div>
          </div> */}
        </div>
    )
}