import React, { useState } from "react";

import Card from "@/components/shared/Cards/SecondaryCard";
import { Col, Form } from "react-bootstrap";

import { HiX } from "react-icons/hi";
import Cookies from "js-cookie";

const Services = ({ data }) => {
  const displaySpecializations = data?.Specializations || [];
  const displayServices = data?.Services || [];
  return (
    <>
      {displaySpecializations.length === 0 ? (
        <div className="form-container">
          <div className="form-section">
            <span>
              <label>There are no service and specialization added.</label>
            </span>
          </div>
        </div>
      ) : (
        <div className="form-container">
          <div className="form-section">
            <span>
              <label>
                Services<small>*</small>:
              </label>
              {displayServices.map((item, index) => {
                return <p key={item.name}>{item.name}</p>;
              })}
            </span>
            {displaySpecializations.map((item, index) => {
              return (
                <span key={item.name}>
                  <label>
                    Specialization {index + 1}
                    <small>*</small>:
                  </label>
                  <p>{item.name}</p>
                </span>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
};

const ServicesEdit = ({ state, dispatch, onClick }) => {
  const [newService, setNewService] = useState("");
  const [newSpecialization, setNewSpecialization] = useState("");

  const addService = () => {
    if (newService.trim() !== "") {
      const id = Cookies.get("id");
      const newServiceData = { name: newService, DoctorId: id };
      dispatch({
        type: "SET_SERVICES",
        payload: [...state.services, newServiceData],
      });

      setNewService("");
    }
  };

  const addSpecialization = () => {
    if (newSpecialization.trim() !== "") {
      const id = Cookies.get("id");
      const newSpecializationData = { name: newSpecialization, DoctorId: id };
      dispatch({
        type: "SET_SPECIALIZATION",
        payload: [...state.specialization, newSpecializationData],
      });
      setNewSpecialization("");
    }
  };

  const removeService = (service, id) => {
    if (id != undefined) {
      state.delete.services.push(id);
    }
    dispatch({ type: "REMOVE_SERVICE", payload: service });
  };

  const removeSpecialization = (specialization, id) => {
    if (id != undefined) {
      state.delete.specialization.push(id);
    }

    dispatch({ type: "REMOVE_SPECIALIZATION", payload: specialization });
  };

  return (
    <Col md={11} className="m-auto justify-content-center mt-4">
      <Card title={"Services & Specialization"}>
        <div className="tag-input-container">
          <div className="tag-group">
            <label>Services *</label>
            {state.services.length > 0 && (
              <>
                {state.services.map((service) => (
                  <span key={service.name} className="tag">
                    {service.name}
                    <span onClick={() => removeService(service, service.id)}>
                      <HiX fontSize={22} />
                    </span>
                  </span>
                ))}
              </>
            )}
            <Form.Control
              className="custom-focus"
              size="md"
              type="text"
              placeholder="Services"
              value={newService}
              onChange={(e) => setNewService(e.target.value)}
            />
            <button className="btn-orange-light mt-3" onClick={addService}>
              Add
            </button>
          </div>
          <div className="tag-group">
            <label>Specialization *</label>
            {state.specialization.length > 0 && (
              <>
                {state.specialization.map((specialization) => (
                  <span key={specialization.name} className="tag">
                    {specialization.name}
                    <span
                      onClick={() =>
                        removeSpecialization(specialization, specialization.id)
                      }
                    >
                      <HiX fontSize={22} />
                    </span>
                  </span>
                ))}
              </>
            )}
            <Form.Control
              className="custom-focus"
              size="md"
              type="text"
              placeholder="Specialization"
              value={newSpecialization}
              onChange={(e) => setNewSpecialization(e.target.value)}
            />
            <button
              onClick={addSpecialization}
              className="btn-orange-light mt-3"
            >
              Add
            </button>
          </div>
        </div>
      </Card>
      <div style={{ float: "right" }} className="p-3 mt-4">
        <button onClick={onClick} className="btn-orange mx-2">
          Save
        </button>
        <button className="btn-orange-light mx-2">Cancel</button>
      </div>
    </Col>
  );
};

const MemoizedServices = React.memo(Services);
const MemoizedServicesEdit = React.memo(ServicesEdit);

export { MemoizedServices as Services, MemoizedServicesEdit as ServicesEdit };
