"use client"
import Pagination from "@/components/Filter/Pagination"
import arrow from "@/assets/Vector (21).svg"
import Image from "next/image"
import Link from "next/link"
import Filter from "@/components/Filter/page"
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
import FilterToggle from "@/components/Filter/FilterToggle"
export default function Casual(){
    return (
        <div className=" flex flex-col h-full sm:ml-5 md:ml-14 mt-10  relative">
             <div className=" flex gap-[6px] md:gap-3">
             <Link href="/" className="md:text-[16px] text-[14px] leading-[18.9px] gap-1 md:leading-[21.6px] font-normal text-[#00000099]">
             Home
             </Link>
             <div className=" w-[11.5px] md:mt-[5px] mt-[3px]  h-[6.5px] top-[13.75px] left-[5.25px]">
              <Image src={arrow} alt="" />
             </div>
             <Link href="/Casual" className="md:text-[16px] text-[14px] leading-[18.9px] gap-1 md:leading-[21.6px] font-normal text-[#00000099]">
              Shop
              </Link>

             </div>
             <div className="md:flex hidden  mt-10">
             <Filter />
             </div>
<div className=" relative md:ml-[295px] ">

            <div className=" flex w-full  justify-between">
            <div className=" flex flex-col lg:flex-row  w-full  justify-between  ">
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

             <div className="flex md:hidden">
              <FilterToggle/>
            </div>
            </div>
 <div className=" flex flex-col justify-between  ">
             <div className="grid grid-cols-2 xs:grid-cols-3   md:grid-cols-2  lg:grid-cols-3 md:gap-5  ">
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

<Pr
  image={Checkered_Shirt}
  title="Checkered Shirt"
  rating={4.5}
  price={180}
/>
<Pr
  image={Sleeve_Striped}
  title="Sleeve Striped T-shirt"
  rating={4.5}
  price={130}
  discount={30}
  originalPrice={160}
/>


<Pr
  image={Vertical_Striped}
  title="Vertical Striped Shirt"
  rating={5.0}
  price={212}
  discount={20}
  originalPrice={232}
/>

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

<div className=' my-7   border-[1px] border-solid border-[#0000001A] '></div>
<Pagination/>
</div>
</div>

        </div>
    )
}