import { useState } from "react";
import DialogModal from "../../../components/DialogModal/Index";
import { LuMessageCircleQuestion } from "react-icons/lu";
import { FaSearch } from "react-icons/fa";
import useApiCalls from "../hooks/useApiCalls";
import SuccessModal from "../../../components/succesModal";

const RequestModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isRequest, setIsRequest] = useState(false);
  const openRequestModal = () => {
    setIsModalOpen(true);
  };
  const [isSuccessOpen, setIsSuccessOpen] = useState(false);

  const services = useApiCalls();
  const { contactDetails, setContactDetails } = services;
  const handleClose = () => {
    setContactDetails({ phone_number: "", req_type: "", message: "" });
    setErrors({});
    setIsModalOpen(false);
  };
  const [searchQuery, setSearchQuery] = useState("");

  const [errors, setErrors] = useState({});

  const handleSubmit = async () => {
    const validationErrors = {};

    if (!contactDetails.phone_number.trim()) {
      validationErrors.phone = "Phone number is required.";
    }
    if (!/^\d{10}$/.test(contactDetails.phone_number.trim())) {
      validationErrors.phone = "Phone number must be exactly 10 digits.";
    }
    // if (!contactDetails.req_type.trim()) {
    //   validationErrors.requestType = "Request type is required.";
    // }
    if (!contactDetails.message.trim()) {
      validationErrors.comment = "Comment is required.";
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // Submit logic
    await services?.handleSendMessage();
    setIsSuccessOpen(true);
    // Reset and close
    setContactDetails({ phone_number: "", req_type: "", message: "" });
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
            value={contactDetails.phone_number}
            onChange={(e) => {
              setContactDetails({
                ...contactDetails,
                phone_number: e.target.value.slice(0, 10),
              });

              if (errors.phone) {
                setErrors((prev) => ({ ...prev, phone: "" }));
              }
            }}
          />
          {errors.phone && <p className="error-text">{errors.phone}</p>}

          <label htmlFor="requestType">
            Choose Your Request<span style={{ color: "red" }}>*</span>
          </label>
          <div
            className="request-input"
            onClick={() => {
              setIsRequest(true);
              services?.getRequestType();
            }}
            style={{
              padding: "10px",
              border: "1px solid #ccc",
              borderRadius: "4px",
              cursor: "pointer",
            }}
          >
            {contactDetails.req_type || "Select a request type"}
          </div>
          {/* <select id="requestType" className="request-input"></select> */}
          {errors.requestType && (
            <p className="error-text">{errors.requestType}</p>
          )}

          <label htmlFor="comment">Please Comment, How Do We Help You?*</label>
          <textarea
            id="comment"
            rows={4}
            placeholder="Type your message..."
            className="request-input"
            value={contactDetails.message}
            onChange={(e) => {
              setContactDetails({ ...contactDetails, message: e.target.value });
              if (errors.comment) {
                setErrors((prev) => ({ ...prev, comment: "" }));
              }
            }}
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

      <DialogModal
        isOpen={isRequest}
        onClose={() => setIsRequest(false)}
        // style={{ minWidth: "400px", padding: "16px" }}
        style={{
          minWidth: "30%",
          width: "90%",
          maxWidth: "700px",
          padding: "16px",
          height: "80vh",
          borderRadius: "12px",
          boxSizing: "border-box",
          overflowY: "auto",
        }}
      >
        <h3>Select Request Type</h3>
        <br />
        <div className="location-search" style={{ width: "100%" }}>
          <span className="search-icon">
            <FaSearch />
          </span>
          <input
            type="text"
            placeholder="Search Your Request Type"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <div>
          {services?.requestType?.length > 0 ? (
            services?.requestType?.map((val, ind) => (
              <div
                onClick={() => {
                  setContactDetails({ ...contactDetails, req_type: val });
                  setIsRequest(false);
                }}
                style={{
                  padding: "10px",
                  borderBottom: "1px solid #ccc",
                  cursor: "pointer",
                }}
              >
                {val}
              </div>
            ))
          ) : (
            <p style={{ textAlign: "center" }}>No Data Found</p>
          )}
        </div>
      </DialogModal>
      <SuccessModal
        isOpen={isSuccessOpen}
        onClose={() => setIsSuccessOpen(false)}
      />
    </>
  );
};
export default RequestModal;
