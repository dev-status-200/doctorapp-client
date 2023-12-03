import React from 'react'
import Cookies from 'cookies';
import axios from 'axios';

import Dashboard from '@/components/layouts/Dashboard/Dashboard'
import verifyToken from '@/apis/verifyToken';

const dashboard = ({sessionData, appointments}) => {
  if(sessionData.isAuthorized){
    console.log(appointments)
  }
  return (
    <><Dashboard appointments={appointments.result} sessionData={appointments}/></>
  )
}

export default dashboard

export async function getServerSideProps({ req, res }) {
  const sessionRequest = await verifyToken(Cookies, req, res);
  const cookies = new Cookies(req, res);
  const id = cookies.get("id");
  
  const appointments = await axios
    .get(process.env.NEXT_PUBLIC_GET_DOCTOR_APPOINTMENTS,{headers:{id:id}})
    .then((r) => r.data);

  return {
    props: {
      sessionData: sessionRequest,
      appointments: appointments,
    },
  };
}