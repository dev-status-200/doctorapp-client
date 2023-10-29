import React, { useState } from "react";
import Cookies from "js-cookie";

import Card from "@/components/shared/Cards/SecondaryCard";
import IconButton from "@/components/shared/Form/IconButton";
import { HiXCircle } from "react-icons/hi2";
import { Col, Form, Row } from "react-bootstrap";

const Education = ({ data }) => {
  const displayEducation = data?.Education || [];
  return (
    <>
      {displayEducation.length === 0 ? (
        <div className="form-container">
          <div className="form-section">
            <span>
              <label>
                Degree<small>*</small>:
              </label>
              <p>-</p>
            </span>
            <span>
              <label>College/Institute:</label>
              <p>-</p>
            </span>
            <span>
              <label>Year of Completion:</label>
              <p>-</p>
            </span>
          </div>
        </div>
      ) : (
        <>
          {data.Education.map((item, index) => {
            return (
              <div key={item.id} className="form-container">
                <div className="form-section">
                  <span>
                    <label>
                      Degree<small>*</small>:
                    </label>
                    <p>{item.degree ? item.degree : "-"}</p>
                  </span>
                  <span>
                    <label>College/Institute:</label>
                    <p>{item.institute ? item.institute : "-"}</p>
                  </span>
                  <span>
                    <label>Year of Completion:</label>
                    <p>{item.year ? item.year : "-"}</p>
                  </span>
                </div>
              </div>
            );
          })}
        </>
      )}
    </>
  );
};

const EducationEdit = ({ state, dispatch, onSubmit }) => {
  const [educations, setEducations] = useState(
    state.education.length > 0 ? state.education : [{}]
  );

  const addMore = () => {
    const id = Cookies.get("id");
    const newEducation = { degree: "", institute: "", year: "", DoctorId: id };
    dispatch({
      type: "SET_EDUCATION",
      payload: [...state.education, newEducation],
    });
    setEducations([...educations, newEducation]);
  };

  const handleChange = (index, field, value) => {
    const id = Cookies.get("id");
    const updatedEducations = [...educations];

    updatedEducations[index][field] = value;
    updatedEducations[index]["DoctorId"] = id;

    setEducations(updatedEducations);
    dispatch({ type: "SET_EDUCATION", payload: updatedEducations });
  };

  const removeEducation = (index, id) => {
    const updatedEducations = [...educations];
    if (id != undefined) {
      state.delete.education.push(id);
    }

    updatedEducations.splice(index, 1);
    setEducations(updatedEducations);
    dispatch({
      type: "SET_EDUCATION",
      payload: updatedEducations,
    });
  };

  return (
    <Col md={11} className="m-auto justify-content-center mt-4">
      <Card title={"Education"}>
        <form
          onSubmit={(e) => {
            onSubmit(e);
          }}
        >
          {educations.map((education, index) => (
            <Row className="m-3" key={index}>
              {index !== 0 && (
                <div style={{ float: "right" }} className="mt-4">
                  <IconButton
                    onClick={() => {
                      removeEducation(index, education.id);
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
                  <Form.Label>Degree</Form.Label>
                  <Form.Control
                    required
                    value={education.degree}
                    onChange={(e) =>
                      handleChange(index, "degree", e.target.value)
                    }
                    className="custom-focus"
                    size="md"
                    type="text"
                    placeholder="Harvard University"
                  />
                </Form.Group>
              </Col>
              <Col md={4}>
                <Form.Group>
                  <Form.Label>Institute/College</Form.Label>
                  <Form.Control
                    required
                    value={education.institute}
                    onChange={(e) =>
                      handleChange(index, "institute", e.target.value)
                    }
                    className="custom-focus"
                    size="md"
                    type="text"
                    placeholder="Dow University"
                  />
                </Form.Group>
              </Col>
              <Col md={4}>
                <Form.Group>
                  <Form.Label>Year of Completion</Form.Label>
                  <Form.Control
                    required
                    value={education.year}
                    onChange={(e) =>
                      handleChange(index, "year", e.target.value)
                    }
                    className="custom-focus"
                    size="md"
                    type="text"
                    placeholder="2015"
                  />
                </Form.Group>
              </Col>
            </Row>
          ))}
          <div style={{ float: "right" }} className="p-3 mt-4">
            <button className="btn-orange mx-2">Save</button>
            <button className="btn-orange-light mx-2">Cancel</button>
          </div>
        </form>
        <div className="m-4 mt-5">
          <button
            onClick={addMore}
            style={{ background: "none", border: "none", color: "#f20" }}
          >
            + Add More
          </button>
        </div>
      </Card>
    </Col>
  );
};

const MemoizedEducation = React.memo(Education);
const MemoizedEducationEdit = React.memo(EducationEdit);

export {
  MemoizedEducation as Education,
  MemoizedEducationEdit as EducationEdit,
};
