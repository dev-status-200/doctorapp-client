import { Modal, Spinner } from "react-bootstrap";
import React, { memo } from "react";

const PrimaryModal = ({
  title,
  children,
  primary_text,
  show,
  setShow,
  onClick,
  loading,
  backdrop,
  keyboard,
  footer,
}) => {
  return (
    <Modal
      keyboard={keyboard}
      backdrop={backdrop}
      centered
      show={show}
      onHide={setShow}
    >
      <Modal.Header closeButton>
        <Modal.Title style={{ color: "#f10" }}>{title}</Modal.Title>
      </Modal.Header>

      <Modal.Body>{children}</Modal.Body>

      {footer && (
        <Modal.Footer>
          <button disabled={loading} onClick={onClick} className="btn-orange">
            {loading ? <Spinner size="sm" color="white" /> : primary_text}
          </button>
        </Modal.Footer>
      )}
    </Modal>
  );
};

export default memo(PrimaryModal);
