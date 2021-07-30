import React, { useContext } from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Home/Home";
import Documents from "./Documents/Documents";
import UserContext from "../../context/userContext";
import InfoCountries from "./InfoCountries/InfoCountries";

export default function Body() {
  const {
    user: { authenticated },
  } = useContext(UserContext);

  return (
    <div>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/documents">
          {authenticated ? <Documents /> : <Home />}
        </Route>
        <Route exact path="/about">
          <Home />
        </Route>
        <Route exact path="/infoCountries">
          {authenticated ? <InfoCountries /> : <Home />}
        </Route>
      </Switch>
    </div>
  );
}
