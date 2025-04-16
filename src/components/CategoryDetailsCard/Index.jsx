import React, { useState } from "react";
import "./styles/style.scss";
import { BiHeart } from "react-icons/bi";
import { FaCrown, FaStar } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import logo from "../../assets/Images/Pay2off Logo 1.png";

const CategoryDetailsCard = ({
  //   logo,
  //   category,
  name,
  address,
  rating = 0,
  distance,
  count,
  isFavorite = false,
}) => {
  const [favorite, setFavorite] = useState(isFavorite);

  const toggleFavorite = () => {
    setFavorite(!favorite);
  };

  return (
    <div className="business-card">
      <div className="business-card__logo-container">
        <div className="business-card__crown">
          <FaCrown className="crown-icon" />
        </div>
        <div className="business-card__logo">
          {logo && <img src={logo} alt={`${name} logo`} />}
        </div>
      </div>

      <div className="business-card__info">
        {name && <h3 className="business-card__name">{name}</h3>}
        {address && <p className="business-card__address">{address}</p>}
        {false && <p className="business_timing">Open's Daily - 8am to 10pm</p>}
        <div className="business-card__details">
          <div className="business-card__detail">
            <FaStar className="icon star" />
            <span>{rating}</span>
          </div>

          {distance && (
            <div className="business-card__detail">
              <FaLocationDot className="icon map" />
              <span>{distance}</span>
            </div>
          )}

          {count !== undefined && (
            <div className="business-card__detail">
              <span className="business-card__count">{count}</span>
            </div>
          )}
        </div>
      </div>

      <button
        className="business-card__favorite"
        onClick={toggleFavorite}
        aria-label={favorite ? "Remove from favorites" : "Add to favorites"}
      >
        <BiHeart className={`icon heart ${favorite ? "favorite" : ""}`} />
      </button>
    </div>
  );
};

export default CategoryDetailsCard;
