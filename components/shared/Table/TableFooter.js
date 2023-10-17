import React from "react";

const TableFooter = (props) => {
  return <>{props.pagination == false ? <div className="table-footer">View all</div> : <></>}</>;
};

export default TableFooter;
