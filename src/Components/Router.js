import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Home from "Routes/Home";
import TV from "Routes/TV";
import Search from "Routes/Search";
import Header from "./Header";

export default () => (
  <>
    <Router>
      <>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/tv" exact component={TV} />
          <Route path="/search" exact component={Search} />
          <Route path="/movie/:id" exact component={Detail} />
          <Route path="/show/:id" exact component={Detail} />
          {/*일치하는 router없다면 "/"로 보내줄 것이다. */}
          <Redirect from="*" to="/" />
        </Switch>
      </>
    </Router>
  </>
);
