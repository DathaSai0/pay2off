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
import { setCurrentLink, setLocation } from "../../Redux/pageTypeSlice";
import HomePageSection from "./Components/HomePageSection";
import DynamicSection from "./Components/DynamicSection";
import {
  MdOutlineKeyboardArrowDown,
  MdOutlineLocationOn,
} from "react-icons/md";
import useServices from "./hooks/useServices";
import { ClipLoader } from "react-spinners";

const NavBar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const openLocationModal = () => {
    setIsModalOpen(true);
  };
  const [locationData, setLocationData] = useState(
    JSON.parse(localStorage.getItem("userLocation"))
  );
  const [loading, setLoading] = useState(false);
  const services = useServices();
  const dismissModal = () => {
    setIsModalOpen(false);
    setSearchQuery("");
    services?.setLocation([]);
  };
  const dispatch = useDispatch();
  const pageType = useSelector((state) => state.pageType.type);
  const currentLink = useSelector((state) => state.pageType.currentLink);
  const consoleLocation = useSelector((state) => state.pageType.location);
  console.log(consoleLocation, "console");
  useEffect(() => {
    const savedLink = localStorage.getItem("currentLink");
    if (savedLink) {
      dispatch(setCurrentLink(savedLink));
    }
  }, [dispatch]);
  useEffect(() => {
    const savedLocation = localStorage.getItem("userLocation");
    if (savedLocation) {
      setLocationData(JSON.parse(savedLocation));
    } else {
      handleLocateMe(setLocationData, setLoading); // Only call this if not previously saved
    }
  }, []);

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
  // const isTrue = location.pathname === "/";

  const handleLocationSelect = (selectedLocation) => {
    const updatedLocation = {
      locationData: selectedLocation.name,
      locationAddress: selectedLocation.formatted_address,
      latitude: selectedLocation.geometry?.location?.lat,
      longitude: selectedLocation.geometry?.location?.lng,
    };

    localStorage.setItem("userLocation", JSON.stringify(updatedLocation));
    setLocationData(updatedLocation);
    dispatch?.(setLocation(updatedLocation));
    // Close the modal after selecting the location
    setIsModalOpen(false);
  };

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
              <div
                className="location_desk"
                onClick={openLocationModal}
                title={locationData?.locationData}
              >
                <MdOutlineLocationOn fontSize={18} />
                {/* {locationData?.locationData} */}
                {locationData?.locationData?.length > 40
                  ? locationData.locationData.slice(0, 40) + "..."
                  : locationData?.locationData}
                <MdOutlineKeyboardArrowDown fontSize={18} />
              </div>

              <button
                className="locate-button"
                onClick={() =>
                  handleLocateMe(
                    setLocationData,
                    setLoading,
                    dismissModal,
                    dispatch
                  )
                }
              >
                <LuLocateFixed fontSize={20} />
                {loading ? (
                  <ClipLoader size={20} color="#36d7b7" />
                ) : (
                  "Locate Me"
                )}
              </button>
            </div>
          </div>

          <div className="location_mobile" onClick={openLocationModal}>
            <MdOutlineLocationOn fontSize={12} />
            {locationData?.locationData}
          </div>
        </nav>

        {currentLink === "Home" ? (
          <HomePageSection
            headerText={headerText}
            searchIcon={searchIcon}
            frameImage={frameImage}
          />
        ) : (
          <DynamicSection currentLink={currentLink} />
        )}
      </div>
      <DialogModal
        isOpen={isModalOpen}
        onClose={dismissModal}
        style={{ width: "600px", height: "80%" }}
      >
        <div className="location-modal">
          <div className="location-title">Setup your Location</div>

          <div className="location-search" style={{ width: "100%" }}>
            <span className="search-icon">🔍</span>
            <input
              type="text"
              placeholder="Area Codes, Cities, or Country wide"
              value={searchQuery}
              onChange={(e) => {
                const value = e.target.value;
                setSearchQuery(value);
                if (value.trim()) {
                  services?.searchLocation(value);
                } else {
                  services?.setLocation([]);
                }
              }}
              // onKeyUp={() => services?.searchLocation(searchQuery)}
            />
          </div>

          <div
            className="use-current-location"
            onClick={() =>
              handleLocateMe(
                setLocationData,
                setLoading,
                dismissModal,
                dispatch
              )
            }
          >
            <span className="location-icon">📍</span>

            {loading ? (
              <ClipLoader size={20} color="#36d7b7" />
            ) : (
              <div>
                <p className="use-text">Use Current Location</p>
                <p className="desc-text">Access Location to Services Better</p>
              </div>
            )}
          </div>
          <div className="location-list">
            {services?.isLoading ? (
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  padding: "20px",
                }}
              >
                <ClipLoader size={30} color="#36d7b7" />
              </div>
            ) : services?.location.length > 0 ? (
              <div className="location-list">
                {services.location.map((location, index) => (
                  <div
                    key={index}
                    className="location-item"
                    style={{ cursor: "pointer" }}
                    onClick={() => handleLocationSelect(location)}
                  >
                    <MdOutlineLocationOn className="location-icon" />
                    <div className="location-info">
                      <div className="location-title-text">
                        {location.name || "Unknown Name"}
                      </div>
                      <div className="location-address">
                        {location.formatted_address}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p
                style={{ textAlign: "center", padding: "20px", color: "#888" }}
              >
                No data found
              </p>
            )}
          </div>
        </div>
      </DialogModal>
    </>
  );
};
export default NavBar;
