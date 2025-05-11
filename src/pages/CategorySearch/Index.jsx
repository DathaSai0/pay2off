import { IoArrowBackSharp } from "react-icons/io5";
import "./styles/style.scss";
import { useNavigate } from "react-router-dom";
import SearchCardCategory from "../../components/SearchCard/Index";
import { FaSearch } from "react-icons/fa";
import useServices from "./hooks/useServices";
import { useEffect, useState } from "react";
import CouponCard from "../../components/CuponCard/Index";
import { formatDateToDDMMYYYY } from "../users/utils/util";
import CategoryDetailsCard from "../../components/CategoryDetailsCard/Index";
import { saveToRecentSearch } from "../../utilis/recentSearch";
import { FaClockRotateLeft } from "react-icons/fa6";

const CategorySearch = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [recentSearches, setRecentSearches] = useState([]);
  const handleBack = () => {
    navigate(-1);
  };

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("recentSearches")) || [];
    setRecentSearches(saved);
  }, []);
  const services = useServices();
  useEffect(() => {
    services?.getPopularCoupons();
  }, []);

  const handleClick = (id, name) => {
    saveToRecentSearch(name);
    navigate(`/storeDetails?id=${id}`);
  };

  const handleNavigate = (category) => {
    saveToRecentSearch();
    navigate(
      `/categories?cat_image=https://core.pay2off.com/${category?.category_img}&cat_name=${category?.category_name}&cat_id=${category?._id}`
    );
  };
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

      {searchQuery.trim() === "" && recentSearches.length > 0 && (
        <div
          className="data-content"
          style={{ background: "#fdebe1", padding: "1rem" }}
        >
          <h3>Recent Search</h3>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
            {recentSearches.map((item, index) => (
              <div
                key={index}
                className="recent-search"
                onClick={() => {
                  setSearchQuery(item);
                  services?.searchItems(item);
                }}
              >
                <span style={{ marginRight: "6px" }}>
                  <FaClockRotateLeft />
                </span>
                {item}
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="data-content">
        {searchQuery.trim() !== "" && (
          <>
            <div className="search-wrapper">
              {services?.category?.length > 0 &&
                services?.category?.map((data, ind) => (
                  <div onClick={() => handleNavigate(data)}>
                    <SearchCardCategory data={data} />
                  </div>
                ))}
            </div>

            <div className="shop-wrapper">
              {services?.shopList?.length > 0 &&
                services?.shopList?.map((data, ind) => (
                  <div
                    onClick={() => handleClick(data?._id, data?.name)}
                    style={{ cursor: "pointer" }}
                  >
                    <CategoryDetailsCard
                      key={data._id}
                      name={data.name}
                      address={data.landmark}
                      logo={data?.image}
                      rating={data.rating}
                      distance={data.distance}
                      count={data.coupon_count}
                      isFavorite={data.isFavorite}
                      showContent={false}
                    />
                  </div>
                ))}
            </div>
          </>
        )}

        {searchQuery.trim() === "" && (
          <>
            <h2>Popular Coupons</h2>
            <div className="coupon-grid">
              {services?.popularCoupons?.length > 0 &&
                services?.popularCoupons?.map((data, ind) => (
                  <CouponCard
                    key={ind}
                    {...{
                      name: data?.shop_name,
                      categoryName:
                        data?.categoryNames?.[0]?.name || "Meat Shop",
                      description: data?.coupon_title || "",
                      ratings: data?.ratings || 0,
                      subDescription: data?.coupon_sub_title || "",
                      time: formatDateToDDMMYYYY(data?.expired_date_time),
                    }}
                  />
                ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};
export default CategorySearch;
