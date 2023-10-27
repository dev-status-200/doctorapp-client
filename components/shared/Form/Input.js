import React, { useState } from "react";
import { Form } from 'react-bootstrap';
import { HiX } from 'react-icons/hi';

const TagInput = ({state, dispatch}) => {
  const [services, setServices] = useState(state);
  const [specializations, setSpecializations] = useState();
  const [newService, setNewService] = useState('');
  const [newSpecialization, setNewSpecialization] = useState('');

  const addService = () => {
    if (newService.trim() !== '') {
      setServices([...services, newService]);
      setNewService('');
    }
  };

  const addSpecialization = () => {
    if (newSpecialization.trim() !== '') {
      setSpecializations([...specializations, newSpecialization]);
      setNewSpecialization('');
    }
  };

  const removeService = (service) => {
    setServices(services.filter((s) => s !== service));
  };

  const removeSpecialization = (specialization) => {
    setSpecializations(specializations.filter((s) => s !== specialization));
  };

  return (
    <div className="tag-input-container">
      <div className="tag-group">
        <label>Services *</label>
        {services.map((service) => (
          <span key={service} className="tag">
            {service}
            <span onClick={() => removeService(service)}><HiX fontSize={22} /></span>
          </span>
        ))}
        <Form.Control
          className="custom-focus"
          size="md"
          type="text"
          placeholder="Services"
          value={newService}
          onChange={(e) => setNewService(e.target.value)}
        />
        <button onClick={addService}>Add</button>
      </div>
      <div className="tag-group">
        <label>Specialization *</label>
        {specializations.map((specialization) => (
          <span key={specialization} className="tag">
            {specialization}
            <span onClick={() => removeSpecialization(specialization)}><HiX fontSize={22} /></span>
          </span>
        ))}
        <Form.Control
          className="custom-focus"
          size="md"
          type="text"
          placeholder="Specialization"
          value={newSpecialization}
          onChange={(e) => setNewSpecialization(e.target.value)}
        />
        <button onClick={addSpecialization}>Add</button>
      </div>
    </div>
  );
};



export { TagInput };
