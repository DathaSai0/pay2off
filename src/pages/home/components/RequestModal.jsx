import { useState } from "react";
import DialogModal from "../../../components/DialogModal/Index";
import { LuMessageCircleQuestion } from "react-icons/lu";
import { FaSearch } from "react-icons/fa";
import useApiCalls from "../hooks/useApiCalls";

const RequestModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isRequest, setIsRequest] = useState(false);
  const openRequestModal = () => {
    setIsModalOpen(true);
  };
  const [formData, setFormData] = useState({
    phone: "",
    requestType: "",
    comment: "",
  });
  const services = useApiCalls();
  const handleClose = () => {
    setFormData({ phone: "", requestType: "", comment: "" });
    setErrors({});
    setIsModalOpen(false);
  };
  const [searchQuery, setSearchQuery] = useState("");

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
            {formData.requestType || "Select a request type"}
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
                  setFormData({ ...formData, requestType: val });
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
    </>
  );
};
export default RequestModal;
