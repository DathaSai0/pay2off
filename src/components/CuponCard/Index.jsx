import React, { useState } from "react";
import { FaStar, FaClock, FaPercent } from "react-icons/fa";
import "./styles/style.scss";
import { RiDiscountPercentLine } from "react-icons/ri";
import DialogModal from "../DialogModal/Index";
import OfferModal from "./OfferModal";

const CouponCard = ({
  name,
  categoryName,
  description,
  ratings,
  subDescription,
  time,
  store,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openRequestModal = () => {
    setIsModalOpen(true);
  };

  return (
    <>
      <div
        className="discount-card"
        onClick={() => setIsModalOpen(true)}
        style={{ maxWidth: store && "400px", minHeight: store && "0px" }}
      >
        {!store && (
          <div className="card-top">
            {/* <div className="shop-name">
            Amarachicken Hindustan Bidding and Furniture
            <span className="tag">Meat Shop</span>
          </div> */}

            <div className="shop-name" data-name={name}>
              <span className="tag">{categoryName}</span>
            </div>
            <div className="rating">
              <FaStar className="star-icon" />
              <span>{ratings}</span>
            </div>
          </div>
        )}

        <div className="offer">
          <RiDiscountPercentLine className="percent-icon" />

          <div className="offer-text">
            <strong>{description}</strong>
            <p>{subDescription}</p>
          </div>
        </div>

        <div className="card-bottom">
          <div className="time">
            <FaClock className="clock-icon" />
            <span>{time}</span>
          </div>
          <button className="more-details">More Details</button>
        </div>
      </div>

      {isModalOpen && (
        <OfferModal
          onClose={() => setIsModalOpen(false)}
          store={store}
          {...{
            name,
            categoryName,
            description,
            ratings,
            subDescription,
            time,
          }}
        />
      )}
    </>
  );
};

export default CouponCard;
