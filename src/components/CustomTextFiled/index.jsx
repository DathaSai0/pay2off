import React from "react";
import "./styles/style.scss";

const CustomTextAreaField = ({
  label,
  placeholder,
  value,
  onChange,
  error,
  required,
}) => {
  return (
    <div className="custom-textarea-wrapper">
      <label className="custom-textarea-label">
        {label}
        {required && <span className="required-star">*</span>}
      </label>
      <textarea
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`custom-textarea ${error ? "error" : ""}`}
        rows={4}
      />
      {error && <p className="custom-textarea-error">{error}</p>}
    </div>
  );
};

export default CustomTextAreaField;
