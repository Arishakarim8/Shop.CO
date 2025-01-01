import STAR from "@/assets/Frame 10.svg"
import Image from "next/image"
import Vector from "@/assets/Vector (5).svg"
import arrowDown1 from "@/assets/Vector (33).svg"
import arrowDown2 from "@/assets/Vector (34).svg"


export default function Reviews(){
    return (
        <div>
           <div className="sm:w-[654px] absolute text-[32px] leading-9 w-[286px] h-[72px] top-[3148px] left-[16px] sm:h-[58px] sm:top-[3363px] sm:left-[100px] font-bold sm:text-[48px] sm:leading-[57.6px] text-black">
            OUR HAPPY CUSTOMERS
           </div>
           <div className="top-[3200px] md:top-[3421px] absolute flex gap-4  left-[334px] md:left-[1250px]">
             <Image src={arrowDown1} alt="" />
           {/* </div>
           <div> */}
             <Image src={arrowDown2} alt="" />
           </div>

           <div className="w-[358px] h-[186.19px] p-7 absolute border-[#0000001A] top-[3244px] left-[16px]  sm:w-[400px] sm:h-[240px] sm:top-[3461px] sm:left-[100px] sm:py-[28px] sm:px-[32px] gap-[342px] rounded-[20px] border-[1px]">
             <div className="w-[336px] h-[161.58px]  gap-[15px] ">
                <Image src={STAR} alt="Review" />
             <div className="w-[336px] h-[124px]  gap-[12px]">
                <div className="w-[110px] flex items-center mt-2 h-[24px] gap-[4px]">
                  <h1 className="w-[82px] h-[15px]  font-bold whitespace-nowrap text-[20px] leading-[22px]">
                  Sarah M.
                  </h1>
                  <Image src={Vector} alt="" 
                  className='ml-1 mt-2  ' />
                  </div>
                  <p className="font-normal text-[16px] mt-4  leading-[22px] w-[336px] h-[88px] ">
                  "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.”
                  </p>
                </div>
             </div>
             </div>

             <div className="w-[358px] h-[186.19px] md:absolute hidden md:block border-[#0000001A] top-[3244px] left-[16px] p-[24px] sm:w-[400px] sm:h-[240px] sm:top-[3461px] sm:left-[520px] sm:py-[28px] sm:px-[32px] gap-[342px] rounded-[20px] border-[1px]">
             <div className="w-[336px] h-[161.58px]  gap-[15px] ">
                <Image src={STAR} alt="Review" />
             <div className="w-[336px] h-[124px] gap-[12px]">
                <div className="w-[110px] h-[24px] mt-2 flex items-center gap-[4px]">
                  <h1 className="w-[82px h-[15px]  font-bold whitespace-nowrap text-[20px] leading-[22px]">
                  Alex K.
                  </h1>
                  <Image src={Vector} alt="" 
                  className='ml-1 mt-2  ' />
                  </div>
                  <p className="font-normal mt-4 text-[16px]  leading-[22px] w-[336px] h-[88px] ">
                  "Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.”
                  </p>
                </div>
             </div>
             </div>



             <div className="w-[358px] h-[186.19px] md:absolute hidden md:block border-[#0000001A] top-[3244px] left-[16px] p-[24px] sm:w-[400px] sm:h-[240px] sm:top-[3461px] sm:left-[940px] sm:py-[28px] sm:px-[32px] gap-[342px] rounded-[20px] border-[1px]">
             <div className="w-[336px] h-[161.58px]  gap-[15px] ">
                <Image src={STAR} alt="Review" />
             <div className="w-[336px] h-[124px] gap-[12px]">
                <div className="w-[110px] h-[24px] mt-2 flex items-center gap-[4px]">
                  <h1 className="w-[82px h-[15px]  font-bold whitespace-nowrap text-[20px] leading-[22px]">
                  James L.
                  </h1>
                  <Image src={Vector} alt="" 
                  className='ml-1 mt-2 ' />
                  
                  </div>
                  <p className="font-normal mt-4 text-[16px]  leading-[22px] w-[336px] h-[88px] ">
                  "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.”                 
                   </p>
                </div>
             </div>
             </div>

           
        </div>
    )
}