import React,{memo} from "react";

import TableHeader from "../Table/TableHeader";
import ChartHeader from "../Charts/ChartHeader";
import TableFooter from "../Table/TableFooter";

const Card = (props) => {
  return (
    <div className="custom-card">
      {props.viewTable == true ? (
        <TableHeader length={props.length} title={props.title} />
      ) : (
        <ChartHeader title={props.title} />
      )}
      <>{props.children}</>
      {props.viewTable == true ? (
        <TableFooter pagination={props.pagination} />
      ) : (
        <></>
      )}
    </div>
  );
};

export default  memo(Card);
