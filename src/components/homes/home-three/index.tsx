"use client"
import BannerFormThree from "@/components/common/banner-form/BannerFormThree"
import Banner from "./Banner"
import Choose from "./Choose"
import CtaTwo from "./CtaTwo"
import Location from "./Location"
import Testimonial from "./Testimonial"
import dynamic from "next/dynamic"
import HeaderThree from "@/layouts/headers/HeaderThree"
import FooterThree from "@/layouts/footers/FooterThree"
import Process from "./Process";
import Counter from "./Counter"
const Listing = dynamic(() => import("./Listing"), { ssr: false });

const HomeThree = () => {
   return (
      <>
         <HeaderThree />
         <main>
            <Banner />
            <BannerFormThree />
            <Location />
            <Counter />
            <Listing />
            <Process />
            <Choose />
            <CtaTwo />
            <Testimonial />
         </main>
         <FooterThree />
      </>
   )
}

export default HomeThree
