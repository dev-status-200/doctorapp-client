import React from "react";

const MyAccount = () => {
  return (
    <div className="form-container">
      <div className="form-section">
        <span className="form-group">
          <label>Name<small>*</small>:</label>
          <p>Johnathan</p>
        </span >
        <span className="form-group"> 
          <label>Last Name<small>*</small>:</label>
          <p>Doenver</p>
        </span>
        <span className="form-group">
          <label>Email Address<small>*</small>:</label>
          <p>Doenver@gmail.com</p>
        </span>
        <span className="form-group">
          <label>Gender:</label>
          <p>Male</p>
        </span>
        <span className="form-group">
          <label>D.O.B:</label>
          <p>10-10-02</p>
        </span>
        <span className="form-group">
          <label>Phone#:</label>
          <p>0026-115225</p>
        </span>
      </div>

      <div className="form-section">
        <label>About me (Bio)<small>*</small>:</label>
        <div>
          <p>
            John Doe is a versatile professional with over a decade of
            experience in digital marketing and project management. A graduate
            of Stanford University, John has spearheaded multiple successful
            campaigns for Fortune 500 companies, proving his expertise in
            strategizing and executing result-driven solutions. Passionate about
            fostering collaborative environments, John has a knack for building
            strong relationships with clients and team members alike. In his
            free time, he enjoys hiking, reading historical fiction, and
            volunteering at local community centers.
          </p>
        </div>
      </div>
    </div>
  );
};

const MyAccountEdit = () => {
  return (
    <div className="form-container">
      <div className="form-section">
        <span className="form-group">
          <label>Name*:</label>
          <p>John</p>
        </span >
        <span className="form-group"> 
          <label>Last Name*:</label>
          <p>Doe</p>
        </span>
        <span className="form-group">
          <label>Email Address:</label>
          <p>Doe@gmail.com</p>
        </span>
        <span className="form-group">
          <label>Gender:</label>
          <p>Male</p>
        </span>
        <span className="form-group">
          <label>D.O.B:</label>
          <p>10-10-02</p>
        </span>
        <span className="form-group">
          <label>Phone#:</label>
          <p>0026-115225</p>
        </span>
      </div>

      <div className="form-section">
        <label>About me (Bio)*:</label>
        <div>
          <p>
            John Doe is a versatile professional with over a decade of
            experience in digital marketing and project management. A graduate
            of Stanford University, John has spearheaded multiple successful
            campaigns for Fortune 500 companies, proving his expertise in
            strategizing and executing result-driven solutions. Passionate about
            fostering collaborative environments, John has a knack for building
            strong relationships with clients and team members alike. In his
            free time, he enjoys hiking, reading historical fiction, and
            volunteering at local community centers.
          </p>
        </div>
      </div>
    </div>
  );
};


export {MyAccount,MyAccountEdit};
