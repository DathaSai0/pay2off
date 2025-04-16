import React from "react";
import "./styles/style.scss";
import { aboutPay2offText } from "./constants/constants";

function AboutUs() {
  return (
    <div className="about-us-root">
      {aboutPay2offText?.map((data, index) => (
        <h1 key={index} className="about-us-description">
          {data}
        </h1>
      ))}

      <h1 className="about-us-header">Contact Us</h1>

      <h1 className="about-us-text">
        If users have any questions about this Privacy Policy or the practices
        of the app, please contact us
      </h1>

      <h1 className="about-us-links">
        <a
          href="mailto:business@pay2off.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          business@pay2off.com /
        </a>
        <a href="tel:+919791800900" target="_blank" rel="noopener noreferrer">
          +91 9791800900.
        </a>
      </h1>
    </div>
  );
}

export default AboutUs;
