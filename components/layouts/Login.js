"use client"
import React, { useState, useEffect } from 'react';
import { Row, Col, Container } from "react-bootstrap";
import { HiOutlineMail, HiEye } from "react-icons/hi";
import { FcGoogle } from "react-icons/fc";
import { AiFillApple } from "react-icons/ai";
import Link from 'next/link';
import { useRouter } from 'next/router';

const Login = ({providers, signIn}) => {

    const route =  useRouter()
    const [load, setLoad] = useState(false);
    const [reveal, setReveal] = useState(false);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        route.push('/dashboard')
    }
    
  return (
    <div className='login-styles'>
    <Row>
        <Col md={7} className='login-bg'></Col>
        <Col md={5}>
            <Container className='px-2 pt-5 top-container'>
                <div className='px-5 pt-1'>
                <h1 className='fw-900'>Login</h1>
                <p className='grey2-txt mt-3'>Enter your credentials to access your account</p>
                <form onSubmit={handleSubmit}>
                <div>
                    {/* {error&&<Alert style={{marginLeft:'20%', marginRight:'20%'}} key={'danger'} variant={'danger'}>
                    Wrong username or password
                    </Alert>} */}
                    <div className='mb-4'>
                        <div className='mb-2 fs-20'>Email address</div>
                        <input className='login-inp' required placeholder='email@domain.com' value={username} onChange={(e)=>setUsername(e.target.value)} />
                        <HiOutlineMail className='username-img cur' />
                    </div>
                    <div className='mt-4'>
                        <div className='mb-2'>Password</div>    
                        <input className='login-inp' placeholder='password' required type={reveal?'text':'password'} value={password} onChange={(e)=>setPassword(e.target.value)} />
                        <HiEye className='username-img cur' onClick={()=>setReveal(!reveal)} />
                    </div>
                    <div style={{width:'70%'}} className='text-end'>
                        <p className='orange-txt mt-1 fs-10 cur'>Forgot Password?</p>
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
                    {Object.values(providers).map((provider) => (
                    <div key={provider.name} className='px-5' style={{width:"70%"}}>
                    <button className='provider-login' type='button' onClick={()=>signIn(provider.id)}>
                        <FcGoogle className='pl-btm mx-2' size={15} />Login via Google
                    </button>
                    </div>
                    ))}
                    <div className='px-5' style={{width:"70%"}}>
                        <button className='provider-login mt-3' type='button'>
                            <AiFillApple className='pl-btm mx-2' size={15} />Login via Apple
                        </button>
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