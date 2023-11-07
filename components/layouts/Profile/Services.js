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

  const addSpecialization = async(value) => {
    console.log("here")
    const id = await Cookies.get("id");
    const newSpecializationData = { name: value, DoctorId: id };
    let exist = false;
    state.specialization.forEach((x)=>{
      x.name==value?exist=true:null;
    })
    !exist?
    dispatch({
      type: "SET_SPECIALIZATION",
      payload: [...state.specialization, newSpecializationData],
    }):null;
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
                      <span className="mx-2"></span>
                      <HiX fontSize={17} />
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
                    <span className="mx-1"></span>
                    <span
                      onClick={() =>
                        removeSpecialization(specialization, specialization.id)
                      }
                    >
                      <HiX fontSize={17} />
                    </span>
                  </span>
                ))}
              </>
            )}
            <Form.Select className="custom-focus mt-2"
              value={"1"} onChange={(e) => addSpecialization(e.target.value)}
            >
              <option value={'1'} disabled>Select Speciality</option>
              {state.specialities.map((x, i)=>{
                return(
                  <option value={x.name} key={i}>{x.name}</option>
                )
              })}
            </Form.Select>
          </div>
        </div>
      </Card>
      <div style={{ float: "right" }} className="p-3 mt-4">
        <button onClick={()=>{onClick(true)}}  className="btn-orange mx-2">
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
