// "use client"
import Menu from '@/assets/Frame.svg'
import Image from 'next/image'
import Bar from '@/assets/Frame 5.svg'
import Search from '@/assets/Vector (1).svg'
import Shop from '@/assets/Vector (2).svg'
import Cart from '@/app/Cart/page'
import Link from 'next/link'
import Filter from '@/app/Filter/page'
import Footer from './Footer'
import account from "@/assets/Vector (42).svg"
import cart_vector  from "@/assets/Vector (43).svg"
import search_vector from "@/assets/Vector (44).svg"

// import { useState } from 'react'
      // <div className='h-12 top-[62px] flex max-w-[1200px] sm:mt-6 left-[100px] gap-10px lg:w -[1240px] lg:m x-auto lg:max -w-full '>
      //     <div className='md:hidden w-6 h-6 y-[4.88px] px-[2.63px] absolute top-[54px] left-4 '>
      //       <Image src={Menu} alt="Menu Bar" />
      //     </div>
          // <div className='w-[126px] h-[18px] mb-2  font-satoshi align-top absolute sm:static top-[54px] left-[56px] sm:w-40 sm:h-[22px] xl:text-[32px] xl:leading-[38.4px] text-[25.2px] leading-[30px] font-bold'>
          //  <h1> 
          //   SHOP.CO
          //   </h1>
          // </div>

      //       <div className='top-[54px] gap-[12px] left-[278px] md:left-0 md: flex items-end sm:h idden absolute '> 
      //        <Image src={search_vector} className='md:hidden' alt="Search" />
      //        <Link href="/Cart"> <Image src={cart_vector} alt="Cart" /> </Link>
      //        <Image src={account}  alt="Account" />
      //       </div>
      //      <ul className='md:gap-6 md:w-[321px] md:h-[22px] text-[16px] hidden leading-[21.6px] md:flex text-nowrap font-normal '>
      //      <li className=" flex  gap-1 mr-2"><a href="/Man">Shop </a><Image src={Shop} alt="" className='w-[11.5px] mt-2 m-[2px] h-[6.5px] top-[5.25px] left-[2.25px] '/>
      //       </li>
      //       <li><a href="">On Sale</a></li>
      //       <li><Link href="/Casual">New Arrivals</Link></li>
      //       <li><a href="">Brands</a></li>

      //      </ul>

      //      <div className='py-3 px-4 gap-3 rounded-[62px]  hidden md:flex md:max-w-[550px] lg:w-[400px] xl:w-[570px] text-[#00000066] bg-[#f0f0f0]'>
      //          <Image src={Search} alt="Search bar" />
      //      <h1 className='text-[16px] leading-5 font-normal text-nowrap'>
      //          Search for products...
      //      </h1>
      //  </div>
      // </div>

// export default function BrandName (){
//   const [isMenuOpen, setIsMenuOpen] = useState(false)
//     return (
//       <nav className="bg-white shadow-md">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center h-16">
//           {/* Logo */}
//           <div className="flex-shrink-0 flex items-center">
//             <Link href="/" className="font-bold text-xl sm:text-2xl lg:text-3xl">
//               SHOP.CO
//             </Link>
//           </div>

//           {/* Desktop Navigation */}
//           <div className="hidden md:flex items-center space-x-4">
//             <Link href="/shop" className="text-gray-700 hover:text-gray-900 flex items-center">
//               Shop
//               <Image src={Shop} alt="" className="w-3 h-3 ml-1" />
//             </Link>
//             <Link href="/on-sale" className="text-gray-700 hover:text-gray-900">On Sale</Link>
//             <Link href="/new-arrivals" className="text-gray-700 hover:text-gray-900">New Arrivals</Link>
//             <Link href="/brands" className="text-gray-700 hover:text-gray-900">Brands</Link>
//           </div>

//           {/* Search Bar */}
//           <div className="hidden md:flex items-center">
//             <div className="relative">
//               <input
//                 type="text"
//                 placeholder="Search for products..."
//                 className="bg-gray-100 rounded-full py-2 px-4 pl-10 w-64 lg:w-80 focus:outline-none focus:ring-2 focus:ring-gray-200"
//               />
//               <Image
//                 src={search_vector}
//                 alt="Search"
//                 className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4"
//               />
//             </div>
//           </div>

//           {/* Icons */}
//           <div className="flex items-center space-x-4">
//             <Link href="/cart">
//               <Image src={cart_vector} alt="Cart" className="w-6 h-6" />
//             </Link>
//             <Link href="/account">
//               <Image src={account} alt="Account" className="w-6 h-6" />
//             </Link>
//             {/* Mobile menu button */}
//             <button
//               onClick={() => setIsMenuOpen(!isMenuOpen)}
//               className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500"
//             >
//               <span className="sr-only">Open main menu</span>
//               {isMenuOpen ? (
//                 <Menu className="block h-6 w-6" aria-hidden="true" />
//               ) : (
//                 <Menu className="block h-6 w-6" aria-hidden="true" />
//               )}
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile menu, show/hide based on menu state */}
//       <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
//         <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
//           <Link href="/shop" className="text-gray-700 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium">
//             Shop
//           </Link>
//           <Link href="/on-sale" className="text-gray-700 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium">
//             On Sale
//           </Link>
//           <Link href="/new-arrivals" className="text-gray-700 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium">
//             New Arrivals
//           </Link>
//           <Link href="/brands" className="text-gray-700 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium">
//             Brands
//           </Link>
//         </div>
//         <div className="px-2 pt-2 pb-3">
//           <div className="relative">
//             <input
//               type="text"
//               placeholder="Search for products..."
//               className="bg-gray-100 rounded-full py-2 px-4 pl-10 w-full focus:outline-none focus:ring-2 focus:ring-gray-200"
//             />
//             <Image
//               src={Search}
//               alt="Search"
//               className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4"
//             />
//           </div>
//         </div>
//       </div>
//     </nav>
//     )
//   }
export default function BrandName() {

  return (
          <div className='h-12 top-[62px] flex justify-between items-center mx-auto max- w-full  sm:mt-6 left-[100px] gap-10px lg:w -[1240px] lg:m x-auto lg:max -w-full '>
          <div className='md:hidden w-6 h-6 y-[4.88px] px-[2.63px] absolute top-[54px] left-4 '>
            <Image src={Menu} alt="Menu Bar" />
          </div>
          <div className='w-[126px] h-[18px] mb-3  font-satoshi align-top absolute sm:static top-[54px] left-[56px] sm:w-40 sm:h-[22px] xl:text-[32px] xl:leading-[38.4px] text-[25.2px] leading-[30px] font-bold'>
           <h1> 
            SHOP.CO
            </h1>
          </div>


           <ul className='md:gap-4 md:w-[321px] md:h-[22px] text-[16px] hidden leading-[21.6px] md:flex text-nowrap font-normal '>
           <li className=" flex  gap-1 "><a href="/Man">Shop </a><Image src={Shop} alt="" className='w-[11.5px] mt-2 m-[2px] h-[6.5px] top-[5.25px] left-[2.25px] '/>
            </li>
            <li><a href="">On Sale</a></li>
            <li><Link href="/Casual">New Arrivals</Link></li>
            <li><a href="">Brands</a></li>
           </ul>

           <div className='py-3 px-4 gap-3 rounded-[62px]  hidden md:flex md:max-w-[550px] lg:w-[400px] xl:w-[570px] text-[#00000066] bg-[#f0f0f0]'>
               <Image src={Search} alt="Search bar" />
              <h1 className='text-[16px] leading-5 font-normal text-nowrap'>
               Search for products...
             </h1>
            </div>
           <div className='top-[54px] gap-[12px]  flex  '> 
             <Image src={search_vector} className='md:hidden ' alt="Search" />
             <Link href="/Cart"> <Image src={cart_vector} alt="Cart" /> </Link>
             <Image src={account}  alt="Account" />
            </div>

      </div>

  )
}
    //   <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
    //   <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    //     <div className="flex justify-between items-center h-16">
    //       <div className="flex items-center">
    //         <div className="flex-shrink-0 md:hidden">
    //           <button className="text-gray-500 hover:text-gray-600">
    //             <Image src={Menu} alt='' className="h-6 w-6" />
    //           </button>
    //         </div>
    //         <Link href="/" className="font-bold text-2xl sm:text-3xl lg:text-4xl ml-2 sm:ml-0">
    //           SHOP.CO
    //         </Link>
    //       </div>

    //       <div className="hidden md:flex items-center space-x-4">
    //         {/* <NavLink href="/shop" text="Shop" hasSubmenu />
    //         <NavLink href="/on-sale" text="On Sale" />
    //         <NavLink href="/new-arrivals" text="New Arrivals" />
    //         <NavLink href="/brands" text="Brands" /> */}
    //             <li className=" flex  gap-1 mr-2"><a href="/Man">Shop </a><Image src={Shop} alt="" className='w-[11.5px] mt-2 m-[2px] h-[6.5px] top-[5.25px] left-[2.25px] '/>
    //          </li>
    //          <li><a href="">On Sale</a></li>
    //          <li><Link href="/Casual">New Arrivals</Link></li>
    //          <li><a href="">Brands</a></li>

    //       </div>

    //       <div className="flex items-center space-x-4">
    //         <div className="hidden md:block">
    //         <div className="relative">
    //   <input
    //     type="text"
    //     placeholder="Search for products..."
    //     className="w-full md:w-64 lg:w-80 xl:w-96 py-2 pl-10 pr-4 rounded-full bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
    //   />
    //   <Image src={Search} alt='' className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
    // </div>

    //         </div>
    //         <Link href="/cart" className="text-gray-500 hover:text-gray-600">
    //           <Image src={cart_vector} alt='' className="h-6 w-6" />
    //         </Link>
    //         <Link href="/account" className="text-gray-500 hover:text-gray-600">
    //           <Image src={account} alt='' className="h-6 w-6" />
    //         </Link>
    //       </div>
    //     </div>
    //   </div>
    // </nav>

// export default function BrandName (){
//   const [isMenuOpen, setIsMenuOpen] = useState(false)
//     return (
//       <nav className="bg-white shadow-md">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center h-16">
//           {/* Logo */}
//           <div className="flex-shrink-0 flex items-center">
//             <Link href="/" className="font-bold text-xl sm:text-2xl lg:text-3xl">
//               SHOP.CO
//             </Link>
//           </div>

//           {/* Desktop Navigation */}
//           <div className="hidden md:flex items-center space-x-4">
//             <Link href="/shop" className="text-gray-700 hover:text-gray-900 flex items-center">
//               Shop
//               <Image src={Shop} alt="" className="w-3 h-3 ml-1" />
//             </Link>
//             <Link href="/on-sale" className="text-gray-700 hover:text-gray-900">On Sale</Link>
//             <Link href="/new-arrivals" className="text-gray-700 hover:text-gray-900">New Arrivals</Link>
//             <Link href="/brands" className="text-gray-700 hover:text-gray-900">Brands</Link>
//           </div>

//           {/* Search Bar */}
//           <div className="hidden md:flex items-center">
//             <div className="relative">
//               <input
//                 type="text"
//                 placeholder="Search for products..."
//                 className="bg-gray-100 rounded-full py-2 px-4 pl-10 w-64 lg:w-80 focus:outline-none focus:ring-2 focus:ring-gray-200"
//               />
//               <Image
//                 src={search_vector}
//                 alt="Search"
//                 className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4"
//               />
//             </div>
//           </div>

//           {/* Icons */}
//           <div className="flex items-center space-x-4">
//             <Link href="/cart">
//               <Image src={cart_vector} alt="Cart" className="w-6 h-6" />
//             </Link>
//             <Link href="/account">
//               <Image src={account} alt="Account" className="w-6 h-6" />
//             </Link>
//             {/* Mobile menu button */}
//             <button
//               onClick={() => setIsMenuOpen(!isMenuOpen)}
//               className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500"
//             >
//               <span className="sr-only">Open main menu</span>
//               {isMenuOpen ? (
//                 <Menu className="block h-6 w-6" aria-hidden="true" />
//               ) : (
//                 <Menu className="block h-6 w-6" aria-hidden="true" />
//               )}
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile menu, show/hide based on menu state */}
//       <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
//         <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
//           <Link href="/shop" className="text-gray-700 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium">
//             Shop
//           </Link>
//           <Link href="/on-sale" className="text-gray-700 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium">
//             On Sale
//           </Link>
//           <Link href="/new-arrivals" className="text-gray-700 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium">
//             New Arrivals
//           </Link>
//           <Link href="/brands" className="text-gray-700 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium">
//             Brands
//           </Link>
//         </div>
//         <div className="px-2 pt-2 pb-3">
//           <div className="relative">
//             <input
//               type="text"
//               placeholder="Search for products..."
//               className="bg-gray-100 rounded-full py-2 px-4 pl-10 w-full focus:outline-none focus:ring-2 focus:ring-gray-200"
//             />
//             <Image
//               src={Search}
//               alt="Search"
//               className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4"
//             />
//           </div>
//         </div>
//       </div>
//     </nav>
//     )
//   }



  
//       <div className='h-12 md:top-[62px] flex max-w-[1200px] bg-slate-300 items-center md:mx-10 sm:mt-6 md:left-[100px] gap-10'>
  
//    <div className='md:hidden w-6 h-6 absolute top-[54px] left-4'>
//     <Image src={Menu} alt="Menu Bar" />
//   </div>

//   <div className='w-[126px] h-[18px] mb-2 font-satoshi align-top absolute md:static top-[54px] md:left-[56px] sm:w-40 sm:h-[22px] xl:text-[32px] xl:leading-[38.4px] text-[25.2px] leading-[30px] font-bold'>
//     <h1>SHOP.CO</h1>
//   </div>
//   <ul className='md:gap-6 md:w-[321px] md:h-[22px] text-[16px] right-64 hidden leading-[21.6px] md:flex text-nowrap font-normal'>
//     <li className="flex gap-1 mr-2">
//       <a href="/Man">Shop</a>
//       <Image src={Shop} alt="Shop Icon" className='w-[11.5px] mt-2 m-[2px] h-[6.5px] top-[5.25px] left-[2.25px]' />
//     </li>
//     <li><a href="?Man">On Sale</a></li>
//     <li><Link href="/Casual">New Arrivals</Link></li>
//     <li><a href="">Brands</a></li>
//   </ul>

  // <div className='py-3 px-4 gap-3 rounded-[62px]  hidden md:flex md:max-w-[550px] lg:w-[400px] xl:w-[570px] text-[#00000066] bg-[#f0f0f0]'>
  //   <Image src={Search} alt="Search bar" />
  //   <h1 className='text-[16px] leading-5 font-normal text-nowrap'>
  //     Search for products...
  //   </h1>
  // </div>

//   <div className='top-[54px] gap-[12px] md:gap-[14px] right-10  flex  md:ml-auto'>
//   <Image src={search_vector} className='md:hidden' alt="Search" />
//   <Link href="/Cart"> <Image src={cart_vector} alt="Cart" /> </Link>
//   <Image src={account}  alt="Account" />
// </div>



//   {/* Cart, Account, and Search Icons (Mobile) */}
//   {/* <div className='top-[54px] gap-[12px] left-[278px] md:left-auto md:flex items-end sm:hidden absolute md:ml-auto'>
//     <Image src={account} alt="Account" />
//     <Image src={cart_vector} alt="Cart" />
//     <Image src={search_vector} alt="Search" />
//   </div> */}
//   {/* <div className='top-[54px] gap-[12px] md:gap-[14px] right-10  flex items-end absolute md:ml-auto'>
//   <Image src={search_vector} className='md:hidden' alt="Search" />
//   <Image src={cart_vector} alt="Cart" />
//   <Image src={account}  alt="Account" />

// </div> */}


//   {/* Navbar for medium and above screen sizes */}

//   {/* Search Bar for larger screens */}
//   {/* <div className='py-3 px-4 gap-3 rounded-[62px] sm:ml -72 hidden md:flex md:max-w-[550px] lg:w-[400px] xl:w-[570px] text-[#00000066] bg-[#f0f0f0]'>
//     <Image src={Search} alt="Search bar" />
//     <h1 className='text-[16px] leading-5 font-normal'>
//       Search for products...
//     </h1>
//   </div> */}

// </div>

          {/* <ul className='gap-6 w-[321px] hidden pl-80 absolute  h-[22px] text-[16px] pt-3 leading-5 whitespace-nowrap md:flex justify-center font-normal' >
            <li className=" flex  gap-1 mr-2"><a href="/Man">Shop </a><Image src={Shop} alt="" className='w-[11.5px] mt-2 m-[2px] h-[6.5px] top-[5.25px] left-[2.25px] '/>
            </li>
            <li><a href="">On Sale</a></li>
            <li><Link href="/Casual">New Arrivals</Link></li>
            <li><a href="">Brands</a></li>
            </ul> */}
            {/* <div className='py-3 px-4 gap-3 rounded-[62px] sm:ml-72 hidden md:flex md:max-w-[550px] lg:w-[400px] xl:w-[570px] text-[#00000066] bg-[#f0f0f0]'>
              <Image src={Search} alt="Search bar"  />
              <h1 className='text-[16px]  leading-5 font-normal '>
                Search for products...
              </h1>
           </div> */}






