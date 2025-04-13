import { GoogleMap, MarkerF } from "@react-google-maps/api";

const center = {
  lat: 12.93781,
  lng: 77.627125,
};
function Map({ isLoaded, style }) {
  if (!isLoaded) return <div>Loading...</div>;
  return (
    <GoogleMap
      zoom={15}
      center={center}
      mapContainerStyle={{ width: "100%", height: "100%", ...style }} // 400px
      options={{
        zoomControl: true,
      }}
    >
      <MarkerF
        position={center}
        onClick={() => {
          window.open(
            "https://www.google.com/maps/search/?api=1&query=12.93781,77.6271247"
          );
        }}
      />
    </GoogleMap>
  );
}

export default Map;
