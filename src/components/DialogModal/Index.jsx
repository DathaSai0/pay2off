import "./Modal.scss";

const DialogModal = ({ isOpen, onClose, style, closeBtn, children }) => {
  if (!isOpen) return null;
  return (
    <>
      <div className="custom-modal-backdrop" onClick={onClose}>
        <div
          className="custom-modal"
          style={{ ...style }}
          onClick={(e) => e.stopPropagation()}
        >
          {!closeBtn && (
            <button className="modal-close" onClick={onClose}>
              &times;
            </button>
          )}

          <div className="children">{children}</div>
        </div>
      </div>
    </>
  );
};
export default DialogModal;
