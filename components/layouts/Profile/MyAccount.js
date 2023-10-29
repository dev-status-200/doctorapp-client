import React from "react";

import { TextArea } from "@/components/shared/Form/TextArea";
import { Col, Form, Row } from "react-bootstrap";
import Card from "@/components/shared/Cards/SecondaryCard";

const MyAccount = ({ data }) => {
  return (
    <div className="form-container">
      {data ? (
        <>
          <div className="form-section">
            <span className="form-group">
              <label>
                Name<small>*</small>:
              </label>
              <p>{data.firstName}</p>
            </span>
            <span className="form-group">
              <label>
                Last Name<small>*</small>:
              </label>
              <p>{data.lastName}</p>
            </span>
            <span className="form-group">
              <label>
                Email Address<small>*</small>:
              </label>
              <p>{data.email}</p>
            </span>
            <span className="form-group">
              <label>Gender:</label>
              <p>{data.gender ? data.gender : "Set your gender"}</p>
            </span>
            <span className="form-group">
              <label>D.O.B:</label>
              <p>{data.dob ? data.dob : "Add your birth date"}</p>
            </span>
            <span className="form-group">
              <label>Phone#:</label>
              <p>{data.phone}</p>
            </span>
          </div>

          <div className="form-section">
            <label>
              About me (Bio)<small>*</small>:
            </label>
            <div className="text-div">
              <p>{data.bio ? data.bio : "No bio added."}</p>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="form-section">
            <span className="form-group">
              <label>
                Name<small>*</small>:
              </label>
              <p>-</p>
            </span>
            <span className="form-group">
              <label>
                Last Name<small>*</small>:
              </label>
              <p>-</p>
            </span>
            <span className="form-group">
              <label>
                Email Address<small>*</small>:
              </label>
              <p>-</p>
            </span>
            <span className="form-group">
              <label>Gender:</label>
              <p>-</p>
            </span>
            <span className="form-group">
              <label>D.O.B:</label>
              <p>-</p>
            </span>
            <span className="form-group">
              <label>Phone#:</label>
              <p>-</p>
            </span>
          </div>
          <div className="form-section">
            <label>
              About me (Bio)<small>*</small>:
            </label>
            <div className="text-div">
              <p>-</p>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

const MyAccountEdit = ({ state, dispatch, onSubmit }) => {
  const { bio, firstName, lastName, email, gender, dob } = state.doctor;

  const handleChange = (field, value) => {
    dispatch({
      type: "SET_ACCOUNT",
      payload: { ...state.doctor, [field]: value },
    });
  };

  return (
    <Col md={11} className="m-auto justify-content-center mt-4">
      <Card title={"Education"}>
        <Row className="m-3">
          <Col md={4}>
            <Form.Group>
              <Form.Label>First name</Form.Label>
              <Form.Control
                value={firstName}
                onChange={(e) => handleChange("firstName", e.target.value)}
                className="custom-focus"
                size="md"
                type="text"
                placeholder="John "
              />
            </Form.Group>
          </Col>
          <Col md={4}>
            <Form.Group>
              <Form.Label>Last name</Form.Label>
              <Form.Control
                value={lastName}
                onChange={(e) => handleChange("lastName", e.target.value)}
                className="custom-focus"
                size="md"
                type="text"
                placeholder="Doe"
              />
            </Form.Group>
          </Col>
          <Col md={4}>
            <Form.Group>
              <Form.Label>Email</Form.Label>
              <Form.Control
                value={email}
                onChange={(e) => handleChange("email", e.target.value)}
                className="custom-focus"
                size="md"
                type="email"
                placeholder="@xyz@gmail.com"
              />
            </Form.Group>
          </Col>
          <div className="mt-4" />
          <Col md={4}>
            <Form.Group>
              <Form.Label>D.O.B</Form.Label>
              <Form.Control
                value={dob}
                onChange={(e) => handleChange("dob", e.target.value)}
                className="custom-focus"
                size="md"
                type="date"
                placeholder="10-12-02"
              />
            </Form.Group>
          </Col>
          <Col md={4}>
            <Form.Group>
              <Form.Label>Gender</Form.Label>
              <Form.Control
                value={gender}
                onChange={(e) => handleChange("gender", e.target.value)}
                className="custom-focus"
                size="md"
                type="text"
                placeholder="Male"
              />
            </Form.Group>
          </Col>
        </Row>
        <TextArea
          value={bio}
          title={"About Me"}
          onChange={(e) => handleChange("bio", e.target.value)}
          description={bio}
          subtitle={"(Write down your bio)"}
        />
        <div style={{ float: "right" }} className="p-3">
          <button
            className="btn-orange mx-2"
            onClick={(e) => {
              onSubmit(e);
            }}
          >
            Save
          </button>
          <button className="btn-orange-light mx-2">Cancel</button>
        </div>
      </Card>
    </Col>
  );
};

const MemoizedMyAccount = React.memo(MyAccount);
const MemoizedMyAccountEdit = React.memo(MyAccountEdit);

export {
  MemoizedMyAccount as MyAccount,
  MemoizedMyAccountEdit as MyAccountEdit,
};
