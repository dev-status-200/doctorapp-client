import React from 'react'

const Services = () => {
  return (
    <div className="form-container">
    <div className="form-section">
      <span>
        <label>Services<small>*</small>:</label>
        <p>surgery, checkup, alergy cure.</p>
      </span>
      <span>
      <label>Specialization<small>*</small>:</label>
        <p>Childern Health Care</p>
      </span>
      <span>
      <label>2nd Specialization:</label>
        <p>Nuerologist, Psychartrist</p>
      </span>
    </div>
  </div>
  )
}

const ServicesEdit = () => {
  return (
    <div>Services</div>
  )
}

export {Services, ServicesEdit}
