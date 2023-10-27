import React from "react";

const TextArea = ({ onChange, description, title, subtitle }) => {
  return (
    <div className="textarea-container">
      <h2>{title}</h2>
      <p>{subtitle}</p>
      <textarea
        placeholder="Type here......"
        value={description}
        onChange={onChange}
      />
    </div>
  );
};

const SecondaryTextArea = ({ onChange, description, title }) => {
  return (
    <div className="textarea-secondary-container ">
      <label className="label">
        {title}
        <span className="asterisk">*</span>
      </label>
      <textarea
        className="custom-textarea"
        placeholder="Type here....."
        value={description}
        onChange={onChange}
      />
    </div>
  );
};

export { TextArea, SecondaryTextArea };
