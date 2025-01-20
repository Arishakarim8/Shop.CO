"use client"
import { useState } from "react";
import color_vector from "@/assets/Vector (29).svg"

export default function f2(){
    const ColorsSection = () => {
        const [selected, setSelected] = useState<string>("bg-green-600");
    
        function cn(arg0: string[]): string | undefined {
            throw new Error("Function not implemented.");
        }

    return <div>
        <hr /> bb
                  <div className="flex space-2.5 flex-wrap md:grid grid-cols-5 gap-2.5">
            {[
              "bg-green-600",
              "bg-red-600",
              "bg-yellow-300",
              "bg-orange-600",
              "bg-cyan-400",
              "bg-blue-600",
              "bg-purple-600",
              "bg-pink-600",
              "bg-white",
              "bg-black",
            ].map((color, index) => (
              <button
                key={index}
                type="button"
                className={cn([
                  color,
                  "rounded-full w-9 sm:w-10 h-9 sm:h-10 flex items-center justify-center border border-black/20",
                ])}
                onClick={() => setSelected(color)}
              >
                {/* {selected === color && (
                //   <Image src={color_vector} alt='' width={24} height={24} className="text-base text-white" />
               <color_vector />
            //    <IoMdCheckmark className="text-base text-white" />

              )} */}
              </button>
            ))}
          </div>

    </div>
}
}