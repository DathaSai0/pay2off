import { useState } from "react";
import DialogModal from "../../../components/DialogModal/Index";
import { LuMessageCircleQuestion } from "react-icons/lu";

const RequestModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openRequestModal = () => {
    setIsModalOpen(true);
  };
  const [formData, setFormData] = useState({
    phone: "",
    requestType: "",
    comment: "",
  });

  const handleClose = () => {
    setFormData({ phone: "", requestType: "", comment: "" });
    setErrors({});
    setIsModalOpen(false);
  };

  const [errors, setErrors] = useState({});

  const handleSubmit = () => {
    const validationErrors = {};

    if (!formData.phone.trim()) {
      validationErrors.phone = "Phone number is required.";
    }
    if (!formData.requestType.trim()) {
      validationErrors.requestType = "Request type is required.";
    }
    if (!formData.comment.trim()) {
      validationErrors.comment = "Comment is required.";
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // Submit logic
    console.log("Submitted:", formData);

    // Reset and close
    setFormData({ phone: "", requestType: "", comment: "" });
    setErrors({});
    setIsModalOpen(false);
  };

  return (
    <>
      <div
        class="fixed-question-icon"
        onClick={!isModalOpen ? openRequestModal : undefined}
        style={{
          pointerEvents: isModalOpen ? "none" : "auto",
          opacity: isModalOpen ? 0.1 : 1, // optional visual feedback
          cursor: isModalOpen ? "default" : "pointer",
        }}
      >
        <LuMessageCircleQuestion size={40} color="#ffffff" />
      </div>

      <DialogModal
        isOpen={isModalOpen}
        onClose={handleClose}
        // style={{ minWidth: "400px", padding: "16px" }}
        style={{
          minWidth: "30%",
          width: "90%",
          maxWidth: "400px",
          padding: "16px",
          height: "75vh",
          borderRadius: "12px",
          boxSizing: "border-box",
          overflowY: "auto",
        }}
      >
        <div className="request-form">
          <label htmlFor="phone">
            Enter Phone Number<span style={{ color: "red" }}>*</span>
          </label>
          <input
            type="text"
            id="phone"
            placeholder="Enter Mobile Number"
            className="request-input"
          />
          {errors.phone && <p className="error-text">{errors.phone}</p>}

          <label htmlFor="requestType">
            Choose Your Request<span style={{ color: "red" }}>*</span>
          </label>
          <select id="requestType" className="request-input">
            <option value="">Select Request Type</option>
            <option value="call">Call Me Back</option>
            <option value="info">Need More Info</option>
            <option value="custom">Custom Request</option>
          </select>
          {errors.requestType && (
            <p className="error-text">{errors.requestType}</p>
          )}

          <label htmlFor="comment">Please Comment, How Do We Help You?*</label>
          <textarea
            id="comment"
            rows={4}
            placeholder="Type your message..."
            className="request-input"
          ></textarea>
          {errors.comment && <p className="error-text">{errors.comment}</p>}

          <div className="request-buttons">
            <button className="cancel-btn" onClick={handleClose}>
              Cancel
            </button>
            <button className="submit-btn" onClick={handleSubmit}>
              Submit
            </button>
          </div>
        </div>
      </DialogModal>
    </>
  );
};
export default RequestModal;
