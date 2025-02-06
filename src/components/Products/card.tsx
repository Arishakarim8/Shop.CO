import Image from "next/image";
import STAR from '@/assets/Star 5.svg'
import Star from '@/assets/Star 3.svg'
import type { ProductDiscountCardProps } from "./type";

const Product: React.FC<ProductDiscountCardProps> = ({ image, title, rating, price, originalPrice, discount }) => {
  return (
     
      <div className=' w-[20vh] lg:w-[22vw] lg:gap-5 lg:h-[22vw] gap-20  aspect-square h-[20vh] sm:w-[30vw] mb-28  sm:h-[30vw]  lg: mr- 5 rounded-[13.42px] md:w -[30vw] md:h -[30vw] lg:w -[22vw] lg:h -[22vw] absolut md:rounded-[20px]  bg-[#F0EEED]'>
        <Image src={image} alt={title} className="  w-[55vh] md:w-[65vw] aspect-square h- [25vh] sm :w- [30vw] sm :h- [28vw]  md:w- [ 30vw] md:h- [30vw] lg:w- [22vw] lg:h- [22vw] "/>
      
        <div className=' my-2 ml-2 whitespace -nowrap font-bold text-[16px] leading-[21.6px] md:text-[20px] md:leading-[27px] '>
          {title}
        </div>
        <div className=' flex ml-2 gap-[11px] md:gap-[13px]'>
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
        <div className='w-[200px] ml-2 h-[32px] top-[1480px] mt-1 sm:mt-2 flex left-[415px] gap-[10px]'> 
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
  
export default Product;
  