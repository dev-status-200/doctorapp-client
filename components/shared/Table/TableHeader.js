import React from "react";
import { Dropdown } from "react-bootstrap";
import { AiOutlineSetting } from "react-icons/ai";

const TableHeader = (props) => {
  return (
    <div className="header-container ">
      <div className="appointments-count">
        <h5>{props.title}</h5>
      </div>
      <div className="controls-container">
        <div className="appointments-count">
          <span className="number">{props.length}</span>
        </div>
        <div className="sort-container">
          <Dropdown>
            <Dropdown.Toggle className="toggle-sort" id="dropdown-basic">
              <AiOutlineSetting fontSize={23} color="gray"/>
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>
    </div>
  );
};

export default TableHeader;
