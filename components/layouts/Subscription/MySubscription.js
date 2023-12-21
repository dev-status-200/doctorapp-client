import React, { useState } from "react";

import { Card } from "@/components/shared/Cards/SecondaryCard";
import { Col, Row } from "react-bootstrap";
import PrimaryModal from "@/components/shared/Modal";
import { Checkbox } from "antd";

const MySubscription = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      <Col md={11} className="m-auto justify-content-center mt-4">
        <Card title={"Subscription Details"}>
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
            <br className="mt-5"></br>
            <br className="mt-5"></br>
            <br className="mt-5"></br>
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
            <div className="mt-5" style={{ float: "right" }}>
              <button
                className="btn-orange-light mt-3"
                onClick={() => setShow(true)}
              >
                Cancel Subscription
              </button>
              <button className="btn-orange mt-3 mx-4">
                Change Subscription
              </button>
            </div>
          </Row>
        </Card>
      </Col>
      <PrimaryModal
        setShow={setShow}
        title={"Add new service"}
        primary_text={"Add"}
        footer={true}
        show={show}
        backdrop={"none"}
        keyboard={true}
        loading={false}
        onClick={false}
        onPrimaryAction={false}
      >
        <div className="">
          <ul style={{listStyle:'none'}}>
            <li>
              <Checkbox />
              I don't want it anymore
            </li>
            <li>
              <Checkbox />
              I don't want it anymore
            </li>
            <li>
              <Checkbox />
              I don't want it anymore
            </li>
            <li>
              <Checkbox />
              I don't want it anymore
            </li>
          </ul>
        </div>
      </PrimaryModal>
    </>
  );
};

export default MySubscription;
