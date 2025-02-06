import { StaticImageData } from "next/image";

export  interface ProductDiscountCardProps {
  image: StaticImageData | string;
  title: string;
  rating: number;
  price?: number;
  originalPrice?: number;
  discount?: number;
}
