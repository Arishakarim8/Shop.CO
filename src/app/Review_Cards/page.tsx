import Review_Vector from "@/assets/Vector (5).svg"
import Star from '@/assets/Star 3.svg'
import STAR from '@/assets/Star 5.svg'
import Image from "next/image"
import Dots from "@/assets/Vector (31).svg"

interface ReviewCardProps {
    rating: number; // Rating out of 5, e.g., 4.5
    name: string; // Name of the reviewer
    review: string; // The review text
    reviewDate: string; // Date of the review
    isVerified: boolean; // Whether the reviewer is verified
  }

  const ReviewCard: React.FC<ReviewCardProps> = ({ rating, name, review, reviewDate, isVerified ,  }) => {
    const fullStars = Math.floor(rating); // Full stars
    const halfStar = rating % 1 !== 0; // Half star
  
    return (
      <div className="w-[358px] h-[224.19px] border-[#0000001A]  p-[24px] md:w-[610px] md:h-[241px] sm:py-[28px] sm:px-[32px] gap-[342px] rounded-[20px] border-[1px]">
        {/* Rating Section */}
        <div className="flex justify-between">
          <div className="flex gap-[5.51px] mb-1 md:gap-[6.49px]">
            {/* Render full stars */}
            {[...Array(fullStars)].map((_, index) => (
              <Image
                key={index}
                src={Star}
                alt={`Star ${index + 1}`}
                className="w-[19.19px] h-[19.19px] md:w-[22.58px] md:h-[22.58px]"
              />
            ))}
            {/* Render half star */}
            {halfStar && (
              <Image
                src={STAR}
                alt="Half Star"
                className="w-[9.13px] h-[17.36px] md:w-[10.74px] md:h-[22.42px]"
              />
            )}
          </div>
          <Image src={Dots} alt="Options" className="hidden md:flex" />
        </div>
  
        {/* Reviewer Info */}
        <div className="w-[110px] h-[24px] my-1 md:my-3 flex items-center gap-[4px]">
          <h1 className="font-bold text-[16px] md:text-[20px] leading-[22px] text-nowrap">{name}</h1>
          {isVerified && (
            <Image
              src={Review_Vector}
              alt="Verified Badge"
              className="ml-1 md:mt-1 md:w-[19.5px] md:h-[19.5px] w-[15.44px] h-[15.44px]"
            />
          )}
        </div>
  
        {/* Review Text */}
        <p className="font-normal text-sm md:text-[16px] text-[#00000099] md:leading-[22px] w-[310px] md:w-[522px]">
          {review}
        </p>
  
        {/* Review Date */}
        <p className="font-medium text-sm md:text-[16px] text-[#00000099] md:leading-[22px] mt-4 md:mt-6">
          Posted on {reviewDate}
        </p>
      </div>
    );
  };
export default ReviewCard  