import { Card } from "@/components/shared/Cards/SecondaryCard";
import { UserOutlined } from "@ant-design/icons";
import React from "react";
import { Col } from "react-bootstrap";

const SubscriptionPackages = () => {
  return (
    <>
      <Col md={11} className="m-auto justify-content-center mt-4">
        <Card title={"Subscription Details"}>
          <Col md={4}>
            <div>
              <span>
                <UserOutlined /> <h5>Private</h5>
              </span>
            </div>
          </Col>
          <Col md={4}></Col>
          <Col md={4}></Col>
        </Card>
      </Col>
    </>
  );
};

export default SubscriptionPackages;
