import React from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import Spinner from "views/Spinner.js"
import Logo from "assets/img/mainlogo.png";
import "assets/scss/rocket.scss";
import Preload from 'react-preload';
// reactstrap components
import {
  Container,
  Row,
  Col,
} from "reactstrap";

//Button
import "assets/scss/rocket.scss"
import bg from "assets/img/Banner.jpg"
import "assets/css/aosover.css"
class Home extends React.Component {

  componentDidMount() {
    Aos.init({
      startEvent: 'load',
      duration: 2000,
    });
    window.addEventListener('load', function() {
      Aos.refresh();
    });
    document.body.classList.add("landing-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    this.setState({ load: true })
    return function cleanup() {
      document.body.classList.remove("landing-page");
      document.body.classList.remove("sidebar-collapse");
    };

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
            <div className="page-header2 page-header2-medium desktop">
              <div
                className="page-header2-image"
                style={{
                  backgroundImage: "url(" + images[0] + ")",
                }}
              ></div>
              <div className="content-center">
                <img style={{ maxWidth: "20%", verticalAlign: "center" }} src={Logo} alt='Oh ooh!' />
                <h1 style={{fontSize:"30px"}} className="title">WEB DESIGN, DEVELOP AND HOST</h1>
                <h2 className="title">All in One place</h2>
                <h5>With our gurenteed unmatchable service and price look no further</h5>
                <h3 className="title">We are Fast, Reliable, and Secure</h3>
                <h5>We gurantee 99.9% uptime with free SSL and offer exceptional support</h5>
                <p>You can either Let us design your brochure business site or host own your site in our servers</p>
                <Link to="/plans">
                  <button className="learn-more">
                    <span className="circle" aria-hidden="true">
                      <span className="icon arrow"></span>
                    </span>
                    <span className="button-text">Start Now</span>
                  </button>
                </Link>
              </div>
            </div>
            <div className="page-header2 page-header2-medium mobile">
              <div
                className="page-header2-image"
                style={{
                  backgroundImage: "url(" + images[0] + ")",
                }}
              ></div>
              <div className="content-center">
                <img style={{ maxWidth: "20%", verticalAlign: "center" }} src={Logo} alt='Oh ooh!' />
                <h3 className="title" style={{margingBottom:"0px"}}>WEB DESIGN, DEVELOP AND HOST</h3>
                <h4 className="title" style={{paddingTop:"0px"}}>All in One place</h4>
                <h4 className="title" style={{paddingTop:"0px", fontSize:"17px"}}>With our gurenteed unmatchable service and price look no further</h4>
                <p style={{fontSize:"16px"}} className="title">We are Fast, Reliable, and Secure</p>
                <p style={{fontSize:"16px"}}>We gurantee 99.9% uptime with free SSL and offer exceptional support</p>
                <p style={{fontSize:"16px"}}>You can either Let us design your brochure business site or host own your site in our servers</p>
                <Link to="/plans">
                  <button className="learn-more">
                    <span className="circle" aria-hidden="true">
                      <span className="icon arrow"></span>
                    </span>
                    <span className="button-text">Start Now</span>
                  </button>
                </Link>
              </div>
            </div>
            <div>
              <div className="section section-about-us" className="desktop">
                <Container>
                  <div data-aos="faded-down">
                  <Row>
                    <Col className="ml-auto mr-auto text-center" md="8">
                      <h2 className="title">Why Choose Us?</h2>
                      <h5 className="description">

                      </h5>
                    </Col>
                  </Row>
                  </div>
                  <div className="separator separator-primary"></div>

                  <div className="section section-team text-center">
                    <Container>
                      <div className="team">
                        <Row>
                          <Col md="4">
                            <div className="team-player" data-aos="fade-right">
                              <img
                                alt="..."
                                src={require("assets/img/ssd.png")}
                              ></img>
                              <h4 className="title">SSD Storage</h4>
                              <p className="category text-info">Fast</p>
                              <p className="description">
                                Your website will be hosted in Solid State RAID-10 Storage that offers for fast page loads and maximum redundancy.
                    </p>
                            </div>
                          </Col>
                          <Col md="4">
                            <div className="team-player" data-aos="fade-down">
                              <img
                                alt="..."
                                src={require("assets/img/security.png")}
                              ></img>
                              <h4 className="title">Advanced Security</h4>
                              <p className="category text-info">You are Secured</p>
                              <p className="description">
                                Free SSL will be provided and We keep your account secure with security fixes including zero-day vulnerability fixes.
                    </p>
                            </div>
                          </Col>
                          <Col md="4">
                            <div className="team-player" data-aos="fade-left">
                              <img
                                alt="..."
                                src={require("assets/img/stable.png")}
                              ></img>
                              <h4 className="title">Stable Platform</h4>
                              <p className="category text-info">Stability is Everything</p>
                              <p className="description">
                                Account isolation, pro-active monitoring and custom off site backups
                    </p>
                            </div>
                          </Col>
                        </Row>
                      </div>
                    </Container>
                  </div>

                  <div className="section section-team text-center">
                    <Container>
                      <div className="team">
                        <Row>
                          <Col md="4">
                            <div className="team-player" data-aos="fade-right">
                              <img
                                alt="..."
                                src={require("assets/img/helpdesk.png")}
                              ></img>
                              <h4 className="title">24/7 Suport</h4>
                              <p className="category text-info">We're on it...</p>
                              <p className="description">
                                Our highly capable technical team is on hand 24/7 to help you, guide you in resolving your issues right away.
                    </p>
                            </div>
                          </Col>
                          <Col md="4">
                            <div className="team-player" data-aos="fade-up">
                              <img
                                alt="..."
                                src={require("assets/img/gettingstarted.png")}
                              ></img>
                              <h4 className="title">Getting Started</h4>
                              <p className="category text-info">easy peasy</p>
                              <p className="description">
                                Our simple steps will put you right in the game. If you are new to hosting, this is where you start. We have no hidden costs
                    </p>
                            </div>
                          </Col>
                          <Col md="4">
                            <div className="team-player" data-aos="fade-left">
                              <img
                                alt="..."
                                src={require("assets/img/uptime.png")}
                              ></img>
                              <h4 className="title">99.9% Uptime</h4>
                              <p className="category text-info">Guranteed!</p>
                              <p className="description">
                                The availability of your web site is our top priority. Your website will be hosted in ultra-reliable servers!
                    </p>
                            </div>
                          </Col>
                        </Row>
                      </div>
                    </Container>
                  </div>
                </Container>
              </div>
            </div>
            <div className="mobile">
              <div className="section section-about-us" style={{paddingTop:"10px", paddingBottom:"0px"}}>
                <Container>
                  <Row data-aos="faded-down">
                    <Col className="ml-auto mr-auto text-center" md="8">
                      <h3 className="title">Why Choose Us?</h3>
                      <h5 className="description">

                      </h5>
                    </Col>
                  </Row>
                  <div className="separator separator-primary"></div>

                  <div className="section section-team text-center" style={{paddingTop:"10px"}} >
                    <Container>
                      <div className="team">
                        <Row>
                          <Col md="4" data-aos="flip-up">
                            <div className="team-player">
                              <img
                                alt="..."
                                src={require("assets/img/ssd.png")}
                              ></img>
                              <h4 className="title">SSD Storage</h4>
                              <p className="category text-info">Fast</p>
                              <p className="description">
                                Your website will be hosted in Solid State RAID-10 Storage that offers for fast page loads and maximum redundancy.
                    </p>
                            </div>
                          </Col>
                          <Col md="4" data-aos="flip-up">
                            <div className="team-player">
                              <img
                                alt="..."
                                src={require("assets/img/security.png")}
                              ></img>
                              <h4 className="title">Advanced Security</h4>
                              <p className="category text-info">You are Secured</p>
                              <p className="description">
                                Free SSL will be provided and We keep your account secure with security fixes including zero-day vulnerability fixes.
                    </p>
                            </div>
                          </Col>
                          <Col md="4" data-aos="flip-up">
                            <div className="team-player">
                              <img
                                alt="..."
                                src={require("assets/img/stable.png")}
                              ></img>
                              <h4 className="title">Stable Platform</h4>
                              <p className="category text-info">Stability is Everything</p>
                              <p className="description">
                                Account isolation, pro-active monitoring and custom off site backups
                    </p>
                            </div>
                          </Col>
  
                          <Col md="4" data-aos="flip-up">
                            <div className="team-player">
                              <img
                                alt="..."
                                src={require("assets/img/helpdesk.png")}
                              ></img>
                              <h4 className="title">24/7 Suport</h4>
                              <p className="category text-info">We're on it...</p>
                              <p className="description">
                                Our highly capable technical team is on hand 24/7 to help you, guide you in resolving your issues right away.
                    </p>
                            </div>
                          </Col>
                          <Col md="4" data-aos="flip-up">
                            <div className="team-player">
                              <img
                                alt="..."
                                src={require("assets/img/gettingstarted.png")}
                              ></img>
                              <h4 className="title">Getting Started</h4>
                              <p className="category text-info">easy peasy</p>
                              <p className="description">
                                Our simple steps will put you right in the game. If you are new to hosting, this is where you start. We have no hidden costs
                    </p>
                            </div>
                          </Col>
                          <Col md="4" data-aos="flip-up">
                            <div className="team-player">
                              <img
                                alt="..."
                                src={require("assets/img/uptime.png")}
                              ></img>
                              <h4 className="title">99.9% Uptime</h4>
                              <p className="category text-info">Guranteed!</p>
                              <p className="description">
                                The availability of your web site is our top priority. Your website will be hosted in ultra-reliable servers!
                    </p>
                            </div>
                          </Col>
                        </Row>
                      </div>
                    </Container>
                  </div>
                </Container>
              </div>
            </div>
            <div className="desktop">
              <div className="section section-about-us" data-aos="slide-left" style={{ backgroundColor: "#46A8A8" }}>
                <Container>
                  <Row>
                    <div className="section-story-overview">
                      <Row>
                        <Col md="2">
                          <img
                            alt="..."
                            src={require("assets/img/fingerprint.png")}
                          ></img>

                        </Col>
                        <Col md="10">

                          <h3>
                            Security
                  </h3>
                          <p>
                            An average of 30,000 sites are hacked each day globally. Our Perpetual Security measures help prevent you from becoming the next victim! That's why your account include free HackScan Protection to help block hacks before they can do damage to your site. KernelCare rebootless kernel updates, brute force defense, a dual firewall and a number of other security features are already in place to help keep your site secure when you choose Airgrounds. Our Reinforced distributed denial of service (DDoS) Protection even improves the likelihood your site will remain online during even the most sophisticated distributed denial of service attacks.
                  </p>
                        </Col>
                      </Row>
                    </div>
                  </Row>
                </Container>
              </div>

              <div className="section section-about-us" data-aos="slide-right" style={{ backgroundColor: "#46A8A8" }}>
                <Container>
                  <Row>
                    <div className="section-story-overview">
                      <Row>
                        <Col md="10">

                          <h3>
                            Performance
                  </h3>
                          <p>
                            A mere 1-second page load delay impacts your bounce rate, SEO rankings and even your conversion rate. You won't have to worry about any of this when you choose Airgrounds and our screaming fast SwiftServer platform! That's because your sites come hosted on our speed optimized servers with your choice of server location, free SSDs and our up to 20X faster Turbo Servers!
                  </p>
                        </Col>
                        <Col md="2">
                          <img
                            alt="..."
                            src={require("assets/img/lightning.png")}
                          ></img>

                        </Col>
                      </Row>
                    </div>
                  </Row>
                </Container>
              </div>
            </div>

            <div className="mobile">
              <div className="section section-about-us" style={{ backgroundColor: "#46A8A8" }}>

                <Container>
                  <Row>
                    <Col className="ml-auto mr-auto text-center" md="8">
                      <img style={{ maxWidth: "70px", left: "0", right: "0" }}
                        alt="..."
                        src={require("assets/img/fingerprint.png")}
                      ></img>

                      <h3>
                        Security
                          </h3>
                    </Col>
                  </Row>

                  <Row>
                    <div className="section-story-overview" style={{ padding: "20px" }}>

                      <p>
                        An average of 30,000 sites are hacked each day globally. Our Perpetual Security measures help prevent you from becoming the next victim! That's why your account include free HackScan Protection to help block hacks before they can do damage to your site. KernelCare rebootless kernel updates, brute force defense, a dual firewall and a number of other security features are already in place to help keep your site secure when you choose Airgrounds. Our Reinforced distributed denial of service (DDoS) Protection even improves the likelihood your site will remain online during even the most sophisticated distributed denial of service attacks.
                  </p>
                    </div>
                  </Row>
                </Container>

                <Container>
                  <Row>
                    <Col className="ml-auto mr-auto text-center" md="8">
                      <img style={{ maxWidth: "70px", left: "0", right: "0" }}
                        alt="..."
                        src={require("assets/img/lightning.png")}
                      ></img>

                      <h3>
                      Performance
                          </h3>
                    </Col>
                  </Row>

                  <Row>
                    <div className="section-story-overview" style={{ padding: "20px" }}>

                      <p>
                      A mere 1-second page load delay impacts your bounce rate, SEO rankings and even your conversion rate. You won't have to worry about any of this when you choose Airgrounds and our screaming fast SwiftServer platform! That's because your sites come hosted on our speed optimized servers with your choice of server location, free SSDs and our up to 20X faster Turbo Servers!
                  </p>
                    </div>
                  </Row>
                </Container>
              </div>
            </div>

            <div className="section section-about-us">
              <Container>
                <Row>
                  <Col className="ml-auto mr-auto text-center" md="8" data-aos="slide-up" data-aos-duration="500">
                    <Link to="/plans">
                      <button className="learn-more">
                        <span className="circle" aria-hidden="true">
                          <span className="icon arrow"></span>
                        </span>
                        <span className="button-text-black">Start Now</span>
                      </button>
                    </Link>
                  </Col>
                </Row>
              </Container>
            </div>
          </div>
        </Preload>
      </>
    );
  }
}
export default Home;
