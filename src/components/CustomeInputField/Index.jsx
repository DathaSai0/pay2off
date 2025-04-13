import React from "react";

import "./styles/style.scss";

const CustomInputField = ({
  label,
  placeholder,
  value,
  onChange,
  error,
  required,
  type,
}) => {
  return (
    <div className="custom-input-wrapper">
      <label className="custom-input-label">
        {label}
        {required && <span className="required-star">*</span>}
      </label>
      <input
        type={type || "text"}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`custom-input ${error ? "error" : ""}`}
      />
      {error && <p className="custom-input-error">{error}</p>}
    </div>
  );
};

export default CustomInputField;
