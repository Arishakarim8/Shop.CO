import Filters from "@/assets/Vector (26).svg"
import Image from "next/image"
import Filter_Vector from "@/assets/Vector (27).svg"
import Color from "./Color"
import Size from "./Size"
import Price from "./Price"
import DressStyleFilter from "./Dress"
export default function Filter(){
    return (
      <div className="max-w-[290px] flex flex-col h-[90vh] md:h-auto overflow-y-auto md:overflow-y-hidden no-scrollbar absolute bg-white py-5 px-6 gap-5 border border-BORDER rounded-[20px]  ">
      <div className="">
      <div className=" flex justify-between py-2 ">
         <h1 className="font-bold text-[20px] ledaing-[27px] text-black">
         Filters
         </h1>
         <Image src={Filters} alt="" />
      </div>
      <div className=' border-[1px] border-solid border-[#0000001A] '></div>
     </div>


      <ul className=" font-normal flex flex-col justify-between text-[16px] leading-[21.6px] text-[#00000099] md:h-[160px] md:gap-5  h-[160px] top-[83px] left-[19px]  gap -3">
       <li className=" flex h-4 justify-between"> 
          <h1>T-shirts</h1>
          <Image src={Filter_Vector} alt="" />
        </li>

        <li className=" flex h-4 justify-between"> 
          <h1>Shorts</h1>
          <Image src={Filter_Vector} alt="" />
        </li>

        <li className=" flex h-4 justify-between" > 
          <h1>Shirts</h1>
          <Image src={Filter_Vector} alt="" />
        </li>

        <li className=" flex h-4 justify-between"> 
          <h1>Hoodie</h1>
          <Image src={Filter_Vector} alt="" />
        </li>

        <li className=" flex h-4 justify-between"> 
          <h1>Jeans</h1>
          <Image src={Filter_Vector} alt="" />
        </li>
      </ul>

     <div className=" border border-BORDER"></div>

         {/* <div className=" relative flex flex-col justify-center items-center ">
          <div className=" h-[6px] w-full  m-2  bg-[#f0f0f0]  rounded-[20px]"></div>
          <div className=" absolute w-[70%]  flex items-center justify-between  h-[6px]  bg-black  rounded-[20px] ">
          <div className="w-5 h-5 absolut e grid gap-2  rounded-[50px] bg-black">
          <h1 className="font-medium absolut text-[14px] mt-5 leading-[18.9px] text-black ">$50</h1>
          </div>
          <div className="w-5 h-5 absolut  rounded-[50px] bg-black ">
          <h1 className="font-medium mt-5 text-[14px] leading-[18.9px] text-black">$200</h1>
          </div>
          </div>
        </div> */}

     <div className=" relative flex flex-col justify-center items-center ">
<Price/>
      </div>

    <div className=" border border-BORDER"></div> 

<Color/>

     <div className=" border border-BORDER"></div> 

<Size/>

     <div className="border border-BORDER"></div> 

<DressStyleFilter/>

       <button className=" bg-black h-12 py-4 px-14 gap-3  rounded-[62px] ">
         <h1 className=" md:text-[14px] leading- md:leading-[18.9px] font-medium text-white">
         Apply Filter
         </h1>
      </button>
     </div>
)
}

