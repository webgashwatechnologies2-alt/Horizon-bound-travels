import BreadCrumb from "@/components/common/BreadCrumb"
import FooterThree from "@/layouts/footers/FooterThree"
import HeaderThree from "@/layouts/headers/HeaderThree"
import VisionmissionArea from "./VisionmissionArea"

const VisionMissionPage = () => {
   return (
      <>
         <HeaderThree />
         <main>
            <BreadCrumb title="Vision And Mission" sub_title="Vision And Mission" />
            <VisionmissionArea />
         </main>
         <FooterThree />
      </>
   )
}

export default VisionMissionPage;