import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch, Redirect } from "react-router-dom";

import App from "views/App.js";

const hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route path="/" render={props => <App {...props} />} />
      <Redirect from="/" to="/home" />
    </Switch>
  </Router>,
  document.getElementById("root")
);