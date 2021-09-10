import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Home from "Routes/Home";
import Artist from "Routes/Artist";
import Search from "Routes/Search";

export default () => (
  <>
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/artist" exact component={Artist} />
        <Route path="/search" exact component={Search} />
        {/*일치하는 router없다면 "/"로 보내줄 것이다. */}
        <Redirect from="*" to="/" />
      </Switch>
    </Router>
  </>
);
