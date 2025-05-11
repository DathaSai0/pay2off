import React, { useEffect, useState } from "react";
import APIRequest from "../../../utilis/APIRequest";
import ConfigAPIURL from "../../../config/ConfigAPIURL";

function useApiCalls({ categoryId, page }) {
  const [shopsList, setShopsList] = useState({
    data: [],
    isLoading: true,
  });
  const [hasMore, setHasMore] = useState(true);
  useEffect(() => {
    if (!hasMore) return;
    getShopsByCategory(page);
  }, [page]);
  const getShopsByCategory = async (pageNo) => {
    try {
      setShopsList((p) => ({
        ...p,
        isLoading: true,
      }));
      const response = await APIRequest.request(
        "GET",
        `${
          ConfigAPIURL.getShopsByCategoryId
        }/${categoryId}?page=${pageNo}&size=${10}`
      );

      if (response?.error === false) {
        setShopsList((p) => ({
          ...p,
          isLoading: false,
          data:
            pageNo === 1
              ? response?.results?.data?.shopLists
              : [
                  ...(p?.data || []),
                  ...(response?.results?.data?.shopLists || []),
                ],
        }));

        if (response?.results?.data?.shopLists?.length <= 0) {
          setHasMore(false);
        }
      } else {
        setShopsList((p) => ({
          ...p,
          isLoading: false,
        }));
      }
    } catch (error) {
      console.log(error);
      setShopsList((p) => ({
        ...p,
        isLoading: false,
      }));
    }
  };
  return {
    shopsList,
  };
}

export default useApiCalls;
