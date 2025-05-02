import React from "react";
import { benefits, vendorsHowItWorkList } from "./constants/constant";
import defaultImage from "../../assets/Images/exampleImage.png";
import PartnerCard from "../../components/partner";
import "./styles/style.scss";
import HowItWorks from "../../components/howItWorks";

function Vendors() {
  return (
    <div>
      <h1 className="partner-with-pay2off">
        Why should you partner with Pay2off
      </h1>
      <div className="vendor-card-container">
        {benefits?.map((card, i) => (
          <PartnerCard
            key={i}
            image={card?.image || defaultImage}
            title={card?.title}
            content={card?.description}
          />
        ))}
      </div>

      <h1 className="how-it-work-text">How it works?</h1>

      <div className="vendor-how-it-work-container">
        <HowItWorks
          title={
            "Dear Valued Vendor, Discover the Magic of Pay2off: Here’s How It Works!"
          }
          subTitle={
            " Ready to boost your business and open doors to new opportunities? Collaborating with Pay2off, the top shopping app connecting customer with local discounts and coupons, can help elevate your sales, visibility, and customer relationships. Find new customers, increase your sales, and strengthen your ties within the local community."
          }
          contentList={vendorsHowItWorkList}
        />
      </div>
    </div>
  );
}

export default Vendors;
