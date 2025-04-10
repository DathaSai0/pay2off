import React from "react";
import { benefits } from "./constants/constant";
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
        {benefits?.map((card) => (
          <PartnerCard
            image={defaultImage}
            title={card?.title}
            content={card?.description}
          />
        ))}
      </div>

      <h1 className="how-it-work-text">How it works?</h1>

      <div className="vendor-how-it-work-container">
        <HowItWorks />
      </div>
    </div>
  );
}

export default Vendors;
