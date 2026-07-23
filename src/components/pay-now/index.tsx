import BreadCrumb from "@/components/common/BreadCrumb";
import FooterThree from "@/layouts/footers/FooterThree";
import HeaderThree from "@/layouts/headers/HeaderThree";
import PayNowArea from "./PayNowArea";

const PayNow = () => {
  return (
    <>
      <HeaderThree />
      <main>
        <BreadCrumb title="Official Bank Payment" sub_title="Pay Now" />
        <PayNowArea />
      </main>
      <FooterThree />
    </>
  );
};

export default PayNow;
