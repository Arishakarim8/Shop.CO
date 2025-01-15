import Kelvin from '@/assets/Group (1).svg'
import Vercase from '@/assets/Group.svg'
import Prada from '@/assets/prada-logo-1 1.svg'
import Gucci from '@/assets/gucci-logo-1 1.svg'
import Zara from '@/assets/Vector (3).svg'
import Image from 'next/image'
import TShirt_tape from '@/assets/Frame 32 (2).svg'
import image4 from '@/assets/image 10.png'
import Star from '@/assets/Star 3.svg'
import STAR from '@/assets/Star 5.svg'
import Pr from '@/app/Products/page'
import Sleeve_Striped from '@/assets/Frame 114.svg'
import Skinny_Jeans from '@/assets/Frame 33 (1).svg'
import Checkered_Shirt from '@/assets/Frame 113.svg'

export default function NewArrivals (){
    return(
        <div >
            <div className="w-full h-[146px] gap-6 font-satoshi top-[1050px] absolute flex flex-wrap items-center justify-around   sm:h-[122px] md:top-[685px] lg:top-[795px] bg-black ">
              <Image src={Vercase} alt="" />
              <Image src={Zara} alt="" />
              <Image src={Gucci} alt="" />
              <Image src={Prada} alt="" />
              <Image src={Kelvin} alt="" />  
            </div>
            <div className="sm:w- [403px] w-full w- [269px] h-[38px] leading-[38.4px] bg-purple-300 flex justify-center items-center text-[32px] sm:h-[58px] left -[61px] top-[1247px] text-black absolute md:top-[891px] sm:left- [518px] font-bold sm:text-[48px] lg:top-[991px] sm:leading-[57.6px]  "> 
                <h1>
                  NEW ARRIVALS
                </h1> 
            </div> 
{/* <div className=' flex top-[1317px] md:top-[1004px] lg:top-[1104px] h-[600px] overflow-x-scroll absolute md:left-[56px] left-4'> */}
   
<div className="flex top-[1317px] max-w-sm md:top-[1004px] lg:top-[1104px] h-[600px] absolute md:left-[56px] left-4 overflow-x-auto
 scroll">        
            <Pr
  image={TShirt_tape}
  title="T-Shirt With Tape Details"
  rating={4.5}
  price={120}
/>

            <Pr
  image={Skinny_Jeans}
  title="Skinny Fit Jeans"
  rating={3.5}
  price={240}
  discount={20}
  originalPrice={260}
/>
<Pr
  image={Checkered_Shirt}
  title="Checkered Shirt"
  rating={4.5}
  price={180}
/>

<Pr
  image={Sleeve_Striped}
  title="Sleeve Striped T-shirt"
  rating={4.5}
  price={130}
  discount={30}
  originalPrice={160}
/>
</div>
            

           <div className="flex justify-center w-full bg-slate-300 items-center ">
              <h1 className='w-[358px] flex justify-center items-center font-medium text-[16px] leading-[21.6px] h-[46px] absolute top-[1594px] border-solid border-[#0000001A] left- [16px] sm:w-[218px] sm:h-[52px] md:top-[1448px] lg:top-[1548px] py-4 px-[54px] rounded-[62px] sm:left -[611px] border-[1px] gap-3'>
                 View All
              </h1>
            </div>


            {/* <div className='w-[358px] left-[16px] top-[1610px] md:w-[1240px] flex items-center justify-center absolute md:top-[1664px] sm:left-[70px] border-[1px] border-solid border-[#0000001A] '>
            </div> */}
            <div className=" flex justify-center items-center">
            <div className=" sm:w-[358px]  absolute flex items-center top-[1710px] justify-center mx-auto border md:top-[1464px] border-solid border-[#0000001A]"></div>
            </div>
        </div>
    )
}