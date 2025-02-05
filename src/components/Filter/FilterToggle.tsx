"use client";
import { useState } from "react";
import Image from "next/image";
import Filter from "@/components/Filter/page"; // Import Filter Component
import Filters02 from "@/assets/Frame 19.svg"

export default function FilterToggle() {
  const [showFilter, setShowFilter] = useState(false);

  const toggleFilter = () => {
    setShowFilter((prev) => !prev); // Toggle visibility
  };

  return (
    <div className="relative">
      <button onClick={toggleFilter} className="md:hidden">
        <Image
          src={Filters02}
          alt="Filters"
          className="w-8 h-8 mb-2 rounded-[62px] relative right-6"
        />
      </button>

      {showFilter && (
         <div className={`fixed inset-0 bg-black/50 z-50 transform ${showFilter ? "translate-x-0" : "translate-x-full"} transition-transform duration-300 ease-in-out`}> 

          <div className="p-6 rounded-lg w-full max-w-md">
            <div className=" text-center">
            <Filter /> 
            </div>
            <button onClick={toggleFilter} className=" bg-white p-1 rounded-[50px] h-10 w-10 relative top-4 mr-16 text-black text-xl">
              ✕
            </button>

          </div>
        </div>
      )}
    </div>
  );
}

