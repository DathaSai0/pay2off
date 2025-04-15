import React from "react";

import "./styles/style.scss";

function ReusablePageCard({ image, content, title, displayPointer, onClick }) {
  return (
    <div className="page-card-container" onClick={onClick}>
      <div>
        <h1 className="page-card-title">{title}</h1>
        <p className="page-card-content">{content}</p>
      </div>
      <img src={image} alt={title} className="page-card-image" />
      {displayPointer && <div className="page-card-pointer"></div>}
    </div>
  );
}

export default ReusablePageCard;
