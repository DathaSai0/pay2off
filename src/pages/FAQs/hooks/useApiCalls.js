import React, { useEffect, useState } from "react";

import APIRequest from "../../../utilis/APIRequest";
import ConfigAPIURL from "../../../config/ConfigAPIURL";
import { useSelector } from "react-redux";

function useApiCalls() {
  const pageType = useSelector((state) => state.pageType);
  const [faqList, setFaqsList] = useState({
    data: [],
    isLoading: false,
  });

  useEffect(() => {
    getFaqs();
  }, []);

  const getFaqs = async () => {
    const type =
      pageType?.type === "marketer" ? "marketing_executive" : pageType?.type;
    try {
      setFaqsList((p) => ({
        ...p,
        isLoading: true,
      }));
      const response = await APIRequest.request(
        "GET",
        `${ConfigAPIURL.getFaqs}/${type}`
      );
      if (response?.error === false) {
        setFaqsList({
          data: response?.results?.data,
          isLoading: false,
        });
      } else {
        setFaqsList((p) => ({
          ...p,
          isLoading: false,
        }));
      }
    } catch (error) {
      console.log(error);
      setFaqsList((p) => ({
        ...p,
        isLoading: false,
      }));
    }
  };
  return {
    faqList,
  };
}

export default useApiCalls;
