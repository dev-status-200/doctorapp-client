import Image from "next/image";
import React from "react";
import { Col, Row, Form, Button } from "react-bootstrap";

import support from "../../../public/images/support.png";

const CustomerSupport = () => {
  return (
    <Row className="mt-5">
      <Col className="m-4 justify-content-center " md={7}>
        <div className="border p-5 rounded">
          <h3 className="mb-4" style={{ color: "orangered" }}>
            Enter the details
          </h3>
          <div className="d-flex mb-4">
            <Form.Group className="mx-2">
              <Form.Label>Name</Form.Label>
              <Form.Control
                className="custom-focus"
                placeholder="Enter your full name"
                type="text"
              />
            </Form.Group>
            <Form.Group className="mx-2">
              <Form.Label>Email</Form.Label>
              <Form.Control
                className="custom-focus"
                placeholder="Enter your email"
                type="text"
              />
            </Form.Group>
          </div>
          <Form.Group className="mx-2">
            <Form.Label>Description</Form.Label>
            <Form.Control
              style={{ height: 200 }}
              className="custom-focus"
              placeholder="Enter details"
              type="text"
              as="textarea"
            />
          </Form.Group>
          <div className="d-flex mt-4 justify-content-end">
            <Button className="btn-orange-light mx-2 ">Submit</Button>
            <Button className="btn-orange mx-2"> Cancel</Button>
          </div>
        </div>
      </Col>
      <Col md={3} className="m-4 d-flex mt-4 justify-content-center ">
        <div className="rounded">
          <Image
            className=" rounded border d-flex justify-content-center"
            src={support}
            alt="contact"
            height={550}
            width={550}
          />
        </div>
      </Col>
    </Row>
  );
};

export default CustomerSupport;
