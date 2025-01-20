import Navbar from "@/components/Navbar";
import BrandName from '@/components/Header';
import Hero from "@/components/Hero";
import NewArrivals from "@/components/NewArrivals";
import TopSelling from "@/components/TopSelling";
import Reviews from "@/components/Reviews";
import Footer from "./Footer/page";
export default function Hone(){
  return (
    <div className=" ">
      <Hero />
      <NewArrivals />
      <TopSelling /> 
      <Reviews />
      {/* <div className="top-[3480px] absolute md:top-[3781px]"> */}
        {/* <Footer /> */}
      {/* </div> */}
    </div>
  )
}