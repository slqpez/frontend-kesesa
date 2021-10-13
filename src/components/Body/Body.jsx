import React, { useContext } from "react";
import { Switch, Route } from "react-router-dom";
import Documents from "components/Body/Documents/Documents";
import Home from "components/Body/Home/Home";
import InfoCountries from "components/Body/InfoCountries/InfoCountries";
import UserContext from "context/userContext";
import FullDocument from "components/Body/FullDocument/FullDocument";
import About from "components/Body/About/About";
import Travels from "components/Body/Travels/Travels"
import TravelTips from "components/Body/TravelTips/TravelTips";

export default function Body() {
  const {user,
    user: { authenticated },
  } = useContext(UserContext);
console.log(user)


/* useEffect(() => {
  let path = window.location.pathname.split("/")[1]
  let title = path.charAt(0).toUpperCase() + path.slice(1)
  document.title = `Kesesa | ${title}`;
}); */

  return (
    <div>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/travels">
          {authenticated ? <Travels /> : <Home />}
        </Route>
        <Route exact path="/documents/:travelId/:contryname">
          {authenticated ? <Documents /> : <Home />}
        </Route>
        
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/travelTips">
          <TravelTips />
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
