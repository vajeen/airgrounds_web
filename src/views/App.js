/*

=========================================================
* Now UI Kit React - v1.4.0
=========================================================

* Product Page: https://www.creative-tim.com/product/now-ui-kit-react
* Copyright 2020 Creative Tim (http://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/now-ui-kit-react/blob/master/LICENSE.md)

* Designed by www.invisionapp.com Coded by www.creative-tim.com

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import { Route, Switch } from "react-router-dom";

// styles for this kit
import "assets/css/bootstrap.min.css";
import "assets/scss/now-ui-kit.scss?v=1.4.0";
import "assets/demo/demo.css?v=1.4.0";
import "assets/demo/nucleo-icons-page-styles.css?v=1.4.0";
// pages for this kit

import Home from "views/Home.js";
import GuidePage from "views/GuidePage.js";
import Plans from "views/Plans.js";
import Checkout from "views/Checkout.js";
import Contact from "views/Contact.js";
import BrochureDeal from "views/BrochureDeal.js";

import MainNavbar from "components/Navbars/MainNavbar.js"; 
import DefaultFooter from "components/Footers/DefaultFooter.js";
import ScrollToTop from "components/ScrollToTop.js"

class Admin extends React.Component {
    render() {
        return (
            <>
    <ScrollToTop />
    <MainNavbar />

    <Switch>
      <Switch>
        <Route path="/" exact render={(props) => <Home {...props} />} />
        <Route
          path="/guide"
          render={(props) => <GuidePage {...props} />}
        />
        <Route
          path="/plans"
          render={(props) => <Plans {...props} />}
        />
        <Route
          path="/checkout"
          render={(props) => <Checkout {...props} />}
        />
        <Route
          path="/contact"
          render={(props) => <Contact {...props} />}
        />
        <Route
          path="/getdeal"
          render={(props) => <BrochureDeal {...props} />}
        />
      </Switch>
    </Switch>
    <DefaultFooter />
  </>
);
}
}
export default Admin;