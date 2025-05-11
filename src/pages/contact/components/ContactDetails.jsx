import React from "react";
// import "./ContactDetails.scss";
import CustomInputField from "../../../components/CustomeInputField/Index";
import CustomTextAreaField from "../../../components/CustomTextFiled";
import PrimaryButton from "../../../components/PrimaryButton/Index";
import { MdEmail, MdLocationOn, MdPhone } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setCurrentLink } from "../../../Redux/pageTypeSlice";

function ContactDetails({ services }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = () => {
    if (!services?.contactDetails?.phone_number) {
      return services?.setErrors((p) => ({
        ...p,
        phone_number: "Phone number is required",
      }));
    }
    if (services?.contactDetails?.phone_number?.length !== 10) {
      return services?.setErrors((p) => ({
        ...p,
        phone_number: "Phone number is not valid",
      }));
    }
    if (!services?.contactDetails?.message) {
      return services?.setErrors((p) => ({
        ...p,
        message: "Message field is required",
      }));
    }
    services?.handleSendMessage();
  };

  console.log(services?.errors);
  return (
    <div className="contact-details-wrapper">
      <CustomInputField
        label="Enter the mobile Number"
        placeholder="Enter the mobile Number"
        type="number"
        error={services?.errors?.phone_number}
        value={services?.contactDetails?.phone_number || ""}
        onChange={(e) => {
          services?.setContactDetails((p) => ({
            ...p,
            phone_number: e.target.value.slice(0, 10),
          }));

          delete services?.errors?.["phone_number"];
        }}
        required
      />

      <CustomTextAreaField
        label="Please Comment, How do we Help you?"
        placeholder=""
        error={services?.errors?.message}
        value={services?.contactDetails?.message || ""}
        onChange={(e) => {
          services?.setContactDetails((p) => ({
            ...p,
            message: e.target.value,
          }));

          delete services?.errors?.["message"];
        }}
        required
      />

      <div className="button-group">
        <PrimaryButton
          variant="outlined"
          onClick={() => {
            navigate("/");
            dispatch(setCurrentLink("Home"));
          }}
        >
          Cancel
        </PrimaryButton>
        <PrimaryButton onClick={handleSubmit}>Submit</PrimaryButton>
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
