import React from "react";
import { FunnelPlotOutlined } from "@ant-design/icons";
import { HiSearch } from "react-icons/hi";

const TableHeader = (props) => {
  return (
    <div className="header-container ">
      <div className="appointments-count">
        <span className="number">{props.length}</span>
        <h5>{props.title}</h5>
      </div>
      <div className="controls-container">
        <div className="search-container">
          <input type="text" placeholder="Search by location" />
          <HiSearch className="search-icon" />
        </div>
        <div className="sort-container">
          <label >Sort By</label>
          <select>
            <option value="name">Sort By</option>
            <option value="time">Time</option>
            <option value="location">Location</option>
          </select>
          <FunnelPlotOutlined className="sort-icon" />
        </div>
      </div>
    </div>
  );
};

export default TableHeader;
