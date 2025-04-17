// components/TrueHeaderSection.jsx
import React from "react";
import "../styles/style.scss";

const HomePageSection = ({ headerText, searchIcon, frameImage }) => {
  return (
    <section className="true-header-section">
      <div className="header_content">
        <h2>
          {headerText?.title}
          <span className="header_primary"> {headerText?.subtitle}</span>{" "}
          {headerText?.endText}
        </h2>
        <div>
          <img src={searchIcon} alt="Search Icon" />
        </div>
      </div>
      <div className="dynamic_banner">
        <img src={frameImage} alt="Frame" />
      </div>
    </section>
  );
};

export default HomePageSection;
