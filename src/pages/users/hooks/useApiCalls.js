import React, { useEffect, useState } from "react";
import APIRequest from "../../../utilis/APIRequest";
import ConfigAPIURL from "../../../config/ConfigAPIURL";

function useApiCalls() {
  const [categoryList, setCategoryList] = useState([]);
  const [couponsList, setCouponsList] = useState({
    top: [],
    bottom: [],
  });
  const [adds, setAdds] = useState({
    large: [],
    small: [],
  });

  useEffect(() => {
    getCategories();
    getTrendingCoupons();
    getLargeAdds();
    getSmallAdds();
  }, []);
  const getCategories = async () => {
    try {
      const response = await APIRequest.request(
        "GET",
        ConfigAPIURL.getCategories,
        ""
      );

      if (response?.error === false) {
        setCategoryList(response?.results?.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getTrendingCoupons = async () => {
    try {
      const response = await APIRequest.request(
        "GET",
        `${ConfigAPIURL.getTrendingCoupons}?page=1&size=30`,
        ""
      );
      if (response?.error === false) {
        setCouponsList({
          top: response?.results?.data?.slice(0, 10),
          bottom: response?.results?.data?.slice(10),
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getLargeAdds = async () => {
    try {
      const response = await APIRequest.request(
        "GET",
        `${ConfigAPIURL?.getLargeAdds}?page=1&size=10`,
        ""
      );

      if (response?.error === false) {
        const largeAdds = response?.results?.data;
        const final =
          largeAdds?.length < 4 && largeAdds?.length !== 0
            ? [
                ...(response?.results?.data || []),
                ...(response?.results?.data || []),
                ...(response?.results?.data || []),
                ...(response?.results?.data || []),
                ...(response?.results?.data || []),
              ]
            : response?.results?.data;
        setAdds((p) => ({
          ...p,
          large: final,
        }));
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getSmallAdds = async () => {
    try {
      const response = await APIRequest.request(
        "GET",
        `${ConfigAPIURL?.getSmallAdds}?page=1&size=10`,
        ""
      );
      if (response?.error === false) {
        const smallAdds = response?.results?.data;
        const final =
          smallAdds?.length < 4 && smallAdds?.length !== 0
            ? [
                ...(response?.results?.data || []),
                ...(response?.results?.data || []),
                ...(response?.results?.data || []),
                ...(response?.results?.data || []),
                ...(response?.results?.data || []),
              ]
            : response?.results?.data;
        setAdds((p) => ({
          ...p,
          small: final,
        }));
      }
    } catch (error) {
      console.log(error);
    }
  };
  return {
    categoryList,
    couponsList,
    adds,
  };
}

export default useApiCalls;
