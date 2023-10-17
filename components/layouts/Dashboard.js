import React from "react";

import { dataArray, dataColumns } from "@/mock/appointments";

import { HiOutlineCalendarDays } from "react-icons/hi2";

import Table from "../shared/Table/Table";
import PieChart from "../shared/Charts/PieChart";
import Card from "../shared/Cards/Card";

const Dashboard = () => {
  const data = {
    labels: ["Complete Appointments", "Cancel Appointments"],
    data: [300, 150],
    backgroundColor: ["rgba(255, 99, 132, 0.2)", "rgba(54, 162, 235, 0.2)"],
    borderColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)"],
  };

  return (
    <div className="container-fluid mt-2">
      <div className="top-section mb-4">
        <h3>My Dashboard</h3>
      </div>
      <div className="row middle-section">
        <div className="col-md-6">
          <h3>Good Evening Dr. Stephen</h3>
          <p>Monday, 7th January, 2023</p>
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
            <Table data={dataArray} cols={dataColumns} />
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

export default Dashboard;
