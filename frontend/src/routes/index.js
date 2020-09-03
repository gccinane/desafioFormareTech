import React from "react";
import { Switch } from "react-router-dom";

import Route from "./Route";

import Login from "../pages/Login";

import Chat from "../pages/Chat";

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Login} />
      <Route path="/chat" component={Chat} isPrivate />
    </Switch>
  );
}
