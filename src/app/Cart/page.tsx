import Navbar from "@/components/Navbar"
import BrandName from "@/components/BrandName"
// import Footer from "@/components/Footer"
import Image from "next/image"
import arrow from "@/assets/Vector (21).svg"
import arrow_checkOut from "@/assets/Vector (22).svg"
import promo_code from "@/assets/Vector (23).svg"
import Multi_shirt from "@/assets/image 8 (1).svg"
import Plus from "@/assets/Vector (24).svg"
import Delete from "@/assets/Vector (25).svg"
import ProductCard from "../Cart_product/page"
import Checkered_Shirt from '@/assets/image 9.svg'
import Skinny_Jeans from '@/assets/Frame 33 (1).svg'
import Link from "next/link"
import Layout from "../layout"
import Footer from "@/components/Footer";

export default function Cart(){

    return(
    <Layout>
    <div className=" ">
    {/* <div className='w-[358px] left-[16px] md:top-[134px] md:w-[1240px] flex items-center justify-center absolute  sm:left-[70px] border-[1px] border-solid border-[#0000001A] '></div> */}

        <div className="md:w-[106px] flex md:h-[22px] w-[89px] h-[19px] absolute top-[118px] md:top-[158px] left-[16px] md:left-[56px] gap-[6px] md:gap-3">
             <Link href="/" className="md:text-[16px] text-[14px] leading-[18.9px] gap-1 md:leading-[21.6px] font-normal text-[#00000099]">
             Home
             </Link>
             <div className=" w-[11.5px] md:mt-[5px] mt-[3px]  h-[6.5px] top-[13.75px] left-[5.25px]">
              <Image src={arrow} alt="" />
             </div>
             <h1 className="text-[14px] leading-[18.9px] md:text-[16px] md:leading-[21.6px] font-normal w-[31px] h-[22px] text-black">
              Cart
             </h1>
        </div>

        <div className="md:w-[259px] md:h-12 md:top-[204px] top-[145px] left-4 h-[38px] w-[207px] absolute md:left-[56px] font-black md:text-[40px] md:leading-[48px] text-black text-[32px] leading-[38.4px] "> 
           YOUR CART
        </div>
       <div className=" flex  flex-col lg:flex-row  gap -6 relative sm: top-[186px] mx-10 md:top-[246px] justify-center">
        {/* <div className="w-full lg:w-[715px] right-[56px] lg:right-5 bg-purple-800 flex flex-col justify-between h-[389px] absolute  border-[#0000001A] top-[203px] left-[16px] gap-4 p-[14px]  md:h-[508px] md:top-[276px] md:left-[56px] md:py-5  md:px-6 rounded-[20px] border md:gap-6">

<ProductCard
  img={Multi_shirt}
  title="Gradient Graphic T-shirt"
  size="Large"
  color="White"
  price={145}
  quantity={1}
/> 
<div className=' border-[1px] w-[330px] md:w-[667px] border-solid border-[#0000001A]'></div>

<ProductCard
  img={Checkered_Shirt}
  title="Checkered Shirt"
  size="Medium"
  color="Red"
  price={180}
  quantity={1}
/> 
<div className=' border-[1px] w-[330px] md:w-[667px] border-solid border-[#0000001A]'></div>

<ProductCard
  img={Skinny_Jeans}
  title="Skinny Fit Jeans"
  size="Large"
  color="Blue"
  price={240}
  quantity={1}
/> 
        </div> */}
        <div className="w-full lg:w-[765px] max-w -[978px] flex flex-col justify-between h-auto mx-auto border border-[#0000001A] p-4 md:p-6 gap-6 rounded-[20px] ">
  <ProductCard
    img={Multi_shirt}
    title="Gradient Graphic T-shirt"
    size="Large"
    color="White"
    price={145}
    quantity={1}
  />
  <div className="border-t border-[#0000001A]"></div>

  <ProductCard
    img={Checkered_Shirt}
    title="Checkered Shirt"
    size="Medium"
    color="Red"
    price={180}
    quantity={1}
  />
  <div className="border-t border-[#0000001A]"></div>

  <ProductCard
    img={Skinny_Jeans}
    title="Skinny Fit Jeans"
    size="Large"
    color="Blue"
    price={240}
    quantity={1}
  />
</div>


        {/* <div className="w-[358px] h-[390px] flex flex-col justify-between border-[#0000001A] absolute  top-[612px] left-[16px] gap-4 p-5 md: lg:w-[505px] lg:h-[458px] md: lg:top-[276px] lg:left-[790px] md:py-5  md:px-6 rounded-[20px] border md:gap-6">
          
          <h1 className="font-bold md:text-2xl text-black text-[20px] leading-[27px] ">
          Order Summary
          </h1>

          <ul className="md:w-[457px]  flex-col flex justify-between md:h-[193px] gap-5 w-[318px] h-[173px] ">

             <li className="md:w-[457px] md:h-[27px] flex justify-between w-[318px] h-[22px] ">
               <h1 className="font-normal md:text-[20px] text-[16px] leading-[21.6px] md:leading-[27px] text-[#00000099]">
               Subtotal
               </h1>
               <h1 className="font-bold md:text-[20px] text-[16px] leading-[21.6px] md:leading-[27px] text-[#000000]">
               $565
               </h1>
             </li>

             <li className="md:w-[457px] md:h-[27px] flex justify-between w-[318px] h-[22px] ">
               <h1 className="font-normal md:text-[20px] text-[16px] leading-[21.6px] md:leading-[27px] text-[#00000099]">
               Discount (-20%)
               </h1>
               <h1 className="font-bold md:text-[20px] text-[16px] leading-[21.6px] md:leading-[27px] text-RED">
               -$113
               </h1>
             </li>

             <li className="md:w-[457px] md:h-[27px] flex justify-between w-[318px] h-[22px] ">
               <h1 className="font-normal md:text-[20px] text-[16px] leading-[21.6px] md:leading-[27px] text-[#00000099]">
               Delivery Fee
               </h1>
               <h1 className="font-bold md:text-[20px] text-[16px] leading-[21.6px] md:leading-[27px] text-[#000000]">
               $15
               </h1>
             </li>

             <li className=' border-[1px] border-solid border-[#0000001A] '></li>


             <li className="md:w-[457px] md:h-[27px] flex justify-between w-[318px] h-[22px] ">
               <h1 className="font-normal md:text-[20px] text-[16px] leading-[21.6px] md:leading-[27px] text-[#00000099]">
               Total
               </h1>
               <h1 className="font-bold md:text-[24px] text-[20px] leading-[27px] md:leading-[32.4px] text-[#000000]">
               $565
               </h1>
             </li>

 

          </ul>
          
          <div className="md:w-[457px] flex h-12 gap-3 w-[318px]" >
            <div className="md:w-[326px] flex md:gap-3 bg-[#F0F0F0] w-[218px] h-12 py-3 px-4 gap-[10px] rounded-[62px] ">
              <Image src={promo_code} alt="" />
              <h1 className="font-normal text-[#00000066] text-[14px] leading-[18.9px]  md:text-[16px] md:leading-[21.6px]">
              Add promo code
              </h1>
            </div>

            <button className="md:w-[119px] w-[88px] h-12 py-3 px-4 bg-black gap-3 rounded-[62px] ">
              <h1 className="font-normal text-[14px] leading-[18.9px]  md:text-[16px] md:leading-[21.6px] text-white">
              Apply
              </h1>
            </button>

          </div>

          <button className="md:w-[457px] flex items-center justify-center w-[318px] h-[54px] md:h-[60px] py-4 px-[54px] bg-black gap-3 rounded-[62px] ">
              <h1 className="font-normal text-[14px] leading-[18.9px]  md:text-[16px] md:leading-[21.6px] text-white">
              Go to Checkout
              </h1>
              <Image src={arrow_checkOut} alt="" />

          </button>
        </div>
 */}
  <div className="w-full  lg:right-9 lg:max-w-[450px] lg:h-[500px]  xl:max-w-[550px] flex flex-col gap-6 border border-[#0000001A] rounded-[20px] p-4 md:p-6 mx-auto  lg:mt-0 mt-6">
  <h1 className="font-bold text-[20px] md:text-2xl lg:text-3xl text-black leading-[27px]">
    Order Summary
  </h1>

  <ul className="flex flex-col gap-8">
    <li className="flex justify-between items-center">
      <span className="text-[16px] md:text-[20px] lg:text-[22px] text-[#00000099] font-normal leading-[21.6px]">
        Subtotal
      </span>
      <span className="text-[16px] md:text-[20px] lg:text-[22px] font-bold text-black leading-[21.6px]">
        $565
      </span>
    </li>

    <li className="flex justify-between items-center">
      <span className="text-[16px] md:text-[20px] lg:text-[22px] text-[#00000099] font-normal leading-[21.6px]">
        Discount (-20%)
      </span>
      <span className="text-[16px] md:text-[20px] lg:text-[22px] font-bold text-red-500 leading-[21.6px]">
        -$113
      </span>
    </li>

    <li className="flex justify-between items-center">
      <span className="text-[16px] md:text-[20px] lg:text-[22px] text-[#00000099] font-normal leading-[21.6px]">
        Delivery Fee
      </span>
      <span className="text-[16px] md:text-[20px] lg:text-[22px] font-bold text-black leading-[21.6px]">
        $15
      </span>
    </li>

    <li className="border border-solid border-[#0000001A]"></li>

    <li className="flex justify-between items-center">
      <span className="text-[16px] md:text-[20px] lg:text-[22px] text-[#00000099] font-normal leading-[21.6px]">
        Total
      </span>
      <span className="text-[20px] md:text-[24px] lg:text-[26px] font-bold text-black leading-[27px]">
        $565
      </span>
    </li>
  </ul>

  <div className="flex gap-4">
    <div className="flex-1 flex items-center bg-[#F0F0F0] rounded-[62px] px-4 py-3 gap-2">
      <Image src={promo_code} alt="Promo Code" />
      <span className="text-[14px] md:text-[16px] lg:text-[18px] text-[#00000066] font-normal">
        Add promo code
      </span>
    </div>
    <button className="bg-black text-white px-4 py-3 rounded-[62px] w-[100px] md:w-[119px] lg:w-[140px]">
      Apply
    </button>
  </div>

  <button className="flex items-center justify-center bg-black text-white px-4 py-3 rounded-[62px] w-full">
    <span className="text-[14px] md:text-[16px] lg:text-[18px] font-normal">
      Go to Checkout
    </span>
    <Image src={arrow_checkOut} alt='Arrow Checkout' className=" mx-3" />
  </button>
</div> 

        </div>
    </div>


    </Layout>
    )

} 


