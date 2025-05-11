import React, { useEffect, useState } from "react";
import ConfigAPIURL from "../../../config/ConfigAPIURL";
import APIRequest from "../../../utilis/APIRequest";

function useApiCalls() {
  const [testimonials, setTestimonials] = useState({
    data: [],
    isLoading: false,
  });
  useEffect(() => {
    getTestimonials();
  }, []);

  const getTestimonials = async () => {
    try {
      setTestimonials((p) => ({
        ...p,
        isLoading: true,
      }));
      const response = await APIRequest.request(
        "GET",
        ConfigAPIURL.testimonials,
        ""
      );

      console.log(response, "response");

      if (response?.error === false) {
        setTestimonials((p) => ({
          ...p,
          data: response?.results?.data || [],
          isLoading: false,
        }));
      } else {
        setTestimonials((p) => ({
          ...p,
          isLoading: false,
        }));
      }
    } catch (error) {
      console.log(error);
      setTestimonials((p) => ({
        ...p,
        isLoading: false,
      }));
    }
  };
  return {
    testimonials,
  };
}

export default useApiCalls;
