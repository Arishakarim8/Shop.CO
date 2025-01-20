// "use client"
import Menu from '@/assets/Frame.svg'
import Image from 'next/image'
import Bar from '@/assets/Frame 5.svg'
import Search from '@/assets/Vector (1).svg'
import Shop from '@/assets/Vector (2).svg'
import Cart from '@/app/Cart/page'
import Link from 'next/link'
import account from "@/assets/Vector (42).svg"
import cart_vector  from "@/assets/Vector (43).svg"
import search_vector from "@/assets/Vector (44).svg"
import Filter from './Filter'
import Brand from '@/app/Brand/page'
import f2 from '@/app/f2/page'
import MenuWithCut from './Menu'
export default function BrandName() {

  return (
        <div>
          <div className='h-12 md:top-[62px] top-[54px] my-5 flex md:justify-around w-full bg-white justify-between items-center  w- [100%] overflow-hidden xl:right- xl:l eft-[66px] md:gap-2 lg:gap-10 '>
          <div className=' flex '
          //  className='w-6 h-6 y-[4.88px] px-[2.63px] absolut top-[54px] left-4 '
           >
           {/* <div className='md:hidden w-6  h-6 y-[4.88px]  px-[2.63px] m-3 top-[54px] left-4'> */}
            <MenuWithCut/>
          {/* </div> */}

            {/* <Image src={Menu} alt="Menu Bar" className='md:hidden w-6  h-6 y-[4.88px]  px-[2.63px] m-3 top-[54px] left-4 '/> */}
          <div className=' mt-2 md:mt-0 md:mb-1  font-satoshi align-top absolut  top-[54px]  md::text-[32px] xl md:leading-[38.4px] text-[25.2px] leading-[30px] font-black'>
            <h1> 
             SHOP.CO
            </h1>
          </div>
          </div>

           <ul className='md:gap-6 md:w-[321px] md:h-[22px] text-[16px] hidden leading-[21.6px] md:flex text-nowrap font-normal '>
           <li className=" flex  gap-1 "><a href="/Man">Shop </a><Image src={Shop} alt="" className='w-[11.5px] mt-2 m-[2px] h-[6.5px] top-[5.25px] left-[2.25px] '/>
            </li>
            <li><a href="/f2">On Sale</a></li>
            <li><Link href="/Casual">New Arrivals</Link></li>
            <li><a href="/Brand">Brands</a></li>
           </ul>

           <div className='py-3 px-4 gap-3 rounded-[62px]  hidden md:flex md:w-[250px] lg:w-[450px] xl:w-[577px] text-[#00000066] bg-[#f0f0f0]'>
               <Image src={Search} alt="Search bar" className='w-[20px] h-[20px]' />
              <h1 className='text-[16px] leading-5 font-normal text-nowrap'>
               Search for products...
             </h1>
            </div>
           <div className=' gap-[14px]  flex  mr-8 md:mr-0'> 
             <Image src={search_vector} className='md:hidden ' alt="Search" />
             <Link href="/Cart"> <Image src={cart_vector} alt="Cart" /> </Link>
             <Image src={account}  alt="Account" />
            </div>
      </div>
      <hr  className="bg-BORDER mx-5"/>

      </div>

  )
}

// "use client";

// import { useState } from "react";
// import Link from "next/link";

// export default function MenuBar() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   return (
//     <header className="relative bg-gray-800 text-white">
//       {/* Main Navbar */}
//       <div className="flex items-center justify-between px-6 py-4">
//         <h1 className="text-2xl font-bold">My Website</h1>
//         <button
//           className="block md:hidden focus:outline-none"
//           onClick={toggleMenu}
//         >
//           <div className="w-6 h-6 flex flex-col justify-between">
//             <span className="block w-full h-[2px] bg-white"></span>
//             <span className="block w-full h-[2px] bg-white"></span>
//             <span className="block w-full h-[2px] bg-white"></span>
//           </div>
//         </button>
//         <nav className="hidden md:flex space-x-6">
//           <Link href="/" className="hover:text-yellow-400">
//             Home
//           </Link>
//           <Link href="/about" className="hover:text-yellow-400">
//             About
//           </Link>
//           <Link href="/services" className="hover:text-yellow-400">
//             Services
//           </Link>
//           <Link href="/contact" className="hover:text-yellow-400">
//             Contact
//           </Link>
//         </nav>
//       </div>

//       {/* Mobile Menu */}
//       {isMenuOpen && (
//         <div className="absolute top-full left-0 w-full bg-gray-700 shadow-md z-10">
//           <nav className="flex flex-col items-center space-y-4 py-6">
//             <Link href="/" className="hover:text-yellow-400">
//               Home
//             </Link>
//             <Link href="/about" className="hover:text-yellow-400">
//               About
//             </Link>
//             <Link href="/services" className="hover:text-yellow-400">
//               Services
//             </Link>
//             <Link href="/contact" className="hover:text-yellow-400">
//               Contact
//             </Link>
//           </nav>
//         </div>
//       )}

//       {/* Decorative Cut Vector */}
//       <div className="absolute bottom-[-20px] w-full h-[20px] bg-gray-800">
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           viewBox="0 0 1440 100"
//           className="w-full h-full"
//         >
//           <path
//             fill="#4B5563"
//             d="M0,64L80,80C160,96,320,128,480,149.3C640,171,800,181,960,165.3C1120,149,1280,107,1360,85.3L1440,64V0H1360C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0H0Z"
//           />
//         </svg>
//       </div>
//     </header>
//   );
// }







// "use client";

// export default function ProductCard({ product, onAddToCart }) {
//   return (
//     <div className="border rounded-md p-4 shadow-md hover:shadow-lg">
//       <img
//         src={product.imageUrl}
//         alt={product.name}
//         className="w-full h-48 object-cover rounded-md"
//       />
//       <h2 className="text-lg font-semibold mt-2">{product.name}</h2>
//       <p className="text-gray-500">${product.price}</p>
//       <button
//         onClick={() => onAddToCart(product)}
//         className="mt-4 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md"
//       >
//         Add to Cart
//       </button>
//     </div>
//   );
// }



// "use client";

// import { useState } from "react";
// import ProductCard from "@/components/ProductCard";

// export default function Home() {
//   const [cart, setCart] = useState([]);
//   const products = [
//     { id: 1, name: "Perfume A", price: 50, imageUrl: "/images/perfume1.jpg" },
//     { id: 2, name: "Perfume B", price: 75, imageUrl: "/images/perfume2.jpg" },
//     { id: 3, name: "Perfume C", price: 100, imageUrl: "/images/perfume3.jpg" },
//   ];

//   const handleAddToCart = (product) => {
//     setCart((prevCart) => {
//       const existingProduct = prevCart.find((item) => item.id === product.id);

//       if (existingProduct) {
//         return prevCart.map((item) =>
//           item.id === product.id
//             ? { ...item, quantity: item.quantity + 1 }
//             : item
//         );
//       } else {
//         return [...prevCart, { ...product, quantity: 1 }];
//       }
//     });
//   };

//   return (
//     <div className="container mx-auto py-8 px-4">
//       <header className="flex justify-between items-center">
//         <h1 className="text-3xl font-bold">Perfume Store</h1>
//         <div className="relative">
//           <button className="bg-gray-800 text-white px-4 py-2 rounded-md">
//             Cart ({cart.reduce((total, item) => total + item.quantity, 0)})
//           </button>
//           {cart.length > 0 && (
//             <div className="absolute right-0 mt-2 w-64 bg-white shadow-lg rounded-md p-4">
//               <h2 className="text-lg font-semibold">Cart Items</h2>
//               <ul>
//                 {cart.map((item) => (
//                   <li
//                     key={item.id}
//                     className="flex justify-between items-center border-b py-2"
//                   >
//                     <span>{item.name}</span>
//                     <span>
//                       {item.quantity} x ${item.price}
//                     </span>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           )}
//         </div>
//       </header>

//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8">
//         {products.map((product) => (
//           <ProductCard
//             key={product.id}
//             product={product}
//             onAddToCart={handleAddToCart}
//           />
//         ))}
//       </div>
//     </div>
//   );
// }


// [
//   {
//     "id": 1,
//     "name": "Perfume A",
//     "price": 50,
//     "imageUrl": "/images/perfume1.jpg"
//   },
//   {
//     "id": 2,
//     "name": "Perfume B",
//     "price": 75,
//     "imageUrl": "/images/perfume2.jpg"
//   },
//   {
//     "id": 3,
//     "name": "Perfume C",
//     "price": 100,
//     "imageUrl": "/images/perfume3.jpg"
//   }
// ]




// "use client";
// import { useState } from "react";

// export default function Cart() {
//   const [cart, setCart] = useState([
//     { id: 1, name: "Perfume A", price: 50, quantity: 1 },
//     { id: 2, name: "Perfume B", price: 75, quantity: 2 },
//   ]);

//   const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

//   return (
//     <div className="p-6 bg-white shadow-md rounded-lg">
//       <h2 className="text-2xl font-semibold mb-4">Cart</h2>
//       {cart.map((item) => (
//         <div key={item.id} className="flex justify-between border-b py-2">
//           <div>
//             <p className="font-medium">{item.name}</p>
//             <p className="text-gray-500">${item.price} x {item.quantity}</p>
//           </div>
//           <p>${item.price * item.quantity}</p>
//         </div>
//       ))}
//       <div className="mt-4 flex justify-between font-bold">
//         <span>Total:</span>
//         <span>${total}</span>
//       </div>
//     </div>
//   );
// }


// "use client";
// import { useState, useEffect } from "react";

// export default function Wishlist() {
//   const [wishlist, setWishlist] = useState([]);

//   useEffect(() => {
//     const savedWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
//     setWishlist(savedWishlist);
//   }, []);

//   const addToWishlist = (product) => {
//     const updatedWishlist = [...wishlist, product];
//     setWishlist(updatedWishlist);
//     localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
//   };

//   return (
//     <div className="p-6 bg-white shadow-md rounded-lg">
//       <h2 className="text-2xl font-semibold mb-4">Wishlist</h2>
//       <button
//         onClick={() => addToWishlist({ id: 1, name: "Perfume A" })}
//         className="bg-blue-500 text-white px-4 py-2 rounded-md"
//       >
//         Add Perfume A to Wishlist
//       </button>
//       <ul className="mt-4 space-y-2">
//         {wishlist.map((item, index) => (
//           <li key={index} className="flex justify-between">
//             <p>{item.name}</p>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }


// "use client";
// import { useState } from "react";

// export default function Checkout() {
//   const [step, setStep] = useState(1);
//   const [formData, setFormData] = useState({
//     billingAddress: "",
//     shippingAddress: "",
//     paymentDetails: "",
//   });

//   const handleNext = () => setStep((prev) => prev + 1);
//   const handlePrevious = () => setStep((prev) => prev - 1);

//   return (
//     <div className="p-6 bg-white shadow-md rounded-lg max-w-lg mx-auto">
//       <h2 className="text-2xl font-semibold mb-4">Checkout</h2>

//       {step === 1 && (
//         <div>
//           <h3 className="font-medium mb-2">Billing Address</h3>
//           <input
//             type="text"
//             placeholder="Enter Billing Address"
//             className="w-full border rounded-md px-4 py-2 mb-4"
//             value={formData.billingAddress}
//             onChange={(e) =>
//               setFormData({ ...formData, billingAddress: e.target.value })
//             }
//           />
//           <button onClick={handleNext} className="bg-blue-500 text-white px-4 py-2 rounded-md">
//             Next
//           </button>
//         </div>
//       )}

//       {step === 2 && (
//         <div>
//           <h3 className="font-medium mb-2">Shipping Address</h3>
//           <input
//             type="text"
//             placeholder="Enter Shipping Address"
//             className="w-full border rounded-md px-4 py-2 mb-4"
//             value={formData.shippingAddress}
//             onChange={(e) =>
//               setFormData({ ...formData, shippingAddress: e.target.value })
//             }
//           />
//           <div className="flex justify-between">
//             <button onClick={handlePrevious} className="bg-gray-500 text-white px-4 py-2 rounded-md">
//               Previous
//             </button>
//             <button onClick={handleNext} className="bg-blue-500 text-white px-4 py-2 rounded-md">
//               Next
//             </button>
//           </div>
//         </div>
//       )}

//       {step === 3 && (
//         <div>
//           <h3 className="font-medium mb-2">Payment Details</h3>
//           <input
//             type="text"
//             placeholder="Enter Card Details"
//             className="w-full border rounded-md px-4 py-2 mb-4"
//             value={formData.paymentDetails}
//             onChange={(e) =>
//               setFormData({ ...formData, paymentDetails: e.target.value })
//             }
//           />
//           <div className="flex justify-between">
//             <button onClick={handlePrevious} className="bg-gray-500 text-white px-4 py-2 rounded-md">
//               Previous
//             </button>
//             <button
//               onClick={() => alert("Order Placed!")}
//               className="bg-green-500 text-white px-4 py-2 rounded-md"
//             >
//               Submit
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }
