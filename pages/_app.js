import React from 'react';
import App from 'next/app';
import Head from 'next/head';
import CssBaseline from '@material-ui/core/CssBaseline';
import { StylesProvider } from '@material-ui/core/styles';


export default class MyApp extends App {
  componentDidMount() {
    // Remove the server-side injected CSS.
    // The client side is straightforward. All we need to do is remove the server-side generated CSS
    // https://material-ui.com/guides/server-rendering/#the-client-side
    const jssStyles = document.querySelector('#jss-server-side');

    if (jssStyles) {
      jssStyles.parentNode.removeChild(jssStyles);
    }
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <>
        <Head><title>MSA shop</title></Head>

        <StylesProvider injectFirst>
          <CssBaseline />
          <Component {...pageProps} />
        </StylesProvider>
      </>
    );
  }
}
