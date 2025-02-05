// "use client";
// import { useState } from "react";

// export default function PriceRangeSelector() {
//   const [minPrice, setMinPrice] = useState(50);
//   const [maxPrice, setMaxPrice] = useState(200);

//   const handleMinChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     const value = Math.min(Number(event.target.value), maxPrice - 10);
//     setMinPrice(value);
//   };

//   const handleMaxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     const value = Math.max(Number(event.target.value), minPrice + 10);
//     setMaxPrice(value);
//   };

//   return (
//     <div className="relative flex flex-col justify-center items-center w-full ">
//       {/* Background Line */}
//       <div className="h-[6px] w-full bg-[#f0f0f0] rounded-[20px] relative"></div>

//       {/* Active Range Line */}
//       <div
//         className="absolute top-1/2 transform -translate-y-1/2 h-[6px] bg-black rounded-[20px]"
//         style={{
//           left: `${(minPrice / 250) * 100}%`,
//           width: `${((maxPrice - minPrice) / 250) * 100}%`,
//         }}
//       ></div>

//       {/* Price Circle Markers */}
//       <div
//         className="absolute w-5 h-5 rounded-full bg-black flex justify-center items-center cursor-pointer"
//         style={{ left: `${(minPrice / 250) * 100}%` }}
//       >
//         <h1 className="absolute top-6 text-[14px] text-black">${minPrice}</h1>
//       </div>

//       <div
//         className="absolute w-5 h-5 rounded-full bg-black flex justify-center items-center cursor-pointer"
//         style={{ left: `${(maxPrice / 250) * 100}%` }}
//       >
//         <h1 className="absolute top-6 text-[14px] text-black">${maxPrice}</h1>
//       </div>

//       {/* Range Inputs */}
//       <input
//         type="range"
//         min="0"
//         max="250"
//         value={minPrice}
//         onChange={handleMinChange}
//         className="absolute w-full opacity-0 cursor-pointer"
//       />
//       <input
//         type="range"
//         min="0"
//         max="250"
//         value={maxPrice}
//         onChange={handleMaxChange}
//         className="absolute w-full opacity-0 cursor-pointer"
//       />
//     </div>
//   );
// }

"use client";
import Image from "next/image";
import { useState } from "react";
import down_vector from '@/assets/Vector (28).svg'

export default function PriceRangeSelector() {
  // Set initial states (you can adjust these as needed)
  const [minPrice, setMinPrice] = useState(50);
  const [maxPrice, setMaxPrice] = useState(200);

  // Define the overall range and a minimum gap between values
  const minLimit = 0;
  const maxLimit = 250;
  const minGap = 10;

  const handleMinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    // Ensure minPrice doesn't exceed (maxPrice - minGap)
    if (value > maxPrice - minGap) {
      setMinPrice(maxPrice - minGap);
    } else {
      setMinPrice(value);
    }
  };

  const handleMaxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    // Ensure maxPrice isn't less than (minPrice + minGap)
    if (value < minPrice + minGap) {
      setMaxPrice(minPrice + minGap);
    } else {
      setMaxPrice(value);
    }
  };

  const [open, setOpen] = useState(false);

  const toggleOpen = () => {
    setOpen((prev) => !prev);
  };

  return (
    <div className="w-full">
    <div
      className="flex justify-between items-center cursor-pointer py-2"
      onClick={toggleOpen}
    >
      <h1 className="font-bold text-[20px] leading-[27px] text-black">
      Price
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

    <div className="relative  flex flex-col py-2 w-full ">
      {/* Background Line */}
      <div className="h-[6px] w-full m-2 bg-[#f0f0f0] rounded-[20px] relative"></div>

      {/* Active Range Line */}
      <div
        className="absolute top-1/2 transform -translate-y-1/2 h-[6px] bg-black rounded-[20px]"
        style={{
          left: `${(minPrice / maxLimit) * 100}%`,
          width: `${((maxPrice - minPrice) / maxLimit) * 100}%`,
        }}
      ></div>

      {/* Price Circle Marker for Minimum Price */}
      <div
        className="absolute w-5 h-5  rounded-full bg-black flex justify-center items-center cursor-pointer"
        style={{ left: `${(minPrice / maxLimit) * 100}%` }}
      >
        <h1 className="absolute top-6 text-[14px] text-black">{`$${minPrice}`}</h1>
      </div>

      {/* Price Circle Marker for Maximum Price */}
      <div
        className="absolute w-5 h-5 rounded-full bg-black  flex justify-center items-center cursor-pointer"
        style={{ left: `${(maxPrice / maxLimit) * 100}%` }}
      >
        <h1 className="absolute top-6  text-[14px] text-black">{`$${maxPrice}`}</h1>
      </div>

      {/* Range Inputs (hidden but overlaying the slider for interactivity) */}
      <input
        type="range"
        min={minLimit}
        max={maxLimit}
        value={minPrice}
        onChange={handleMinChange}
        className="absolute w-full opacity-0 cursor-pointer"
      />
      <input
        type="range"
        min={minLimit}
        max={maxLimit}
        value={maxPrice}
        onChange={handleMaxChange}
        className="absolute w-full opacity-0 cursor-pointer"
      />
    </div>
    )}
    </div>
  );
}
