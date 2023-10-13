import React, { useState } from 'react';
import '@/styles/globals.css';
import '@/styles/main.scss';
//import { Inter } from 'next/font/google';
import 'bootstrap/dist/css/bootstrap.min.css';
import { SessionProvider } from "next-auth/react";
import Router, { useRouter  } from 'next/router';
import Loader from '@/components/shared/Loader';

//const inter = Inter({ subsets: ['latin'] })

export default function App({ Component, pageProps: { session, ...pageProps }, }) {

  const [loading, setLoading] = useState(false);
  const router = useRouter();

  Router.events.on("routeChangeStart", () => { setLoading(true) });
  Router.events.on("routeChangeComplete", () => { setLoading(false)});

  return (
  <SessionProvider session={session}>
    <div className={`{inter.className}`}>
    { loading && <Loader/> }
    { !loading && <Component {...pageProps} />}
    </div>
  </SessionProvider>
)}