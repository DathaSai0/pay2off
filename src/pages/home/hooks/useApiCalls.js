import React, { useEffect, useState } from "react";
import ConfigAPIURL from "../../../config/ConfigAPIURL";
import APIRequest from "../../../utilis/APIRequest";

function useApiCalls() {
  const [testimonials, setTestimonials] = useState({
    data: [],
    isLoading: false,
  });
  const [requestType, setRequestType] = useState([]);
  useEffect(() => {
    getTestimonials();
  }, []);
  const [contactDetails, setContactDetails] = useState({
    phone_number: "",
    req_type: "",
    message: "",
    user_type: "user",
  });

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

  const getRequestType = async () => {
    try {
      const response = await APIRequest.request(
        "GET",
        ConfigAPIURL.supportRequest,
        ""
      );

      console.log(response, "response");

      if (response?.error === false) {
        setRequestType(response?.results?.data || []);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleSendMessage = async () => {
    try {
      const response = await APIRequest.request(
        "POST",
        ConfigAPIURL.sendSupportMessage,
        JSON.stringify({
          ...contactDetails,
        })
      );
      if (response?.error === false) {
        console.log(response);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return {
    testimonials,
    getRequestType,
    requestType,
    handleSendMessage,
    setContactDetails,
    contactDetails,
  };
}

export default useApiCalls;
