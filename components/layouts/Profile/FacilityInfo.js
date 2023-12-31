import React from "react";

import { Col, Row, Form } from "react-bootstrap";
import { HiPlusCircle } from "react-icons/hi2";

import {Card} from "@/components/shared/Cards/SecondaryCard";
import UploadFile from "@/components/shared/Form/UploadFile";
import IconButton from "@/components/shared/Form/IconButton";
import { SecondaryTextArea } from "@/components/shared/Form/TextArea";

const FacilityInfoEdit = () => {
  return (
    <Col md={11} className="m-auto justify-content-center mt-4">
      <Card title={"Clinic Information"}>
        <Row className="m-3">
          <Col md={4}>
            <Form.Group>
              <Form.Label>Clinic Name</Form.Label>
              <Form.Control
                className="custom-focus"
                size="md"
                type="text"
                placeholder="Health Wise"
              />
            </Form.Group>
          </Col>
          <Col md={4}>
            <Form.Group>
              <Form.Label>Clinic Address</Form.Label>
              <Form.Control
                className="custom-focus"
                size="md"
                type="text"
                placeholder="New State, Manhattan"
              />
            </Form.Group>
          </Col>
          <Col md={4}>
            <Form.Group>
              <Form.Label>Clinic Email</Form.Label>
              <Form.Control
                className="custom-focus"
                size="md"
                type="email"
                placeholder="xyz@gmail.com"
              />
            </Form.Group>
          </Col>
          <Col md={12} className="mt-4">
            <Form.Group>
              <Form.Label>Clinic Email</Form.Label>
              <UploadFile />
            </Form.Group>
          </Col>
        </Row>
        <Row className="m-3">
          <div className="mb-4">
            <h5>Doctor Information</h5>
          </div>
          <Col md={4}>
            <Form.Group>
              <Form.Label>Clinic Name</Form.Label>
              <Form.Control
                className="custom-focus"
                size="md"
                type="text"
                placeholder="Health Wise"
              />
            </Form.Group>
          </Col>
          <Col md={4}>
            <Form.Group>
              <Form.Label>Clinic Address</Form.Label>
              <Form.Control
                className="custom-focus"
                size="md"
                type="text"
                placeholder="New State, Manhattan"
              />
            </Form.Group>
          </Col>
          <Col md={4}>
            <Form.Group>
              <Form.Label>Clinic Email</Form.Label>
              <Form.Control
                className="custom-focus"
                size="md"
                type="email"
                placeholder="xyz@gmail.com"
              />
            </Form.Group>
          </Col>
          <div className="mt-5" />
          <Col md={4}>
            <Form.Group>
              <Form.Label>Clinic Name</Form.Label>
              <Form.Control
                className="custom-focus"
                size="md"
                type="text"
                placeholder="Health Wise"
              />
            </Form.Group>
          </Col>
          <Col md={4}>
            <Form.Group>
              <Form.Label>Clinic Address</Form.Label>
              <Form.Control
                className="custom-focus"
                size="md"
                type="text"
                placeholder="New State, Manhattan"
              />
            </Form.Group>
          </Col>
          <Col md={4}>
            <Form.Group>
              <Form.Label>Clinic Email</Form.Label>
              <Form.Control
                className="custom-focus"
                size="md"
                type="email"
                placeholder="xyz@gmail.com"
              />
            </Form.Group>
          </Col>
          <Col md={12}>
            <SecondaryTextArea title={"About"} />
          </Col>
          <Col md={12} className="mt-4">
            <Form.Group>
              <Form.Label>Clinic Email</Form.Label>
              <UploadFile />
            </Form.Group>

            <div className="mt-4">
              <IconButton
                title={"Add More Doctors"}
                icon={<HiPlusCircle size={23} />}
              />
            </div>
            <div style={{ float: "right" }} className="p-3 mt-4">
              <button className="btn-orange mx-2">Continue</button>
              <button className="btn-orange-light mx-2">Cancel</button>
            </div>
          </Col>
        </Row>
      </Card>
      <div className="mt-4">
        <IconButton
          title={"Add More Clinics"}
          icon={<HiPlusCircle size={23} />}
        />
      </div>
      <div style={{ float: "right" }} className="p-3 mt-4">
        <button className="btn-orange mx-2" onClick={onClick(true)}>
          Save
        </button>
        <button className="btn-orange-light mx-2">Cancel</button>
      </div>
    </Col>
  );
};

export { FacilityInfoEdit };
