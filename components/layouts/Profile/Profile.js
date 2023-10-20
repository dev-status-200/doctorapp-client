import React, { useState } from "react";

import { Row, Col } from "react-bootstrap";
import { HiOutlineArrowRightOnRectangle, HiChevronLeft } from "react-icons/hi2";

import Card from "@/components/shared/Cards/SecondaryCard";

import { MyAccount, MyAccountEdit } from "./MyAccount";
import {
  ClinicalInformation,
  ClinicalInformationEdit,
} from "./ClinicalInformation";
import { ContentDetails, ContentDetailsEdit } from "./ContentDetails";
import { Pricing, PricingEdit } from "./Pricing";
import { Services, ServicesEdit } from "./Services";

const ProfileOverview = ({ setEdit }) => {
  return (
    <div className="container-fluid mt-2">
      <div className="top-section mb-4 mt-4">
        <h4>Profile Setting</h4>
      </div>
      <Row className="px-5">
        <Col md={6}>
          <h4 className="">
            <strong>Profile Overview</strong>
          </h4>
        </Col>
        <Col md={6} className="text-end">
          <button className="btn-orange-light mx-3">
            <HiOutlineArrowRightOnRectangle size={20} /> Logout
          </button>
          <button
            onClick={() => {
              setEdit(true);
            }}
            className="btn-orange"
          >
            Edit Profile
          </button>
        </Col>
      </Row>
      <Row className="m-4">
        <Col md={12} xl={8} className="mt-3">
          <Card title={"My Account"}>
            <MyAccount />
          </Card>
        </Col>
        <Col md={12} xl={4} className="mt-3">
          <Card title={"Clinical Information"}>
            <ClinicalInformation />
          </Card>
        </Col>
      </Row>
      <Row className="m-4">
        <Col lg={12} xl={4} className="mt-3">
          <Card title={"Content Details"}>
            <ContentDetails />
          </Card>
        </Col>
        <Col lg={12} xl={4} className="mt-3">
          <Card title={"Pricing"}>
            <Pricing />
          </Card>
        </Col>
        <Col lg={12} xl={4} className="mt-3">
          <Card title={"Service & Specialization"}>
            <Services />
          </Card>
        </Col>
      </Row>
    </div>
  );
};

const EditProfile = ({ setEdit }) => {
  const [active, setActive] = useState(0);
  const renderStep = () => {
    switch (active) {
      case 0:
        return <MyAccountEdit />;
      case 1:
        return <ClinicalInformationEdit />;
      case 2:
        return <ServicesEdit />;
      case 3:
        return <ContentDetailsEdit />;
      case 4:
        return <PricingEdit />;

      default:
        return null;
    }
  };
  return (
    <>
      <div className="container-fluid mt-2">
        <div className="top-section mb-4 mt-4">
          <Row>
            <Col md={6}>
              <h4>
                <HiChevronLeft
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    setEdit(false);
                  }}
                  fontSize={30}
                />
                <strong className="mx-2">Profile Overview</strong>
              </h4>
            </Col>
            <Col md={6} className="text-end">
              <button className="btn-orange-light mx-3">
                <HiOutlineArrowRightOnRectangle size={20} /> Logout
              </button>
            </Col>
          </Row>
        </div>
        <Row className="px-5"></Row>
        <Row>{renderStep()}</Row>
      </div>
    </>
  );
};

export { ProfileOverview, EditProfile };
