import React from "react";
import { Link } from "react-router-dom";
// reactstrap components
import {
  Collapse,
  Navbar,
  NavItem,
  Nav,
  Container,
  UncontrolledTooltip,
} from "reactstrap";
import Logo from "assets/img/icon.png";

function MainNavbar() {
  const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");
  const [collapseOpen, setCollapseOpen] = React.useState(false);
  React.useEffect(() => {
    const updateNavbarColor = () => {
      if (
        document.documentElement.scrollTop > 399 ||
        document.body.scrollTop > 399
      ) {
        setNavbarColor("");
      } else if (
        document.documentElement.scrollTop < 400 ||
        document.body.scrollTop < 400
      ) {
        setNavbarColor("navbar-transparent");
      }
    };
    window.addEventListener("scroll", updateNavbarColor);
    return function cleanup() {
      window.removeEventListener("scroll", updateNavbarColor);
    };
  });
  return (
    <>
      {collapseOpen ? (
        <div
          id="bodyClick"
          onClick={() => {
            document.documentElement.classList.toggle("nav-open");
            setCollapseOpen(false);
          }}
        />
      ) : null}
      <Navbar className={"fixed-top " + navbarColor} color="info" expand="lg">
        <Container>
          <div className="navbar-translate">
            <Link to="/">
            <div className="navbar-brand"
              id="navbar-brand"
            >
              <div><img style={{maxWidth: "20px", verticalAlign:"center"}} src={Logo} alt='Oh ooh!'/> <span style={{float:"right", paddingLeft:"5px", fontSize:"19px"}}>airgrounds</span></div>
            </div>
            </Link>
            <UncontrolledTooltip target="#navbar-brand">
              AirGrounds Home
            </UncontrolledTooltip>
            <button
              className="navbar-toggler navbar-toggler"
              onClick={() => {
                document.documentElement.classList.toggle("nav-open");
                setCollapseOpen(!collapseOpen);
              }}
              aria-expanded={collapseOpen}
              type="button"
            >
              <span className="navbar-toggler-bar top-bar"></span>
              <span className="navbar-toggler-bar middle-bar"></span>
              <span className="navbar-toggler-bar bottom-bar"></span>
            </button>
          </div>
          <Collapse
            className="justify-content-end"
            isOpen={collapseOpen}
            navbar
          >
            <Nav navbar>
              <NavItem>
                <Link className="nav-link" to="/">
 
                <i className="now-ui-icons arrows-1_minimal-up"></i>
                  <p>Home</p>

                </Link>
              </NavItem>
              <NavItem>
                <Link className="nav-link" to="/guide">
 
                  <i className="now-ui-icons travel_info"></i>
                  <p>Guide</p>

                </Link>
              </NavItem>
              <NavItem>
              <Link className="nav-link" to="/plans">
                  <i className="now-ui-icons arrows-1_share-66 mr-1"></i>
                  <p>Plans</p>
                </Link>
              </NavItem>
              <NavItem>
              <Link className="nav-link" to="/contact">
                  <i className="now-ui-icons objects_spaceship"></i>
                  <p>Contact Us</p>
                </Link>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default MainNavbar;
