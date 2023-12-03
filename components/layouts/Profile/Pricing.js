import React, { useState } from "react";
import Cookies from "js-cookie";

import { Col, Form } from "react-bootstrap";

import {Card} from "@/components/shared/Cards/SecondaryCard";
import PrimaryModal from "@/components/shared/Modal";

const Pricing = ({ data }) => {
  const displayPricings = data?.Pricings || [];
  console.log(displayPricings);
  return (
    <>
      {displayPricings.length === 0 ? (
        <div className="form-container">
          <div className="form-section">
            <span>
              <label>There are no prices added.</label>
            </span>
          </div>
        </div>
      ) : (
        <div className="form-container">
          <div className="form-section">
            {displayPricings.map((item, index) => {
              return (
                <span key={index}>
                  <label>
                    {item.name}
                    <small>*</small>:
                  </label>
                  <p>{item.price}</p>
                </span>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
};

const PricingEdit = ({ state, dispatch, onSubmit }) => {
  const [show, setShow] = useState(false);
  const [newService, setNewService] = useState({ name: "", price: "" });

  const addService = () => {
    const id = Cookies.get("id");
    const newServiceData = {
      name: newService.service,
      price: newService.price,
      DoctorId: id,
    };
    dispatch({
      type: "SET_PRICING",
      payload: [...state.pricing, newServiceData],
    });
    setNewService({ service: "", price: "" });
    setShow(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    const id = Cookies.get("id");

    newService["DoctorId"] = id;
    setNewService({ ...newService, [name]: value });
  };

  const removeService = (index, id) => {
    if (id != undefined) {
      state.delete.pricing.push(id);
    }
    const updatedPricing = [...state.pricing];

    updatedPricing.splice(index, 1);
    dispatch({ type: "SET_PRICING", payload: updatedPricing });
  };

  return (
    <>
      <Col md={11} className="m-auto justify-content-center mt-4">
        <Card title={"Pricing"}>
          <div style={{ float: "right" }}>
            <button className="btn-orange mx-5 " onClick={() => setShow(true)}>
              Add more services
            </button>
          </div>
          <div className="services-grid">
            {state.pricing.length ? (
              <>
                {state.pricing.map((service, index) => (
                  <div key={service.name} className="service-card">
                    <div className="service-header">
                      {service.name}
                      <span
                        onClick={() => removeService(index, service.id)}
                        className="remove-service"
                      >
                        ✖
                      </span>
                    </div>
                    <div className="service-price">{service.price}</div>
                  </div>
                ))}
              </>
            ) : (
              <>No prices added yet</>
            )}
          </div>
        </Card>
        <div className="mt-5" style={{ float: "right" }}>
          <button
            onClick={(e) => {
              onSubmit(e);
            }}
            className="btn-orange mx-2"
          >
            Save
          </button>
          <button className="btn-orange-light mx-2">Cancel</button>
        </div>
      </Col>
      <PrimaryModal
        setShow={setShow}
        title={"Add new service"}
        primary_text={"Add"}
        show={show}
        backdrop={'none'}
        keyboard={true}
        loading={false}
        onClick={addService}
        onPrimaryAction={addService}
      >
        <Form.Group>
          <Form.Label>Service</Form.Label>
          <Form.Control
            name="service"
            value={newService.service||''}
            onChange={handleChange}
            className="custom-focus"
            size="md"
            type="text"
            placeholder="Service Name"
          />
        </Form.Group>

        <Form.Group className="mt-4">
          <Form.Label>Price</Form.Label>
          <Form.Control
            name="price"
            value={newService.price||''}
            onChange={handleChange}
            className="custom-focus"
            size="md"
            type="text"
            placeholder="Price"
          />
        </Form.Group>
      </PrimaryModal>
    </>
  );
};

const MemoizedPricing = React.memo(Pricing);
const MemoizedPricingEdit = React.memo(PricingEdit);

export { MemoizedPricing as Pricing, MemoizedPricingEdit as PricingEdit };
