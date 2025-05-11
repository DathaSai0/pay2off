import React, { useEffect, useState } from "react";
import ConfigAPIURL from "../../../config/ConfigAPIURL";
import APIRequest from "../../../utilis/APIRequest";

function useApiCalls() {
  const [testimonials, setTestimonials] = useState([]);
  useEffect(() => {
    // getAddressList("");
    getTestimonials();
  }, []);
  const getAddressList = async (keyword = "") => {
    const response = await APIRequest.request(
      "GET",
      `${ConfigAPIURL.largeAdvertisement}`,
      ""
    );
  };

  const getTestimonials = async () => {
    try {
      const response = await APIRequest.request(
        "GET",
        ConfigAPIURL.testimonials,
        ""
      );

      console.log(response, "response");

      if (response?.error === false) {
        setTestimonials(response?.results?.data || []);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return {
    getAddressList,
    testimonials,
  };
}

export default useApiCalls;
