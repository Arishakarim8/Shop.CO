"use client"
import React, { useState } from "react";
import Menu from '@/assets/Frame.svg'
import Image from "next/image";
import "./Menu.css"
import Shop from '@/assets/Vector (2).svg'
import Link from "next/link";
export default function MenuWithCut() {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <div className="menu-container">
      {/* Menu Button */}
      <button className="menu-button  md:hidden" onClick={toggleMenu}>
      <Image src={Menu} alt="" />
      </button>



      {/* Menu Overlay */}
      {menuVisible && (
        <div className="menu-overlay ">
          
          {/* <button className="cut-button" onClick={toggleMenu}>
            ✕
          </button> */}
          <ul className="menu-items">
          <div className=' mt-2 md:mt-0 md:mb-1  font-satoshi align-top absolut  top-[54px]  md::text-[32px] xl md:leading-[38.4px] text-[25.2px] leading-[30px] font-black'>
            <h1> 
             SHOP.CO
            </h1>
      </div>

          <button className="cut-button" onClick={toggleMenu}>
            ✕
          </button>
          <li className=" flex  gap-1 "><a href="/Man">Shop </a><Image src={Shop} alt="" className='w-[11.5px] mt-2 m-[2px] h-[6.5px] top-[5.25px] left-[2.25px] '/>
            </li>
            <li><a href="/f2">On Sale</a></li>
            <li><Link href="/Casual">New Arrivals</Link></li>
            <li><a href="/Brand">Brands</a></li>

          {/* <li><a href="/">Shop</a></li>
          <li><a href="/newin">New Arrivals</a></li>
          <li><a href="/about">Discover</a></li>
          <li><a href="/contact">Contact Us</a></li> */}
          </ul>
        </div>
      )}
    </div>
  );
}
