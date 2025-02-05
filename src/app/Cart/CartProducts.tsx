interface ProductProps {
    img: StaticImageData; // Path to the product image
    title: string; // Product title
    size: string; // Product size
    color: string; // Product color
    price: number; // Product price
    quantity: number; // Product quantity
    onDelete?: () => void; // Function to handle deletion
    onIncrease?: () => void; // Function to increase quantity
    onDecrease?: () => void; // Function to decrease quantity
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
  onDelete,
  onIncrease,
  onDecrease,
}) => {
  return (
    
    <div className="w-full max-w-[1200px] mx-auto flex h-auto gap-4 p-4 md:p-6">
  <Image
    src={img}
    alt="Product Image"
    className="w-[99px] h-[99px] md:w-[124px] md:h-[124px] rounded-[8.66px]"
  />

  <div className="flex flex-col justify-between flex-1">
    <div className="flex justify-between items-center">
      <h1 className="font-bold text-[16px] md:text-[20px] leading-[21.6px] md:leading-[27px] text-black">
        {title}
      </h1>
      <button onClick={onDelete}>
        <Image src={Delete} alt="Delete" />
      </button>
    </div>

    {/* Product Size and Color */}
    <div className="flex flex-col gap-1 md:gap-2">
      <h1 className="flex text-[12px] md:text-[14px] leading-[16.2px] md:leading-[18.9px]">
        Size: <span className="ml-1 opacity-50">{size}</span>
      </h1>
      <h1 className="flex text-[12px] md:text-[14px] leading-[16.2px] md:leading-[18.9px]">
        Color: <span className="ml-1 opacity-50">{color}</span>
      </h1>
    </div>

    {/* Price and Quantity Controls */}
    <div className="flex justify-between items-center mt-4">
      <h1 className="font-bold text-[20px] md:text-[24px] leading-[27px] md:leading-[32.4px] text-black">
        ${price}
      </h1>
      <div className="flex items-center bg-[#F0F0F0] h-[31px] md:h-[44px] py-[6px] px-4 gap-4 rounded-[62px]">
        <button
          onClick={onDecrease}
          className="w-[15.63px] h-[1.88px] bg-black"
        ></button>
        <h1 className="font-medium text-[14px] leading-[18.9px]">{quantity}</h1>
        <button onClick={onIncrease}>
          <Image src={Plus} alt="Increase" />
        </button>
      </div>
    </div>
  </div>
</div>

  );
};

export default ProductCard;

