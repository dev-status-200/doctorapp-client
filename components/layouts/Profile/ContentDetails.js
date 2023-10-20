import React from "react";

const ContentDetails = () => {
  return (
    <div className="form-container">
      <div className="form-section">
        <span>
          <label>
            Address Line 1<small>*</small>:
          </label>
          <p>West Hollylane, New Jersy</p>
        </span>
        <span>
          <label>
            Address Line 2<small>*</small>:
          </label>
          <p>West Hollylane, New Jersy</p>
        </span>
        <span>
          <label>
            Address Line 3:
          </label>
          <p>West Hollylane, New Jersy</p>
        </span>
      </div>
    </div>
  );
};

const ContentDetailsEdit = () => {
  return <div></div>;
};

export { ContentDetails, ContentDetailsEdit };
