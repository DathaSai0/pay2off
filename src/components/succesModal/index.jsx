import React from "react";
import DialogModal from "../DialogModal/Index";
import { FaCheck } from "react-icons/fa";
import PrimaryButton from "../PrimaryButton/Index";
import "./styles/style.scss";

function SuccessModal({ isOpen, onClose }) {
  return (
    <DialogModal
      isOpen={isOpen}
      onClose={onClose}
      style={{ maxWidth: "300px", minWidth: "300px", height: "300px" }}
    >
      <div className="success-modal">
        <div className="success-icon">
          <FaCheck size={30} />
        </div>

        <div className="success-message">
          <h1>"Message Sent"</h1>
          <p>Our Support team will email you shortly.</p>
        </div>

        <PrimaryButton onClick={onClose}>Close</PrimaryButton>
      </div>
    </DialogModal>
  );
}

export default SuccessModal;
