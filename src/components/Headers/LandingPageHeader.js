import React from "react";
import Logo from "assets/img/mainlogo.png";
import "assets/scss/rocket.scss"
import { Link } from "react-router-dom";

// core components

function LandingPageHeader() {
  let pageHeader = React.createRef();

  React.useEffect(() => {
    if (window.innerWidth > 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        pageHeader.current.style.transform =
          "translate3d(0," + windowScrollTop + "px,0)";
      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  });
  return (
    <>
      <div className="page-header2 page-header2-medium">
        <div
          className="page-header2-image"
          style={{
            backgroundImage: "url(" + require("assets/img/background.png") + ")",
          }}
          ref={pageHeader}
        ></div>
        <div className="content-center">
          <img style={{ maxWidth: "50%", verticalAlign: "center" }} src={Logo} alt='Oh ooh!'/>
          <h2 className="title">YOUR WEBSITE IS IN GOOD HANDS</h2>
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
    </>
  );
}

export default LandingPageHeader;
