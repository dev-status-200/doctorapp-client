import React, { memo } from "react";
import Image from "next/image";

import { Form } from "react-bootstrap";

import logo from "../../../public/images/logo.png";

const AdminLogin = () => {
  return (
    <div className="login-container">
      <div className="login-card">
        <h2>Login</h2>
        <form>
          <div className="form-group">
            <label>Email</label>
            <Form.Control
              className="custom-focus"
              type="email"
              placeholder="Enter your email"
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <Form.Control
              className="custom-focus"
              type="password"
              placeholder="Enter your password"
            />
          </div>
          <button className="btn-orange-lg  mt-4" type="submit">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default memo(AdminLogin);
