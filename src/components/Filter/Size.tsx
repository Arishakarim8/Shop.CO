"use client";
import { useState } from "react";
import Image from "next/image";
import down_vector from '@/assets/Vector (28).svg';


export default function Size() {
  // Initialize state with the first size as the default selected size
  const size =[" XX-Small" , "X-Small" , "Small" , "Medium" , "Large" , "X-Large" , 'XX-Large' , '3X-Large' , "4X-Large" ]

  const [selectedSize, setSelectedSize] = useState<string>(size[0]);
  const handleSizeSelect = (size: string) => {
    setSelectedSize(size); // Update the selected size
  };
  const [open, setOpen] = useState(false);

  const toggleOpen = () => {
    setOpen((prev) => !prev);
  };

  return (
    <div className="w-full">
      <div
        className="flex justify-between items-center cursor-pointer  py-2"
        onClick={toggleOpen}
      >
        <h1 className="font-bold text-[20px] leading-[27px] text-black">
          Size
        </h1>
        <Image
          src={down_vector}
          alt="Toggle Dress Style"
          className={`transition-transform duration-300 ${
            open ? "rotate-180" : "rotate-0"
          }`}
        />
      </div>
      {open && (
    <div className="flex flex-wrap gap-3" >
      {size.map((size, index) => (
        <button
          key={index}
          className={`h-[39px] md:h- [46px] py-[10px] md:p y-3 md:p x-6 px-5 gap-3 rounded-[62px] ${
            selectedSize === size ? "bg-black text-white" : "bg-[#f0f0f0] text-[#00000099]"
          }`}
          onClick={() => handleSizeSelect(size)} 
        >
          <h1 className="font-normal text-[14px] leading-[18.9px]  md:text -[16px] md:leading -[21.6px]">
            {size}
          </h1>
        </button>
      ))}
    </div>
       )}

    </div>
  );
}

