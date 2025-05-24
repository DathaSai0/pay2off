import React from "react";
import Map from "./components/Map";
import ContactDetails from "./components/ContactDetails";
import "./styles/style.scss";
import useApiCalls from "./hooks/useApiCalls";
import SuccessModal from "../../components/succesModal";

function Contact({ isLoaded }) {
  console.log(isLoaded, "isLoaded");
  const services = useApiCalls();
  return (
    <div className="contact-us-root" style={{}}>
      <div className="map-wrapper">
        <Map isLoaded={isLoaded} />
      </div>
      <ContactDetails services={services} />

      <SuccessModal />
    </div>
  );
}

export default Contact;
