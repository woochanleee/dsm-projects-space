import './App.css';

import { AppProps } from 'next/app';
import Head from 'next/head';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>DSM 프로젝트들 공간</title>
        <meta name='viewport' content='viewport-fit=cover,initial-scale=1,maximum-scale=1,user-scalable=no' />
        <noscript>You should use javascript</noscript>
      </Head>
      <Component {...pageProps} />
    </>
  );
}
