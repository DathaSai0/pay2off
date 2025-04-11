import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import defaultImage from "../../../assets/Images/avatar_default.jpg";
const TestimonialCard = () => {
  return (
    <div
      style={{
        minWidth: "1000px",
        borderRadius: "30px",
        backgroundColor: "#FFFFFF",
        margin: "50px",
        paddingBottom: "48px",
        display: "flex",
      }}
    >
      <span
        style={{
          fontSize: "46px",
          color: "rgb(163 59 0 / 29%)",
          transform: "rotate(-90deg)",
          position: "relative",
          left: "100px",
        }}
      >
        Testimonial
      </span>

      <div
        style={{
          flexGrow: 1,
        }}
      >
        <div
          style={{
            backgroundColor: "#A33B00",
            borderBottomLeftRadius: "30px",
            borderTopRightRadius: "30px",
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <h1
            style={{
              fontSize: "20px",
              fontWeight: "400",
              color: "#FFFFFF",
            }}
          >
            VENDOR REVIEW
          </h1>
          <img
            src={defaultImage} // Replace with actual image URL
            alt="User Avatar"
            style={{
              width: "90px",
              height: "90px",
              border: "1px solid #F4E1D8",
              borderRadius: "50%",
              position: "relative",
              top: "40px",
            }}
          />
          <div style={{}}>
            <h3
              style={{
                color: "#FFFFFF",
                fontSize: "26px",
                fontWeight: "700",
              }}
            >
              Lekha R
            </h3>
            <p
              style={{
                fontSize: "20px",
                color: "#FFFFFF",
                fontWeight: "500",
              }}
            >
              Peacock designers
            </p>
          </div>
        </div>

        <div
          style={{
            marginTop: "100px",
            width: "95%",
          }}
        >
          <p
            style={{
              fontSize: "18px",
              fontWeight: "400",
              color: "#525252",
              lineHeight: "30px",
              marginBottom: "16p",
            }}
          >
            <FaQuoteLeft
              color="#525252"
              style={{
                marginRight: "12px",
              }}
            />
            As a small business owner, I was initially hesitant about joining a
            digital platform. However, teaming up with Pay2off has been one of
            the best decisions for our shop. Their user-friendly interface made
            it effortless to manage our promotions, and the insights provided
            allowed us to tailor our offerings effectively. The exposure and
            engagement we've gained through Pay2off have truly exceeded our
            expectations, helping us build lasting relationships with our
            customers.
            <FaQuoteRight
              color="#525252"
              style={{
                marginLeft: "12px",
              }}
            />
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
