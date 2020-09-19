import React from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import Spinner from "views/Spinner.js";
import Preload from 'react-preload';
import bg from "assets/img/getting_started_bg.png"
// reactstrap components
import {
  Container,
  Row,
  Col,
} from "reactstrap";

import "assets/css/header.css"

function GuidePage() {

  const images = [
    bg
  ];

  React.useEffect(() => {
    Aos.init({ duration: 2000 });
    document.body.classList.add("landing-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("landing-page");
      document.body.classList.remove("sidebar-collapse");
    };
  }, []);
  return (
    <>
      <Preload
        images={images}

        loadingIndicator={<Spinner />}
        mountChildren
        resolveOnError
      >
        <div className="wrapper">
          <div className="page-header2 page-header2-small desktop">
            <div
              className="page-header2-image"
              style={{
                backgroundImage: "url(" + images[0] + ")",
              }}

            ></div>
            <div className="content-center">

              <h2 className="title">Getting Started</h2>
              <h3 className="title">We are Fast, Reliable, and Secure</h3>
              <h5>Are you new to web hosting?</h5>
              <h5>We've got you covered. Follow our simple three step Process</h5>
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

              <h3 className="title" style={{marginBottom:"0px"}}>Getting Started</h3>
              <h4 style={{paddingTop:"0px", fontSize:"16px",marginTop:"10px"}} className="title">We are Fast, Reliable, and Secure</h4>
              <p style={{fontSize:"15px",paddingBottom:"0px"}}>Are you new to web hosting?</p>
              <p style={{fontSize:"15px"}}>We've got you covered. Follow our simple three step Process</p>
            </div>
          </div>

          <div className="section section-about-us">
            <Container>
              <Row>
                <Col md="3">
                  <img
                    alt="..."
                    src={require("assets/img/domain-name.png")}
                  />
                </Col>
                <Col md="9">

                  <h3>
                    Step 1
                  </h3>
                  <h2>Define Your Domain Name</h2>
                  <p>
                    A domain name is your website name. A domain name is the address where Internet users can access your website. A domain name is used for finding and identifying computers on the Internet. Computers use IP addresses, which are a series of number. However, it is difficult for humans to remember strings of numbers. Because of this, domain names were developed and used to identify entities on the Internet rather than using IP addresses.</p>

                  <p>A domain name can be any combination of letters and numbers, and it can be used in combination of the various domain name extensions, such as .com, .net and more.</p>

                  <p>The domain name must be registered before you can use it. Every domain name is unique. No two websites can have the same domain name. If someone types in www.yourdomain.com, it will go to your website and no one else's.</p>

                  <p>The price of a domain name typically runs between $15-25 per year.</p>

                </Col>
              </Row>
            </Container>

            <Container>
              <Row>
                <Col md="3">
                  <img
                    alt="..."
                    src={require("assets/img/webdev.png")}
                  />
                </Col>
                <Col md="9">

                  <h3>
                    Step 2
                  </h3>
                  <h2>Setup Your Web Site</h2>
                  <p>Prepare</p>
                  <p>
                    Think about what you want your customers to be able to do via your website. This will help you work out what sections or pages you want to include. Consider what information or transactions your customers will want and make sure the site is structured to make it easy for them to find and do the things they need.
                  </p>
                  <p>A website that is well designed and easy for customers to use will help your business stand out.</p>
                  <p>Build</p>
                  <p>
                    You can build your own website or have a professional web developer build it for you. Websites need to be kept up to date, so make sure you plan for ongoing maintenance.
                  </p>
                  <p>
                    A professional web developer can build your site quickly and provide guidance on successful web design.
                  </p>
                  <p>
                    If you are a small business looking for a brosure type website, with no intension in developing or designing, we at airgrounds have just the plan for you. Chackout our plans page for more information.
                  </p>
                </Col>
              </Row>
            </Container>

            <Container>
              <Row>
                <Col md="3">
                  <img
                    alt="..."
                    src={require("assets/img/host.png")}
                  />
                </Col>
                <Col md="9">

                  <h3>
                    Step 3
                  </h3>
                  <h2>Host Your Web Site</h2>
                  <p>
                    A domain name is your website name. A domain name is the address where Internet users can access your website. A domain name is used for finding and identifying computers on the Internet. Computers use IP addresses, which are a series of number. However, it is difficult for humans to remember strings of numbers. Because of this, domain names were developed and used to identify entities on the Internet rather than using IP addresses.</p>

                  <p>A domain name can be any combination of letters and numbers, and it can be used in combination of the various domain name extensions, such as .com, .net and more.</p>

                  <p>The domain name must be registered before you can use it. Every domain name is unique. No two websites can have the same domain name. If someone types in www.yourdomain.com, it will go to your website and no one else's.</p>

                  <p>The price of a domain name typically runs between $15-25 per year.</p>

                </Col>
              </Row>
            </Container>
            <div className="section section-about-us" style={{paddingBottom:"0px"}}>
              <Container>
                <Row>
                  <Col className="ml-auto mr-auto text-center" md="8">
                    <Link to="/plans">
                      <button class="learn-more">
                        <span class="circle" aria-hidden="true">
                          <span class="icon arrow"></span>
                        </span>
                        <span class="button-text-black">Start Now</span>
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

export default GuidePage;
