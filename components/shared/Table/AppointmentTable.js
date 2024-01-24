import { useEffect, useState } from "react";
import { Col, Row, Spinner, Table } from "react-bootstrap";
import Modal from "../Modal";

const AppointmentTable = (props) => {
  const [data, setData] = useState([]);
  const [state, setState] = useState({
    value: {},
    open: false,
    appointmentsOnly: false,
  });

  useEffect(() => {
    setData(props.data);
  }, []);

  const formatTime = (value) => {
    const timestamp = value;
    const formattedDate = new Date(timestamp).toLocaleDateString();
    return formattedDate;
  };

console.log(data);

  return (
    <>
      {data.length >= 1 && props.loading == false ? (
        <div className="table-container">
          <Table  className="table">
            <thead>
              <tr>
                <th>Patient Name</th>
                <th>Time</th>
                <th>Date</th>
                <th>Patient Info</th>
                <th>Services</th>
              </tr>
            </thead>

            <tbody>
              {data.map((item, index) => {
                return (
                  <tr key={index}>
                    <td>
                      {item.Client.firstName} {item.Client.lastName}
                    </td>
                    <td>{item.selectHour}</td>
                    <td>{formatTime(item.selectedDate)}</td>
                    <td className=" m-auto text-center">
                      <button
                        className="btn-orange-special rounded"
                        onClick={() => {
                          setState({
                            value:item.Client,
                            open: true,
                            appointmentsOnly: true,
                          });
                        }}
                      >View Patient Info</button>
                    </td>
                    <td>{item.AppointmentServices?.map((x,i)=>{
                      return <div key={i}>{x.Pricing.name} ${x.Pricing.price}</div>
                    })}</td>
                  </tr>
                );
              })}
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

export default AppointmentTable;
