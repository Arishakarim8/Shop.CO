// "use client"
// import { useState } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import Vector from '@/assets/Vector.svg';
// import Shop from '@/assets/Vector (2).svg'


// export default function MenuOverlay() {
//   const [isMenuVisible, setIsMenuVisible] = useState(false);

//   const toggleMenu = () => {
//     setIsMenuVisible(!isMenuVisible);
//   };

//   return (
//     <>
//       {/* Menu Bar */}
//       <button
//         onClick={toggleMenu}
//         className="sm:hidden w-6 h-6 y-[4.88px] px-[2.63px] absolute top-[54px] left-4"
//       >
//         <Image src={Vector} alt="Menu Bar" />
//       </button>

//       {/* Menu Overlay */}
//       {isMenuVisible && (
//         <div className="fixed inset-0 bg-black/50 z-50">
//           <div className="mt-24 bg-[#f0f0f0] flex flex-col justify-between m-4 text-black max-w-[150px] h-[200px] p-4">
//             <button
//               onClick={toggleMenu}
//               className="text-black self-end font-bold"
//             >
//               ✕
//             </button>
//             <ul className="text-xl grid justify-between gap-2 font-medium">
//               <li className="flex gap-1 mr-2">
//                 <a href="/Man">Shop</a>
//                 <Image
//                   src={Shop}
//                   alt=""
//                   className="w-[11.5px] mt-3 m-[2px] h-[6.5px] top-[5.25px] left-[2.25px]"
//                 />
//               </li>
//               <li>
//                 <a href="">On Sale</a>
//               </li>
//               <li>
//                 <Link href="/Casual">New Arrivals</Link>
//               </li>
//               <li>
//                 <a href="">Brands</a>
//               </li>
//             </ul>
//           </div>
//         </div>
//       )}
//     </>
//   );
// }

"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Vector from "@/assets/Vector.svg";
import Shop from "@/assets/Vector (2).svg";

export default function MenuOverlay() {
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const toggleMenu = () => {
    setIsMenuVisible(!isMenuVisible);
  };

  return (
    <>
      {/* Menu Bar */}
      <button
        onClick={toggleMenu}
        className="sm:hidden w-6 h-6 y-[4.88px] px-[2.63px] absolute top-[54px] left-4"
      >
        <Image src={Vector} alt="Menu Bar" />
      </button>

      {/* Menu Overlay */}
      {isMenuVisible && (
        <div className="fixed inset-0 bg-black/50 z-50">
          <div className="mt-24 bg-[#f0f0f0] flex flex-col justify-between m-4 text-black max-w-[150px] h-[200px] p-4 relative">
            <button
              onClick={toggleMenu}
              className="text-black self-end font-bold"
            >
              ✕
            </button>
            <ul className="text-xl grid justify-between gap-2 font-medium">
              <li className="flex gap-1 mr-2">
                <Link href="/Man">
                  <a onClick={toggleMenu}>Shop</a>
                </Link>
                <Image
                  src={Shop}
                  alt=""
                  className="w-[11.5px] mt-3 m-[2px] h-[6.5px] top-[5.25px] left-[2.25px]"
                />
              </li>
              <li>
                <Link href="/Sale">
                  <a onClick={toggleMenu}>On Sale</a>
                </Link>
              </li>
              <li>
                <Link href="/Casual">
                  <a onClick={toggleMenu}>New Arrivals</a>
                </Link>
              </li>
              <li>
                <Link href="/Brands">
                  <a onClick={toggleMenu}>Brands</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
}
