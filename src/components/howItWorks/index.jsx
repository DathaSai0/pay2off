import React from "react";
import { howItWorkList } from "./constants/constant";
import "./styles/style.scss";

function HowItWorks() {
  return (
    <div className="how-it-works-container">
      <h1 className="heading">
        Dear Valued Vendor, Discover the Magic of Pay2off: Here’s How It Works!
      </h1>
      <p className="description">
        Ready to boost your business and open doors to new opportunities?
        Collaborating with Pay2off, the top shopping app connecting customers
        with local discounts and coupons, can help elevate your sales,
        visibility, and customer relationships. Find new customers, increase
        your sales, and strengthen your ties within the local community.
      </p>

      {howItWorkList?.map((curr, index) => (
        <div key={index}>
          <p className="step">{curr?.step}</p>
          <h1 className="main-title">{curr?.mainTitle}</h1>

          {curr?.content?.map((data, i) => (
            <div key={i}>
              <p className="content-title">{data?.title}</p>
              <ul>
                {data?.list?.map((listItem, idx) => (
                  <li key={idx} className="list-item">
                    {listItem}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default HowItWorks;
