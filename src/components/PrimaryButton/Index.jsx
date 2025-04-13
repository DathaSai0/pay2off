import React from "react";
import "./styles/style.scss";

function PrimaryButton({ children, variant = "primary", onClick, style }) {
  return (
    <button
      className={`primary-btn ${
        variant === "outlined" ? "outlined" : "primary"
      }`}
      style={{ ...style }}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default PrimaryButton;
