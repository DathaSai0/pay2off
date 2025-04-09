import Logo from "../../assets/Images/Pay2off Logo 1.png";
import { handleLocateMe } from "../../utilis/location";
import "./styles/Header.scss";

const NavBar = () => {
  return (
    <nav className="header">
      <div className="logo">
        <img src={Logo} />
        <span>Pay2off</span>
      </div>
      <div className="location-section">
        <div className="location_desk">
          {/* <LocationIcon /> */}
          Coimbatore, Tamil Nadu 641105, India
        </div>
        <button className="locate-button" onClick={handleLocateMe}>
          {" "}
          Locate Me
        </button>
      </div>
    </nav>
  );
};
export default NavBar;
