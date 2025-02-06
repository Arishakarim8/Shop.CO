import { StaticImageData } from "next/image";
export default interface ProductProps {
    img: StaticImageData | string; // Path to the product image
    title: string; // Product title
    size: string; // Product size
    color: string; // Product color
    price: number; // Product price
    quantity: number; // Product quantity
    // onDelete?: () => void; // Function to handle deletion
    // onIncrease?: () => void; // Function to increase quantity
    // onDecrease?: () => void; // Function to decrease quantity
  }
// git add .
// git commit -m "Initial commit"
// git push -u origin main