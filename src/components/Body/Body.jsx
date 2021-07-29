import React, { useContext } from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Home";
import Profile from "../Profile/Profile";
import UserContext from "../../context/userContext";

export default function Body() {
  const { user:{authenticated} } = useContext(UserContext);

 
 
  return (
    <div>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/profile">
          {authenticated ? <Profile /> : <Home />}
        </Route>
      </Switch>
    </div>
  );
}
