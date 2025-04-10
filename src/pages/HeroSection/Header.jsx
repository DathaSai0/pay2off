import { useState } from "react";
import Logo from "../../assets/Images/Pay2off Logo 1.png";
import { handleLocateMe } from "../../utilis/location";
import "./styles/Header.scss";
import DialogModal from "../../components/DialogModal/Index";

const NavBar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openLocationModal = () => {
    setIsModalOpen(true);
  };
  return (
    <div>
      <nav className="header">
        <div className="logo">
          <img src={Logo} />
          <span>Pay2off</span>
        </div>
        <div className="location-section">
          <div className="location_desk" onClick={openLocationModal}>
            {/* <LocationIcon /> */}
            Coimbatore, Tamil Nadu 641105, India
          </div>
          <button className="locate-button" onClick={handleLocateMe}>
            {" "}
            Locate Me
          </button>
        </div>
      </nav>
      <div className="location_mobile" onClick={openLocationModal}>
        {/* <LocationIcon /> */}
        Coimbatore, Tamil Nadu 641105, India
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
    </div>
  );
};
export default NavBar;
