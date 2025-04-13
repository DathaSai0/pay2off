import React from "react";
// import "./ContactDetails.scss";
import CustomInputField from "../../../components/CustomeInputField/Index";
import CustomTextAreaField from "../../../components/CustomTextFiled";
import PrimaryButton from "../../../components/PrimaryButton/Index";
import { MdEmail, MdLocationOn, MdPhone } from "react-icons/md";

function ContactDetails() {
  return (
    <div className="contact-details-wrapper">
      <CustomInputField
        label="Enter the mobile Number"
        placeholder="Enter the mobile Number"
        type="number"
        onChange={() => {}}
        required
      />

      <CustomTextAreaField
        label="Please Comment, How do we Help you?"
        placeholder=""
        onChange={() => {}}
        required
      />

      <div className="button-group">
        <PrimaryButton variant="outlined">Cancel</PrimaryButton>
        <PrimaryButton>Submit</PrimaryButton>
      </div>

      <div className="contact-method">
        <a
          href="tel:+919791800900"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            textDecoration: "none",
          }}
        >
          <div className="contact-box">
            <div className="icon-wrapper">
              <MdPhone size={24} color="white" />
            </div>
            <div className="text-content">
              <h3>CALL US:</h3>
              <p>+91 9791800900</p>
            </div>
          </div>
        </a>

        <a
          href="mailto:business@pay2off.com"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            textDecoration: "none",
          }}
        >
          <div className="contact-box">
            <div className="icon-wrapper">
              <MdEmail size={24} color="white" />
            </div>
            <div className="text-content">
              <h3>EMAIL:</h3>
              <p>business@pay2off.com</p>
            </div>
          </div>
        </a>
      </div>

      <div className="address-box">
        <div>
          <div className="icon-wrapper">
            <MdLocationOn size={24} color="white" />
          </div>
        </div>

        <div className="text-content">
          <h3>ADDRESS:</h3>
          <p>
            Pay2off 2nd Floor, Onecowork, 80 Feet Road, Venkappa Garden,
            Ejipura, Koramangala (Near Sony World Signal), Bengaluru, Karnataka
            560034.
          </p>
        </div>
      </div>
    </div>
  );
}

export default ContactDetails;
