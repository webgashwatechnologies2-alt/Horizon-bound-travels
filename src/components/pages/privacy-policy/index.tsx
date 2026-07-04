import BreadCrumb from "@/components/common/BreadCrumb"
import FooterThree from "@/layouts/footers/FooterThree"
import HeaderThree from "@/layouts/headers/HeaderThree"
import PrivacyPolicyArea from "./PrivacyPolicyArea"

const PrivacyPolicy = () => {
   return (
      <>
         <HeaderThree />
         <main>
            <BreadCrumb title="Privacy Policy" sub_title="Privacy Policy" />
            <PrivacyPolicyArea />
         </main>
         <FooterThree />
      </>
   )
}

export default PrivacyPolicy;
