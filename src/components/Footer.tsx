import Email from "@/assets/Vector (6).svg";
import Image from "next/image";
import twitter from '@/assets/Vector (37).svg'
import facebook  from '@/assets/Vector (38).svg';
import insta from '@/assets/Group (5).svg'
import github from "@/assets/Vector (39).svg"
import visa from "@/assets/Visa.svg"
import masterCard from "@/assets/Mastercard (1).svg"
import paypal from "@/assets/Paypal (1).svg"
import applePay from "@/assets/ Pay.svg"
import Gpay from "@/assets/G Pay.svg"
import Link from "next/link";

export default function Footer(){
    return(
        <div className="  relativ absolute w-full ">
        <div className="bg-black max-w-[1260px] absolut relative text-white bottom -10  top-[100px] items-center max-h-[358px] flex flex-col justify-between  md:flex-row gap-10 sm:gap-3  overflow-hidden rounded-[20px] h-auto mx-6 lg:mx-auto lg:px-16 md:px-8 px-4 py-8 md:py-9">
         <h1 className= " md:text-[40px] font-black md:w-[60vw] md:leading-[45px] mx-5 md:mx-2 font-integral text-white text-[32px] leading-[35px] ">
         STAY UPTO DATE ABOUT OUR LATEST OFFERS
         </h1>

         <div className=" md:h-[108px] grid items-center justify-center gap-[14px]">
          <div className="w-[311px] lg:w-[349px] w -full md:h-[48px]  flex items-center h-[42px] top-[169px] py-[12px] px-[16px] gap-[12px] bg-white rounded-[62px]">
            <Image src={Email} alt="Email" />
            {/* <input type="text"  name=" Enter your email address"               className="mt-1 block w-full px-4 py-2 rounded-md border-gray-300 focus:ring-indigo-500 focus:border-indigo-500"
            /> */}
            <h1 className="text-[#00000066] font-normal text-[14px] md:leading-[21.6px] md:text-[16px] leading-[18.9px] font-satoshi">
              Enter your email address
            </h1> 
          </div>
          <div className="w-[311px] lg:w-[349px] w -full md:h-[46px] mx -5 flex justify-center items-center  h-[42px] top-[223px] left-[24px] md:left-0  py-[12px] px-[16px] gap-[12px] bg-white rounded-[62px]">
            <h1 className="text-medium text-black md:leading-[21.6px] md:text-[16px] text-[14px] leading-[18.9px] font-satoshi ">
            Subscribe to Newsletter
            </h1>
          </div>
         </div>

        </div>

        <div id="Footer" className=" absolut z-[200] relativ e top-20 -[200] pt-36  w-full min- h -full auto bg-[#f0f0f0]" >
        <div className="max-w-[1250px]  mx-6 relative lg:mx-auto "> 
            <div className="lg:flex gap-28 ">

            <div className="  h-[177px] md:flex md:flex-col bg-yellow-20 mb-5 md:justify -between  md:gap-[35px]">
              <div className="lg:w-[248px] h- flex flex-col justify-between  gap-5">
              <h1 className=" font-integral   md:text-[33.45px] md:leading-[40.15px] left-4 text-black  font-bold text-[28.85px] leading-[34.62px]" >
                SHOP.CO
              </h1>
                

              <p className="max-w-[500px]  left-[17px]  md:leading-5 md:text-[14px] text-greyy text-sm font-normal">
                 We have clothes that suits your style and which you’re proud to wear. From women to men.
              </p>

              <div className="w-[148px]   flex  justify-between h-[28px] left-[16px] ">
            <div className="w-7 bg-white flex items-center justify-center h-7 border border-[#00000033] rounded-[50px] py -[9.94px] px -[6.91px]">
              <Image src={twitter} alt="" />
            </div>

            <div className="w-7 bg-black flex items-center text-white justify-center h-7 border border-[#00000033] rounded-[50px] py -[9.94px] px -[6.91px]">
              <Image src={facebook} alt="" />
            </div>

            <div className="w-7 bg-white flex items-center justify-center h-7 border border-[#00000033] rounded-[50px] py -[9.94px] px -[6.91px]">
              <Image src={insta} alt="" />
            </div>

            <div className="w-7 bg-white flex items-center justify-center h-7 border border-[#00000033] rounded-[50px] py -[9.94px] px -[6.91px]">
               <Link href="https://github.com/Arishakarim8">
                  <Image src={github} alt="" />
               </Link>
            </div>
              </div>

              </div>
            </div>

            <div className="grid grid-cols-2  max-w-[1070px] sm:grid-cols-4 lg:flex justify-evenly md:gap-10">
<div className=" md:h-[177px] h-[146px] left -4 gap-4 md:gap-0 ">
  <h1 className="w-[98px] h-[18px] text-[14px] md:text-[16px] font-medium  text-black leading-[18px] tracking-[3px]">
    COMPANY 
  </h1>
  <div className="md:w-[104px] md:h-[133px]  h-[112px] text-[14px] md:leading-[19px] leading-[16px]  md:text-[16px] flex flex-col justify-between mt-3 md:mt-6 font-normal text-gray-500">
    <a href="">About</a>
    <a href="">Features</a>
    <a href="">Works</a>
    <a href="">Career</a>
  </div>
</div>

<div className="w- [136px] h-[177px]">
  <h1 className="w-[49px] h-[18px] text-black text-[14px] md:text-[16px] font-medium leading-[18px] tracking-[3px]">
    HELP
  </h1>
  <div className="md:w-[136px] md:h-[133px] w-[91px] h-[112px] text-[14px] md:leading-[19px] leading-[16px]  md:text-[16px] whitespace-nowrap flex flex-col justify-between mt-3 md:mt-6 font-normal text-gray-500">
    <a href="">Customer Support</a>
    <a href="">Delivery Details</a>
    <a href="">Terms & Conditions</a>
    <a href="">Privacy Policy</a>
  </div>
</div>

<div className="w- [149px] h-[177px]">
  <h1 className="w-[49px] h-[18px] md:text-[16px] text-[14px] font-medium text-black leading-[18px] tracking-[3px]">
    FAQ
  </h1>
  <div className="w-[149px] md:h-[133px] h-[112px] text-[14px] md:leading-[19px] leading-[16px]  md:text-[16px] whitespace-nowrap flex flex-col justify-between mt-3 md:mt-6 font-normal text-gray-500">
    <a href="">Account</a>
    <a href="">Manage Deliveries</a>
    <a href="">Orders</a>
    <a href="">Payments</a>
  </div>
</div>

<div className="w- [149px] h-[177px] gap-[26px]">
  <h1 className="w-[49px] h-[18px] md:text-[16px] text-[14px] font-medium text-black leading-[18px] tracking-[3px]">
    RESOURCES
  </h1>
  <div className="w-[149px] md:h-[133px] h-[112px] text-[14px] md:leading-[19px] leading-[16px]  md:text-[16px] whitespace-nowrap  flex flex-col justify-between mt-3 md:mt-6 font-normal text-gray-500">
    <a href="">Free eBooks</a>
    <a href="">Development Tutorial</a>
    <a href="">How to - Blog</a>
    <a href="">Youtube Playlist</a>
  </div>
</div>

            </div> 
            </div>
            <div>

            <div className=' my-4 border-[1px] border-solid border-[#0000001A] '></div>

<div className=" flex  flex-col mx-10 md:flex-row absolut pb-7 justify-center items-center md:justify-between">
<div className="w-[269px] h-[19px] md:top -[490px] top -[880px] text-[14px] leading-[18.9px] font-normal text-greyy">
   Shop.co © 2000-2023, All Rights Reserve
</div>

<div className="w-[281.07px]  md:top -[490px] top-[900px] flex h-[30.03px]  gap-[10.12px] md:gap-3">
   <div className="w-[46.61px] bg-white h-[30.03px] border-[0.22px] rounded-[5.38px] py-[9.94px] px-[6.91px]">
     <Image src={visa} alt="" />
   </div>

   <div className="w-[46.61px] bg-white h-[30.03px] border-[0.22px] rounded-[5.38px] py-[9.94px] px-[6.91px]">
     <Image src={masterCard} alt="" />
   </div>

   <div className="w-[46.61px] bg-white h-[30.03px] border-[0.22px] rounded-[5.38px] py-[9.94px] px-[6.91px]">
     <Image src={paypal} alt="" />
   </div>

   <div className="w-[46.61px] bg-white h-[30.03px] border-[0.22px] rounded-[5.38px] py-[9.94px] px-[6.91px]">
     <Image src={applePay} alt="" />
   </div>

   <div className="w-[46.61px] bg-white h-[30.03px] border-[0.22px] rounded-[5.38px] py-[9.94px] px-[6.91px]">
     <Image src={Gpay} alt="" />
   </div>
</div>
</div>

            </div>
         </div>


        </div>
        </div>

    )
}

