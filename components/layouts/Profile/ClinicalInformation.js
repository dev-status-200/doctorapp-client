import React, { useState } from "react";
import Cookies from "js-cookie";

import { HiOutlineSquaresPlus } from "react-icons/hi2";
import { Col, Row, Form } from "react-bootstrap";
import { HiPlusCircle, HiXCircle } from "react-icons/hi2";
import { Image } from "antd";

import Card from "@/components/shared/Cards/SecondaryCard";
import UploadFile from "@/components/shared/Form/UploadFile";
import IconButton from "@/components/shared/Form/IconButton";

const ClinicalInformation = ({ data }) => {
  const displayClinicInfo = data?.Clinics || [];
  return (
    <>
      {displayClinicInfo.length === 0 ? (
        <div className="form-container">
          <div className="form-section">
            <span>
              <label>
                Clinic Name<small>*</small>:
              </label>
              <p>-</p>
            </span>
            <span>
              <label>
                Clinic Address<small>*</small>:
              </label>
              <p>-</p>
            </span>
            <span>
              <label>
                Clinic Email<small>*</small>:
              </label>
              <p>-</p>
            </span>
            <>
              <label>Clinic Image:</label>

              <div className="m-4">
                <HiOutlineSquaresPlus size={35} /> No images added yet, please
                add the images.
              </div>
            </>
          </div>
        </div>
      ) : (
        <>
          {displayClinicInfo.map((item, index) => {
            return (
              <div key={index} className="form-container">
                <div key={item.name} className="form-section">
                  <span>
                    <label>
                      Clinic Name<small>*</small>:
                    </label>
                    <p>{item.name ? item.name : "-"}</p>
                  </span>
                  <span>
                    <label>
                      Clinic Address<small>*</small>:
                    </label>
                    <p>{item.address ? item.address : "-"}</p>
                  </span>
                  <span>
                    <label>
                      Clinic Email<small>*</small>:
                    </label>
                    <p>{item.email ? item.email : "-"}</p>
                  </span>

                  <>
                    <label>Clinic Image:</label>
                    {item.images === null || item.images === "" ? (
                      <div key={index} className="m-4">
                        <HiOutlineSquaresPlus size={35} /> No images added yet,
                        please add the images.
                      </div>
                    ) : (
                      <div className="scroll-div">
                        {item.images.map((img, i) => (
                          <Image
                            key={i}
                            className="p-1"
                            style={{ borderRadius: 10 }}
                            width={250}
                            height={150}
                            alt="clinic-img"
                            src={img}
                          />
                        ))}
                      </div>
                    )}
                  </>
                </div>
              </div>
            );
          })}
        </>
      )}
    </>
  );
};

const ClinicalInformationEdit = ({ state, dispatch, onSubmit }) => {
  const [clinics, setClinics] = useState(
    state.clinic.length > 0 ? state.clinic : [{}]
  );

  const addMore = () => {
    const id = Cookies.get("id");
    const newClinic = {
      name: "",
      address: "",
      email: "",
      images: "",
      DoctorId: id,
    };
    dispatch({
      type: "SET_CLINIC",
      payload: [...state.clinic, newClinic],
    });
    setClinics([...clinics, newClinic]);
  };

  const handleChange = (index, field, value) => {
    const id = Cookies.get("id");
    const updatedClinics = [...clinics];

    updatedClinics[index][field] = value;
    updatedClinics[index]["DoctorId"] = id;
    setClinics(updatedClinics);

    dispatch({ type: "SET_CLINIC", payload: updatedClinics });
  };

  const addImage = (index, imageUrl) => {
    const updatedClinics = [...clinics];

    if (!Array.isArray(updatedClinics[index].images)) {
      updatedClinics[index]["images"] = [];
    }

    updatedClinics[index]["images"] = [
      ...updatedClinics[index]["images"],
      imageUrl,
    ];
    setClinics(updatedClinics);

    setClinics(updatedClinics);
    dispatch({
      type: "SET_CLINIC",
      payload: updatedClinics,
    });
  };

  const removeClinic = (index, id) => {
    const updatedClinics = [...clinics];
    console.log(id, index);
    if (id != undefined || id != "") {
      state.delete.clinic.push(id);
      console.log(state.delete.clinic);
    }

    updatedClinics.splice(index, 1);
    setClinics(updatedClinics);
    dispatch({
      type: "SET_CLINIC",
      payload: updatedClinics,
    });
  };

  return (
    <Col md={11} className="m-auto justify-content-center mt-4">
      <Card title={"Clinic Information"}>
        <form
          onSubmit={(e) => {
            onSubmit(e);
          }}
        >
          {clinics.map((clinic, index) => {
            return (
              <Row key={index} className="m-3">
                {index !== 0 && (
                  <div style={{ float: "right" }} className="mt-4">
                    <IconButton
                      onClick={() => {
                        removeClinic(index, clinic.id);
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
                    <Form.Label>Clinic Name</Form.Label>
                    <Form.Control
                      required
                      value={clinic.name||''}
                      onChange={(e) =>
                        handleChange(index, "name", e.target.value)
                      }
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
                      required
                      value={clinic.address||''}
                      onChange={(e) =>
                        handleChange(index, "address", e.target.value)
                      }
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
                      required
                      value={clinic.email||''}
                      onChange={(e) =>
                        handleChange(index, "email", e.target.value)
                      }
                      className="custom-focus"
                      size="md"
                      type="email"
                      placeholder="xyz@gmail.com"
                    />
                  </Form.Group>
                </Col>
                <Col md={12} className="mt-4">
                  <Form.Group>
                    <Form.Label>Clinic Images</Form.Label>

                    <UploadFile
                      setUploadedImgURL={(imageUrl) =>
                        addImage(index, imageUrl)
                      }
                      index={index}
                    />
                  </Form.Group>
                  {clinic.images && clinic.images.length > 0 && (
                    <div className="m-4">
                      <div className="grid-container">
                        <div className="grid-content">
                          {clinic.images.map((img, i) => {
                            return (
                              <Image
                                className="p-1"
                                key={i}
                                style={{ borderRadius: 10 }}
                                width={250}
                                height={150}
                                src={img}
                              />
                            );
                          })}
                        </div>
                      </div>
                      <div>
                        <HiXCircle
                          style={{ position: "absolute", bottom: 3100 }}
                        />
                      </div>
                    </div>
                  )}
                </Col>
              </Row>
            );
          })}
          <div className="m-4">
            <IconButton
              onClick={addMore}
              title={"Add More Clinics"}
              icon={<HiPlusCircle size={23} />}
            />
          </div>
          <div style={{ float: "right" }} className="p-3 mt-4">
            <button className="btn-orange mx-2" type="submit">
              Save
            </button>
            <button className="btn-orange-light mx-2">Cancel</button>
          </div>
        </form>
      </Card>
    </Col>
  );
};

const MemoizedClinicalInformation = React.memo(ClinicalInformation);
const MemoizedClinicalInformationEdit = React.memo(ClinicalInformationEdit);

export {
  MemoizedClinicalInformation as ClinicalInformation,
  MemoizedClinicalInformationEdit as ClinicalInformationEdit,
};
