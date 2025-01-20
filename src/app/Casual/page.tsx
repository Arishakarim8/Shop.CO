"use client"

import arrow from "@/assets/Vector (21).svg"
import Image from "next/image"
import Link from "next/link"
import Filter from "@/components/Filter"
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
import ICON from "@/assets/Icon.svg"
export default function Casual(){
    return (
        <div className=" flex flex-col h-full ml-10 mt-10 relative">
             <div className=" flex  abs olute top- [118px] md:top- [158px] left-[16px]  md:left-[56px] gap-[6px] md:gap-3">
             <Link href="/" className="md:text-[16px] text-[14px] leading-[18.9px] gap-1 md:leading-[21.6px] font-normal text-[#00000099]">
             Home
             </Link>
             <div className=" w-[11.5px] md:mt-[5px] mt-[3px]  h-[6.5px] top-[13.75px] left-[5.25px]">
              <Image src={arrow} alt="" />
             </div>
             <h1 className="text-[14px] leading-[18.9px] md:text-[16px] md:leading-[21.6px] font-normal w-[31px] h-[22px] text-black">
              Shop
             </h1>
             </div>
             <div className="md:flex hidden relative mt-10">
             <Filter />
             </div>

            <div className=" flex w-full  justify-between">
            <div className=" flex flex-col lg:flex-row  w-full  justify-between  md:ml-[305px]  relativ ">
             <h1 className=" relativ font-bold leading-[32.4px] text-[24px] md:text-[32px] md:leading-[43.2px] text-black">
             Casual 
             </h1>

             <div className="  flex flex-col xs:flex-row text-nowrap pr-6 text-[#00000099] gap-1 relative  lg md:mt-2 lg:right -6 md:gap-3  ">
               <h1 className="md:leading-[21.6px] text-nowrap md:text-[16px] font-normal leading-[18.9px] text-[14px]">
               Showing 1-10 of 100 Products
               </h1>
               <div className=" flex gap-1 w-[175px] font-normal lg:right-0 leading-[18.9px] text-[14px] md:leading-[21.6px] md:text-[16px]">
               Sort by: <span className="font-medium text-black"> Most Popular </span>
               <Image src={Shop} alt="" className='w-[11.5px] md:mt-2 m-[6px]  h-[6.5px] top-[5.25px]  '/>
               </div>
             </div>
             </div>

             <div>
             < Link href="#Filters">       
             <Image 
                     src={Filters02} 
                     alt="Filters" 
                    //  onClick={() => {
                    //   window.location.href = "/"; 
                    // }}
                     className=" w-8 h-8 top- [149px] mb-2 rounded-[62px] relative abs olute right -6 flex md:hidden "
                 />
             </Link>
            </div>
            </div>
 <div className=" flex flex-col lg:flex -row lg: justify-between  md:ml-[305px] relative ">
 {/* <div className="grid max-w-[950px] md:ml-[365px] relative"> */}
             <div className="grid grid-cols-2 xs:grid-cols-3  md:grid-cols-2  lg:grid-cols-3 md:gap-5  ">
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

<div className=' m-7   border-[1px] border-solid border-[#0000001A] '></div>

<div className="flex items-center justify-between  font-medium leading-5 text-[12px] md:text-[14px]    w-full  md:w-4/6  px-4 py-2 mx-auto ">
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
</div>


        </div>
    )
}