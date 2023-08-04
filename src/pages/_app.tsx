import "../styles/globals.css";
import type { AppProps } from "next/app";
import React from "react";
import Head from "next/head";
import { Inria_Sans } from 'next/font/google'

const inria = Inria_Sans({ subsets: ['latin'], weight: ['300', '400', '700'], style: ["normal", "italic"]})

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <React.Fragment>
      <main className={inria.className}>
        <Head>
          <meta
            name="viewport"
            content="minimum-scale=1, initial-scale=1, width=device-width"
            />
        </Head>
        <Component {...pageProps} />
      </main>
    </React.Fragment>
  );
}

export default MyApp;