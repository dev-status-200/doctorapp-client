import React from 'react';
import { Row, Col, Container } from "react-bootstrap";

const Profile = () => {
  return (
    <div className="container-fluid mt-2">
    <div className="top-section mb-4">
      <h4>Profile Setting</h4>
    </div>
    <Container>
    <Row>
        <Col md={6}></Col>
        <Col md={3}>
        </Col>
        <Col md={3} className='text-end'>
            <button className='btn-orange-light mx-3'>Logout</button>
            <button className='btn-orange'>Edit Profile</button>
        </Col>
    </Row>
    </Container>
  </div>
  )
}

export default Profile