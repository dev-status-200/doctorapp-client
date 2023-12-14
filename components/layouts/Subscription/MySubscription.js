import React from "react";

import { Card } from "@/components/shared/Cards/SecondaryCard";
import { Col, Row } from "react-bootstrap";

const MySubscription = () => {
  return (
    <>
      <Col md={11} className="m-auto justify-content-center mt-4">
        <Card title={"My Account"}>
          <Row className=" m-3 justify-content-center mt-4">
            <Col md={4}>
              <div>
                <ul>
                  <li>
                    <strong>Month</strong>
                  </li>
                  <li>June</li>
                </ul>
              </div>
            </Col>
            <Col md={4}>
              <div>
                <ul>
                  <li>
                    <strong>Starts From</strong>
                  </li>
                  <li>3rd June 23</li>
                </ul>
              </div>
            </Col>
            <Col md={4}>
            <div>
                <ul>
                  <li>
                    <strong>Ends On</strong>
                  </li>
                  <li>3rd June 23</li>
                </ul>
              </div>
            </Col>
            <br></br>
            <Col md={4}>
            <div>
                <ul>
                  <li>
                    <strong>Amount</strong>
                  </li>
                  <li>$23</li>
                </ul>
              </div>
            </Col>
            <Col md={4}>
            <div>
                <ul>
                  <li>
                    <strong>Pacakge Type</strong>
                  </li>
                  <li>Exclusive</li>
                </ul>
              </div>
            </Col>
            <Col md={4}>
            <div>
                <ul>
                  <li>
                    <strong>Payment Method</strong>
                  </li>
                  <li>Paypal</li>
                </ul>
              </div>
            </Col>
          </Row>
        </Card>
      </Col>
    </>
  );
};

export default MySubscription;
