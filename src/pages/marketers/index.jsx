import React from "react";
import { marketerBenefits, marketingHowItWorkList } from "./constants/constant";
import defaultImage from "../../assets/Images/exampleImage.png";
import PartnerCard from "../../components/partner";
import "./styles/style.scss";
import HowItWorks from "../../components/howItWorks";

function Marketers() {
  return (
    <div>
      <h1 className="partner-with-pay2off">
        Why should i join a Marketing Executive with Pay2off?
      </h1>
      <div className="marketer-card-container">
        {marketerBenefits?.map((card, i) => (
          <PartnerCard
            key={i}
            image={defaultImage}
            title={card?.title}
            content={card?.description}
          />
        ))}
      </div>

      <h1 className="how-it-work-text">How it works?</h1>

      <div className="vendor-how-it-work-container">
        <HowItWorks
          title={"Marketing Executive at Pay2off"}
          subTitle={
            "As a Marketing Executive at Pay2off, you'll be at the forefront of driving impactful campaigns and connecting local businesses with eager shoppers through innovative strategies."
          }
          contentList={marketingHowItWorkList}
        />
      </div>
    </div>
  );
}

export default Marketers;
