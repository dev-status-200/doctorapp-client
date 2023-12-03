import Head from 'next/head';
import Cookies from 'cookies';
import { getProviders, signIn } from "next-auth/react";

import Login from '@/components/layouts/Auth/Login';
import verifyToken from '@/apis/verifyToken';

export default function login({providers, sessionRequest}) {
  console.log(providers, sessionRequest)
  return (
  <>
    <Head>
      <title>Doctor App | Login</title>
      <meta name="description" content="Generated by create next app" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <main>
      {<Login providers={providers} signIn={signIn} sessionRequest={sessionRequest} />}
    </main>
  </>
  )
}

export async function getServerSideProps({req, res}) {
  
  const providers = await getProviders();
  const sessionRequest = await verifyToken(Cookies, req, res)

  return {
    props: { providers, sessionRequest},
  }
}