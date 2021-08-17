import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import LandingPage from "./landingpage";

const Main = () => (
  <Switch>
    <Route exact path="/" component={LandingPage} />
  </Switch>
);

export default Main;

// do not need react-router-dom for this project
// https://www.youtube.com/watch?v=Law7wfdg_ls