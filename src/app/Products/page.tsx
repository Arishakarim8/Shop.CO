interface ProductDiscountCardProps {
    image: StaticImageData; // Path to the product image
    title: string;          // Product title
    rating: number;         // Product rating (e.g., 3.5)
    price?: number;          // Current product price (e.g., 240)
    originalPrice?: number;  // Original product price before discount (e.g., 260)
    discount?: number;       // Discount percentage (e.g., 20)
    // top : string;
    // left : string;
    // mdtop : string;
    // mdleft : string
  }
import Image from "next/image";
import STAR from '@/assets/Star 5.svg'
import Star from '@/assets/Star 3.svg'
import { StaticImageData } from "next/image";

//   const Pr: React.FC<ProductDiscountCardProps> = ({ image, title, rating, price, originalPrice, discount }) => {
//     return (
//       <div className='w-[198px] h-[200px] left-[230px]  rounded-[12.42px] sm:w-[295px] sm:h-[298px] absolute sm:rounded-[20px] sm:left-[415px] bg-[#F0EEED]'>
//         <Image src={image} alt={title} />
//         <div className='top-[1427.01px] left-[16px] mt-4 whitespace-nowrap sm:left-[100px] sm:top-[1418px] font-bold text-[16px] leading-[21.6px] sm:text-xl'>
//           {title}
//         </div>
//         <div className='w-[126px]  h-[19px] flex my-1 top-[1453px] left-[100px] gap-[13px]'>
//           <div className='w-[104px] flex h-[18.49px] gap-[5.31px]'>
//             {Array.from({ length: Math.floor(rating) }, (_, i) => (
//               <Image key={i} src={Star} alt={`Star${i + 1}`} className='w-[18.49px] h-[18.49px]' />
//             ))}
//             {rating % 1 !== 0 && (
//               <Image src={STAR} alt="Half Star" className='w-[8.79px] h-[16.72px]' />
//             )}
//           </div>
//           <div className='w-[33px h-[19px] font-normal text-sm'>
//             {rating}/5
//           </div>
//         </div>
//         <div className='w-[200px] h-[32px] top-[1480px] mt-1 sm:mt-2 flex left-[415px] gap-[10px]'>
//           <div className='w-[46px] h-[27px] left-[16px] sm:w-[55px] sm:h-[32px] top-[1480px] gap-[10px] sm:left-[100px] sm:text-2xl text-xl font-bold'>
//             ${price}
//           </div>
//           <div className='font-bold text-xl md:text-2xl text-[#00000066] line-through'>${originalPrice}</div>
//           <div className='top-[1476px] py-[6px] px-[14px] gap-[12px] rounded-[62px] bg-[#FF33331A] font-medium text-xs text-[#FF3333]'>
//             -{discount}%
//           </div>
//         </div>
//       </div>
//     );
//   };

const Pr: React.FC<ProductDiscountCardProps> = ({ image, title, rating, price, originalPrice, discount }) => {
    return (
     
      <div className=' w-[40vw] h-[40vw] sm:w-[30vw] mb-28  sm:h-[30vw]  lg: mr- 5 rounded-[13.42px] md:w-[30vw] md:h-[30vw] lg:w-[22vw] lg:h-[22vw] absolut md:rounded-[20px]  bg-[#F0EEED]'>
        <Image src={image} alt={title} className="  w-[40vw] h-[40vw] sm:w-[30vw] sm:h-[30vw]  md:w-[30vw] md:h-[30vw] lg:w-[22vw] lg:h-[22vw] "/>
      
        <div className=' my-2 whitespace-nowrap font-bold text-[16px] leading-[21.6px] md:text-[20px] md:leading-[27px] '>
          {title}
        </div>
        <div className=' flex  gap-[11px] md:gap-[13px]'>
          <div className='flex gap-[5.31px]'>
            {Array.from({ length: Math.floor(rating) }, (_, i) => (
              <Image key={i} src={Star} alt={`Star${i + 1}`} className='md:w-[18.49px] md:h-[18.49px] w-[15.47px] h-[15.47px] ' />
            ))}
            {rating % 1 !== 0 && (
              <Image src={STAR} alt="Half Star" className='md:w-[8.79px] md:h-[16.72px] w-[7.36px] h-[13.99px]' />
            )}
          </div>
          <div className=' font-normal h-[19px] text-[12px] leading-[16.2px] md:text-[14px] md:leading-[18.9px]'>
            {rating}/5
          </div>
        </div>
        <div className='w-[200px] h-[32px] top-[1480px] mt-1 sm:mt-2 flex left-[415px] gap-[10px]'> 
          <div className='w-[46px] h-[27px] left-[16px] sm:w-[55px] sm:h-[32px] top-[1480px] gap-[10px] sm:left-[100px] md:text-[24px]  text-[20px] md:leading-[32.4px] leading-[27px] font-bold'>
            ${price}
          </div>
          {originalPrice && discount && (
            <>
              <div className='font-bold md:text-[24px]  text-[20px] md:leading-[32.4px] leading-[27px] text-[#00000066] line-through'>${originalPrice}</div>
              <div className='h-5 w-[42px] md:w-[58px]  mt-1 md:h-7 md:py-[6px] py-[3.5px] px-2 md:px-[14px] gap-[12px] rounded-[62px] bg-[#FF33331A] font-medium md:text-[12px]  text-[10px] md:leading-[16.2px] leading-[13.5px] text-[#FF3333]'>
                -{discount}%
              </div>
            </>
          )}
        </div>
      </div>
    );
  };
  
  export default Pr
  