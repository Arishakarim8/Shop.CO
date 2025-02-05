import Kelvin from '@/assets/Group (1).svg'
import Vercase from '@/assets/Group.svg'
import Prada from '@/assets/prada-logo-1 1.svg'
import Gucci from '@/assets/gucci-logo-1 1.svg'
import Zara from '@/assets/Vector (3).svg'
import Image from 'next/image'
import TShirt_tape from '@/assets/Frame 32 (2).svg'
import Pr from '@/app/Products/page'
import Sleeve_Striped from '@/assets/Frame 114.svg'
import Skinny_Jeans from '@/assets/Frame 33 (1).svg'
import Checkered_Shirt from '@/assets/Frame 113.svg'

export default function NewArrivals (){
    return(
        <div className=' flex flex-col gap-10 w-full ' >
            <div className="w-full h-[146px] gap-6 font-satoshi  flex flex-wrap items-center justify-around   sm:h-[122px]  bg-black ">
              <Image src={Vercase} alt="" />
              <Image src={Zara} alt="" />
              <Image src={Gucci} alt="" />
              <Image src={Prada} alt="" />
              <Image src={Kelvin} alt="" />  
            </div>
            <div className="sm:w- [403px] w-full w- [269px] h-[38px] leading-[38.4px]  flex justify-center items-center text-[32px] sm:h-[58px] left -[61px] top- [1247px] text-black abso lute md:top -[891px] sm:left- [518px] font-bold sm:text-[48px] lg:top-[991px] sm:leading-[57.6px]  "> 
                <h1>
                  NEW ARRIVALS
                </h1> 
            </div> 
<div className="mx-4 lg:mx-auto gap-4  flex overflow-x-scroll lg:overflow-x-hidden ">

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
            

           <div className="flex justify-center  w-full items-center ">
              <h1 className='w-[358px] flex justify-center items-center font-medium text-[16px] leading-[21.6px] h-[46px]  border-solid border-[#0000001A] sm:w-[218px] sm:h-[52px]  py-4 px-[54px] rounded-[62px] border-[1px] gap-3'>
                 View All
              </h1>
            </div>

            <div className="flex justify-center relative w-full items-center ">
            <div className="  mx-auto border border-solid border-[#0000001A]"></div>
            </div>

        </div>
    )
}