import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "Routes/Home";
import Search from "Routes/Search";

export default () => (
  <>
    <Switch>
      <Router>
        <Route path="/" exact component={Home} />
        <Route path="/search" exact component={Search} />
      </Router>
    </Switch>
  </>
);
