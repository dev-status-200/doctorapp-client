import { useEffect, useState } from "react";
import { Spinner, Table } from "react-bootstrap";
import { Button } from "antd";
import Modal from "../Modal";

const TableCom = (props) => {
  const [data, setData] = useState([]);
  const [state, setState] = useState({ value: "", open: false });

  useEffect(() => {
    setData(props.data);
  }, []);

  let keys;
  if (data?.length >= 1) {
    keys = Object.keys(...data);
    keys = keys.filter(
      (key) =>
        key !== "id" &&
        key !== "type" &&
        key !== "img" &&
        key !== "_id" &&
        key !== "ClientId" &&
        key !== "DoctorId" &&
        key !== "createdAt" &&
        key !== "updatedAt"
    );
  }

  return (
    <>
      {data.length > 0 ? (
        <div className="table-container">
          <Table bordered className="table">
            <thead>
              <tr>
                {keys.map((ele, index) => {
                  return <th key={index}>{ele.toUpperCase()}</th>;
                })}
              </tr>
            </thead>

            <tbody>
              {data.map((ele, i) => {
                return (
                  <tr key={i}>
                    {keys.map((key, index) => {
                      return (
                        <>
                          {key === "Client" ? (
                            <td>
                              <button
                                className="btn-orange-special rounded"
                                onClick={() => {
                                  setState({
                                    value: ele[key] || `No ${key}`,
                                    open: true,
                                  });
                                }}
                              >{`View ${key}`}</button>
                            </td>
                          ) : (
                            <td key={index}> {ele[key]}</td>
                          )}
                        </>
                      );
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

      <Modal
        show={state.open}
        setShow={(updatedData) =>
          setState((prevData) => ({
            ...prevData,
            open: updatedData,
          }))
        }
        title={"Info"}
        backdrop={"none"}
        keyboard={true}
        onClick={null}
        footer={false}
      >
        <div className="p-3">{state.value.firstName}</div>
      </Modal>
    </>
  );
};

export default TableCom;
