import React from "react";
import { FaStar, FaClock, FaPercent } from "react-icons/fa";
import "./CouponCard.scss";
import { RiDiscountPercentLine } from "react-icons/ri";

const CouponCard = () => {
  return (
    <div className="discount-card">
      <div className="card-top">
        <div className="shop-name">
          Amarachicken <span className="tag">Meat Shop</span>
        </div>
        <div className="rating">
          <FaStar className="star-icon" />
          <span>4.9</span>
        </div>
      </div>

      <div className="offer">
        <RiDiscountPercentLine className="percent-icon" />

        <div className="offer-text">
          <strong>50% OFF Upto ₹100</strong>
          <p>Save more with coupon and offers</p>
        </div>
      </div>

      <div className="card-bottom">
        <div className="time">
          <FaClock className="clock-icon" />
          <span>5h 30m</span>
        </div>
        <button className="more-details">More Details</button>
      </div>
    </div>
  );
};

export default CouponCard;
