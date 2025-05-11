import { useState } from "react";
import APIRequest from "../../../utilis/APIRequest";
import ConfigAPIURL from "../../../config/ConfigAPIURL";

const useServices = () => {
  const [popularCoupons, setPopularCoupons] = useState([]);
  const [category, setCategory] = useState([]);
  const [shopList, setShopList] = useState([]);

  const getPopularCoupons = async (page = 1, append = false) => {
    try {
      const response = await APIRequest.request(
        "GET",
        `${ConfigAPIURL.popularCoupons}?page=${page ?? 1}&size=10`,
        ""
      );
      // setPopularCoupons(response?.results?.data);
      const newData = response?.results?.data || [];
      setPopularCoupons((prev) => (append ? [...prev, ...newData] : newData));
      return newData.length > 0;
    } catch (error) {
      console.error("Error searching location:", error);
      throw error;
    }
  };

  const searchItems = async (search, page) => {
    try {
      const response = await APIRequest.request(
        "GET",
        `${ConfigAPIURL.homeSearchItems}?page=${
          page ?? 1
        }&size=10&searchString=${search}`,
        ""
      );
      setCategory(response?.results?.data?.categoryLists);
      setShopList(response?.results?.data?.shopLists);
    } catch (error) {
      console.error("Error searching location:", error);
      throw error;
    }
  };

  return {
    popularCoupons,
    getPopularCoupons,
    searchItems,
    category,
    shopList,
  };
};
export default useServices;
