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
import Detail from "Routes/Detail";

export default () => (
  <>
    <Router>
      <>
        <Header />
        {/*Switch는 한번에 하나의 Route만 render시켜준다. */}
        <Switch>
          {/*동시에 라우팅이 적용되는 것을 막기 위해 exact를 사용해준다. */}
          <Route path="/" exact component={Home} />
          <Route path="/tv" exact component={TV} />
          <Route path="/search" exact component={Search} />
          {/*유동적인 값을 전달할 때는 파라미터로 특정 아이디를 전달하게 된다. */}
          <Route path="/movie/:id" exact component={Detail} />
          <Route path="/tv/:id" exact component={Detail} />
          {/*일치하는 router없다면 "/"로 보내줄 것이다. */}
          <Redirect from="*" to="/" />
        </Switch>
      </>
    </Router>
  </>
);
