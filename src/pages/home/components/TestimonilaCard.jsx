import React from "react";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import defaultImage from "../../../assets/Images/testimonialImage.png";
import testimonialText from "../../../assets/Images/testimonialCard.png";
// import "./TestimonialCard.scss";

const TestimonialCard = () => {
  const name = "Lekha R";
  const text2 = "Peacock designers";
  return (
    <div
      className="testimonial-card"
      style={{
        height: "350px",
      }}
    >
      <img src={testimonialText} className="testimonial-text" />

      <div className="testimonial-content">
        <div className="testimonial-header">
          <h1 className="testimonial-tag">VENDOR REVIEW</h1>
          <img
            src={defaultImage}
            alt="User Avatar"
            className="testimonial-avatar"
          />
          <div className="testimonial-user-details">
            <h3>{name}</h3>
            <p>{text2}</p>
          </div>
        </div>

        <div className="testimonial-body">
          <p>
            <FaQuoteLeft className="quote-icon left" />
            As a small business owner, I was initially hesitant about joining a
            digital platform. However, teaming up with Pay2off has been one of
            the best decisions for our shop. Their user-friendly interface made
            it effortless to manage our promotions, and the insights provided
            allowed us to tailor our offerings effectively. The exposure and
            engagement we've gained through Pay2off have truly exceeded our
            expectations, helping us build lasting relationships with our
            customers.
            <FaQuoteRight className="quote-icon right" />
          </p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;

{
  /* <div className="testimonial-card">
<div className="testimonial-header">
  <div className="testimonial-tag">VENDOR REVIEW</div>
  <div className="testimonial-user">
    <img
      src={defaultImage} // Replace with actual image URL
      alt="User Avatar"
      className="testimonial-avatar"
    />
    <div className="testimonial-user-details">
      <h3>Lekha R</h3>
      <p>Peacock designers</p>
    </div>
  </div>
</div>

<div className="testimonial-body">
  <div className="testimonial-label">Testimonial</div>
  <div className="testimonial-content">
    <FaQuoteLeft className="quote-icon left" />
    <p>
      As a small business owner, I was initially hesitant about joining a
      digital platform. However, teaming up with Pay2off has been one of
      the best decisions for our shop. Their user-friendly interface made
      it effortless to manage our promotions, and the insights provided
      allowed us to tailor our offerings effectively. The exposure and
      engagement we've gained through Pay2off have truly exceeded our
      expectations, helping us build lasting relationships with our
      customers.
    </p>
    <FaQuoteRight className="quote-icon right" />
  </div>
</div>
</div> */
}
