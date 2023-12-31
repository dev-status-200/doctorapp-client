import { Card } from "@/components/shared/Cards/SecondaryCard";
import { CheckCircleFilled, UserOutlined } from "@ant-design/icons";
import React from "react";
import { Col, Row } from "react-bootstrap";
import { HiCheckCircle, HiOutlineUser } from "react-icons/hi";

const SubscriptionPackages = () => {
  return (
    <>
      <Col md={11} className="m-auto justify-content-center mt-4 ">
        <Card title={"Subscription Packages"}>
          <Row className="d-flex justify-content-center m-2 ">
            <Col
              md={12}
              lg={3}
              className="mt-3 subscription_card rounded mx-3 p-3"
            >
              <div>
                <span className="d-flex">
                  <div className="rounded p-1">
                    <HiOutlineUser
                      fill="orange"
                      stroke="orange"
                      fontSize={50}
                    />
                  </div>
                  <div className="mx-3 pt-2">
                    <h5>
                      <strong>Private</strong>
                    </h5>
                    <h6>2 Licenses</h6>
                  </div>
                </span>
                <ul className="mt-4 p-1 ">
                  <li>
                    <div className="d-flex mt-3 ">
                      <HiCheckCircle
                        fontSize={22}
                        fill="orange"
                        stroke="orange"
                      />
                      <p className="mx-2">Example of Detail</p>
                    </div>
                  </li>
                  <li>
                    <div className="d-flex mt-3 ">
                      <HiCheckCircle
                        fontSize={22}
                        fill="orange"
                        stroke="orange"
                      />
                      <p className="mx-2">Example of Detail</p>
                    </div>
                  </li>
                  <li>
                    <div className="d-flex mt-3 ">
                      <HiCheckCircle
                        fontSize={22}
                        fill="orange"
                        stroke="orange"
                      />
                      <p className="mx-2">Example of Detail</p>
                    </div>
                  </li>
                </ul>
                <hr></hr>
                <div className="text-center p-2">
                  <h1>$49</h1>

                  <button className="btn-orange-xxl mt-4">Purchase</button>
                </div>
              </div>
            </Col>
            <Col
              md={12}
              lg={3}
              className="mt-3 subscription_card rounded mx-3 p-3"
            >
              <div className="rounded">
                <span className="d-flex">
                  <div className="rounded p-1">
                    <HiOutlineUser
                      fill="orange"
                      stroke="orange"
                      fontSize={50}
                    />
                  </div>
                  <div className="mx-3 pt-2">
                    <h5>
                      <strong>Private</strong>
                    </h5>
                    <h6>2 Licenses</h6>
                  </div>
                </span>
                <ul className="mt-4 p-1 ">
                  <li>
                    <div className="d-flex mt-3 ">
                      <HiCheckCircle
                        fontSize={22}
                        fill="orange"
                        stroke="orange"
                      />
                      <p className="mx-2">Example of Detail</p>
                    </div>
                  </li>
                  <li>
                    <div className="d-flex mt-3 ">
                      <HiCheckCircle
                        fontSize={22}
                        fill="orange"
                        stroke="orange"
                      />
                      <p className="mx-2">Example of Detail</p>
                    </div>
                  </li>
                  <li>
                    <div className="d-flex mt-3 ">
                      <HiCheckCircle
                        fontSize={22}
                        fill="orange"
                        stroke="orange"
                      />
                      <p className="mx-2">Example of Detail</p>
                    </div>
                  </li>
                </ul>
                <hr></hr>
                <div className="text-center p-2">
                  <h1>$49</h1>

                  <button className="btn-border-orange-xxl mt-4">
                    Purchase
                  </button>
                </div>
              </div>
            </Col>
            <Col
              md={12}
              lg={3}
              className="mt-3 subscription_card rounded mx-3 p-3"
            >
              <div className="rounded">
                <span className="d-flex">
                  <div className="rounded p-1">
                    <HiOutlineUser
                      fill="orange"
                      stroke="orange"
                      fontSize={50}
                    />
                  </div>
                  <div className="mx-3 pt-2">
                    <h5>
                      <strong>Private</strong>
                    </h5>
                    <h6>2 Licenses</h6>
                  </div>
                </span>
                <ul className="mt-4 p-1 ">
                  <li>
                    <div className="d-flex mt-3 ">
                      <HiCheckCircle
                        fontSize={22}
                        fill="orange"
                        stroke="orange"
                      />
                      <p className="mx-2">Example of Detail</p>
                    </div>
                  </li>
                  <li>
                    <div className="d-flex mt-3 ">
                      <HiCheckCircle
                        fontSize={22}
                        fill="orange"
                        stroke="orange"
                      />
                      <p className="mx-2">Example of Detail</p>
                    </div>
                  </li>
                  <li>
                    <div className="d-flex mt-3 ">
                      <HiCheckCircle
                        fontSize={22}
                        fill="orange"
                        stroke="orange"
                      />
                      <p className="mx-2">Example of Detail</p>
                    </div>
                  </li>
                </ul>
                <hr></hr>
                <div className="text-center p-2">
                  <h1>$49</h1>
                  <button className="btn-orange-xxl mt-4">Purchase</button>
                </div>
              </div>
            </Col>
          </Row>
          <div className="mt-5 container">
            <Col md={12}>
              <div>
                <h5>Key Features</h5>
              </div>
              <Row>
                <Col md={4}>
                  <ul className="key-features">
                    <li>
                      <div className="d-flex mt-3 ">
                        <HiCheckCircle
                          fontSize={22}
                          fill="orange"
                          stroke="orange"
                        />
                        <p className="mx-2">Example of Detail</p>
                      </div>
                    </li>
                    <li>
                      <div className="d-flex ">
                        <HiCheckCircle
                          fontSize={22}
                          fill="orange"
                          stroke="orange"
                        />
                        <p className="mx-2">Example of Detail</p>
                      </div>
                    </li>
                    <li>
                      <div className="d-flex ">
                        <HiCheckCircle
                          fontSize={22}
                          fill="orange"
                          stroke="orange"
                        />
                        <p className="mx-2">Example of Detail</p>
                      </div>
                    </li>
                  </ul>
                </Col>
                <Col md={4}>
                  <ul className="key-features">
                    <li>
                      <div className="d-flex mt-3 ">
                        <HiCheckCircle
                          fontSize={22}
                          fill="orange"
                          stroke="orange"
                        />
                        <p className="mx-2">Example of Detail</p>
                      </div>
                    </li>
                    <li>
                      <div className="d-flex ">
                        <HiCheckCircle
                          fontSize={22}
                          fill="orange"
                          stroke="orange"
                        />
                        <p className="mx-2">Example of Detail</p>
                      </div>
                    </li>
                    <li>
                      <div className="d-flex ">
                        <HiCheckCircle
                          fontSize={22}
                          fill="orange"
                          stroke="orange"
                        />
                        <p className="mx-2">Example of Detail</p>
                      </div>
                    </li>
                  </ul>
                </Col>
                <Col md={4}>
                  <ul className="key-features">
                    <li>
                      <div className="d-flex mt-3 ">
                        <HiCheckCircle
                          fontSize={22}
                          fill="orange"
                          stroke="orange"
                        />
                        <p className="mx-2">Example of Detail</p>
                      </div>
                    </li>
                    <li>
                      <div className="d-flex ">
                        <HiCheckCircle
                          fontSize={22}
                          fill="orange"
                          stroke="orange"
                        />
                        <p className="mx-2">Example of Detail</p>
                      </div>
                    </li>
                    <li>
                      <div className="d-flex ">
                        <HiCheckCircle
                          fontSize={22}
                          fill="orange"
                          stroke="orange"
                        />
                        <p className="mx-2">Example of Detail</p>
                      </div>
                    </li>
                  </ul>
                </Col>
              </Row>
            </Col>
          </div>
        </Card>
      </Col>
    </>
  );
};

export default SubscriptionPackages;
