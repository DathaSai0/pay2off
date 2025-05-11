import { useEffect, useState } from "react";
import APIRequest from "../../../utilis/APIRequest";
import ConfigAPIURL from "../../../config/ConfigAPIURL";

const useServices = () => {
  const [storeDetails, setStoreDetails] = useState([]);

  const getStoreDetails = async (id) => {
    try {
      const response = await APIRequest.request(
        "GET",
        `${ConfigAPIURL.getStoreDetails}/${id}?is_clicked=false`,
        ""
      );
      setStoreDetails(response?.results?.data);
    } catch (error) {
      console.error("Error searching location:", error);
      throw error;
    }
  };

  return {
    storeDetails,
    getStoreDetails,
  };
};
export default useServices;
