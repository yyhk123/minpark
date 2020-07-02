import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import LandingPage from "./landingpage";

const Main = () => (
  <Switch>
    <Route exact path="/landingpage" component={LandingPage} />
    <Route exact path="/">
      <Redirect to="landingpage" />
    </Route>
  </Switch>
);

export default Main;

// need to learn more how to use it!
