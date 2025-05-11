import { useState } from "react";
import APIRequest from "../../../utilis/APIRequest";
import ConfigAPIURL from "../../../config/ConfigAPIURL";

const useServices = () => {
  const [location, setLocation] = useState([]);

  const searchLocation = async (query) => {
    try {
      const response = await APIRequest.request(
        "GET",
        `${ConfigAPIURL.locationSearch}?query=${query ?? ""}`,
        ""
      );
      setLocation(response?.results);
    } catch (error) {
      console.error("Error searching location:", error);
      throw error;
    }
  };

  return {
    location,
    searchLocation,
  };
};
export default useServices;
