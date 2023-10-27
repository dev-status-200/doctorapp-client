import { Modal } from "react-bootstrap";
import React,{memo} from "react";

const PrimaryModal = ({ title, children, primary_text, show, setShow, onClick }) => {
  return (
    <Modal centered show={show} onHide={setShow}>
      <Modal.Header closeButton>
        <Modal.Title style={{ color: "#f10" }}>{title}</Modal.Title>
      </Modal.Header>

      <Modal.Body>{children}</Modal.Body>

      <Modal.Footer>
        <button onClick={onClick} className="btn-orange">{primary_text}</button>
      </Modal.Footer>
    </Modal>
  );
};

export default  memo(PrimaryModal);
