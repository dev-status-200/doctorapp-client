import React from "react";

const Card = ({ title, children }) => {
  return (
    <div className="responsive-card">
    <div className="card-header">
      {title}
    </div>
    <div className="card-content">
      {children}
    </div>
  </div>
  );
};

export default Card;
