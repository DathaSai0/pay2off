import React from "react";
import Map from "./components/Map";
import ContactDetails from "./components/ContactDetails";
import "./styles/style.scss";

function Contact({ isLoaded }) {
  console.log(isLoaded, "isLoaded");
  return (
    <div className="contact-us-root" style={{}}>
      <div className="map-wrapper">
        <Map isLoaded={isLoaded} />
      </div>
      <ContactDetails />
    </div>
  );
}

export default Contact;
