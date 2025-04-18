import React from "react";
import "./styles/style.scss";
import image from "../../assets/Images/adv2Image.png";

const SearchCardCategory = () => {
  return (
    <div className="search-card">
      <div className="image-container">
        <img src={image} alt="Health and wellness equipment" />
      </div>
      <div className="content">
        <h2>Health & Wellness</h2>
        <p>Category</p>
      </div>
    </div>
  );
};

export default SearchCardCategory;
