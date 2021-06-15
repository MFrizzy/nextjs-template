import React from "react";
import Head from "next/head";
import { AppProps } from "next/dist/next-server/lib/router/router";
import "tailwindcss/tailwind.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="min-h-screen">
      <Head>
        <title>Template</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" type="image/png" href="favicon.png" />
      </Head>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
