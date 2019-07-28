import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";

import "assets/scss/material-kit-react.scss?v=1.7.0";

// pages for this product
import Components from "views/Components/Components.jsx";
import LandingPage from "views/LandingPage/LandingPage.jsx";
import ProfilePage from "views/ProfilePage/ProfilePage.jsx";
import LoginPage from "views/LoginPage/LoginPage.jsx";
import SignupPage from "views/SignupPage/SignupPage.jsx";
import MainPage from "views/MainPage/MainPage.jsx";
import EventPage from "views/EventPage/EventPage.jsx"
import SupplierPage from "views/SupplierPage/SupplierPage.jsx"
import NewSupplierPage from "views/NewSupplierPage/NewSupplierPage.jsx"
import NewOptionPage from "views/NewOptionPage/NewOptionPage.jsx"


var hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route exact path="/" component={MainPage} />
      <Route path="/landing-page" component={LandingPage} />
      <Route path="/profile-page" component={ProfilePage} />
      <Route path="/login-page" component={LoginPage} />
      <Route path="/signup-page" component={SignupPage} />
      <Route path="/components-page" component={Components} />
	  <Route path="/event-page" component={EventPage} />
	  <Route path="/supplier-page" component={SupplierPage} />
	  <Route path="/new-supplier-page" component={NewSupplierPage} />
	  <Route path="/new-option-page" component={NewOptionPage} />

    </Switch>
  </Router>,
  document.getElementById("root")
);
