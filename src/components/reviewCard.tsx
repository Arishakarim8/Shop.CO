import Image from "next/image";
import Star from '@/assets/Star 3.svg'
import STAR from '@/assets/Star 5.svg'
import Review_Vector from "@/assets/Vector (5).svg"

interface ReviewCardProp {
  rating: number; // Rating out of 5, e.g., 4.5
  Name: string; // Name of the reviewer
  review: string; // The review text
  isVerified: boolean; // Whether the reviewer is verified
}
   const ReviewCard: React.FC<ReviewCardProp> = ({ rating, Name, review, isVerified ,  }) => {
  const fullStars = Math.floor(rating); // Full stars
  const halfStar = rating % 1 !== 0; // Half star

// const ReviewCard = ({ reviewerName="" ,   reviewText="", starImage="" , vectorImage="" }) => {
  return (
    <div className="w- [358px] h- [186.19px] p-7 border-[#0000001A] top-[3244px] left-[16px] sm: w-[400px] sm: h-[240px] sm:top-[3461px] sm:left-[100px] sm:py-[28px] sm:px-[32px] gap-[342px] rounded-[20px] border-[1px]">
      <div className="w-[336px] h-[161.58px] gap-[15px]">
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

        <div className=" h-[124px] gap-[12px]">
          <div className="flex items-center mt-2 h-[24px] gap">
            <h1 className=" h-[15px] font-bold whitespace-nowrap text-[20px] leading-[22px]">
              {Name}
            </h1>
            <div>
            {isVerified && (
            <Image
              src={Review_Vector}
              alt="Verified Badge"
              className="ml-1 md:mt-1 md:w-[19.5px] md:h-[19.5px] w-[15.44px] h-[15.44px]"
            />
          )}
         </div>
          </div>
          <p className="font-normal text-[16px] mt-4 leading-[22px] ">
            {review}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
