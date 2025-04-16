import { payoffTermsAndConditions } from "./constants/constants";
import ReusableTermsAndPrivacyPolicyCard from "../../components/ReusableTermsPolicyCard";

function TermsAndConditions() {
  return (
    <ReusableTermsAndPrivacyPolicyCard
      title={
        "As a valued Marketing Executive, your role is crucial in expanding our vendor base and contributing to the success of our platform. Before you embark on this exciting journey, please review and adhere to the terms and conditions that govern your engagement with Pay2off:"
      }
      content={payoffTermsAndConditions}
    />
  );
}

export default TermsAndConditions;
