import React, { useState } from "react";
import { FaStar, FaClock, FaPercent } from "react-icons/fa";
import "./styles/style.scss";
import { RiDiscountPercentLine } from "react-icons/ri";
import DialogModal from "../DialogModal/Index";
import OfferModal from "./OfferModal";

const CouponCard = ({ coupon }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openRequestModal = () => {
    setIsModalOpen(true);
  };

  return (
    <>
      <div className="discount-card" onClick={() => setIsModalOpen(true)}>
        <div className="card-top">
          {/* <div className="shop-name">
            Amarachicken Hindustan Bidding and Furniture
            <span className="tag">Meat Shop</span>
          </div> */}
          <div className="shop-name" data-name={coupon?.shop_name}>
            <span className="tag">{coupon?.categoryNames?.[0]?.name}</span>
          </div>
          <div className="rating">
            <FaStar className="star-icon" />
            <span>{coupon?.ratings}</span>
          </div>
        </div>

        <div className="offer">
          <RiDiscountPercentLine className="percent-icon" />

          <div className="offer-text">
            <strong>{coupon?.coupon_title}</strong>
            <p>{coupon?.coupon_sub_title}</p>
          </div>
        </div>

        <div className="card-bottom">
          <div className="time">
            <FaClock className="clock-icon" />
            <span>{coupon?.expired_date_time}</span>
          </div>
          <button className="more-details">More Details</button>
        </div>
      </div>

      {isModalOpen && <OfferModal onClose={() => setIsModalOpen(false)} />}
    </>
  );
};

export default CouponCard;
