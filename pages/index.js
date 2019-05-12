import Link from "next/link";

import React, { Component } from 'react';
import {Button, Container, Row, Col} from 'reactstrap';


import BaseLayout from "../components/layouts/BaseLayout";

class Index extends Component {
  render() {
    return (
      <BaseLayout className="cover">
  <div className="main-section">
    <div className="background-image">
      <img src="/static/images/4.2 background-index.png" />
    </div>

    <Container>
      <Row>
        <Col md="6">
          <div className="hero-section">
            <div className={`flipper`}>
              <div className="back">
                <div className="hero-section-content">
                  <h2> Developer </h2>
                  <div className="hero-section-content-intro">
                    Have a look at my portfolio and job history.
                  </div>
                </div>
                <img className="image" src="/static/images/background-1.jpg"/>
                <div className="shadow-custom">
                  <div className="shadow-inner"> </div>
                </div>
              </div>
            </div>
          </div>
        </Col>
        <Col md="6" className="hero-welcome-wrapper">
          <div className="hero-welcome-text">
            <h1>
              Welcome to my website.
              Get informed, collaborate and discover projects I was working on through the years!
            </h1>
          </div>
          <div className="hero-welcome-bio">
            <h1>
              Let's take a look on my work.
            </h1>
          </div>
        </Col>
      </Row>
    </Container>
  </div>
</BaseLayout>

    )
  }
}


export default Index;