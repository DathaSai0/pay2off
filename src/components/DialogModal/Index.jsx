import "./Modal.scss";

const DialogModal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;
  return (
    <>
      <div className="custom-modal-backdrop" onClick={onClose}>
        <div className="custom-modal" onClick={(e) => e.stopPropagation()}>
          <button className="modal-close" onClick={onClose}>
            &times;
          </button>
          <div className="children">{children}</div>
        </div>
      </div>
    </>
  );
};
export default DialogModal;
