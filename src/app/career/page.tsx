import BreadCrumb from "@/components/common/BreadCrumb"
import FooterThree from "@/layouts/footers/FooterThree"
import HeaderThree from "@/layouts/headers/HeaderThree"
import Wrapper from "@/layouts/Wrapper"
import CareerArea from "./CareerArea"

export const metadata = {
   title: "Careers - Horizon Bound Travels",
}

const CareerPage = () => {
   return (
      <Wrapper>
         <HeaderThree />
         <main>
            <BreadCrumb title="Career" sub_title="Careers" />
            <CareerArea />
         </main>
         <FooterThree />
      </Wrapper>
   )
}

export default CareerPage;