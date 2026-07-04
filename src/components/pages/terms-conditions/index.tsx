import BreadCrumb from "@/components/common/BreadCrumb"
import FooterThree from "@/layouts/footers/FooterThree"
import HeaderThree from "@/layouts/headers/HeaderThree"
import TermsConditionsArea from "./TermsConditionsArea"

const TermsConditions = () => {
   return (
      <>
         <HeaderThree />
         <main>
            <BreadCrumb title="Terms & Conditions" sub_title="Terms & Conditions" />
            <TermsConditionsArea />
         </main>
         <FooterThree />
      </>
   )
}

export default TermsConditions;
