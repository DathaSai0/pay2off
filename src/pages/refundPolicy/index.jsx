import { payoffRefundAndPolicy } from "./constants/constants";
import ReusableTermsAndPrivacyPolicyCard from "../../components/ReusableTermsPolicyCard";

function RefundPolicy() {
  return (
    <ReusableTermsAndPrivacyPolicyCard
      title={""}
      content={payoffRefundAndPolicy}
      contact={true}
    />
  );
}

export default RefundPolicy;
