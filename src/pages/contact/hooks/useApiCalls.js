import React, { useState } from "react";
import APIRequest from "../../../utilis/APIRequest";
import ConfigAPIURL from "../../../config/ConfigAPIURL";

function useApiCalls() {
  const [contactDetails, setContactDetails] = useState({
    phone_number: "",
    req_type: "",
    message: "",
    user_type: "user",
  });

  const [errors, setErrors] = useState({});

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
    contactDetails,
    setContactDetails,
    errors,
    setErrors,
    handleSendMessage,
  };
}

export default useApiCalls;
