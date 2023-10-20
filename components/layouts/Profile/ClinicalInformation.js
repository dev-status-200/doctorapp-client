import React from "react";
import { HiOutlineSquaresPlus } from "react-icons/hi2";

const ClinicalInformation = () => {
  return (
    <div className="form-container">
      <div className="form-section">
        <span>
          <label>Clinic Name<small>*</small>:</label>
          <p>John</p>
        </span>
        <span>
          <label>Clinic Address<small>*</small>:</label>
          <p>Doe</p>
        </span>
        <span>
          <label>Clinic Email<small>*</small>:</label>
          <p>Doe@gmail.com</p>
        </span>
        <>
          <label>Clinic Image:</label>

          <div className="m-4">
            <HiOutlineSquaresPlus size={35} /> No images added yet, please add
            the images.
          </div>
        </>
      </div>
    </div>
  );
};

const ClinicalInformationEdit = () => {
  return (
    <div className="form-container">
      <div className="form-section">
        <span>
          <label>
            Clinic Name<small>*</small>:
          </label>
          <p>Johnathan</p>
        </span>
        <span>
          <label>
            Clinic Address<small>*</small>:
          </label>
          <p>Doenver</p>
        </span>
        <span>
          <label>
            Clinic Email<small>*</small>:
          </label>
          <p>Doenver@gmail.com</p>
        </span>
        <>
          <label>Clinic Image:</label>

          <div className="m-4">
            <HiOutlineSquaresPlus size={35} /> No images added yet, please add
            the images.
          </div>
        </>
      </div>
    </div>
  );
};

export { ClinicalInformation, ClinicalInformationEdit };
