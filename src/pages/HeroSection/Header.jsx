import { useState } from "react";
import Logo from "../../assets/Images/Pay2off Logo 1.png";
import { handleLocateMe } from "../../utilis/location";
import "./styles/Header.scss";
import DialogModal from "../../components/DialogModal/Index";
import searchIcon from "../../assets/Images/searchIcon.png";
import userFrame from "../../assets/Images/userFrame.png";
import vendorFrame from "../../assets/Images/vendorFrame.png";
import marketerFrame from "../../assets/Images/marketFrame.png";
import { IoMdHome } from "react-icons/io";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

const NavBar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  // const location = useLocation();

  const openLocationModal = () => {
    setIsModalOpen(true);
  };
  const pageType = useSelector((state) => state.pageType.type);
  const currentLink = useSelector((state) => state.pageType.currentLink);
  let headerText = {
    title: "Get Discounts & Offers",
    subtitle: "on Everything",
    endText: "",
  };
  let frameImage;

  switch (pageType) {
    case "vendor":
      frameImage = vendorFrame;
      headerText = {
        title: "Attract Costumers &",
        subtitle: "Stay Busy",
      };
      break;
    case "marketer":
      frameImage = marketerFrame;
      headerText = {
        title: "Onboard Vendors &",
        subtitle: "Get Rewards",
      };
      break;
    case "user":
    default:
      frameImage = userFrame;
      headerText = {
        title: "Get ",
        subtitle: "Discounts & Offers",
        endText: "on Everything",
      };
  }
  // const isTrue = location.pathname === "/";
  return (
    <>
      <div
        className={` ${
          currentLink !== "Home" ? "faq_background" : "home_banner"
        }`}
      >
        <nav className="header">
          <div className="content-row">
            <div className="logo">
              <img src={Logo} />
              <span>Pay2off</span>
            </div>

            <div className="location-wrapper">
              <div className="location_desk" onClick={openLocationModal}>
                Coimbatore, Tamil Nadu 641105, India
              </div>

              <button className="locate-button" onClick={handleLocateMe}>
                Locate Me
              </button>
            </div>
          </div>

          <div className="location_mobile" onClick={openLocationModal}>
            Coimbatore, Tamil Nadu 641105, India
          </div>
        </nav>

        {currentLink === "Home" ? (
          <section>
            <div className="header_content">
              <h2>
                {headerText?.title}
                <span className="header_primary">
                  {" "}
                  {headerText?.subtitle}
                </span>{" "}
                {headerText?.endText}
              </h2>
              <div>
                <img src={searchIcon} />
              </div>
            </div>
            <div className="dynamic_banner">
              <img src={frameImage} />
            </div>
          </section>
        ) : (
          <>
            <div className="header_content">
              {currentLink === "FAQ" && (
                <h2>
                  Frequently Asked Questions
                  <span className="header_primary">(FAQs)</span>
                </h2>
              )}
              {currentLink === "Blog" && <h2>Blog</h2>}
              {currentLink === "Contact Us" && <h2>{currentLink}</h2>}
              {currentLink === "About Us" && <h2>{currentLink}</h2>}
              {currentLink === "Terms & Conditions" && <h2>{currentLink}</h2>}
              {currentLink === "Privacy Policy" && <h2>{currentLink}</h2>}
              {currentLink === "Refund Policy" && <h2>{currentLink}</h2>}

              <div className="breadcrumb">
                <a href="/">
                  <IoMdHome size={20} />
                  <span>Home</span>
                </a>
                <span>| {currentLink}</span>
              </div>
            </div>
          </>
        )}
      </div>
      <DialogModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <div className="location-modal">
          <div className="location-title">Setup your Location</div>

          <div className="location-search">
            <span className="search-icon">🔍</span>
            <input
              type="text"
              placeholder="Area Codes, Cities, or Country wide"
            />
          </div>

          <div className="use-current-location" onClick={handleLocateMe}>
            <span className="location-icon">📍</span>
            <div>
              <p className="use-text">Use Current Location</p>
              <p className="desc-text">Access Location to Services Better</p>
            </div>
          </div>
        </div>
      </DialogModal>
    </>
  );
};
export default NavBar;
