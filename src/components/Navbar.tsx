import Vector from '@/assets/Vector.svg';
import Image from 'next/image';

export default function Navbar() {
    return (
        // <div className='w-full h-[34px] sm:h-[38px] py-[9px] px-[16px] sm:px-[50px] lg:px-[100px] xl:px-[200px] flex items-center justify-between sm:justify-center text-white bg-black'>
        //     <div className='flex items-center justify-center w-full sm:w-[301px] sm:h-[16px] sm:left-[30px] md:w-[351px] md:h-[19px] text-xs sm:text-[14px] md:leading-[18px]'>
        //         <h1 className='font-normal'>
        //             Sign up and get 20% off to your first order.
        //         </h1>
        //         <p className='font-medium underline decoration-solid underline-offset-[3px] decoration-1'>
        //             Sign Up Now
        //         </p>
        //     </div>

        //     <div className="hidden sm:block p-1 absolute right-[10px] sm:right-[30px] md:right-[50px] xl:right-[100px]">
        //         <Image src={Vector} alt="Vector" />
        //     </div>
        // </div>
        <div className='w-full h-[34px] sm:h-[38px] py-[9px] px-[16px] text-nowrap sm:px-[50px] lg:px-[100px] xl:px-[200px] flex items-center justify-between sm:justify-center text-white bg-black top-0 left-0 z-50'>
            <div className='flex items-center justify-center w-full sm:w-[301px] sm:h-[16px] sm:left-[30px] md:w-[351px] md:h-[19px] text-xs sm:text-[14px] md:leading-[18px]'>
                <h1 className='font-normal'>
                    Sign up and get 20% off to your first order.
                </h1>
                <p className='font-medium underline decoration-solid underline-offset-[3px] decoration-1'>
                    Sign Up Now
                </p>
            </div>

            <div className="hidden sm:block p-1 absolute sm:r ight-[30px] md:ri ght-[50px] xl: right-8 [80px]">
                <Image src={Vector} alt="Vector" />
            </div>
        </div>
    );
}

