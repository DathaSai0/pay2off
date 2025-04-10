import { useState } from "react";
import Logo from "../../assets/Images/Pay2off Logo 1.png";
import { handleLocateMe } from "../../utilis/location";
import "./styles/Header.scss";
import DialogModal from "../../components/DialogModal/Index";
import searchIcon from "../../assets/Images/searchIcon.png";
import userFrame from "../../assets/Images/userFrame.png";

const NavBar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openLocationModal = () => {
    setIsModalOpen(true);
  };
  return (
    <>
      <div className="home_banner">
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

        <section>
          <div className="header_content">
            <h2>
              Get<span className="header_primary"> Discounts & Offers</span> on
              Everything
            </h2>
            <div>
              <img src={searchIcon} />
            </div>
          </div>
          <div className="dynamic_banner">
            <img src={userFrame} />
          </div>
        </section>
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
