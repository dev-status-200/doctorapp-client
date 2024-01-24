import CalendarGrid from "@/components/shared/Calendar";
import React from "react";
import { Col, Row } from "react-bootstrap";

const Bookings = ({ appointments }) => {
  return (
    <React.Fragment>
      <Row>
        <Col md={2}>
          <div className="panel-container p-3">
            <ul>
              <li>Option 1</li>
              <li>Option 2</li>
              <li>Option 3</li>
              <li>Option 4</li>
              <li>Option 5</li>
            </ul>
          </div>
        </Col>
        <Col md={10}>
          <div className="container m-auto mt-5">
            <CalendarGrid appointments={appointments} />
          </div>
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default Bookings;
