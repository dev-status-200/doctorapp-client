import React, { useState } from "react";
import Cookies from "js-cookie";

import Card from "@/components/shared/Cards/SecondaryCard";
import IconButton from "@/components/shared/Form/IconButton";
import { HiXCircle } from "react-icons/hi2";
import { Col, Form, Row } from "react-bootstrap";

const Experience = ({ data }) => {
  const displayExperience = data?.Experiences || [];

  return (
    <>
      {displayExperience.length === 0 ? (
        <div className="form-container">
          <div className="form-section">
            <span>
              <label>
                Hospital Name<small>*</small>:
              </label>
              <p>-</p>
            </span>
            <span>
              <label>From</label>
              <p>-</p>
            </span>
            <span>
              <label>To:</label>
              <p>-</p>
            </span>
            <span>
              <label>Designation:</label>
              <p>-</p>
            </span>
          </div>
        </div>
      ) : (
        <>
          {displayExperience.map((item, index) => (
            <div key={index} className="form-container">
              <div className="form-section">
                <span>
                  <label>
                    Hospital Name<small>*</small>:
                  </label>
                  <p>{item.hospitalName ? item.hospitalName : "-"}</p>
                </span>
                <span>
                  <label>From</label>
                  <p>{item.from ? item.from : "-"}</p>
                </span>
                <span>
                  <label>To:</label>
                  <p>{item.to ? item.to : "-"}</p>
                </span>
                <span>
                  <label>Designation:</label>
                  <p>{item.designation ? item.designation : "-"}</p>
                </span>
              </div>
            </div>
          ))}
        </>
      )}
    </>
  );
};

const ExperienceEdit = ({ state, dispatch, onClick }) => {
  const [experience, setExperience] = useState(
    state.experience.length > 0 ? state.experience : [{}]
  );

  const addMore = () => {
    const id = Cookies.get("id");
    const newExperience = {
      hospitalName: "",
      from: "",
      to: "",
      designation: "",
      DoctorId: id,
    };
    dispatch({
      type: "SET_EXPERIENCE",
      payload: [...state.experience, newExperience],
    });
    setExperience([...experience, newExperience]);
  };

  const handleChange = (index, field, value) => {
    const updatedExperience = [...experience];
    const id = Cookies.get("id");

    updatedExperience[index][field] = value;
    updatedExperience[index]["DoctorId"] = id;

    setExperience(updatedExperience);
    dispatch({ type: "SET_EXPERIENCE", payload: updatedExperience });
  };

  const removeExperience = (index, id) => {
    const updatedExperience = [...experience];
    if (id != undefined) {
      state.delete.experience.push(id);
    }

    updatedExperience.splice(index, 1);
    setExperience(updatedExperience);
    dispatch({ type: "SET_EXPERIENCE", payload: updatedExperience });
  };

  return (
    <Col md={11} className="m-auto justify-content-center mt-4">
      <Card title={"Experience"}>
        {experience.map((experience, index) => (
          <Row className="m-3" key={index}>
            {index !== 0 && (
              <div style={{ float: "right" }} className="mt-4">
                <IconButton
                  onClick={() => {
                    removeExperience(index, experience.id);
                  }}
                  title={"Remove"}
                  icon={
                    <HiXCircle size={23} color="#db4855" className="mx-1" />
                  }
                />
              </div>
            )}
            <Col md={4}>
              <Form.Group>
                <Form.Label>Hospital</Form.Label>
                <Form.Control
                  value={experience.hospitalName}
                  onChange={(e) =>
                    handleChange(index, "hospitalName", e.target.value)
                  }
                  className="custom-focus"
                  size="md"
                  type="text"
                  placeholder="Aga Khan Hospital"
                />
              </Form.Group>
            </Col>
            <Col md={4}>
              <Form.Group>
                <Form.Label>From</Form.Label>
                <Form.Control
                  value={experience.from}
                  onChange={(e) => handleChange(index, "from", e.target.value)}
                  className="custom-focus"
                  size="md"
                  type="text"
                  placeholder="2001"
                />
              </Form.Group>
            </Col>
            <Col md={4}>
              <Form.Group>
                <Form.Label>To</Form.Label>
                <Form.Control
                  value={experience.to}
                  onChange={(e) => handleChange(index, "to", e.target.value)}
                  className="custom-focus"
                  size="md"
                  type="text"
                  placeholder="2002"
                />
              </Form.Group>
            </Col>
            <div className="mt-4" />
            <Col md={4}>
              <Form.Group>
                <Form.Label>Designation</Form.Label>
                <Form.Control
                  value={experience.designation}
                  onChange={(e) =>
                    handleChange(index, "designation", e.target.value)
                  }
                  className="custom-focus"
                  size="md"
                  type="text"
                  placeholder="Surgeon"
                />
              </Form.Group>
            </Col>
          </Row>
        ))}
        <div className="m-4">
          <button
            onClick={addMore}
            style={{ background: "none", border: "none", color: "#f20" }}
          >
            + Add More
          </button>
        </div>
        <div style={{ float: "right" }} className="p-3 mt-4">
          <button onClick={onClick} className="btn-orange mx-2">
            Save
          </button>
          <button className="btn-orange-light mx-2">Cancel</button>
        </div>
      </Card>
    </Col>
  );
};

const MemoizedExperience = React.memo(Experience);
const MemoizedExperienceEdit = React.memo(ExperienceEdit);

export {
  MemoizedExperience as Experience,
  MemoizedExperienceEdit as ExperienceEdit,
};
