import React from 'react'
import Bookings from '@/components/layouts/Bookings'
import verifyToken from '@/apis/verifyToken'
import Cookies from 'cookies'
import axios from 'axios'

const bookings = ({appointments}) => {
  return (
    <React.Fragment>
      <Bookings appointments={appointments.result}/>
    </React.Fragment>
  )
}

export default bookings

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