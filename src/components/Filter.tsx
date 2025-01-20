"use client"
import Filters from "@/assets/Vector (26).svg"
import Image from "next/image"
import Link from "next/link"
import Filter_Vector from "@/assets/Vector (27).svg"
import down_vector from '@/assets/Vector (28).svg'
import color_vector from "@/assets/Vector (29).svg"
export default function Brand(){
    return (
      <div id="Filters" className=" ">
      <div className="max-w-[290px] flex flex-col absolute  py-5 px-6 gap-5 border border-BORDER rounded-[20px]  ">
      <div className=" flex justify-between ">
         <h1 className="font-bold text-[20px] ledaing-[27px] text-black">
         Filters
         </h1>
         <Image src={Filters} alt="" />
      </div>

     <div className=' border-[1px] border-solid border-[#0000001A] '></div>


      <ul className=" font-normal flex flex-col justify-between text-[16px] leading-[21.6px] text-[#00000099] md:h-[160px] md:gap-5  h-[160px] top-[83px] left-[19px]  gap -3">
       <li className=" flex h-4 justify-between"> 
          <h1>T-shirts</h1>
          <Image src={Filter_Vector} alt="" />
        </li>

        <li className=" flex h-4 justify-between"> 
          <h1>Shorts</h1>
          <Image src={Filter_Vector} alt="" />
        </li>

        <li className=" flex h-4 justify-between" > 
          <h1>Shirts</h1>
          <Image src={Filter_Vector} alt="" />
        </li>

        <li className=" flex h-4 justify-between"> 
          <h1>Hoodie</h1>
          <Image src={Filter_Vector} alt="" />
        </li>

        <li className=" flex h-4 justify-between"> 
          <h1>Jeans</h1>
          <Image src={Filter_Vector} alt="" />
        </li>
      </ul>

     <div className=" border border-BORDER"></div>

        <div className="flex justify-between ">
          <h1 className="font-bold text-[20px] ledaing-[27px] text-black">
            Price
          </h1>
          <Image src={down_vector} alt=""/>
        </div>

         <div className=" relative flex flex-col justify-center items-center ">
          <div className=" h-[6px] w-full  m-2  bg-[#f0f0f0]  rounded-[20px]"></div>
          <div className=" absolute w-[70%]  flex items-center justify-between  h-[6px]  bg-black  rounded-[20px] ">
          <div className="w-5 h-5 absolut e grid gap-2  rounded-[50px] bg-black">
          <h1 className="font-medium absolut text-[14px] mt-5 leading-[18.9px] text-black ">$50</h1>
          </div>
          <div className="w-5 h-5 absolut  rounded-[50px] bg-black ">
          <h1 className="font-medium mt-5 text-[14px] leading-[18.9px] text-black">$200</h1>
          </div>
          </div>
        </div>



     <div className=" border border-BORDER"></div> 

       <div className="  flex justify-between  ">
          <h1 className="font-bold text-[20px] ledaing-[27px] text-black">
          Colors
          </h1>
          <Image src={down_vector} alt="" />
       </div>

       <div className=" flex gap-2 flex-wrap justify-center">
          <div className="w-[37px] h-[37px]  top-[460px] left-[19px] border-[2px] border-[#00000033] bg-[#00C12B] rounded-[50px]"> </div>
          <div className="w-[37px] h-[37px]  top-[460px] left-[19px] border-[2px] border-[#00000033] bg-[#F50606] rounded-[50px]"> </div>
          <div className="w-[37px] h-[37px]  top-[460px] left-[19px] border-[2px] border-[#00000033] bg-[#F5DD06] rounded-[50px]"> </div>
          <div className="w-[37px] h-[37px]  top-[460px] left-[19px] border-[2px] border-[#00000033] bg-[#F57906] rounded-[50px]"> </div>
          <div className="w-[37px] h-[37px]  top-[460px] left-[19px] border-[2px] border-[#00000033] bg-[#06CAF5] rounded-[50px]"> </div>
          <div className="w-[37px] h-[37px]  top-[460px] left-[19px] border-[2px] border-[#00000033] bg-[#063AF5] rounded-[50px]">
            <div className=" items-center justify-center m-[6px] flex py-[3.75px] px-[1.75px] " >
            <Image src={color_vector} alt="" />
            </div>
           </div>
          <div className="w-[37px] h-[37px] top-[460px] left-[19px] border-[2px] border-[#00000033] bg-[#7D06F5] rounded-[50px]"> </div>
          <div className="w-[37px] h-[37px] top-[460px] left-[19px] border-[2px] border-[#00000033] bg-[#F506A4] rounded-[50px]"> </div>
          <div className="w-[37px] h-[37px] top-[460px] left-[19px] border-[2px] border-[#00000033] bg-white rounded-[50px]"> </div>
          <div className="w-[37px] h-[37px] top-[460px] left-[19px] border-[2px] border-[#00000033] bg-black rounded-[50px]"> </div>
       </div>

     <div className=" border border-BORDER"></div> 

       <div className="  flex justify-between ">
          <h1 className="font-bold text-[20px] ledaing-[27px] text-black">
          Size
          </h1>
          <Image src={down_vector} alt="" />
       </div>


       <div className="flex flex-wrap gap-3">
           <button className="h-[39px] py-[10px] px-5 gap-3 rounded-[62px] bg-[#f0f0f0]">
             <h1 className="font-normal text-[14px] leading-[18.9px] text-[#00000099]">
             XX-Small
             </h1>
           </button>

           <button className="h-[39px] py-[10px]  px-5 gap-3 rounded-[62px] bg-[#f0f0f0]">
             <h1 className="font-normal text-[14px] leading-[18.9px] text-[#00000099]">
             X-Small
             </h1>
           </button>
           
           <button className="h-[39px] py-[10px] px-5 gap-3 rounded-[62px] bg-[#f0f0f0]">
             <h1 className="font-normal text-[14px] leading-[18.9px] text-[#00000099]">
             Small
             </h1>
           </button>
           
           <button className=" h-[39px]  py-[10px] px-5 gap-3 rounded-[62px] bg-[#f0f0f0]">
             <h1 className="font-normal text-[14px] leading-[18.9px] text-[#00000099]">
             Medium
             </h1>
           </button>
           
           <button className=" h-[39px] py-[10px] px-5 gap-3 rounded-[62px] bg-black text-white">
             <h1 className="font-normal text-[14px] leading-[18.9px] ">
             Large
             </h1>
           </button>
           
           <button className=" h-[39px]  py-[10px] px-5 gap-3 rounded-[62px] bg-[#f0f0f0]">
             <h1 className="font-normal text-[14px] leading-[18.9px] text-[#00000099]">
             X-Large
             </h1>
           </button>
           
           <button className=" h-[39px] py-[10px] px-5 gap-3 rounded-[62px] bg-[#f0f0f0]">
             <h1 className="font-normal text-[14px] leading-[18.9px] text-[#00000099]">
             XX-Large
             </h1>
           </button>
           
           <button className="h-[39px] py-[10px] px-5 gap-3 rounded-[62px] bg-[#f0f0f0]">
             <h1 className="font-normal text-[14px] leading-[18.9px] text-[#00000099]">
             3X-Large
             </h1>
           </button>
           
           <button className=" h-[39px] py-[10px] px-5 gap-3 rounded-[62px] bg-[#f0f0f0]">
             <h1 className="font-normal text-[14px] leading-[18.9px] text-[#00000099]">
             4X-Large
             </h1>
           </button>
       </div>

     <div className="border border-BORDER"></div> 

        <div className=" flex justify-between ">
          <h1 className="font-bold text-[20px] ledaing-[27px] text-black">
            Dress Style
          </h1>
          <Image src={down_vector} alt="" />
       </div>
       <ul className=" font-normal flex flex-col justify-between gap-7 text-[16px] leading-[21.6px] text-[#00000099] ">
       <li className=" flex h-4 justify-between"> 
          <h1>Casual</h1>
          <Image src={Filter_Vector} alt="" />
        </li>

        <li className=" flex h-4 justify-between"> 
          <h1>Formal</h1>
          <Image src={Filter_Vector} alt="" />
        </li>

        <li className=" flex h-4 justify-between" > 
          <h1>Party</h1>
          <Image src={Filter_Vector} alt="" />
        </li>

        <li className=" flex h -4 justify-between"> 
          <h1>Gym</h1>
          <Image src={Filter_Vector} alt="" />
        </li>

       </ul>

       <button className=" bg-black h-12 py-4 px-14 gap-3  rounded-[62px] ">
         <h1 className=" md:text-[14px] leading- md:leading-[18.9px] font-medium text-white">
         Apply Filter
         </h1>
     </button>

     </div>

  </div>
)
}

           {/* <div className="w-[330px] md:w-[667px] flex h-[99px] md:h-[124px]  gap-[14px] md:gap-4">
              <Image src={Multi_shirt} alt="" className="md:w-[124px] md:h-[124px] rounded-[8.66px] w-[99px] h-[99px]"/>
              
              <div className="w-[217px] flex  justify-between h-[99px] md:w-[527px] md:h-[124px] ">
                
              <div className="w-[217px]  h-[57px] md:w-[227px] md:h-[118px]">
                    <div className="w-[181px] h-[57px] gap-[1px] md:w-[227px] md:h-[71px] md:gap-[2px]">
                       <div className="font-bold w-[217px] flex bg-slate-40  justify-between h -[99px] md:w-[527px] md:h -[124px]   text-nowrap text-[16px] md:text-[20px] leading-[21.6px]  md:leading-[27px] text-black">
                       <h1>
                        Gradient Graphic T-shirt
                       </h1>
                               <Image src={Delete} alt="" />
                        

                       </div>
                       <div className="w-[67px] h-[34px] font-normal text-[12px] md:text-[14px] leading-[16.2px] md:leading-[18.9px]  gap-[2px] md:w-[78px] md:h-[42px] md:gap-1">
                            <h1 className=" flex">
                            Size: <div className="ml-1 opacity-50">Large </div>
                            </h1>
                            <h1 className=" flex">
                            Color: <div className="ml-1 opacity-50">White </div>
                            </h1>
                        </div>

                        <div className="w-[217px] md:w-[527px] font-bold flex justify-between mt-3 text-[20px] md:text-[24px] md:leading-[32.4px] leading-[27px] text-black">
                        $145
                        <div className="w-[105px] md:w-[126px] flex items-center bg-[#F0F0F0] h-[31px] md:h-[44px] py-[14px] md:py-3 px-5 gap-5 rounded-[62px] ">
                           <div className="w-[15.63px] h-[1.88px] bg-black left-[2.19px]">
                           </div>
                           <h1 className="font-medium text-[14px] leading-[18.9px]">
                            1
                           </h1>
                           <div>
                            <Image src={Plus} alt="" />
                           </div>

                        </div>
                        </div>
                    </div>

                 </div>
              </div>
           </div> */}


// import React, { useState } from "react";

// const Slider = () => {
//   const [minValue, setMinValue] = useState(50);
//   const [maxValue, setMaxValue] = useState(200);

//   const handleMinChange = (event) => {
//     const value = Math.min(Number(event.target.value), maxValue - 1);
//     setMinValue(value);
//   };

//   const handleMaxChange = (event) => {
//     const value = Math.max(Number(event.target.value), minValue + 1);
//     setMaxValue(value);
//   };

//   return (
//     <div className="relative w-full max-w-[500px] mx-auto">
//       {/* Track */}
//       <div className="absolute w-full h-[6px] bg-[#f0f0f0] top-[30px] rounded-[20px]"></div>
//       {/* Filled Range */}
//       <div
//         className="absolute h-[6px] bg-black rounded-[20px]"
//         style={{
//           left: `${(minValue / 500) * 100}%`,
//           right: `${100 - (maxValue / 500) * 100}%`,
//         }}
//       ></div>
//       {/* Thumbs */}
//       <input
//         type="range"
//         min="50"
//         max="500"
//         value={minValue}
//         onChange={handleMinChange}
//         className="absolute appearance-none w-full h-[6px] bg-transparent z-10 pointer-events-auto"
//         style={{ top: "18px" }}
//       />
//       <input
//         type="range"
//         min="50"
//         max="500"
//         value={maxValue}
//         onChange={handleMaxChange}
//         className="absolute appearance-none w-full h-[6px] bg-transparent z-10 pointer-events-auto"
//         style={{ top: "18px" }}
//       />

//       {/* Thumb Indicators */}
//       <div
//         className="w-5 h-5 rounded-[50px] bg-black absolute"
//         style={{ left: `${(minValue / 500) * 100}%`, top: "15px" }}
//       ></div>
//       <div
//         className="w-5 h-5 rounded-[50px] bg-black absolute"
//         style={{ left: `${(maxValue / 500) * 100}%`, top: "15px" }}
//       ></div>

//       {/* Labels */}
//       <div className="absolute top-[50px] flex justify-between w-full text-sm">
//         <span className="font-medium text-black">${minValue}</span>
//         <span className="font-medium text-black">${maxValue}</span>
//       </div>
//     </div>
//   );
// };

// export default Slider;





// import Filters from "@/assets/Vector (26).svg"
// import Image from "next/image"
// import Link from "next/link"
// import Filter_Vector from "@/assets/Vector (27).svg"
// import down_vector from '@/assets/Vector (28).svg'
// import color_vector from "@/assets/Vector (29).svg"
// export default function Filter(){
//     return (
//       <div id="Filters" className=" ">
//       <div className="max-w-[390px] flex flex-col absolute md:w -[295px] py-5 px-6 gap-6 border border-BORDER rounded-[20px] h-[1066px] md:h-[1220px] top-[93px] md:top-[204px] md:left-[56px] ">
//       <div className="md:w-[247px]  flex justify-between md:h-[27px]  w-[353px] h-[27px] top-5 left-[19px]">
//          <h1 className="font-bold text-[20px] leading-[27px] text-black">
//          Filters
//          </h1>
//          <Image src={Filters} alt="" />
//      </div>
//      <div className="w-[353px] md:w-[247px] top-[63px] left-[19px] border border-BORDER"></div>


//       <ul className="md:w-[247px] font-normal flex flex-col justify-between text-[16px] leading-[21.6px] text-[#00000099] md:h-[160px] md:gap-5 w-[353px] h-[160px] top-[83px] left-[19px]  gap -3">
//        <li className=" flex h-4 justify-between"> 
//           <h1>T-shirts</h1>
//           <Image src={Filter_Vector} alt="" />
//         </li>

//         <li className=" flex h-4 justify-between"> 
//           <h1>Shorts</h1>
//           <Image src={Filter_Vector} alt="" />
//         </li>

//         <li className=" flex h-4 justify-between" > 
//           <h1>Shirts</h1>
//           <Image src={Filter_Vector} alt="" />
//         </li>

//         <li className=" flex h-4 justify-between"> 
//           <h1>Hoodie</h1>
//           <Image src={Filter_Vector} alt="" />
//         </li>

//         <li className=" flex h-4 justify-between"> 
//           <h1>Jeans</h1>
//           <Image src={Filter_Vector} alt="" />
//         </li>
//       </ul>

//      <div className="w-[353px] md:w-[247px] top-[63px] left-[19px] border border-BORDER"></div>

//      <div className="md:w-[247px] md:h-[90px] relative md:gap-5">
//         <div className="md:w-[247px] w-[353px] flex justify-between h-[27px] ">
//           <h1 className="font-bold text-[20px] ledaing-[27px] text-black">
//             Price
//           </h1>
//           <Image src={down_vector} alt="" />
//         </div>

//         <div className="md:w-[247px] w-[353px] h-[43px] top-[330px]">
//           <div className="w-[353px] h-[6px] absolute md:w-[247px] md:top-[55px] bg-[#f0f0f0] top-[338px] md:left-0 left-[19px] rounded-[20px]"></div>
//           <div className="md:w-[150.29px] absolute w-[263px] h-[6px] md:top-[55px] bg-black top-[338px] left-[62px]  md:left-[43.13px] rounded-[20px] ">         </div>
//           <div className="w-5 h-5 absolute top-[330] rounded-[50px] bg-black left-[60px] md:top-[47px] md:left-[41px]"></div>
//           <div className="w-5 h-5 absolute top-[330] rounded-[50px] bg-black left-[313px] md:top-[47px] md:left-[187px]"></div>
//           <h1 className="font-medium absolute text-[14px] leading-[18.9px] text-black md:top-[71px] md:left-[37px] top-[354px] left-[56px]">$50</h1>
//           <h1 className="font-medium absolute text-[14px] leading-[18.9px] text-black md:top-[71px] md:left-[179px] top-[354px] left-[305px]">$200</h1>
//         </div>
//      </div>
//      <div className="w-[353px] md:w-[247px] top-[63px] left-[19px] border border-BORDER"></div> 

//      <div className="md:w-[247px]  md:h-[137px] gap-5"> 
//        <div className="md:w-[247px] mb-5 md:h-[27px] flex justify-between w-[353px] h-[27px] top-[417px] left-[19px]">
//           <h1 className="font-bold text-[20px] ledaing-[27px] text-black">
//           Colors
//           </h1>
//           <Image src={down_vector} alt="" />
//        </div>

//        <div className="  grid  gap-7 grid-cols-7 md:grid-cols-5">
//           <div className="w-[37px] h-[37px]  top-[460px] left-[19px] border-[2px] border-[#00000033] bg-[#00C12B] rounded-[50px]"> </div>
//           <div className="w-[37px] h-[37px]  top-[460px] left-[19px] border-[2px] border-[#00000033] bg-[#F50606] rounded-[50px]"> </div>
//           <div className="w-[37px] h-[37px]  top-[460px] left-[19px] border-[2px] border-[#00000033] bg-[#F5DD06] rounded-[50px]"> </div>
//           <div className="w-[37px] h-[37px]  top-[460px] left-[19px] border-[2px] border-[#00000033] bg-[#F57906] rounded-[50px]"> </div>
//           <div className="w-[37px] h-[37px]  top-[460px] left-[19px] border-[2px] border-[#00000033] bg-[#06CAF5] rounded-[50px]"> </div>
//           <div className="w-[37px] h-[37px]  top-[460px] left-[19px] border-[2px] border-[#00000033] bg-[#063AF5] rounded-[50px]">
//             <div className=" items-center justify-center m-[6px] flex py-[3.75px] px-[1.75px] " >
//             <Image src={color_vector} alt="" />
//             </div>
//            </div>
//           <div className="w-[37px] h-[37px] top-[460px] left-[19px] border-[2px] border-[#00000033] bg-[#7D06F5] rounded-[50px]"> </div>
//           <div className="w-[37px] h-[37px] top-[460px] left-[19px] border-[2px] border-[#00000033] bg-[#F506A4] rounded-[50px]"> </div>
//           <div className="w-[37px] h-[37px] top-[460px] left-[19px] border-[2px] border-[#00000033] bg-white rounded-[50px]"> </div>
//           <div className="w-[37px] h-[37px] top-[460px] left-[19px] border-[2px] border-[#00000033] bg-black rounded-[50px]"> </div>
//        </div>
//      </div>
//      <div className="w-[353px] md:w-[247px] top-[63px] left-[19px] border border-BORDER"></div> 


//      <div className="md:w-[247px] md:h-[274px] gap-5"> 
//        <div className="md:w-[247px] mb-2 md:h-[27px] flex justify-between w-[353px] h-[27px] top-[417px] left-[19px]">
//           <h1 className="font-bold text-[20px] ledaing-[27px] text-black">
//           Size
//           </h1>
//           <Image src={down_vector} alt="" />
//        </div>

//        <div className="w-[353px] md:w-[247px] md:gap-2 md:h-[227px] h-[133px] top-[633px] left-[19px] gap-2">
//            <button className="h-[39px] py-[10px] px-5 gap-3 rounded-[62px] bg-[#f0f0f0]">
//              <h1 className="font-normal text-[14px] leading-[18.9px] text-[#00000099]">
//              XX-Small
//              </h1>
//            </button>

//            <button className="h-[39px] py-[10px] mx-3 px-5 gap-3 rounded-[62px] bg-[#f0f0f0]">
//              <h1 className="font-normal text-[14px] leading-[18.9px] text-[#00000099]">
//              X-Small
//              </h1>
//            </button>
           
//            <button className="h-[39px] py-[10px] px-5 gap-3 rounded-[62px] bg-[#f0f0f0]">
//              <h1 className="font-normal text-[14px] leading-[18.9px] text-[#00000099]">
//              Small
//              </h1>
//            </button>
           
//            <button className=" h-[39px] my-1 py-[10px] px-5 gap-3 rounded-[62px] bg-[#f0f0f0]">
//              <h1 className="font-normal text-[14px] leading-[18.9px] text-[#00000099]">
//              Medium
//              </h1>
//            </button>
           
//            <button className=" h-[39px] py-[10px] px-5 gap-3 rounded-[62px] bg-black text-white">
//              <h1 className="font-normal text-[14px] leading-[18.9px] ">
//              Large
//              </h1>
//            </button>
           
//            <button className=" h-[39px] m-3 py-[10px] px-5 gap-3 rounded-[62px] bg-[#f0f0f0]">
//              <h1 className="font-normal text-[14px] leading-[18.9px] text-[#00000099]">
//              X-Large
//              </h1>
//            </button>
           
//            <button className=" h-[39px] py-[10px] px-5 gap-3 rounded-[62px] bg-[#f0f0f0]">
//              <h1 className="font-normal text-[14px] leading-[18.9px] text-[#00000099]">
//              XX-Large
//              </h1>
//            </button>
           
//            <button className="h-[39px] mx-3 py-[10px] px-5 gap-3 rounded-[62px] bg-[#f0f0f0]">
//              <h1 className="font-normal text-[14px] leading-[18.9px] text-[#00000099]">
//              3X-Large
//              </h1>
//            </button>
           
//            <button className=" h-[39px] py-[10px] px-5 gap-3 rounded-[62px] bg-[#f0f0f0]">
//              <h1 className="font-normal text-[14px] leading-[18.9px] text-[#00000099]">
//              4X-Large
//              </h1>
//            </button>
           
           

//        </div>
//      <div className="w-[353px] md:w-[247px] top-[63px] left-[19px] border border-BORDER"></div> 

//         <div className="md:w-[247px] mb-5 md:h-[27px] flex justify-between w-[353px] h-[27px] top-[417px] left-[19px]">
//           <h1 className="font-bold text-[20px] ledaing-[27px] text-black">
//             Dress Style
//           </h1>
//           <Image src={down_vector} alt="" />
//        </div>
//        <ul className="md:w-[247px] font-normal flex flex-col justify-between text-[16px] leading-[21.6px] text-[#00000099] md:h-[160px] md:gap-5 w-[353px] h-[160px] top-[83px] left-[19px]  gap -3">
//        <li className=" flex h-4 justify-between"> 
//           <h1>Casual</h1>
//           <Image src={Filter_Vector} alt="" />
//         </li>

//         <li className=" flex h-4 justify-between"> 
//           <h1>Formal</h1>
//           <Image src={Filter_Vector} alt="" />
//         </li>

//         <li className=" flex h-4 justify-between" > 
//           <h1>Party</h1>
//           <Image src={Filter_Vector} alt="" />
//         </li>

//         <li className=" flex h-4 justify-between"> 
//           <h1>Gym</h1>
//           <Image src={Filter_Vector} alt="" />
//         </li>

//        </ul>




//      </div>

//      <div className="md:w-[247px] md:h-[171px] gap-5"> 

//      </div>

//      <button className="md:w-[247px] w-[353px] bg-black h-12 py-4 px-14 gap-3 top-[993px] left-[19px] rounded-[62px] ">
//          <h1 className="text- md:text-[14px] leading- md:leading-[18.9px] font-medium text-white">
//          Apply Filter
//          </h1>
//      </button>




//   </div>
//   </div>
// )
// }

//            {/* <div className="w-[330px] md:w-[667px] flex h-[99px] md:h-[124px]  gap-[14px] md:gap-4">
//               <Image src={Multi_shirt} alt="" className="md:w-[124px] md:h-[124px] rounded-[8.66px] w-[99px] h-[99px]"/>
              
//               <div className="w-[217px] flex  justify-between h-[99px] md:w-[527px] md:h-[124px] ">
                
//               <div className="w-[217px]  h-[57px] md:w-[227px] md:h-[118px]">
//                     <div className="w-[181px] h-[57px] gap-[1px] md:w-[227px] md:h-[71px] md:gap-[2px]">
//                        <div className="font-bold w-[217px] flex bg-slate-40  justify-between h -[99px] md:w-[527px] md:h -[124px]   text-nowrap text-[16px] md:text-[20px] leading-[21.6px]  md:leading-[27px] text-black">
//                        <h1>
//                         Gradient Graphic T-shirt
//                        </h1>
//                                <Image src={Delete} alt="" />
                        

//                        </div>
//                        <div className="w-[67px] h-[34px] font-normal text-[12px] md:text-[14px] leading-[16.2px] md:leading-[18.9px]  gap-[2px] md:w-[78px] md:h-[42px] md:gap-1">
//                             <h1 className=" flex">
//                             Size: <div className="ml-1 opacity-50">Large </div>
//                             </h1>
//                             <h1 className=" flex">
//                             Color: <div className="ml-1 opacity-50">White </div>
//                             </h1>
//                         </div>

//                         <div className="w-[217px] md:w-[527px] font-bold flex justify-between mt-3 text-[20px] md:text-[24px] md:leading-[32.4px] leading-[27px] text-black">
//                         $145
//                         <div className="w-[105px] md:w-[126px] flex items-center bg-[#F0F0F0] h-[31px] md:h-[44px] py-[14px] md:py-3 px-5 gap-5 rounded-[62px] ">
//                            <div className="w-[15.63px] h-[1.88px] bg-black left-[2.19px]">
//                            </div>
//                            <h1 className="font-medium text-[14px] leading-[18.9px]">
//                             1
//                            </h1>
//                            <div>
//                             <Image src={Plus} alt="" />
//                            </div>

//                         </div>
//                         </div>
//                     </div>

//                  </div>
//               </div>
//            </div> */}
