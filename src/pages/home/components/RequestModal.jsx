import { useState } from "react";
import DialogModal from "../../../components/DialogModal/Index";
import { LuMessageCircleQuestion } from "react-icons/lu";

const RequestModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openRequestModal = () => {
    setIsModalOpen(true);
  };

  const handleSubmit = () => {
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
        onClose={() => setIsModalOpen(false)}
        // style={{ minWidth: "400px", padding: "16px" }}
        style={{
          minWidth: "30%",
          width: "90%",
          maxWidth: "400px",
          padding: "16px",
          height: "auto",
          borderRadius: "12px",
          boxSizing: "border-box",
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

          <label htmlFor="requestType">
            Choose Your Request<span style={{ color: "red" }}>*</span>
          </label>
          <select id="requestType" className="request-input">
            <option value="">Select Request Type</option>
            <option value="call">Call Me Back</option>
            <option value="info">Need More Info</option>
            <option value="custom">Custom Request</option>
          </select>

          <label htmlFor="comment">Please Comment, How Do We Help You?*</label>
          <textarea
            id="comment"
            rows={4}
            placeholder="Type your message..."
            className="request-input"
          ></textarea>

          <div className="request-buttons">
            <button
              className="cancel-btn"
              onClick={() => setIsModalOpen(false)}
            >
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
