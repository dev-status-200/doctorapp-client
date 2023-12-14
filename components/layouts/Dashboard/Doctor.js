import React,{ memo, useEffect, useState } from "react";
import Cookies from "js-cookie";
import { dataArray, dataColumns } from "@/mock/appointments";
import { HiOutlineCalendarDays } from "react-icons/hi2";

import Table from "../../shared/Table/Table";
import PieChart from "../../shared/Charts/PieChart";
import Card from "../../shared/Cards/Card";

import moment from "moment";

const Doctor = ({appointments}) => {
  const [loading, setLoading] = useState(false)

  const data = {
    labels: ["Complete Appointments", "Cancel Appointments"],
    data: [300, 150],
    backgroundColor: ["rgba(255, 99, 132, 0.2)", "rgba(54, 162, 235, 0.2)"],
    borderColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)"],
  };

  useEffect(() => {
    setLoading(true)
    getUsername();
    if(appointments.length>0){
      setLoading(false)
    }else{
      setLoading(false)
    }
  }, [])

  const [username, setUsername] = useState("")

  async function getUsername(){
    let tempUser = await Cookies.get("username");
    setUsername(tempUser)
  }
  
  return (
  <div className="container-fluid mt-2">
    <div className="top-section mb-4">
      <h4>My Dashboard</h4>
    </div>
    <div className="row middle-section">
      <div className="col-md-6">
        <h3>Welcome Dr. {username}</h3>
        <p>{moment().format("dddd, DD MMMM, YYYY")}</p>
        {/* <p>Monday, 7th January, 2023</p> */}
      </div>
      <div className="col-md-6 d-flex align-items-center justify-content-end">
        <HiOutlineCalendarDays
          color="orange"
          size={20}
          className="icon mr-2"
        />
        <span>See Appointments on Calender</span>
      </div>
    </div>
    <div className="row main-section">
      <div className="col-md-6">
        <Card length={dataArray.length} pagination={false} viewTable={true} title={"Todays Appointments"}>
          <Table data={appointments} loading={loading} cols={dataColumns} />
        </Card>
      </div>
      <div className="col-md-6">
        <Card title={"Appointments Statics"} viewTable={false}>
          <PieChart
            labels={data.labels}
            data={data.data}
            backgroundColor={data.backgroundColor}
            borderColor={data.borderColor}
          />
        </Card>
      </div>
    </div>
  </div>
  );
};

export default memo(Doctor);
