import React, { useEffect } from "react";
import axios from "axios";
import Router from "next/router";

import Cookies from "cookies";

import Profile from "@/components/layouts/Profile";
import verifyToken from "@/apis/verifyToken";

const profile = ({ sessionData, data, loading }) => {
  useEffect(() => {
    if (data === null || sessionData === null || loading) {
      Router.push("/login");
    }
  }, []);

  return !loading ? <Profile sessionData={sessionData} data={data} /> : <></>;
};

export default profile;

export async function getServerSideProps({ req, res }) {
  try {
    const cookies = new Cookies(req, res);
    const UserId = cookies.get("id");

    const sessionRequest = await verifyToken(Cookies, req, res);

    const profileData = await axios
      .get(process.env.NEXT_PUBLIC_DOCTOR_PROFILE_GET, {
        headers: { id: UserId },
      })
      .then((x) => x.data);

    return {
      props: {
        sessionData: sessionRequest,
        data: profileData.result,
        loading: false,
      },
    };
  } catch (error) {
    console.error("Error in getServerSideProps:", error);
    return { props: { data: null, sessionData: null, loading: true } };
  }
}
