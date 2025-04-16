import React from "react";

import "./styles/style.scss";

function ReusableTermsAndPrivacyPolicyCard({ title, content }) {
  return (
    <div className="terms-and-cond-policy-root">
      <h1 className="terms-and-cond-policy-text">{title}</h1>
      {content?.map((data, i) => (
        <div key={i}>
          <h1
            style={{
              fontWeight: "700",
              fontSize: "20px",
              marginBottom: "12px",
            }}
          >
            {data?.subTitle}
          </h1>
          {data?.description?.map((desc) => (
            <p key={desc} className="terms-and-cond-policy-text">
              {desc}
            </p>
          ))}
        </div>
      ))}
    </div>
  );
}

export default ReusableTermsAndPrivacyPolicyCard;
