import React, { useEffect, useState } from 'react';
import Router from "next/router";
import Loader from '../shared/Loader';
import { delay } from '@/functions/delay';

const Home = () => {

    const makeRoute = async() => {
        await delay(3000);
        Router.push("/login");
    }
    useEffect(() => {
        makeRoute();
    }, [])

  return (
    <Loader/>
  )
}

export default Home