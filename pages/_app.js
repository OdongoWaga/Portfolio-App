import React from 'react';
import App, { Container } from 'next/app';

//Stylings
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/main.scss';

export default class MyApp extends App {

    static async getInitialProps({ Component, router, ctx }) {
      let pageProps = {};
      //const user = process.browser ? await auth0.clientAuth() : await auth0.serverAuth(ctx.req);
  
      if (Component.getInitialProps) {
        pageProps = await Component.getInitialProps(ctx)
      }
  
      //const isSiteOwner = user && user[process.env.NAMESPACE + '/role'] === 'siteOwner';
      //const auth = { user, isAuthenticated: !!user, isSiteOwner };
  
      return { pageProps }
    }
  
    // componentDidMount() {
    //   // Fonts();
    // }
  
    render () {
      const { Component, pageProps, auth } = this.props
  
      return (
        <Container>
          <Component {...pageProps} />
        </Container>
      )
    }
  }