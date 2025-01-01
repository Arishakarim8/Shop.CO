import Vector from '@/assets/Vector.svg';
import Image from 'next/image';
export default function Navbar(){
    return(
        <div className='w-[390px sm: max-w-full h-[34px] md:h-[38px] py-[9px] px-[50px] flex items-center justify-center text-nowrap sm:px-[200px] lg:px-[400px] xl:px-[544px] gap-[10px] sm:h-[38px]  text-white bg-black '>  
            <div className='  flex items-center justify-center w-[301px] h-[16px]  l eft-[30px]  sm:w-[351px] sm:h-[19px] top-[9px] md:l eft-[544px] text-xs md:text-[14px] md:leading-[18px]'>
              <h1 className='font-normal ' >
                Sign up and get 20% off to your first order.
              </h1>
              <p className=' font-medium underline decoration-solid underline-offset-[3px] decoration-1'>
                Sign Up Now
              </p>
            </div>
             <div  className=" top-[9px] p-1 absolute left-[380px] hidden sm:flex  sm:left-[600px] md:left-[700px] xl:left-[1250px] lg:left-[1000px] ">
               <Image src={Vector} alt="Vector" />
             </div>
        </div>
    )
}
    