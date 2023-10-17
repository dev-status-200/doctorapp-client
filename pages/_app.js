import React, { Fragment, useState } from "react";
import Router, { useRouter } from "next/router";
import { SessionProvider } from "next-auth/react";

import "@/styles/globals.css";
import "@/styles/main.scss";
import "bootstrap/dist/css/bootstrap.min.css";

import Loader from "@/components/shared/Loader";
import Layout from "@/components/shared/Layout";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  Router.events.on("routeChangeStart", () => {
    setLoading(true);
  });
  Router.events.on("routeChangeComplete", () => {
    setLoading(false);
  });

  return (
    <>
      {(router.pathname !== "/login" && router.pathname !== "/signup") && (
        <SessionProvider session={session}>
          {loading ? <Loader /> : <Layout><Component {...pageProps} /></Layout>}
        </SessionProvider>
      )}
      {(router.pathname === "/login" || router.pathname === "/signup") && (
        <Component {...pageProps} />
      )}
    </>

  );
}
