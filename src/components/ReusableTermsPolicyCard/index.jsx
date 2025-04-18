import React from "react";

import "./styles/style.scss";

function ReusableTermsAndPrivacyPolicyCard({ title, content, contact }) {
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

      {contact && (
        <>
          <h1 className="about-us-header">Contact Us</h1>

          <h1 className="about-us-text">
            If users have any questions about this Privacy Policy or the
            practices of the app, please contact us
          </h1>

          <h1 className="about-us-links">
            <a
              href="mailto:business@pay2off.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              business@pay2off.com /
            </a>
            <a
              href="tel:+919791800900"
              target="_blank"
              rel="noopener noreferrer"
            >
              +91 9791800900.
            </a>
          </h1>
        </>
      )}
    </div>
  );
}

export default ReusableTermsAndPrivacyPolicyCard;
