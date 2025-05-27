import React, { useEffect, useState } from "react";
import APIRequest from "../../../utilis/APIRequest";
import ConfigAPIURL from "../../../config/ConfigAPIURL";
import { useSelector } from "react-redux";

function useApiCalls() {
  const locationState = useSelector((state) => state.pageType);

  const [categoryList, setCategoryList] = useState({
    data: [],
    isLoading: false,
  });
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
    getLargeAdds();
    getSmallAdds();
    getTrendingCoupons();
  }, []);

  useEffect(() => {
    getTrendingCoupons();
  }, [JSON.stringify(locationState?.location)]);

  const getCategories = async () => {
    setCategoryList((p) => ({ ...p, isLoading: true }));
    try {
      const response = await APIRequest.request(
        "GET",
        ConfigAPIURL.getCategories,
        ""
      );

      if (response?.error === false) {
        setCategoryList((p) => ({
          ...p,
          data: response?.results?.data,
          isLoading: false,
        }));
      } else {
        setCategoryList((p) => ({
          ...p,
          isLoading: false,
        }));
      }
    } catch (error) {
      console.log(error);
      setCategoryList((p) => ({
        ...p,
        isLoading: false,
      }));
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
