// components/FalseHeaderSection.jsx
import React from "react";
import { IoMdHome } from "react-icons/io";
import "../styles/style.scss";

const DynamicSection = ({ currentLink }) => {
  return (
    <section className="false-header-section">
      <div className="header_content">
        {currentLink === "FAQ" && (
          <h2>
            Frequently Asked Questions
            <span className="header_primary">(FAQs)</span>
          </h2>
        )}

        {[
          "Blog",
          "Contact Us",
          "About Us",
          "Terms & Conditions",
          "Privacy Policy",
          "Refund Policy",
        ].includes(currentLink) && <h2>{currentLink}</h2>}

        <div className="breadcrumb">
          <a href="/">
            <IoMdHome size={20} />
            <span>Home</span>
          </a>
          <span>| {currentLink}</span>
        </div>
      </div>
    </section>
  );
};

export default DynamicSection;
