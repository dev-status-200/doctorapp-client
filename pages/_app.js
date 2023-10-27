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
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  Router.events.on("routeChangeStart", () => setLoading(true));
  Router.events.on("routeChangeComplete", () => setLoading(false));

  return (
    <>
      {router.pathname !== "/login" &&
        router.pathname !== "/signup" &&
        router.pathname !== "/" &&
        router.pathname !== "/admin_login" && (
          <SessionProvider session={session}>
            {loading ? (
              <Layout>
                <Loader />
              </Layout>
            ) : (
              <Layout>
                <Component {...pageProps} />
              </Layout>
            )}
          </SessionProvider>
        )}
      {(router.pathname === "/" ||
        router.pathname === "/login" ||
        router.pathname === "/signup" ||
        router.pathname === "/admin_login") && <Component {...pageProps} />}
    </>
  );
}
