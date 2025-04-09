export const handleLocateMe = () => {
  if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        console.log("Latitude:", position.coords.latitude);
        console.log("Longitude:", position.coords.longitude);

        // You can use reverse geocoding here to convert lat/lng to city name, etc.
      },
      (error) => {
        console.error("Error getting location:", error.message);
      }
    );
  } else {
    alert("Geolocation is not supported by your browser.");
  }
};
