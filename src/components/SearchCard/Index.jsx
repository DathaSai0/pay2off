import React from "react";
import "./styles/style.scss";
import image from "../../assets/Images/adv2Image.png";
import ConfigAPIURL from "../../config/ConfigAPIURL";

const SearchCardCategory = ({ data }) => {
  return (
    <div className="search-card">
      <div className="image-container">
        <img src={`https://core.pay2off.com/${data?.category_img}`} alt="Img" />
      </div>
      <div className="content">
        <h2>{data?.category_name}</h2>
        <p>Category</p>
      </div>
    </div>
  );
};

export default SearchCardCategory;
