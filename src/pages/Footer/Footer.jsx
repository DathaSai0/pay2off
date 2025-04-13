import "./Footer.scss";
import Logo from "../../assets/Images/Pay2off Logo 1.png";
import AppStore from "../../assets/Images/AppStore.png";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-section logo-section">
          <div className="logo">
            <img src={Logo} alt="Pay2off" className="footer-logo" />
            <span>Pay2Off</span>
          </div>
          <p>
            Pay2off – Say hello to effortless savings right at your fingertips!
            your go-to app for exclusive deals and discounts from nearby shops.
            Join us as we unveil a brand-new way to shop and save! Say goodbye
            to missing out on incredible deals from local shops.
          </p>
        </div>

        <div className="footer-section">
          <h4>Company</h4>
          <ul>
            <li>About Us</li>
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
            <li>Refund Policy</li>
            <li>
              <a href="/FAQs">FAQ</a>
            </li>
            <li>Blog</li>
            <li>
              <a href="/contact">Contact Us</a>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Contact Us</h4>
          <p>
            <a href="tel:+919791800900">+91 9791800900</a>
          </p>
          <p>
            <a href="mailto:pay2off1@gmail.com">pay2off1@gmail.com</a>
          </p>

          <h4>Social Media</h4>
          <div className="social-icons">
            <a
              href="https://www.facebook.com/people/Pay2off/61555579800818/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF style={{ backgroundColor: "#1877F2" }} />
            </a>
            <a
              href="https://www.instagram.com/pay2off/?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram
                style={{
                  background:
                    "radial-gradient(circle at 30% 107%, #fdf497 0%,#fdf497 5%,#fd5949 45%,#d6249f 60%,#285AEB 90%)",
                }}
              />
            </a>
            <a
              href="https://x.com/pay2off?s=08"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter style={{ backgroundColor: "#1DA1F2" }} />
            </a>
            <a
              href="https://www.youtube.com/@PAY2OFF"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaYoutube style={{ backgroundColor: "#FF0000" }} />
            </a>
          </div>
        </div>

        <div className="footer-section">
          <h4>FIND OUR APPS AT</h4>
          <p>
            DOWNLOAD THE <strong>USER</strong> APP NOW!
          </p>
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

      <div className="footer-bottom">
        <p>Pay2off © 2024 - All Rights Reserved</p>
        <span className="span_line">|</span>
        <p>
          Powered by{" "}
          <a href="https://solutionchamps.com" target="_blank" rel="noreferrer">
            SolutionChamps Technologies Pvt. Ltd.
          </a>
        </p>
      </div>
    </footer>
  );
};
export default Footer;
