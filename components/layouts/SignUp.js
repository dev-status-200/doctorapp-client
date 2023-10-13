"use client"
import React, { useState, useEffect } from 'react';
import { Row, Col, Container } from "react-bootstrap";
import { HiOutlineMail, HiEye } from "react-icons/hi";
import { FcGoogle } from "react-icons/fc";
import { AiFillApple } from "react-icons/ai";
import Link from 'next/link';

const Login = () => {

    const [load, setLoad] = useState(false);
    const [reveal, setReveal] = useState(false);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
    }
    
  return (
    <div className='login-styles'>
    <Row>
        <Col md={7} className='login-bg'></Col>
        <Col md={5}>
            <Container className='px-2 pt-5 top-container'>
                <div className='px-5 pt-1'>
                <h1 className='fw-900'>Sign-Up</h1>
                <p className='grey2-txt mt-3'>Enter following fields     for signup</p>
                <form onSubmit={handleSubmit}>
                <div>
                    <div className='mb-4'>
                        <div className='mb-2 fs-20'>First Name</div>
                        <input className='login-inp' required placeholder='Joe' value={username} onChange={(e)=>setUsername(e.target.value)} />
                        <HiOutlineMail className='username-img cur' />
                    </div>
                    <div className='mt-4'>
                        <div className='mb-2'>Last Name</div>    
                        <input className='login-inp' placeholder='Doe' required type={reveal?'text':'password'} value={password} onChange={(e)=>setPassword(e.target.value)} />
                        <HiEye className='username-img cur' />
                    </div>
                    <div className='mt-4'>
                        <div className='mb-2'>Phone Number</div>    
                        <input className='login-inp' placeholder='example@.com' required type={reveal?'text':'password'} value={password} onChange={(e)=>setPassword(e.target.value)} />
                        <HiEye className='username-img cur' />
                    </div>
                    <div className='mt-4'>
                        <div className='mb-2'>Email address</div>    
                        <input className='login-inp' placeholder='example@.com' required type={reveal?'text':'password'} value={password} onChange={(e)=>setPassword(e.target.value)} />
                        <HiEye className='username-img cur' />
                    </div>
                    <div className='mt-4'>
                        <button type='submit' className='btn-login'>
                            {load?<Spinner animation="border" className='mx-3' size='sm' variant="light" />:'Login'}
                        </button>
                    </div>
                    <div style={{width:"70%"}} className='my-4 px-5'>
                    <Row>
                        <Col md={5}><hr/></Col>
                        <Col md={2} className='text-center' style={{position:"relative", top:5}}>OR</Col>
                        <Col md={5}><hr/></Col>
                    </Row>
                    </div>
                </div>
                </form>
                </div>
            </Container>
            <Container className='bottom-container px-5'>
                <div>
                    <p className='grey2-txt' style={{fontSize:13}}>Enter your credentials to access your account</p>
                </div>
                <Link href={"/signup"} className='no-link orange-txt pb-3'>Register Here</Link>
            </Container>
        </Col>
    </Row>
    </div>
  )
}

export default Login