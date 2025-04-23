import React, { useEffect } from "react";
import ConfigAPIURL from "../../../config/ConfigAPIURL";
import APIRequest from "../../../utilis/APIRequest";

function useApiCalls() {
  useEffect(() => {
    getAddressList("");
  }, []);
  const getAddressList = async (keyword = "") => {
    const response = await APIRequest.request(
      "GET",
      `${ConfigAPIURL.locationSearch}?query=${keyword}`,
      ""
    );

    console.log(response, "response");
  };
  return {
    getAddressList,
  };
}

export default useApiCalls;
