import ICON from "@/assets/Icon.svg"
import Image from "next/image"

export default function Pagination(){
    return <div>
 <div className="flex items-center justify-between  font-medium leading-5 text-[12px] md:text-[14px]    w-full  md:w-4/6  px-4 py-2 mx-auto ">
  <button className="flex items-center gap-2 px-4 py-2  text-gray-600 border rounded-lg hover:bg-[#0000000F]">
     <Image src={ICON} alt="" />
    Previous
  </button>

  <div className="flex items-center gap-2">
    <button className="w-8 h-8 text-black bg-[#0000000F] rounded-lg">1</button>
    <button className="w-8 h-8 text-gray-800 border rounded-lg hover:bg-[#0000000F]">2</button>
    <button className="w-8 h-8 text-gray-800 border rounded-lg hidden lg:block hover:bg-[#0000000F]">3</button>
    <span className="text-gray-500">...</span>
    <button className="w-8 h-8 text-gray-800 border rounded-lg hidden lg:block hover:bg-[#0000000F]">8</button>
    <button className="w-8 h-8 text-gray-800 border rounded-lg hover:bg-[#0000000F]">9</button>
    <button className="w-8 h-8 text-gray-800 border rounded-lg hover:bg-[#0000000F]">10</button>
  </div>

  <button className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-600 border rounded-lg hover:bg-[#0000000F]">
    Next
    <Image src={ICON} alt="" className="rotate-180"/>

  </button>
</div>

    </div>
}