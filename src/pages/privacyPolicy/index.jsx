import { payoffPrivacyAndPolicy } from "./constants/constants";
import ReusableTermsAndPrivacyPolicyCard from "../../components/ReusableTermsPolicyCard";

function PrivacyPolicy() {
  return (
    <ReusableTermsAndPrivacyPolicyCard
      title={
        "Welcome to Pay2off's Privacy Policy! We highly value your trust and are committed to protecting your privacy. Please take the time to review our policies regarding the collection, use, and safeguarding of your information."
      }
      content={payoffPrivacyAndPolicy}
    />
  );
}

export default PrivacyPolicy;
