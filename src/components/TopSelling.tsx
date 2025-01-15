import Vertical_Striped from "@/assets/Frame 32.svg"
import Courage_Graphic from "@/assets/Frame 33.svg"
import LOOSE_SHORTS from "@/assets/Frame 34.svg"
import Faded_Jeans from "@/assets/Frame 38.svg"
import Image from "next/image"
import Casual from "@/assets/image 11.svg"
import Formal from '@/assets/image 13.svg'
import Party from '@/assets/image 12.svg'
import Gym from "@/assets/image 14 (1).svg"
import Link from "next/link"
import Pr from "@/app/Products/page"
export default function TopSelling(){
    return(
        <div>
        <div className="w-full flex items-center justify-center w- [231px] h-[38px] leading-[38.4px] text-[32px] sm:h-[58px] left -[80px] top-[1650px] text-black absolute sm:top-[1728px] sm:left -[546px] font-bold sm:text-[48px] sm:leading-[57.6px]  "> 
           <h1>
           TOP SELLING
           </h1> 
       </div> 

       <div className=" absolute left-4 md:left-[56px] gap-4 w-full max-w -sm h-[600px] flex overflow-x-scroll top-[1720px] md:top-[1841px]">

       <Pr
  image={Vertical_Striped}
  title="Vertical Striped Shirt"
  rating={5.0}
  price={212}
  discount={20}
  originalPrice={232}
/>

<Pr
  image={Courage_Graphic}
  title="Courage Graphic T-Shirt"
  rating={4.0}
  price={145}
/>
<Pr
  image={LOOSE_SHORTS}
  title="Loose Fit Bermuda Shorts"
  rating={3.0}
  price={180}
/>
<Pr
  image={Faded_Jeans}
  title="Faded Skinny Jeans"
  rating={4.5}
  price={210}
/>


       </div>

             <div className="flex justify-center items-center">
              <h1 className='w-[358px] flex justify-center items-center font-medium text-[16px] leading-[21.6px] h-[46px] absolute top-[2027px] border-solid border-[#0000001A] left- [16px] sm:w-[218px] sm:h-[52px] sm:top-[2285px] py-4 px-[54px] rounded-[62px] sm:left -[611px] border-[1px] gap-3'>
                 View All
              </h1>
            </div>

            <div className="max-w-[1230px] sm:h-[866px] sm:top-[2417px] sm:left-[70px] sm:rounded-[40px] bg-[#f0f0f0] absolute w- [358px] h-[975px] top-[2123px] left-[16px] rounded-[20px]">
                <h1 className="sm:w-[687px] ww absolute sm:h-[58px] sm:top-[70px] sm:left-[276px] w-[246px] h-[72px] top-[40px] left-[56px] sm:text-[48px] font-bold sm:leading-[57.6px] text-[32px] text-black leading-9 text-center">
                BROWSE BY DRESS STYLE
                </h1> 
                <div className="bg-white w- [310px] w-full h-[190px] rounded-[20px] top-[140px] left-[24px] sm:w -[407px] absolute text-black sm:h-[289px] sm:top-[192px] sm:left-[64px] sm:rounded-[20px]">
                    <Image
                     src={Casual} 
                     alt="Casual" 
                     className=" w- [310px] m-full w rounded-[20px] sm:rounded-[20px]  h-[190px] md:h-[289px]" />
                    <Link href="/Casual" className=" absolute inset-0 flex justify-center items-center w-[76px] h-[32px] top-[16px] left-[24px] text-2xl sm:w-[114px] sm:h-[49px] font-bold sm:text-[36px] sm:leading-[48.6px] sm:top-[25px] sm:left-[36px]">
                        Casual
                    </Link>
                </div>

                <div className="bg-white w-[310px] h-[190px]  top-[346px] left-[24px] sm:w-[684px] absolute text-black sm:h-[289px] sm:top-[192px] sm:left-[491px] sm:rounded-[20px]">
                    <Image
                     src={Formal} 
                     alt="Formal" 
                     className=" w-[310px] md:w-[407px] h-[190px] md:h-[289px]" />
                    <Link href="" className=" absolute  flex justify-center items-center w-[76px] h-[32px] top-[16px] left-[24px] text-2xl sm:w-[114px] sm:h-[49px] font-bold sm:text-[36px] sm:leading-[48.6px] sm:top-[25px] sm:left-[36px]">
                    Formal
                    </Link>
                </div>

                <div className="bg-white w-[310px] h-[190px]  top-[552px] left-[24px] sm:w-[684px] absolute text-black sm:h-[289px] sm:top-[501px] sm:left-[64px] sm:rounded-[20px]">
                    <Image
                     src={Party} 
                     alt="Party" 
                     className=" w-[310px] md:w-[407px] h-[190px] md:h-[289px]" />
                    <Link href="" className=" absolute flex justify-center items-center w-[76px] h-[32px] top-[16px] left-[24px] text-2xl sm:w-[114px] sm:h-[49px] font-bold sm:text-[36px] sm:leading-[48.6px] sm:top-[25px] sm:left-[36px]">
                    Party
                    </Link>
                </div>

                <div className="bg-white w-[310px] h-[190px]  top-[758px] left-[24px] sm:w-[407px] absolute text-black sm:h-[289px] sm:top-[501px] sm:left-[768px] rounded-[20px]">
                    <Image
                     src={Gym} 
                     alt="Gym" 
                     className=" w-[310px] md:w-[407px] h-[190px] md:h-[289px]" />
                    <Link href="" className=" absolute  flex justify-center  items-center  w-[76px] h-[32px] top-[16px] left-[24px] text-2xl sm:w-[114px] sm:h-[49px] font-bold sm:text-[36px] sm:leading-[48.6px] sm:top-[25px] sm:left-[36px]">
                    Gym
                    </Link>
                </div>

            </div>

 {/* <div className="w-f ull sm: max-w-[1239px] mx-auto top-[2123px] sm:h-auto bg-[#f0f0f0] sm:rounded-[40px] rounded-[20px] px-4 py-8 relative ">
  <h1 className="w-full text-center font-bold text-[32px] sm:text-[48px] leading-9 sm:leading-[57.6px] text-black">
    BROWSE BY DRESS STYLE
  </h1>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 mt-10">
    <div className="bg-white w-full rounded-[20px] p- 4 flex flex-col items-center relative">
      <Image
        src={Casual}
        alt="Casual"
        className="w-full h-auto rounded-[20px] object-cover"
      />
      <Link
        href="/Casual"
        className="absolute inset-0 flex justify-center items-center font-bold text-2xl sm:text-[36px] sm:leading-[48.6px]"
      >
        Casual
      </Link>
    </div>

    <div className="bg-white w-full rounded-[20px] p -4 flex flex-col items-center relative">
      <Image
        src={Formal}
        alt="Formal"
        className="w-full h-auto rounded-[20px] object-cover"
      />
      <Link
        href=""
        className="absolute inset-0 flex justify-center items-center font-bold text-2xl sm:text-[36px] sm:leading-[48.6px]"
      >
        Formal
      </Link>
    </div>

    <div className="bg-white w-full rounded-[20px] p- 4 flex flex-col items-center relative">
      <Image
        src={Party}
        alt="Party"
        className="w-full h-auto rounded-[20px] object-cover"
      />
      <Link
        href=""
        className="absolute inset-0 flex justify-center items-center font-bold text-2xl sm:text-[36px] sm:leading-[48.6px]"
      >
        Party
      </Link>
    </div>

    <div className="bg-white w-full rounded-[20px] p- 4 flex flex-col items-center relative">
      <Image
        src={Gym}
        alt="Gym"
        className="w-full h-[200px] rounded-[20px] object-cover"
      />
      <Link
        href=""
        className="absolute inset-0 flex justify-center items-center font-bold text-2xl sm:text-[36px] sm:leading-[48.6px]"
      >
        Gym
      </Link>
    </div>
  </div>
</div> */}

        </div>
    )
}