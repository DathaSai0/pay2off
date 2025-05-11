import { IoArrowBackSharp } from "react-icons/io5";
import "./styles/style.scss";
import { useNavigate } from "react-router-dom";
import SearchCardCategory from "../../components/SearchCard/Index";
import { FaSearch } from "react-icons/fa";
import useServices from "./hooks/useServices";
import { useEffect, useState } from "react";
import CouponCard from "../../components/CuponCard/Index";

const CategorySearch = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");

  const handleBack = () => {
    navigate(-1);
  };
  const services = useServices();
  useEffect(() => {
    services?.getPopularCoupons();
  }, []);
  return (
    <div>
      <div className="store-header">
        <div className="back-arrow" onClick={handleBack}>
          <IoArrowBackSharp size={20} />
        </div>
        <div className="location-search">
          <span className="search-icon">
            <FaSearch />
          </span>
          <input
            type="text"
            placeholder="Enter Shop or Category Name"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyUp={() => services?.searchItems(searchQuery)}
          />
        </div>
      </div>

      <div className="data-content">
        <div className="search-wrapper">
          {services?.category?.length > 0 &&
            services?.category?.map((data, ind) => (
              <>
                <SearchCardCategory data={data} />
              </>
            ))}
        </div>
        <h2>Popular Coupons</h2>

        <div className="coupon-grid">
          {services?.popularCoupons?.length > 0 &&
            services?.popularCoupons?.map((coupon, ind) => (
              <CouponCard key={ind} coupon={coupon} />
            ))}
        </div>
      </div>
    </div>
  );
};
export default CategorySearch;
