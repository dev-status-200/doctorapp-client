"use client"
import React, { useState, useEffect } from 'react';
import { Row, Col, Container, Spinner } from "react-bootstrap";
import { HiOutlineMail, HiEye } from "react-icons/hi";
import { message } from 'antd';
import Link from 'next/link';
import { AiOutlineUser } from "react-icons/ai";
import { IoCallOutline } from "react-icons/io5";

const Login = () => {

    const [messageApi, contextHolder] = message.useMessage();

    const [load, setLoad] = useState(false);
    const [reveal, setReveal] = useState(false);

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPass, setConfirmPass] = useState("");

    const msg = (type, text) => {
        messageApi.open({
          type: type,
          content: text,
        });
      };

    const handleSubmit = (e) => {
        e.preventDefault();
        if(password!=confirmPass){
            msg('error', 'Passwords not same!')
        } else {
            setLoad(true)
            console.log({
                firstName,
                lastName,
                email,
                phone,
                password,
                confirmPass
            })
        }
    }

  return (
    <div className='login-styles'>
    {contextHolder}
    <Row>
        <Col md={7} className='login-bg'></Col>
        <Col md={5}>
            <Container className='px-2 pt-5 top-container'>
                <div className='px-5 pt-1'>
                <h1 className='fw-900'>Sign-Up</h1>
                <p className='grey2-txt mt-3'>Enter following fields     for signup</p>
                <form onSubmit={handleSubmit}>
                <div style={{maxHeight:'50vh', overflowY:'auto'}} className='py-3'>
                    <div className='mb-2'>
                        <div className='mb-1'>First Name</div>
                        <input className='login-inp' required placeholder='Joe' value={firstName} onChange={(e)=>setFirstName(e.target.value)} />
                        <AiOutlineUser className='username-img cur' />
                    </div>
                    <div className='mt-2'>
                        <div className='mb-1'>Last Name</div>    
                        <input className='login-inp' placeholder='Doe' required value={lastName} onChange={(e)=>setLastName(e.target.value)} />
                        <AiOutlineUser className='username-img cur' />
                    </div>
                    <div className='mt-2'>
                        <div className='mb-1'>Email address</div>    
                        <input className='login-inp' placeholder='example@.com' type="email" required value={email} onChange={(e)=>setEmail(e.target.value)} />
                        <HiOutlineMail className='username-img cur' />
                    </div>
                    <div className='mt-2'>
                        <div className='mb-1'>Phone Number</div>    
                        <input className='login-inp' placeholder='923360222373' required value={phone} onChange={(e)=>setPhone(e.target.value)} />
                        <IoCallOutline className='username-img cur' />
                    </div>
                    <div className='mt-2'>
                        <div className='mb-1'>Password</div>    
                        <input className='login-inp' placeholder='joanedow123' required type={reveal?'text':'password'} value={password} onChange={(e)=>setPassword(e.target.value)} />
                        <HiEye className='username-img cur' onClick={()=>setReveal(!reveal)} />
                    </div>
                    <div className='mt-2'>
                        <div className='mb-1'>Confirm Password</div>    
                        <input className='login-inp' placeholder='joanedow123' required type={reveal?'text':'password'} value={confirmPass} onChange={(e)=>setConfirmPass(e.target.value)} />
                        <HiEye className='username-img cur' onClick={()=>setReveal(!reveal)} />
                    </div>
                </div>
                    <div className='mt-4'>
                        <button type='submit' className='btn-login'>
                            {load?<Spinner animation="border" className='mx-3' size='sm' variant="light" />:'Sign up'}
                        </button>
                    </div>
                </form>
                </div>
            </Container>
            <Container className='bottom-container px-5'>
                <div>
                    <p className='grey2-txt' style={{fontSize:13}}>Enter your details to continue</p>
                </div>
                <Link href={"/login"} className='no-link orange-txt pb-3'>Login Instead</Link>
            </Container>
        </Col>
    </Row>
    </div>
  )
}

export default Login