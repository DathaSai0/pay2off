import { useEffect, useState } from "react";
import Logo from "../../assets/Images/Pay2off Logo 1.png";
import { handleLocateMe } from "../../utilis/location";
import "./styles/style.scss";
import DialogModal from "../../components/DialogModal/Index";
import searchIcon from "../../assets/Images/searchIcon.png";
import userFrame from "../../assets/Images/userFrame.png";
import vendorFrame from "../../assets/Images/vendorFrame.png";
import marketerFrame from "../../assets/Images/marketFrame.png";
import { IoMdHome } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { LuLocateFixed } from "react-icons/lu";
import { setCurrentLink } from "../../Redux/pageTypeSlice";
import HomePageSection from "./Components/HomePageSection";
import DynamicSection from "./Components/DynamicSection";
const NavBar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  // const location = useLocation();
  const openLocationModal = () => {
    setIsModalOpen(true);
  };
  const dispatch = useDispatch();
  const pageType = useSelector((state) => state.pageType.type);
  const currentLink = useSelector((state) => state.pageType.currentLink);
  useEffect(() => {
    const savedLink = localStorage.getItem("currentLink");
    if (savedLink) {
      dispatch(setCurrentLink(savedLink));
    }
  }, [dispatch]);
  const bannerTypeClass =
    currentLink !== "Home"
      ? `faq_background ${pageType}`
      : `home_banner ${pageType}`;
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
  const isTrue = location.pathname === "/";
  return (
    <>
      <div
        // className={` ${
        //   currentLink !== "Home" ? "faq_background" : "home_banner"
        // }`}
        className={bannerTypeClass}
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
                <LuLocateFixed fontSize={20} />
                Locate Me
              </button>
            </div>
          </div>

          <div className="location_mobile" onClick={openLocationModal}>
            Coimbatore, Tamil Nadu 641105, India
          </div>
        </nav>

        {isTrue ? (
          <HomePageSection
            headerText={headerText}
            searchIcon={searchIcon}
            frameImage={frameImage}
          />
        ) : (
          <DynamicSection currentLink={currentLink} />
        )}
        {/* {isTrue ? (
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

              {[
                "Blog",
                "Contact Us",
                "About Us",
                "Terms & Conditions",
                "Privacy Policy",
                "Refund Policy",
              ].includes(currentLink) && <h2>{currentLink}</h2>}

              <div className="breadcrumb">
                <a href="/">
                  <IoMdHome size={20} />
                  <span>Home</span>
                </a>
                <span>| {currentLink}</span>
              </div>
            </div>
          </>
        )} */}
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
