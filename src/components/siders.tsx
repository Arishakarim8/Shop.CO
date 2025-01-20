"use client"
import React, { useState } from "react";

const Slider = () => {
  const [minValue, setMinValue] = useState(50);
  const [maxValue, setMaxValue] = useState(200);

  const handleMinChange = () => {
    const value = Math.min(Number(), maxValue - 1);
    setMinValue(value);
  };

  const handleMaxChange = (event: { target: { value: any; }; }) => {
    const value = Math.max(Number(event.target.value), minValue + 1);
    setMaxValue(value);
  };

  return (
    <div className="relative w-full max-w-[500px] mx-auto">
      {/* Track */}
      <div className="absolute w-full h-[6px] bg-[#f0f0f0] top-[30px] rounded-[20px]"></div>
      {/* Filled Range */}
      <div
        className="absolute h-[6px] bg-black rounded-[20px]"
        style={{
          left: `${(minValue / 500) * 100}%`,
          right: `${100 - (maxValue / 500) * 100}%`,
        }}
      ></div>
      {/* Thumbs */}
      <input
        type="range"
        min="50"
        max="500"
        value={minValue}
        onChange={handleMinChange}
        className="absolute appearance-none w-full h-[6px] bg-transparent z-10 pointer-events-auto"
        style={{ top: "18px" }}
      />
      <input
        type="range"
        min="50"
        max="500"
        value={maxValue}
        onChange={handleMaxChange}
        className="absolute appearance-none w-full h-[6px] bg-transparent z-10 pointer-events-auto"
        style={{ top: "18px" }}
      />

      {/* Thumb Indicators */}
      <div
        className="w-5 h-5 rounded-[50px] bg-black absolute"
        style={{ left: `${(minValue / 500) * 100}%`, top: "15px" }}
      ></div>
      <div
        className="w-5 h-5 rounded-[50px] bg-black absolute"
        style={{ left: `${(maxValue / 500) * 100}%`, top: "15px" }}
      ></div>

      {/* Labels */}
      <div className="absolute top-[50px] flex justify-between w-full text-sm">
        <span className="font-medium text-black">${50}</span>
        <span className="font-medium text-black">${200}</span>
      </div>
    </div>
  );
};

export default Slider;



