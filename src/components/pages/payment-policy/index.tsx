import BreadCrumb from "@/components/common/BreadCrumb"
import FooterThree from "@/layouts/footers/FooterThree"
import HeaderThree from "@/layouts/headers/HeaderThree"
import PaymentPolicyArea from "./PaymentPolicyArea"

const PaymentPolicy = () => {
   return (
      <>
         <HeaderThree />
         <main>
            <BreadCrumb title="Payment Policy" sub_title="Payment Policy" />
            <PaymentPolicyArea />
         </main>
         <FooterThree />
      </>
   )
}

export default PaymentPolicy;
