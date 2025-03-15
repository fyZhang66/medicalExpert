import React from "react";
import "./Card.scss";

const Card = ({ title, titleRight, children, className = "" }) => {
  return (
    <div className={`card ${className}`}>
      {(title || titleRight) && (
        <div className="card-header">
          {title && <h3 className="card-title-txt">{title}</h3>}
          {titleRight && <div className="card-title-right">{titleRight}</div>}
        </div>
      )}
      <div className="card-content">
        {children}
      </div>
    </div>
  );
};

export default Card;