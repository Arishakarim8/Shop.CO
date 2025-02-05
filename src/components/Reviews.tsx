import Image from "next/image"
import arrowDown1 from "@/assets/Vector (33).svg"
import arrowDown2 from "@/assets/Vector (34).svg"
import ReviewCard from "./reviewCard"


export default function Reviews(){
    return (
        <div className=" rela tive ">
         <div className=" flex justify-between w-full gap-10  px-8 py-12">
          <h1 className="text-[32px] leading-9 font-bold sm:text-[48px] sm:leading-[57.6px] text-black">
          OUR HAPPY CUSTOMERS
          </h1>
          <div className=" flex gap-2 mt-5">
             <Image src={arrowDown1} alt="" className="bg-white w-8 p-1 rounded-[50%] h-8 border "/>
             <Image src={arrowDown2} alt="" className="bg-white w-8 p-1 rounded-[50%] h-8 border "/>
           </div>

         </div>
           <div className="mx-4 md:mx-auto gap-4 scroll-smooth flex overflow-x-scroll ">

<ReviewCard
  rating={5} 
  Name= "Sarah M."
  review="I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations."
  isVerified= {true} 
  />
<ReviewCard
  rating={4.5}
  Name="Samantha D."
  review="I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It's become my favorite go-to shirt."
  isVerified={true}
/>

<ReviewCard
  rating={4.0}
  Name="Alex M."
  review= "The t-shirt exceeded my expectations! The colors are vibrant and the print quality is top-notch. Being a UI/UX designer myself, I'm quite picky about aesthetics, and this t-shirt definitely gets a thumbs up from me."
  isVerified={true}
/>

<ReviewCard
  rating={3.5}
  Name="Ethan R."
  review="This t-shirt is a must-have for anyone who appreciates good design. The minimalistic yet stylish pattern caught my eye, and the fit is perfect. I can see the designer's touch in every aspect of this shirt."
  isVerified={true}
/>


<ReviewCard
  rating={4}
  Name="Olivia P."
  review= "As a UI/UX enthusiast, I value simplicity and functionality. This t-shirt not only represents those principles but also feels great to wear. It's evident that the designer poured their creativity into making this t-shirt stand out."
  isVerified={true}
/>

<ReviewCard
  rating={4}
  Name="Liam K."
  review="This t-shirt is a fusion of comfort and creativity. The fabric is soft, and the design speaks volumes about the designer's skill. It's like wearing a piece of art that reflects my passion for both design and fashion."
  isVerified={true}

/>


<ReviewCard
  rating={4.5}
  Name="Ava H."
  review= "I'm not just wearing a t-shirt; I'm wearing a piece of design philosophy. The intricate details and thoughtful layout of the design make this shirt a conversation starter."
  isVerified={true}
/>
           </div>
        </div>
    )
}