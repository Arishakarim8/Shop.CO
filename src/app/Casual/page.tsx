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
export default function Casual(){
    return (
        <div className=" relativ">
             <div className="md:w-[106px] flex md:h-[22px] w-[89px] h-[19px] absolute top-[118px] md:top-[158px] left-[16px] md:left-[56px] gap-[6px] md:gap-3">
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

             <h1 className="md:top-[204px] absolute top-[149px] font-bold left-[16px] md:left-[415px] leading-[32.4px] text-[24px] md:text-[32px] md:leading-[43.2px] text-black">
             Casual 
             </h1>

             <div className="md:w-[396px] md:h-4  absolute flex text-nowrap text-[#00000099] md:top-[222px] md:left-[874px] md:gap-3 w-[183px] h-[10px] top-[164px] left-[100]">
               <h1 className="md:leading-[21.6px] top-[164px] mb-11 md:top-[1] text-nowrap md:text-[16px] font-normal leading-[18.9px] text-[14px]">
               Showing 1-10 of 100 Products
               </h1>
               {/* <button className=" w-8 h-8 py-4 px-5 rounded-[62px] absolut  flex md :hidden ">
                 <Image src={Filters02} alt="" className="bg-[#f0f0f0]"/>
               </button> */}
                {/* <Image 
                     src={Filters02} 
                     alt="Filters" 
                     className=" w-8 h-8 py -4 px -5 left-[60px] top-[149px] mb-6 rounded -[62px] relative  flex md:hidden "
                 /> */}
               <div className="hidden md:flex w-[175px] font-normal leading-[21.6px] text-[16px] h-4 gap-1">
               Sort by: <span className="font-medium text-black"> Most Popular </span>
               <Image src={Shop} alt="" className='w-[11.5px] hidden md:flex mt-2 m-1 h-[6.5px] top-[5.25px] left-[2.25px] '/>
               </div>
             </div>
             <Image 
                     src={Filters02} 
                     alt="Filters" 
                     onClick={() => {
                      // Redirect to the filter page or open a modal
                      window.location.href = "/"; 
                      // Replace with your filter page route
                    }}
                     className=" w-8 h-8 py -4 px -5 left-[342px] top-[149px] mb-2 rounded -[62px] relativ absolute  flex md:hidden "
                 />


             <div className="grid grid-cols-2 sm:grid-cols-2  lg:grid-cols-3 left-4 md:left-[365px] absolute top-[210px] md:top-[263px] md:gap-4">
  <div className="md:h-[430px]">
 <Pr
  image={Multi_shirt}
  title="Gradient Graphic T-shirt"
  rating={3.5}
  price={145}
/>
</div>
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
<div className="md:h-[430px] ">
<Pr
  image={Skinny_Jeans}
  title="Skinny Fit Jeans"
  rating={3.5}
  price={240}
  discount={20}
  originalPrice={260}
/>
</div>
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
{/* </div>

<div className="md:top-[1151px] absolute flex md:left-[416px] "> */}

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
           <div className="md:w-[925px] w-[359px] absolute border border-[#0000001A]  top-[1052px] left-[16px] md:top-[1591px]  md:left-[365px] "> </div>
          
          <div className="md:w-[920px] md:h-10 md:top-[1611px] flex justify-between font-medium leading-5 text-[12px] md:text-[14px]  absolute md:left-[365px] md:gap-[216px] w-[359px] h-[36px] top-[1073px] left-[15px] rounded-[8px]">
            <div className="w-[90px] md:w-[110px] gap-2 h-9 rounded-[8px] py-2 px-[14px] border-1  border-[#0000001A]">
              <h1 className=" ">
                Previous
              </h1>
            </div>
            <div className="w-9 h-9 rounded-[8px]">
               1
            </div>
          </div>
       <div className="md:top-[1731px] absolute top-[1159px]" >
       <Footer />
       </div>

        </div>
    )
}