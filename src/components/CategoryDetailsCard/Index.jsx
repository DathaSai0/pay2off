import React, { useState } from "react";
import "./styles/style.scss";
import { BiHeart } from "react-icons/bi";
import { FaCrown, FaStar } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

const CategoryDetailsCard = ({
  logo,
  //   category,
  name,
  address,
  rating,
  distance,
  count,
  isFavorite = false,
  showContent,
  id,
}) => {
  const [favorite, setFavorite] = useState(isFavorite);

  const toggleFavorite = () => {
    setFavorite(!favorite);
  };

  return (
    <div
      className="business-card"
      style={{
        width: showContent && "100%",
        maxWidth: showContent && "100%",
        padding: showContent && "1rem",
      }}
    >
      <div className="business-card__logo-container">
        {!showContent && (
          <div className="business-card__crown">
            <FaCrown className="crown-icon" />
          </div>
        )}

        <div className="business-card__logo">
          {logo && (
            <img
              src={`https://core.pay2off.com/${logo}`}
              alt={`${name} logo`}
            />
          )}
        </div>
      </div>

      <div className="business-card__info">
        {name && <h3 className="business-card__name">{name}</h3>}
        {address && <p className="business-card__address">{address}</p>}
        {showContent && (
          <p className="business_timing">Open's Daily - 8am to 10pm</p>
        )}
        <div className="business-card__details">
          <div className="business-card__detail">
            <FaStar className="icon star" />
            <span>{rating ?? 0}</span>
          </div>

          {distance && (
            <div className="business-card__detail">
              <FaLocationDot className="icon map" />
              <span>{`${distance?.toFixed(2)} kms`}</span>
            </div>
          )}

          {count !== undefined && (
            <div className="business-card__detail">
              <span className="business-card__count">{count}</span>
            </div>
          )}
        </div>
      </div>

      {!showContent && (
        <button
          className="business-card__favorite"
          onClick={toggleFavorite}
          aria-label={favorite ? "Remove from favorites" : "Add to favorites"}
        >
          <BiHeart className={`icon heart ${favorite ? "favorite" : ""}`} />
        </button>
      )}
    </div>
  );
};

export default CategoryDetailsCard;
