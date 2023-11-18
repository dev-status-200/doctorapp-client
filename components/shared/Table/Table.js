import { useEffect, useState } from "react";
import { Spinner, Table } from "react-bootstrap";
import TableFooter from "./TableFooter";

const TableCom = (props) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(props.data);
  }, []);

  let keys;
  if (data?.length >= 1) {
    keys = Object.keys(...data);
    keys = keys.filter(
      (key) => key !== "id" && key !== "type" && key !== "img" && key !== "_id"
    );
  }

  return (
    <>
      {data.length > 0 ? (
        <div className="table-container">
          <Table bordered className="table">
            <thead>
              <tr>
                {props.cols.map((ele, index) => {
                  return <th>{ele}</th>;
                })}
              </tr>
            </thead>

            <tbody>
              {data.map((ele, i) => {
                return (
                  <tr key={i}>
                    {keys.map((key, index) => {
                      return <td key={index}> {ele[key]}</td>;
                    })}
                  </tr>
                );
              })}
              <tr></tr>
            </tbody>
          </Table>
        </div>
      ) : (
        <div className="table-spinner">
          <Spinner animation="grow" variant="warning" />
        </div>
      )}
    </>
  );
};

export default TableCom;
