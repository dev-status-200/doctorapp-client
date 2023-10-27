import React,{memo} from "react";

const Card = ({ title, children, size }) => {
  return (
    <div className="responsive-card">
      <div className={size == "lg" ? "card-header" : "card-header-secondary"}>
        {title}
      </div>
      <div className="card-content">{children}</div>
    </div>
  );
};

export default  memo(Card);
