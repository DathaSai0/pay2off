// components/TrueHeaderSection.jsx
import React from "react";
import "../styles/style.scss";
import { useNavigate } from "react-router-dom";

const HomePageSection = ({ headerText, searchIcon, frameImage }) => {
  const navigate = useNavigate();

  const handleImageClick = () => {
    navigate("/categorySearch");
  };
  return (
    <section className="true-header-section">
      <div className="header_content">
        <h2>
          {headerText?.title}
          <span className="header_primary"> {headerText?.subtitle}</span>{" "}
          {headerText?.endText}
        </h2>
        <div onClick={handleImageClick} style={{ cursor: "pointer" }}>
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
