// components/FalseHeaderSection.jsx
import React from "react";
import { IoMdHome } from "react-icons/io";
import "../styles/style.scss";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setCurrentLink } from "../../../Redux/pageTypeSlice";

const DynamicSection = ({ currentLink }) => {
  const dispatch = useDispatch();

  const handleNavigation = (linkName) => {
    // Use the setFooterLink action from your slice
    dispatch(setCurrentLink(linkName));
  };
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
          <Link to="/" onClick={() => handleNavigation("Home")}>
            {/* <a> */}
            <IoMdHome size={20} />
            <span>Home</span>
            {/* </a> */}
          </Link>
          <span>| {currentLink}</span>
        </div>
      </div>
    </section>
  );
};

export default DynamicSection;
