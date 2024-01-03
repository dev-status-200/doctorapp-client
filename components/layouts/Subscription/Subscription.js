import React, { useState, useReducer,memo } from "react";
// import { reducer, initialState } from "./profileReducer";
import { useRouter } from "next/router";
import axios from "axios";

import { subscriptionMenu } from "@/utils/Menu";

import { Row, Col } from "react-bootstrap";
import { HiChevronLeft } from "react-icons/hi2";

import SubMenu from "@/components/shared/SubMenu";
import notificationComp from "@/functions/notificationComp";
import PrimaryModal from "@/components/shared/Modal";
import LogoutBtn from "@/components/shared/Button/LogoutBtn";

import MySubscription from "./MySubscription";
import SubscriptionPackages from "./SubscriptionPackages";

const Subscription = ({data }) => {
  const [active, setActive] = useState(0);

  const router = useRouter()
//   const [state, dispatch] = useReducer(reducer, initialState);
  const [message, setMessage] = useState(
    "Are you sure you want to save the changes?"
  );

  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);

  React.useEffect(() => {
    if (data) {
      dispatch({
        type: "SET_ALL",
        payload: {
          ...state,
          specialities: data.specialities,
          clinic: data.Clinics,
          education: data.Education,
          experience: data.Experiences,
          doctor: data,
          pricing: data.Pricings,
          specialization: data.Specializations,
          services: data.Services,
        },
      });
    }
  }, []);

  const renderStep = () => {
    switch (active) {
      case 0:
        return <MySubscription/>;
      case 1:
        return <SubscriptionPackages/>;

      default:
        return null;
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setShow(true);
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
                    router.push('/dashboard')
                  }}
                  fontSize={30}
                />
                <strong className="mx-2">Subscription</strong>
              </h4>
            </Col>
            <Col md={6} className="text-end">
              <LogoutBtn />
            </Col>
          </Row>
        </div>

        <SubMenu menu={subscriptionMenu} setStep={setActive} step={active} />
        <Row>{React.cloneElement(renderStep(), { })}</Row>
      </div>
      <PrimaryModal
        loading={loading}
        setShow={setShow}
        backdrop={"none"}
        keyboard={true}
        footer={true}
        title={"Save Changes?"}
        primary_text={"Yes"}
        show={show}
        onClick={null}
        onPrimaryAction={null}
      >
        <p>{message}</p>
      </PrimaryModal>
    </>
  );
};
 
export default memo(Subscription)
