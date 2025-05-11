import React from "react";
// import "./OfferModal.scss";
import "./styles/style.scss";
import DialogModal from "../DialogModal/Index";
import AppStore from "../../assets/Images/AppStore.png";
import { FaClock, FaStar } from "react-icons/fa";
import { RiDiscountPercentLine } from "react-icons/ri";
import { IoIosCloseCircleOutline, IoMdClose } from "react-icons/io";
import { BiCalendar } from "react-icons/bi";

const OfferModal = ({
  onClose,
  name,
  categoryName,
  description,
  ratings,
  subDescription,
  time,
  store,
}) => {
  const handleOverlayClick = () => {
    onClose();
  };
  const handleContentClick = (e) => {
    e.stopPropagation(); // Prevent the modal itself from closing
  };
  return (
    <div className="modal-overlay" id="offerModal" onClick={handleOverlayClick}>
      <div
        style={{
          position: "relative",
        }}
      >
        <div className="close_Icon" onClick={onClose} style={{}}>
          <IoMdClose size={24} />
        </div>
        <div className="modal-bottom" onClick={handleContentClick}>
          {!store && (
            <div className="card-topSection">
              <div className="shop-name">
                {name} <span className="tag">{categoryName}</span>
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
              <BiCalendar className="clock-icon" />
              <span>{time}</span>
            </div>
          </div>
        </div>

        <div
          className="modal-bottom"
          onClick={handleContentClick}
          style={{
            marginTop: "8px",
          }}
        >
          <div className="bottom_color">
            TO CLAIM OFFER DOWNLOAD THE{" "}
            <span style={{ color: "#F15700" }}>USER APP</span> NOW!
          </div>
          <div className="store-buttons">
            <a
              href="https://apps.apple.com/us/app/pay2off/id6473989358"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={AppStore} alt="App Store" />
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=com.pay2off.enduser"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                alt="Google Play"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OfferModal;
