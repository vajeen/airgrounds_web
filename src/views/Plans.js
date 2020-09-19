import React from "react";
import "aos/dist/aos.css";
import "assets/css/plan.scss";
import { Link } from "react-router-dom";
import Spinner from "views/Spinner.js"
import Preload from 'react-preload';
import bg from "assets/img/Plan.jpg"
import "assets/css/aosover.css"

// reactstrap components
import {
  Container,
  Row,
  Col,
} from "reactstrap";

// core components

import Logo from "assets/img/mainlogo.png";

class Plans extends React.Component {
  componentDidMount() {
    this.setState({ load: true })
  };


  render() {
    const images = [
      bg
    ];
    return (
      <>
        <Preload
          images={images}

          loadingIndicator={<Spinner />}
          mountChildren
          resolveOnError
        >
          <div className="wrapper">
            <div>
              <div className="page-header2 page-header2-small desktop">
                <div
                  className="page-header2-image"
                  style={{
                    backgroundImage: "url(" + images[0] + ")",
                  }}

                ></div>
                <div className="content-center">
                  <img style={{ maxWidth: "30%", verticalAlign: "center" }} src={Logo} alt='Oh ooh!' />
                  <h2 className="title">Start Today</h2>
                  <h3 className="title">Choose Your Plan</h3>
                </div>
              </div>

              <div className="page-header2 page-header2-small mobile">
                <div
                  className="page-header2-image"
                  style={{
                    backgroundImage: "url(" + images[0] + ")",
                  }}

                ></div>
                <div className="content-center">
                  <img style={{ maxWidth: "30%", verticalAlign: "center" }} src={Logo} alt='Oh ooh!' />
                  <h3 className="title" style={{ paddingTop: "0px" }}>Start Today</h3>
                  <h4 className="title" style={{ paddingTop: "0px" }}>Choose Your Plan</h4>
                </div>
              </div>

              <div>
              <Container>
                  <Col className="ml-auto mr-auto text-center" md="8">
                    <h4>Checkout Our Latest Deal</h4>
                  </Col>
                  <div className="section-story-overview">
                    <Row>
                      <div class="card popular">
                        <div class="card-ribbon-red">
                          <span>New!!!</span>
                        </div>
                        <div class="card-title">
                          <h3 style={{ fontSize: "15px" }}>Brochure Deal</h3>
                          <h5>Web Design + Hosting + Maintanence</h5>
                          <p>Fedup with high monthly hosting plans for a small static website?</p>
                          <p>This plan is ideal for small business sites with low visitors</p>
                          <p><i class="fa fa-check" aria-hidden="true" style={{ color: "#46A8A8" }}></i> 1 Website&nbsp;&nbsp;&nbsp;
                            <i class="fa fa-check" aria-hidden="true" style={{ color: "#46A8A8" }}></i> 5 Pages&nbsp;&nbsp;&nbsp;
                            <i class="fa fa-check" aria-hidden="true" style={{ color: "#46A8A8" }}></i> Free SSL Certificate&nbsp;&nbsp;&nbsp;
                            <i class="fa fa-check" aria-hidden="true" style={{ color: "#46A8A8" }}></i> Hosted in cloud containers&nbsp;&nbsp;&nbsp;
                            </p>
                          <p>Design + Host + Setup Cost 99 USD (Avg.)</p>
                          <p>Free Hosting for low traffic websites</p>
                          <p>Tell us your requirment and get a quotation</p>
                        </div>

                        <Link to={{
                          pathname: '/getdeal',
                          state: {
                            plan: 1
                          }
                        }}>
                          <button class="learn-more">
                            <span class="circle" aria-hidden="true">
                              <span class="icon arrow"></span>
                            </span>
                            <span class="button-text-black">Get Deal</span>
                          </button>
                        </Link>
                      </div>
                    </Row>
                  </div>
                </Container>
                <Col className="ml-auto mr-auto text-center" md="12">
                      <h4>Standard Plans</h4>
                    </Col>
              </div>

              <div className="desktop">
                <Container>
                  <Row>
                    <div className="section-story-overview">
                      <Row>
                        <div class="card">
                          <div class="card-title">
                            <h3>Basic</h3>
                            <h4>Wordpress Hosting + Maintanence + Support</h4>
                          </div>
                          <div class="card-price">
                            <h1>$12<small>month</small></h1>
                          </div>
                          <div class="card-description">
                            <ul>
                              <li><i class="fa fa-check" aria-hidden="true" style={{ color: "#46A8A8" }}></i> 1 Website</li>
                              <li><i class="fa fa-check" aria-hidden="true" style={{ color: "#46A8A8" }}></i> 5 GB SSD Storage</li>
                              <li><i class="fa fa-check" aria-hidden="true" style={{ color: "#46A8A8" }}></i> 5GB Transfer</li>
                              <li><i class="fa fa-check" aria-hidden="true" style={{ color: "#46A8A8" }}></i> Free SSL Certificate</li>
                              <li><i class="fa fa-check" aria-hidden="true" style={{ color: "#46A8A8" }}></i> Backup + Monitoring</li>
                              <li><i class="fa fa-check" aria-hidden="true" style={{ color: "#46A8A8" }}></i> 24/7/365 support</li>
                            </ul>
                          </div>
                          <Link to={{
                            pathname: '/checkout',
                            state: {
                              plan: 0
                            }
                          }}>
                            <button class="learn-more">
                              <span class="circle" aria-hidden="true">
                                <span class="icon arrow"></span>
                              </span>
                              <span class="button-text-black">Get This Plan</span>
                            </button>
                          </Link>
                        </div>

                        <div class="card popular">
                          <div class="card-ribbon">
                            <span>most popular</span>
                          </div>
                          <div class="card-title">
                            <h3 style={{ fontSize: "15px" }}>All Inclusive</h3>
                            <h5>Wordpress Design + Hosting + Maintanence</h5>
                            <p>Ideal for small businesses</p>
                          </div>
                          <div class="card-price"><h1>$35<small>month</small></h1>
                          </div>
                          <div class="card-description">
                            <ul>
                              <li><i class="fa fa-check" aria-hidden="true" style={{ color: "#46A8A8" }}></i> 1 Website</li>
                              <li><i class="fa fa-check" aria-hidden="true" style={{ color: "#46A8A8" }}></i> 5 GB SSD Storage</li>
                              <li><i class="fa fa-check" aria-hidden="true" style={{ color: "#46A8A8" }}></i> 10GB Transfer</li>
                              <li><i class="fa fa-check" aria-hidden="true" style={{ color: "#46A8A8" }}></i> Free SSL Certificate</li>
                              <li><i class="fa fa-check" aria-hidden="true" style={{ color: "#46A8A8" }}></i> Backup + Monitoring</li>
                              <li><i class="fa fa-check" aria-hidden="true" style={{ color: "#46A8A8" }}></i> Priority support</li>
                            </ul>
                          </div>
                          <Link to={{
                            pathname: '/checkout',
                            state: {
                              plan: 1
                            }
                          }}>
                            <button class="learn-more">
                              <span class="circle" aria-hidden="true">
                                <span class="icon arrow"></span>
                              </span>
                              <span class="button-text-black">Get This Plan</span>
                            </button>
                          </Link>
                        </div>


                        <div class="card">
                          <div class="card-title">
                            <h3>Bring Your Own Site</h3>
                            <h4>Web Hosting Only + c-Pannel Account</h4>
                          </div>
                          <div class="card-price">
                            <h1>$15<small>month</small></h1>
                          </div>
                          <div class="card-description">
                            <ul>
                              <li><i class="fa fa-check" aria-hidden="true" style={{ color: "#46A8A8" }}></i> 1 Website</li>
                              <li><i class="fa fa-check" aria-hidden="true" style={{ color: "#46A8A8" }}></i> 10 GB SSD Storage</li>
                              <li><i class="fa fa-check" aria-hidden="true" style={{ color: "#46A8A8" }}></i> 10GB Transfer</li>
                              <li><i class="fa fa-check" aria-hidden="true" style={{ color: "#46A8A8" }}></i> Free SSL Certificate</li>
                              <li><i class="fa fa-check" aria-hidden="true" style={{ color: "#46A8A8" }}></i> Backup + Monitoring</li>
                              <li><i class="fa fa-check" aria-hidden="true" style={{ color: "#46A8A8" }}></i> 24/7/365 support</li>
                            </ul>
                          </div>
                          <Link to={{
                            pathname: '/checkout',
                            state: {
                              plan: 2
                            }
                          }}>
                            <button class="learn-more">
                              <span class="circle" aria-hidden="true">
                                <span class="icon arrow"></span>
                              </span>
                              <span class="button-text-black">Get This Plan</span>
                            </button>
                          </Link>
                        </div>
                      </Row>
                    </div>
                  </Row>
                </Container>
              </div>

              <div className="mobile">
                <div className="section-story-overview">
                  <Container>
                    <Row>
                      <Col>
                        <div class="card" style={{ margin: "0px" }}>
                          <div class="card-title">
                            <h3>Basic</h3>
                            <h4>Wordpress Hosting + Maintanence + Support</h4>
                          </div>
                          <div class="card-price">
                            <h1>$12<small>month</small></h1>
                          </div>
                          <div class="card-description">
                            <ul>
                              <li><i class="fa fa-check" aria-hidden="true" style={{ color: "#46A8A8" }}></i> 1 Website</li>
                              <li><i class="fa fa-check" aria-hidden="true" style={{ color: "#46A8A8" }}></i> 5 GB SSD Storage</li>
                              <li><i class="fa fa-check" aria-hidden="true" style={{ color: "#46A8A8" }}></i> 5GB Transfer</li>
                              <li><i class="fa fa-check" aria-hidden="true" style={{ color: "#46A8A8" }}></i> Free SSL Certificate</li>
                              <li><i class="fa fa-check" aria-hidden="true" style={{ color: "#46A8A8" }}></i> Backup + Monitoring</li>
                              <li><i class="fa fa-check" aria-hidden="true" style={{ color: "#46A8A8" }}></i> 24/7/365 support</li>
                            </ul>
                          </div>
                          <Link to={{
                            pathname: '/checkout',
                            state: {
                              plan: 0
                            }
                          }}>
                            <button class="learn-more" style={{ paddingBottom: "20px" }}>
                              <span class="circle" aria-hidden="true">
                                <span class="icon arrow"></span>
                              </span>
                              <span class="button-text-black">Get This Plan</span>
                            </button>
                          </Link>
                        </div>
                      </Col>
                    </Row>
                  </Container>
                </div>

                <div className="section-story-overview" style={{ paddingTop: "0px" }}>
                  <Container>
                    <Row>
                      <Col>
                        <div class="card popular" style={{ margin: "0px" }}>
                          <div class="card-ribbon">
                            <span>most popular</span>
                          </div>
                          <div class="card-title">
                            <h3 style={{ fontSize: "15px" }}>All Inclusive</h3>
                            <h5>Wordpress Design + Hosting + Maintanence</h5>
                            <p>Ideal for small businesses</p>
                          </div>
                          <div class="card-price"><h1>$35<small>month</small></h1>
                          </div>
                          <div class="card-description">
                            <ul>
                              <li><i class="fa fa-check" aria-hidden="true" style={{ color: "#46A8A8" }}></i> 1 Website</li>
                              <li><i class="fa fa-check" aria-hidden="true" style={{ color: "#46A8A8" }}></i> 5 GB SSD Storage</li>
                              <li><i class="fa fa-check" aria-hidden="true" style={{ color: "#46A8A8" }}></i> 10GB Transfer</li>
                              <li><i class="fa fa-check" aria-hidden="true" style={{ color: "#46A8A8" }}></i> Free SSL Certificate</li>
                              <li><i class="fa fa-check" aria-hidden="true" style={{ color: "#46A8A8" }}></i> Backup + Monitoring</li>
                              <li><i class="fa fa-check" aria-hidden="true" style={{ color: "#46A8A8" }}></i> Priority support</li>
                            </ul>
                          </div>
                          <Link to={{
                            pathname: '/checkout',
                            state: {
                              plan: 1
                            }
                          }}>
                            <button class="learn-more">
                              <span class="circle" aria-hidden="true">
                                <span class="icon arrow"></span>
                              </span>
                              <span class="button-text-black">Get This Plan</span>
                            </button>
                          </Link>
                        </div>
                      </Col>
                    </Row>
                  </Container>
                </div>

                <div className="section-story-overview" style={{ paddingTop: "0px" }}>
                  <Container>
                    <Row>
                      <Col>
                        <div class="card" style={{ margin: "0px" }}>
                          <div class="card-title">
                            <h3>Bring Your Own Site</h3>
                            <h4>Web Hosting Only + c-Pannel Account</h4>
                          </div>
                          <div class="card-price">
                            <h1>$15<small>month</small></h1>
                          </div>
                          <div class="card-description">
                            <ul>
                              <li><i class="fa fa-check" aria-hidden="true" style={{ color: "#46A8A8" }}></i> 1 Website</li>
                              <li><i class="fa fa-check" aria-hidden="true" style={{ color: "#46A8A8" }}></i> 10 GB SSD Storage</li>
                              <li><i class="fa fa-check" aria-hidden="true" style={{ color: "#46A8A8" }}></i> 10GB Transfer</li>
                              <li><i class="fa fa-check" aria-hidden="true" style={{ color: "#46A8A8" }}></i> Free SSL Certificate</li>
                              <li><i class="fa fa-check" aria-hidden="true" style={{ color: "#46A8A8" }}></i> Backup + Monitoring</li>
                              <li><i class="fa fa-check" aria-hidden="true" style={{ color: "#46A8A8" }}></i> 24/7/365 support</li>
                            </ul>
                          </div>
                          <Link to={{
                            pathname: '/checkout',
                            state: {
                              plan: 2
                            }
                          }}>
                            <button class="learn-more">
                              <span class="circle" aria-hidden="true">
                                <span class="icon arrow"></span>
                              </span>
                              <span class="button-text-black">Get This Plan</span>
                            </button>
                          </Link>
                        </div>
                      </Col>
                    </Row>
                  </Container>
                </div>
              </div>


              <div className="section section-about-us">
                <Container>
                  <Row>
                    <Col className="ml-auto mr-auto text-center" md="8">
                      <h2>Or</h2>
                      <h4>You might be having a different requirment. Do not hesitate to contact us and get a quotation</h4>
                      <p>We would love to hear from you</p>
                      <Link to="/contact">
                        <button class="learn-more">
                          <span class="circle" aria-hidden="true">
                            <span class="icon arrow"></span>
                          </span>
                          <span class="button-text-black">Contact Us</span>
                        </button>
                      </Link>
                    </Col>
                  </Row>
                </Container>
              </div>
            </div>
          </div>
        </Preload>
      </>
    );
  }
}
export default Plans;
