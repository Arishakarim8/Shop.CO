interface ProductProps {
    img: StaticImageData; // Path to the product image
    title: string; // Product title
    size: string; // Product size
    color: string; // Product color
    price: number; // Product price
    quantity: number; // Product quantity
    // onDelete: () => void; // Function to handle deletion
    // onIncrease: () => void; // Function to increase quantity
    // onDecrease: () => void; // Function to decrease quantity
  }
import Plus from "@/assets/Vector (24).svg"
import Delete from "@/assets/Vector (25).svg"
import { StaticImageData } from "next/image";

  import Image from "next/image";

const ProductCard: React.FC<ProductProps> = ({
  img,
  title,
  size,
  color,
  price,
  quantity,
//   onDelete,
//   onIncrease,
//   onDecrease,
}) => {
  return (
    <div className="w-[330px] md:w-[667px] flex h-[99px] md:h-[124px] gap-[14px] md:gap-4">
      {/* Product Image */}
      <Image
        src={img}
        alt="Product Image"
        className="md:w-[124px] md:h-[124px] rounded-[8.66px] w-[99px] h-[99px]"
      />

      <div className="w-[217px] flex flex-col justify-between h-[99px] md:w-[527px] md:h-[124px]">
        <div className="w-[217px] h-[57px] md:w-[227px] md:h-[118px]">
          <div className="font-bold  w-[217px] flex justify-between md:w-[527px] text-nowrap text-[16px] md:text-[20px] leading-[21.6px] md:leading-[27px] text-black">
            <h1>{title}</h1>
            <button
    //    onClick={onDelete}
                >
             <Image src={Delete} alt="Delete" />
            </button>
          </div>

          <div className="w-[67px] h-[34px] font-normal text-[12px] md:text-[14px] leading-[16.2px] md:leading-[18.9px] gap-[2px] md:w-[78px] md:h-[42px] md:gap-1">
            <h1 className="flex">
              Size: <span className="ml-1 opacity-50">{size}</span>
            </h1>
            <h1 className="flex">
              Color: <span className="ml-1 opacity-50">{color}</span>
            </h1>
          </div>
        </div>

        <div className="w-[217px] md:w-[527px] font-bold flex justify-between text-[20px] md:text-[24px] leading-[27px] md:leading-[32.4px] text-black">
          ${price}
          <div className="w-[105px] md:w-[126px] flex items-center bg-[#F0F0F0] h-[31px] md:h-[44px] py-[14px] md:py-3 px-5 gap-5 rounded-[62px]">
            <button
            //   onClick={onDecrease}
              className="w-[15.63px] h-[1.88px] bg-black"
            ></button>

            <h1 className="font-medium text-[14px] leading-[18.9px]">
              {quantity}
            </h1>

            <button
            //  onClick={onIncrease}
             >
              <Image src={Plus} alt="Increase" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

{/* <ProductCard
  img={Multi_shirt}
  title="Gradient Graphic T-shirt"
  size="Large"
  color="White"
  price={145}
  quantity={1}
  onDelete={() => console.log("Delete clicked")}
  onIncrease={() => console.log("Increase quantity")}
  onDecrease={() => console.log("Decrease quantity")}
/>  */}
