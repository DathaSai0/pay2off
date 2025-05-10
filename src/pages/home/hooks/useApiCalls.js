import React, { useEffect } from "react";
import ConfigAPIURL from "../../../config/ConfigAPIURL";
import APIRequest from "../../../utilis/APIRequest";

function useApiCalls() {
  useEffect(() => {
    getAddressList("");
    getTestimonials("");
  }, []);
  const getAddressList = async (keyword = "") => {
    const response = await APIRequest.request(
      "GET",
      `${ConfigAPIURL.largeAdvertisement}`,
      ""
    );

    console.log(response, "response");
  };

  const getTestimonials = async () => {
    try {
      const response = await APIRequest.request(
        "GET",
        ConfigAPIURL.testimonials,
        ""
      );

      console.log(response, "response");
    } catch (error) {
      console.log(error);
    }
  };
  return {
    getAddressList,
  };
}

export default useApiCalls;
