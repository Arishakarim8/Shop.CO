"use client";
import { useState } from "react";
import Image from "next/image";
import color_vector from "@/assets/Vector (29).svg"
import down_vector from '@/assets/Vector (28).svg';

const colors = [
  { name: "Green", hex: "#00C12B" },
  { name: "Red", hex: "#F50606" },
  { name: "Yellow", hex: "#F5DD06" },
  { name: "Orange", hex: "#F57906" },
  { name: "Cyan", hex: "#06CAF5" },
  { name: "Blue", hex: "#063AF5" },
  { name: "Purple", hex: "#7D06F5" },
  { name: "Pink", hex: "#F506A4" },
  { name: "White", hex: "#FFFFFF" },
  { name: "Black", hex: "#000000" },
];

export default function Color() {
  const [selectedColor, setSelectedColor] = useState(colors[0].hex); // Default selected color

  const handleColorSelect = (color: string) => {
    setSelectedColor(color);
  };
  const [open, setOpen] = useState(false);

  const toggleOpen = () => {
    setOpen((prev) => !prev);
  };

  return (
    <div className="w-full">
    <div
      className="flex justify-between w-full items-center cursor-pointer  py-2"
      onClick={toggleOpen}
    >
      <h1 className="font-bold text-[20px] leading-[27px] text-black">
        Colors
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

    <div className="flex gap-2 flex-wrap justify-center">
      {colors.map((color, index) => (
        <div
          key={index}
          className={`w-[37px] h-[37px] border-[2px] ${
            selectedColor === color.hex ? "border-[#00000033]" : "border-[#00000033]"
          } rounded-full cursor-pointer flex justify-center items-center`}
          style={{ backgroundColor: color.hex }}
          onClick={() => handleColorSelect(color.hex)}
        >
          {selectedColor === color.hex && (
            <Image src={color_vector} alt="Selected" className="w-4 h-4 text-black" />
          )}
        </div>
      ))}
    </div>
     )}

    </div>
  );
}
