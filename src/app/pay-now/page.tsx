import PayNow from "@/components/pay-now";
import Wrapper from "@/layouts/Wrapper";

export const metadata = {
  title: "Pay Now - Official Bank Account Details | Horizon Bound Travels",
  description:
    "Official bank details and payment portal for Horizon Bound Travels. Secure bank transfer via Central Bank of India & UPI payments.",
};

const page = () => {
  return (
    <Wrapper>
      <PayNow />
    </Wrapper>
  );
};

export default page;
