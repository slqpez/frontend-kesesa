import React, { useContext } from "react";
import { Switch, Route } from "react-router-dom";
import Documents from "components/Body/Documents/Documents";
import Home from "components/Body/Home/Home";
import InfoCountries from "components/Body/InfoCountries/InfoCountries";
import UserContext from "context/userContext";
import FullDocument from "components/Body/FullDocument/FullDocument";

export default function Body() {
  const {user,
    user: { authenticated },
  } = useContext(UserContext);
console.log(user)

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
        <Route exact path="/document/:id">
          {authenticated ? <FullDocument /> : <Home />}
        </Route>
      </Switch>
    </div>
  );
}
