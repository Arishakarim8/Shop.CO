"use client";
import { useState } from "react";
import Image from "next/image";
import Filter_Vector from "@/assets/Vector (27).svg"
import down_vector from '@/assets/Vector (28).svg'

export default function DressStyleFilter() {
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
          Dress Style
        </h1>
        <Image
          src={down_vector}
          alt="Toggle Dress Style"
          className={`transition-transform duration-300 ${
            open ? "rotate-180" : "rotate-0"
          }`}
        />
      </div>

      {/* Collapsible List */}
      {open && (
        <ul className=" mt-4 font-normal flex flex-col gap-4 text-[16px] leading-[21.6px] text-[#00000099]">
          <li className="flex justify-between items-center">
            <span>Casual</span>
            <Image src={Filter_Vector} alt="Casual" />
          </li>
          <li className="flex justify-between items-center">
            <span>Formal</span>
            <Image src={Filter_Vector} alt="Formal"  />
          </li>
          <li className="flex justify-between items-center">
            <span>Party</span>
            <Image src={Filter_Vector} alt="Party" />
          </li>
          <li className="flex justify-between items-center">
            <span>Gym</span>
            <Image src={Filter_Vector} alt="Gym"  />
          </li>
        </ul>
      )}
    </div>
  );
}
