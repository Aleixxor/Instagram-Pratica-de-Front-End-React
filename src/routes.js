import React from "react";

import { BrowserRouter, Switch, Route } from "react-router-dom";

import Main from "./pages/main";
import Search from "./pages/search";
import Login from "./pages/login";
import Activity from "./pages/activity";
import Profile from "./pages/profile";

const Routes = () => (
  <div
    className={
      window.location.pathname === "/"
        ? "height-100"
        : "height-100_-_bottomNavBar"
    }
  >
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login}></Route>
        <Route path="/dashboard" component={Main}></Route>
        <Route path="/search" component={Search}></Route>
        <Route path="/activity" component={Activity}></Route>
        <Route path="/profile" component={Profile}></Route>
      </Switch>
    </BrowserRouter>
  </div>
);

export default Routes;
