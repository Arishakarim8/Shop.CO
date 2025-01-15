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

export default function BrandName() {

  return (
          <div className='h-12 md:top-[62px] top-[54px] flex md:justify-around max-w- [1200px] w-full absolute md:mx -[28px] justify-between items-center  w- [100%] overflow-hidden xl:right- xl:l eft-[66px] md:gap-2 lg:gap-10 '>
          <div className=' flex '
          //  className='w-6 h-6 y-[4.88px] px-[2.63px] absolut top-[54px] left-4 '
           >
            <Image src={Menu} alt="Menu Bar" className='md:hidden w-6  h-6 y-[4.88px]  px-[2.63px] m-3 top-[54px] left-4 '/>
          <div className=' mt-2 md:mt-0 md:mb-1  font-satoshi align-top absolut  top-[54px]  md::text-[32px] xl md:leading-[38.4px] text-[25.2px] leading-[30px] font-black'>
            <h1> 
             SHOP.CO
            </h1>
          </div>

          </div>
          {/* <div className='w-[126px] h-[18px] mb-3  font-satoshi align-top absolut sm:static top-[54px] left-[56px] sm:w-40 sm:h-[22px] xl:text-[32px] xl:leading-[38.4px] text-[25.2px] leading-[30px] font-bold'>
           <h1> 
            SHOP.CO
            </h1>
          </div> */}


           <ul className='md:gap-6 md:w-[321px] md:h-[22px] text-[16px] hidden leading-[21.6px] md:flex text-nowrap font-normal '>
           <li className=" flex  gap-1 "><a href="/Man">Shop </a><Image src={Shop} alt="" className='w-[11.5px] mt-2 m-[2px] h-[6.5px] top-[5.25px] left-[2.25px] '/>
            </li>
            <li><a href="">On Sale</a></li>
            <li><Link href="/Casual">New Arrivals</Link></li>
            <li><a href="">Brands</a></li>
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

  )
}
