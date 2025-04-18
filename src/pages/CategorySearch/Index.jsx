import { IoArrowBackSharp } from "react-icons/io5";
import "./styles/style.scss";
import { useNavigate } from "react-router-dom";
import SearchCardCategory from "../../components/SearchCard/Index";

const CategorySearch = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };
  return (
    <div>
      <div className="store-header">
        <div className="back-arrow" onClick={handleBack}>
          <IoArrowBackSharp size={20} />
        </div>
        <div className="location-search">
          <span className="search-icon">🔍</span>
          <input type="text" placeholder="Enter Shop or Category Name" />
        </div>
      </div>

      <div className="search-wrapper">
        <SearchCardCategory />
      </div>
      <h2 className="live_title">Popular Coupons</h2>
    </div>
  );
};
export default CategorySearch;
