"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import MenuIcon from "@/assets/Frame.svg";
import ShopIcon from "@/assets/Vector (2).svg";

export default function MenuWithCut() {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <div className="relative">
      <button className="md:hidden p-2" onClick={toggleMenu}>
        <Image src={MenuIcon} alt="Menu" className="w-6 h-6" />
      </button>

      {menuVisible && (
        <div className="fixed inset-0 bg-black bg-opacity-70 z-50 flex flex-col">
          <div className="w-64 h-full bg-gray-100 p-6 shadow-lg">
            <div className="flex justify-between items-center mb-4">
              <h1 className="text-xl font-bold">SHOP.CO</h1>
              <button onClick={toggleMenu} className="text-2xl font-bold">
                ✕
              </button>
            </div>

            <ul className="space-y-4 text-lg">
              <li className="flex items-center gap-2">
                <Link href="/Man" className="hover:text-gray-600">
                  Shop
                </Link>
                <Image src={ShopIcon} alt="Shop Icon" className="w-3 mt-1 h-3" />
              </li>
              <li>
                <Link href="/f2" className="hover:text-gray-600">
                  On Sale
                </Link>
              </li>
              <li>
                <Link href="/Casual" className="hover:text-gray-600">
                  New Arrivals
                </Link>
              </li>
              <li>
                <Link href="/Brand" className="hover:text-gray-600">
                  Brands
                </Link>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
