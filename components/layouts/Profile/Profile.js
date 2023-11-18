import React, { useState, useReducer } from "react";
import { reducer, initialState } from "./profileReducer";
import axios from "axios";

import { Row, Col } from "react-bootstrap";
import { HiOutlineArrowRightOnRectangle, HiChevronLeft } from "react-icons/hi2";

import { profileMenu } from "@/utils/Menu";

import { MyAccount, MyAccountEdit } from "./MyAccount";
import {
  ClinicalInformation,
  ClinicalInformationEdit,
} from "./ClinicalInformation";
import { ContentDetails, ContentDetailsEdit } from "./ContentDetails";
// import { FacilityInfoEdit } from "./FacilityInfo";
import { Pricing, PricingEdit } from "./Pricing";
import { Services, ServicesEdit } from "./Services";
import { Education, EducationEdit } from "./Education";
import { Experience, ExperienceEdit } from "./Experience";

import Card from "@/components/shared/Cards/SecondaryCard";
import SubMenu from "@/components/shared/SubMenu";
import notificationComp from "@/functions/notificationComp";
import PrimaryModal from "@/components/shared/Modal";

const ProfileOverview = ({ data, setEdit }) => {
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
          <button onClick={() => setEdit(true)} className="btn-orange">
            Edit Profile
          </button>
        </Col>
      </Row>
      <Row className="m-4">
        <Col md={12} xl={8} className="mt-3">
          <Card title={"My Account"}>
            <MyAccount data={data} />
          </Card>
        </Col>
        <Col md={12} xl={4} className="mt-3">
          <Card title={"Clinical Information"}>
            <ClinicalInformation data={data} />
          </Card>
        </Col>
      </Row>
      <Row className="m-4">
        <Col lg={12} xl={4} className="mt-3">
          <Card title={"Content Details"}>
            <ContentDetails data={data} />
          </Card>
        </Col>
        <Col lg={12} xl={4} className="mt-3">
          <Card title={"Pricing"}>
            <Pricing data={data} />
          </Card>
        </Col>
        <Col lg={12} xl={4} className="mt-3">
          <Card title={"Service & Specialization"}>
            <Services data={data} />
          </Card>
        </Col>
        <Col lg={12} xl={4} className="mt-3">
          <Card title={"Education"}>
            <Education data={data} />
          </Card>
        </Col>
        <Col lg={12} xl={4} className="mt-3">
          <Card title={"Experience"}>
            <Experience data={data} />
          </Card>
        </Col>
      </Row>
    </div>
  );
};

const EditProfile = ({ setEdit, data }) => {
  const [active, setActive] = useState(0);

  const [state, dispatch] = useReducer(reducer, initialState);
  const [message, setMessage] = useState(
    "Are you sure you want to save the changes?"
  );

  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);

  React.useEffect(() => {
    if (data) {
      dispatch({ type: "SET_ALL", payload: {
        ...state,
        specialities:data.specialities,
        clinic:data.Clinics,
        education:data.Education,
        experience:data.Experiences,
        doctor:data,
        pricing:data.Pricings,
        specialization:data.Specializations,
        services:data.Services
      } });
      // dispatch({ type: "SET_ACCOUNT", payload: data });
      // dispatch({ type: "SET_CLINIC", payload: data.Clinics });
      // dispatch({ type: "SET_EDUCATION", payload: data.Education });
      // dispatch({ type: "SET_EXPERIENCE", payload: data.Experiences });
      // dispatch({ type: "SET_PRICING", payload: data.Pricings });
      // dispatch({ type: "SET_SPECIALIZATION", payload: data.Specializations });
      // dispatch({ type: "SET_SERVICES", payload: data.Services });
    }
  }, []);
  
  const renderStep = () => {
    switch (active) {
      case 0:
        return <MyAccountEdit onSubmit={onSubmit} />;
      case 1:
        return <ClinicalInformationEdit onSubmit={onSubmit} />;
      case 2:
        return <ContentDetailsEdit onSubmit={onSubmit} />;
      case 3:
        return <PricingEdit onSubmit={onSubmit} />;
      case 4:
        return <ServicesEdit onSubmit={onSubmit} />;
      case 5:
        return <EducationEdit onSubmit={onSubmit} />;
      case 6:
        return <ExperienceEdit onSubmit={onSubmit} />;

      default:
        return null;
    }
  };

  const onSubmit = (e) =>{
    e.preventDefault()
    setShow(true)
  }

  const onClick = () => {
    setLoading(true);
    try {
      axios
        .post(process.env.NEXT_PUBLIC_DOCTOR_PROFILE_UPDATE, state)
        .then((r) => {
          if (r.data.status === "success") {
            setMessage(
              "Please wait! Your changes are being save and then you will be redirected to your profile dashboard."
            );
            notificationComp(
              "Profile updated!",
              "Your changes are being saved.",
              "green"
            );
            window.location.reload();
          } else {
            notificationComp("Error!", "Profile not updated!", "red");
          }
        });
    } catch (error) {
      console.error(error);
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

      <SubMenu menu={profileMenu} setStep={setActive} step={active} />
      <Row>{React.cloneElement(renderStep(), { state, dispatch })}</Row>
    </div>
    <PrimaryModal
      loading={loading}
      setShow={setShow}
      title={"Save Changes?"}
      primary_text={"Yes"}
      show={show}
      onClick={onClick}
      onPrimaryAction={onClick}
    >
      <p>{message}</p>
    </PrimaryModal>
  </>
  );
};

const MemoizedProfileOverview = React.memo(ProfileOverview);
const MemoizedEditProfile = React.memo(EditProfile);

export {
  MemoizedProfileOverview as ProfileOverview,
  MemoizedEditProfile as EditProfile
};