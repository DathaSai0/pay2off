import { useState } from "react";
import APIRequest from "../../../utilis/APIRequest";
import ConfigAPIURL from "../../../config/ConfigAPIURL";

const useServices = () => {
  const [location, setLocation] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const searchLocation = async (query) => {
    setIsLoading(true);
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
    } finally {
      setIsLoading(false);
    }
  };

  return {
    location,
    searchLocation,
    setLocation,
    isLoading,
  };
};
export default useServices;
