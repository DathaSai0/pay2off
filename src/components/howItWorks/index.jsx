import React from "react";
import { howItWorkList } from "./constants/constant";

function HowItWorks() {
  return (
    <div
      style={{
        backgroundColor: "#FFFFFF",
        // width: "1070px",
        width: "60%",
        // height: "1000px",
        border: "1px solid #E0E0E0",
        padding: "50px",
      }}
    >
      <h1
        style={{
          fontSize: "20px",
          fontWeight: "700",
        }}
      >
        Dear Valued Vendor, Discover the Magic of Pay2off: Here’s How It Works!
      </h1>
      <p
        style={{
          color: "#6F6F6F",
          fontSize: "15px",
          fontWeight: "400",
          marginTop: "12px",
        }}
      >
        Ready to boost your business and open doors to new opportunities?
        Collaborating with Pay2off, the top shopping app connecting customers
        with local discounts and coupons, can help elevate your sales,
        visibility, and customer relationships. Find new customers, increase
        your sales, and strengthen your ties within the local community.
      </p>

      {howItWorkList?.map((curr) => (
        <>
          <p
            style={{
              color: "#A33B00",
              fontSize: "16px",
              fontWeight: "500",
              marginTop: "30px",
            }}
          >
            {curr?.step}
          </p>
          <h1
            style={{
              fontSize: "20px",
              fontWeight: "700",
              marginTop: "8px",
            }}
          >
            {curr?.mainTitle}
          </h1>

          {curr?.content?.map((data) => (
            <>
              <p
                style={{
                  color: "#6F6F6F",
                  fontSize: "15px",
                  fontWeight: "400",
                  margin: "12px 0px",
                }}
              >
                {data?.title}
              </p>
              {data?.list?.map((list) => (
                <li
                  style={{
                    color: "#6F6F6F",
                    fontSize: "15px",
                    fontWeight: "400",
                    margin: "4px 12px",
                  }}
                >
                  {list}
                </li>
              ))}
            </>
          ))}
        </>
      ))}
    </div>
  );
}

export default HowItWorks;
