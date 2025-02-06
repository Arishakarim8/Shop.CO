import Link from "next/link"
import Image from "next/image"
import arrow from "@/assets/Vector (40).svg"
import shirt_front from "@/assets/image 2.svg"
import shirt_back from "@/assets/image 5.svg"
import shirt_full from "@/assets/image 6.svg"
import MAIN_SHIRT from "@/assets/image 1.svg"
import color_vector from "@/assets/Vector (29).svg"
import Plus from "@/assets/Vector (24).svg"
import Filteration from "@/assets/Frame 19.svg"
import Shop from '@/assets/Vector (2).svg'
import ReviewCard from "@/components/reviewCard2"
import Multi_shirt from "@/assets/Frame 33 (2).svg"
import Polo_Shirt from "@/assets/Frame 34 (1).svg"
import Black_Striped from "@/assets/Frame 38 (1).svg"
import Polo_TShirt from "@/assets/Frame 32 (1).svg"
import Product from "../../components/Products/card"
export default function Cart(){

    return <div className=" flex flex-col gap-10 md:gap-14">
        <div className="md:w-[259px] flex md:h-[22px] w-[89px] h-[19px] relative pt-10 left-[16px] md:left-[56px] gap-[6px] md:gap-3">
             <Link href="/" className="md:text-[16px] text-[14px] leading-[18.9px] gap-1 md:leading-[21.6px] font-normal text-[#00000099]">
             Home
             </Link>

             <div className=" w-[11.5px] md:mt -[5px] mt-[3px]  h-[6.5px] top-[13.75px] left-[5.25px]">
              <Image src={arrow} alt="" />
             </div>
             <Link href="" className="md:text-[16px] text-[14px] leading-[18.9px] gap-1 md:leading-[21.6px] font-normal text-[#00000099]">
             Shop
             </Link>
             <div className=" w-[11.5px] md:mt-[5px] mt-[3px]  h-[6.5px] top-[13.75px] left-[5.25px]">
              <Image src={arrow} alt="" />
             </div>
             <Link href="" className="md:text-[16px] text-[14px] leading-[18.9px] gap-1 md:leading-[21.6px] font-normal text-[#00000099]">
             Man
             </Link>
             <div className=" w-[11.5px] md:mt-[5px] mt-[3px]  h-[6.5px] top-[13.75px] left-[5.25px]">
              <Image src={arrow} alt="" />
             </div>

             <h1 className="text-[14px] text-nowrap leading-[18.9px] md:text-[16px] md:leading-[21.6px] font-normal w-[31px] h-[22px] text-black">
              T-Shirts
             </h1>
        </div>


            <div className="w-full h-auto absolut gap-4 flex flex-col md:flex-row top-[157px] md:top-[216px]">

            <div className="md:w-1/2 h-auto full auto gap-3  flex flex-col lg:flex-row absolut justify-center md:justify-normal  top-[157px] md:top-[216px]" >
                 <div className="w-full h-full  [40vw] lg:w-[35vw] lg:h-[35vw] flex justify-center lg:relative lg:left-[13vw] [136px] md:justify-normal">
                     <Image
                      src={MAIN_SHIRT} 
                      alt="" 
                      className=" absolut rounded-[20px] flex  object-cover w-full h-full auto [330px] sm:w-1/2 md:w-full top-[157px] left-[16px] md:top-[216px] md:left-[266px]"
                      />
                 </div>
                 <div className="w-full flex justify-center lg:absolute lg:left-[16px] lg:w-1/2 lg:justify-normal">
                    <div className="md:top- [216px] absolut top- [459px] justify-between gap-2 lg:h-[35vw] flex lg:flex-col md:left-[100px] left-[16px]">        
                         <Image src={shirt_front} alt="" className="w-[111px] h-[106px] lg:w-[10vw] lg:h-[10vw]" />
                         <Image src={shirt_back} alt="" className="w-[111px] h-[106px] lg:w-[10vw] lg:h-[10vw]" />
                         <Image src={shirt_full} alt="" className="w-[111px] h-[106px] lg:w-[10vw] lg:h-[10vw]" />
                    </div>
                   </div>
                </div>
            
            <div className="md:w-1/2 4/12 md:left-1/2 md:h-auto gap-4 absolut flex flex-col justify-between ml- md:top -[216px] top -[585px]">
            <h1 className="font-black text-[24px]  pr-10 md:pr-0  leading-[28px] md:text-[48px] md:leading-[40px] md:left -[750px] l text-black " >
                ONE LIFE GRAPHIC T-SHIRT
             </h1>


            <p className="w- [358px] font-normal absolut text-sm md:text-[16px] md:leading-[22px] text-[#00000099] h -[50px] md:w -[590px] md:h -[33px] top -[736px] md:top -[380px] left -[16px] md:left -[750px] ">
             This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.
            </p>

            <div className="w-full border border-BORDER"></div>

            <h1 className=" font-normal absolut text-sm md:text-[16px] md:leading-[22px] text-[#00000099] h- [50px] md:w- [590px] md:h- [33px] top- [824px] md:top- [461px] left -[16px] md:left -[750px] ">
              Select Colors
             </h1>

             <div className="w-[142px] h-[39.14px] flex justify-between absolut top-[854px] md:w-[142px]  md:h-[37px] left -[16px] md:top-[488px] md:lef t-[750px]">
          <div className="w-[37px] h-[37px]  top -[460px] left-[19px] border-[2px] border-[#00000033] bg-[#4F4631] rounded-[50px]">
            <div className=" items-center justify-center m-[6px] flex py-[3.75px] px-[1.75px] " >
            <Image src={color_vector} alt="" />
            </div>
           </div>
          <div className="w-[37px] h-[37px] top -[460px] left -[19px] border-[2px] border-[#00000033] bg-[#314F4A] rounded-[50px]">          </div>
          <div className="w-[37px] h-[37px] top -[460px] left -[19px] border-[2px] border-[#00000033] bg-[#31344F] rounded-[50px]"> </div>
        </div>

        <div className="w-full border border-BORDER"></div>

        <h1 className="w- [358px] font-normal absolut text-sm md:text-[16px] md:leading-[22px] text-[#00000099] h- [50px] md:w -[590px] md:h- [33px] top- [947px] md:top -[573px] left -[16px] md:left -[750px] ">
          Choose Size
        </h1>
 
        <div className="w-full [353px] h- [39px] gap-2 flex mt -2 justify -evenly between flex-wrap text-nowrap absolut md:w -[420px] md:h- [46px] md:top -[600px] left -[16px] top -[967px] md:gap -4 md:left -[750px] ">
           <button className="h-[39px] md:h-[46px] py-[10px]  md:py-3 md:px-6  px-5 gap -3 rounded-[62px] bg-[#f0f0f0]">
             <h1 className="font-normal text-[14px] leading-[18.9px] md:text-[16px]  md:leading-[21.6px] text-[#00000099]">
             X-Small
             </h1>
           </button>

           <button className="h-[39px] md:h-[46px]  py-[10px] md:py-3 md:px-6 px-5 gap -3 rounded-[62px] bg-[#f0f0f0]">
             <h1 className="font-normal text-[14px] leading-[18.9px] md:text-[16px]  md:leading-[21.6px] text-[#00000099]">
             Medium
             </h1>
           </button>

           <button className="h-[39px] md:h-[46px] py-[10px] md:py-3 md:px-6  px-5 gap -3 rounded-[62px] bg-black">
             <h1 className="font-normal text-[14px] leading-[18.9px] md:text-[16px]  md:leading-[21.6px] text-[#ffffff]">
             Large
             </h1>
           </button>

           <button className="h-[39px] md:h-[46px] py-[10px] md:py-3 md:px-6  px-5 gap -3 rounded-[62px] bg-[#f0f0f0]">
             <h1 className="font-normal text-[14px] leading-[18.9px] md:text-[16px]  md:leading-[21.6px] text-[#00000099]">
             X-Large
             </h1>
           </button>
        </div>
        
        <div className="w-full border border-BORDER"></div>
      
        <div className=" flex gap-3">
        <div className="w-[110px] md:w-[170px] absolut top- [1060px]  md:top -[694px] flex items-center justify-between bg-[#F0F0F0] left- [16px] md: left-[750px] h-[44px] md:h-[52px] py-3 px-4 md:py-4 md:px-5 md:gap-4 gap-5 rounded-[62px]">
            <button className="w-[15.63px] h-[1.88px] md:w-[18.75px] md:h-[2.25px] bg-black">
            </button>
            <h1 className="font-medium  text-[14px] md:text-[16px] md:leading-[21.6px] leading-[18.9px]">
              1
            </h1>
            <button >
              <Image src={Plus} alt="Increase" className="md:w-[18.75px] w-[15.63px] h-[15.63px] md:h-[18.75px] top-[2.63px] left-[2.63px]" />
            </button>
          </div>

        <button className="max- w-[550px] absolut bg-black h-[44px] md:h-[52px] py-4 px-14 gap-3 top- [1060px] md: top-[694px] left -[138px] md:left -[940px] rounded-[62px] ">
         <h1 className="text-[14px] md:text-[16px] leading-[18.9px] md:leading-[21.6px] font-medium text-white">
         Add to Cart
         </h1>
         </button>
        </div>
         </div>
         </div>

          <div className="w-full h-auto grid gap-3 absolut top-[1154px] px-3 md:px-12 md:top-[926px]">
           <div className="w- [358px] flex md:justify-around justify-between max-w-[1240px] relative  text-[16px] md:text-[20px] md:leading-[22px]">
             <h1 className="text-[#00000099] font-normal">
                Product Details
             </h1>

             <h1 className="text-[#000000] font-medium">
                Rating & Reviews
             </h1>

             <h1 className="text-[#00000099] font-normal" >
                FAQs
             </h1>
           </div>

          <div className=" max-w-[1240px] relative  border border-BORDER">
          <div className=" w-1/3 mx-auto relative  border-[2px] border-black"></div>
          </div>
          
          <div className=" w-full  relative px- 4 md:px -10 flex items-center justify-between">
          <div className=" flex items-center" >
          <h1 className="font-bold  leading-[27px] text-[20px] md:text-[24px] md:leading-[32.4px] text-black">
          All Reviews
          </h1>

          <h1 className="font-normal m-2 leading-[22px] text-[14px] md:text-[16px]  text-[#00000099]">
          (451)
          </h1>
          </div>
          
          <div className="flex items-center gap-[10px] ">
              <Image src={Filteration} alt="" className="md:w-12 w-10 h-10 md:h-12" />
              <button className="w-[236px] md:w-[120px] hidden md:flex items-center justify-center bg-[#f0f0f0] h-[44px] md:h-[48px] py-4 px-4 gap-3 rounded-[62px]">
                <h1 className="text-[12px] md:text-[16px]  md:leading-[21.6px] font-medium text-black">
                 Latest
              </h1>
              <Image
                src={Shop}
                alt="Shop"
                className="w-[11.5px] h-[6.5px] ml-2"
                 />
             </button>

             <button className="w-[113px] md:w-[166px]  bg-black h-[40px] md:h-[48px] flex items-center justify-center py-4 px-4 gap-3 rounded-[62px]">
               <h1 className="text-[12px]  md:text-[16px] md:leading-[21.6px] leading-4 font-medium text-white">
                Write a Review
               </h1>
              </button>

          </div> 
          </div>

            <div className="grid absolut relativ mx-auto grid-cols-1 sm:grid-cols-2  gap-6">
 
<ReviewCard
  rating={4.5}
  name="Samantha D."
  review="I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It's become my favorite go-to shirt."
  reviewDate="August 14, 2023"
  isVerified={true}
/>

<ReviewCard
  rating={4.0}
  name="Alex M."
  review= "The t-shirt exceeded my expectations! The colors are vibrant and the print quality is top-notch. Being a UI/UX designer myself, I'm quite picky about aesthetics, and this t-shirt definitely gets a thumbs up from me."
  reviewDate="August 15, 2023"
  isVerified={true}
/>

<ReviewCard
  rating={3.5}
  name="Ethan R."
  review="This t-shirt is a must-have for anyone who appreciates good design. The minimalistic yet stylish pattern caught my eye, and the fit is perfect. I can see the designer's touch in every aspect of this shirt."
  reviewDate="August 16, 2023"
  isVerified={true}
/>


<ReviewCard
  rating={4}
  name="Olivia P."
  review= "As a UI/UX enthusiast, I value simplicity and functionality. This t-shirt not only represents those principles but also feels great to wear. It's evident that the designer poured their creativity into making this t-shirt stand out."
  reviewDate="August 17, 2023"
  isVerified={true}
/>

<ReviewCard
  rating={4}
  name="Liam K."
  review="This t-shirt is a fusion of comfort and creativity. The fabric is soft, and the design speaks volumes about the designer's skill. It's like wearing a piece of art that reflects my passion for both design and fashion."
  reviewDate="August 18, 2023"
  isVerified={true}

/>


<ReviewCard
  rating={4.5}
  name="Ava H."
  review= "I'm not just wearing a t-shirt; I'm wearing a piece of design philosophy. The intricate details and thoughtful layout of the design make this shirt a conversation starter."
  reviewDate="August 19, 2023"
  isVerified={true}
/>


  </div>

        <div className=" flex items-center  justify-center">
        <button className="w-[195px] md:w-[230px] absolut flex justify-center items-center border-[#0000001A] border  h-[47px] md:h-[52px] md:py-4 py-[14px] px-9 md:px-14 gap-3 rounded-[62px] ">
           <h1 className="text-[14px] text-nowrap md:text-[16px]  leading-[18.9px] md:leading-[21.6px] font-medium text-black">
           Load More Reviews
           </h1>
         </button>
       </div>

      <div className="w-full flex justify-center items-center">
       <div className=" w-full flex items-center justify-center "> 
        <h1 className="font-bold md:text-[48px] md:leading-[57.6px] py-9 text-black leading-[36px] text-[32px] ">
           YOU MIGHT ALSO LIKE
        </h1>
       </div>
      </div>

      <div className=" gap-6 w-full  overflow-x-scroll absolut flex left-4 md:left-14">
<Product
  image={Polo_TShirt}
  title="Polo with Contrast Trims"
  rating={4.0}
  price={242}
  discount={20}
  originalPrice={212}
/>

<Product
  image={Multi_shirt}
  title="Gradient Graphic T-shirt"
  rating={3.5}
  price={145}
/>

<Product
  image={Polo_Shirt}
  title="Polo with Tipping Details"
  rating={4.5}
  price={180}
/>

<Product
  image={Black_Striped}
  title="Black Striped T-shirt"
  rating={5.0}
  price={120}
  discount={30}
  originalPrice={150}
/>
</div>

</div>
<div>
</div>

     </div>
}