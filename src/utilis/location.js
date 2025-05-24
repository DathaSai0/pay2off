import ConfigAPIURL from "../config/ConfigAPIURL";
import APIRequest from "./APIRequest";

export const handleLocateMe = async (
  setLocationData,
  setLoading,
  dismissModal
) => {
  if ("geolocation" in navigator) {
    setLoading?.(true);
    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const lat = position.coords.latitude;
        const lng = position.coords.longitude;
        const latlng = `${lat},${lng}`;

        try {
          const response = await APIRequest.request(
            "GET",
            `${ConfigAPIURL.locationSearch}?latlng=${latlng}`,
            ""
          );
          const data = await response?.results[0];

          const updatedLocation = {
            latitude: data?.navigation_points?.[0]?.location?.latitude,
            longitude: data?.navigation_points?.[0]?.location?.longitude,
            locationData: data?.formatted_address,
          };

          localStorage.setItem("userLocation", JSON.stringify(updatedLocation));
          setLocationData?.(updatedLocation); // update state in component
          dismissModal?.();
        } catch (error) {
          console.error("Error calling location API:", error);
        } finally {
          setLoading?.(false);
        }
      },
      (error) => {
        console.error("Error getting location:", error.message);
        setLoading?.(false);
      }
    );
  } else {
    alert("Geolocation is not supported by your browser.");
  }
};
