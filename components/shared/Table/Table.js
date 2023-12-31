import { useEffect, useState } from "react";
import { Col, Row, Spinner, Table } from "react-bootstrap";
import { Button } from "antd";
import Modal from "../Modal";

const TableCom = (props) => {
  const [data, setData] = useState([]);
  const [state, setState] = useState({
    value: {},
    open: false,
    appointmentsOnly: false,
  });

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
      {data.length >= 1 && props.loading == false ? (
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
                                    appointmentsOnly: true,
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
        <div className="table-spinner m-5">
          {props.loading ? (
            <Spinner color="blue" />
          ) : (
            <p>No records to show.</p>
          )}
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
        {state.appointmentsOnly && (
          <Row className="p-4">
            <Col md={6}>
              <div className="mt-2">
                <label>
                  <strong>First Name:</strong>
                </label>
                <br />
                <label>{state.value.firstName}</label>
              </div>
              <div className="mt-2">
                <label>
                  <strong>First Name:</strong>
                </label>
                <br />
                <label>{state.value.lastName}</label>
              </div>
              <div className="mt-2">
                <label>
                  <strong>D.O.B:</strong>
                </label>
                <br />
                <label>{state.value.dob}</label>
              </div>
              <div className="mt-2">
                <label>
                  <strong>Gender:</strong>
                </label>
                <br />
                <label>{state.value.gender}</label>
              </div>
              <div className="mt-2">
                <label>
                  <strong>Height:</strong>
                </label>
                <br />
                <label>{state.value.height}</label>
              </div>
              <div className="mt-2">
                <label>
                  <strong>Weight:</strong>
                </label>
                <br />
                <label>{state.value.weight}</label>
              </div>
            </Col>
            <Col md={6}>
             
              <div className="mt-2">
                <label>
                  <strong>Phone No:</strong>
                </label>
                <br />
                <label>{state.value.phone}</label>
              </div>
              <div className="mt-2">
                <label>
                  <strong>Email:</strong>
                </label>
                <br />
                <label>{state.value.email}</label>
              </div>
              <div className="mt-2">
                <label>
                  <strong>Married:</strong>
                </label>
                <br />
                <label>{state.value.married}</label>
              </div>
              <div className="mt-2">
                <label>
                  <strong>Children:</strong>
                </label>
                <br />
                <label>{state.value.children}</label>
              </div>
              <div className="mt-2">
                <label>
                  <strong>Tobbaco:</strong>
                </label>
                <br />
                <label>{state.value.tobacco}</label>
              </div>
              <div className="mt-2">
                <label>
                  <strong>Alcohol:</strong>
                </label>
                <br />
                <label>{state.value.alcohol}</label>
              </div>
            </Col>
          </Row>
        )}
      </Modal>
    </>
  );
};

export default TableCom;
