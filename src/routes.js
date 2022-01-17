import React from "react";
import { Routes as Switch, Route } from "react-router-dom";

import Home from "./pages/home";
import YourCity from "./pages/yourCity";

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact element={<Home />} />
      <Route path="/suacidade" exact element={<YourCity />} />
    </Switch>
  );
};
export default Routes;
