import PaymentPolicy from "@/components/pages/payment-policy";
import Wrapper from "@/layouts/Wrapper";

export const metadata = {
  title: "Payment Policy - Horizon Bound Travels",
};

const page = () => {
  return (
    <Wrapper>
      <PaymentPolicy />
    </Wrapper>
  )
}

export default page;
