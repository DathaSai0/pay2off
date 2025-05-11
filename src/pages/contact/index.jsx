import React from "react";
import Map from "./components/Map";
import ContactDetails from "./components/ContactDetails";
import "./styles/style.scss";
import useApiCalls from "./hooks/useApiCalls";

function Contact({ isLoaded }) {
  console.log(isLoaded, "isLoaded");
  const services = useApiCalls();
  return (
    <div className="contact-us-root" style={{}}>
      <div className="map-wrapper">
        <Map isLoaded={isLoaded} />
      </div>
      <ContactDetails services = {services} />
    </div>
  );
}

export default Contact;
