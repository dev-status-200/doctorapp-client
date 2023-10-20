import React from "react";

const Pricing = () => {
  return (
    <div className="form-container">
      <div className="form-section">
        <span>
          <label>General Checkup (30 mins)<small>*</small>:</label>
          <p>$200</p>
        </span>
        <span>
          <label>Fast Checkup (30 mins)<small>*</small>:</label>
          <p>$100</p>
        </span>
        <span>
          <label>Full Checkup (30 mins):</label>
          <p>$500</p>
        </span>
      </div>
    </div>
  );
};

const PricingEdit = () => {
  return <div></div>;
};

export { PricingEdit, Pricing };
