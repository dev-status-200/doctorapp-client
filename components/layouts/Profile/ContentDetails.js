import React from "react";

import { Col, Form } from "react-bootstrap";

import {Card} from "@/components/shared/Cards/SecondaryCard";

const ContentDetails = ({ data }) => {
  return (
    <>
      {data ? (
        <div className="form-container">
          <div className="form-section">
            <span>
              <label>
                Address Line 1<small>*</small>:
              </label>
              <p>{data.address1 ? data.address1 : "-"}</p>
            </span>
            <span>
              <label>
                Address Line 2<small>*</small>:
              </label>
              <p>{data.address2 ? data.address2 : "-"}</p>
            </span>
            <span>
              <label>State/Province:</label>
              <p>{data.state ? data.state : "-"}</p>
            </span>
            <span>
              <label>City:</label>
              <p>{data.city ? data.city : "-"}</p>
            </span>
            <span>
              <label>
                Country<small>*</small>:
              </label>
              <p>{data.country ? data.country : "-"}</p>
            </span>
            <span>
              <label>Postal Code:</label>
              <p>{data.postal ? data.postal : "-"}</p>
            </span>
          </div>
        </div>
      ) : (
        <div className="form-container">
          <div className="form-section">
            <span>
              <label>
                Address Line 1<small>*</small>:
              </label>
              <p>-</p>
            </span>
            <span>
              <label>
                Address Line 2<small>*</small>:
              </label>
              <p>-</p>
            </span>
            <span>
              <label>State/Province:</label>
              <p>-</p>
            </span>
            <span>
              <label>City:</label>
              <p>-</p>
            </span>
            <span>
              <label>
                Country<small>*</small>:
              </label>
              <p>-</p>
            </span>
            <span>
              <label>Postal Code:</label>
              <p>-</p>
            </span>
          </div>
        </div>
      )}
    </>
  );
};

const ContentDetailsEdit = ({ state, dispatch, onSubmit }) => {
  const address1 = state.doctor.address1||'';
  const address2 = state.doctor.address2||'';
  const province = state.doctor.state||'';
  const city = state.doctor.city||'';
  const country = state.doctor.country||'';
  const postal = state.doctor.postal||'';

  const handleChange = (field, value) => {
    dispatch({
      type: "SET_ACCOUNT",
      payload: {
        ...state.doctor,
        [field]: value,
      },
    });
  };

  return (
    <Col md={11} className="m-auto justify-content-center mt-4">
      <Card title={"Contact Detail"}>
        <form className="m-3 row" onSubmit={(e)=>{onSubmit(e)}}>
          <Col md={4}>
            <Form.Group>
              <Form.Label>Address Line.1</Form.Label>
              <Form.Control
                required
                onChange={(e) => handleChange("address1", e.target.value)}
                value={address1}
                className="custom-focus"
                size="md"
                type="text"
                placeholder="Health Wise"
              />
            </Form.Group>
          </Col>
          <Col md={4}>
            <Form.Group>
              <Form.Label>Address Line.2</Form.Label>
              <Form.Control
                required
                onChange={(e) => handleChange("address2", e.target.value)}
                value={address2}
                className="custom-focus"
                size="md"
                type="text"
                placeholder="New State, Manhattan"
              />
            </Form.Group>
          </Col>
          <Col md={4}>
            <Form.Group>
              <Form.Label>State/Province</Form.Label>
              <Form.Control
                onChange={(e) => handleChange("state", e.target.value)}
                value={province}
                className="custom-focus"
                size="md"
                type="text"
                placeholder="xyz@gmail.com"
              />
            </Form.Group>
          </Col>
          <div className="mt-5" />
          <Col md={4}>
            <Form.Group>
              <Form.Label>City</Form.Label>
              <Form.Control
                onChange={(e) => handleChange("city", e.target.value)}
                value={city}
                className="custom-focus"
                size="md"
                type="text"
                placeholder="Health Wise"
              />
            </Form.Group>
          </Col>
          <Col md={4}>
            <Form.Group>
              <Form.Label>Country</Form.Label>
              <Form.Control
                onChange={(e) => handleChange("country", e.target.value)}
                value={country}
                className="custom-focus"
                size="md"
                type="text"
                placeholder="New State, Manhattan"
              />
            </Form.Group>
          </Col>
          <Col md={4}>
            <Form.Group>
              <Form.Label>Postal Code</Form.Label>
              <Form.Control
                onChange={(e) => handleChange("postal", e.target.value)}
                value={postal}
                className="custom-focus"
                size="md"
                type="text"
                placeholder="xyz@gmail.com"
              />
            </Form.Group>
            <div style={{ float: "right" }} className="p-3 mt-4">
              <button
                className="btn-orange mx-2"
              >
                Save
              </button>
              <button className="btn-orange-light mx-2">Cancel</button>
            </div>
          </Col>
        </form>
      </Card>
    </Col>
  );
};

const MemoizedContentDetails = React.memo(ContentDetails);
const MemoizedContentDetailsEdit = React.memo(ContentDetailsEdit);

export {
  MemoizedContentDetails as ContentDetails,
  MemoizedContentDetailsEdit as ContentDetailsEdit,
};
