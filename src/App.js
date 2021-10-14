import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Body from "components/Body/Body";
import Header from "components/Header/Header";
import UserContext from "context/userContext";
import { getUserLogged } from "services/getUserInfo";

import "./App.css";

//travelbrifing.org
//http://localhost:5000
//https://backend-kesesa.herokuapp.com

function App() {
  const [user, setUser] = useState({
    user: {},
    authenticated: false,
  });

  const history = useHistory();

  useEffect(() => {
    const authenticatedUSer = Boolean(localStorage.getItem("authenticated"));
    if (!authenticatedUSer) {
      getUserLogged()
        .then((userData) => {
          setUser({ user: userData.user[0], authenticated: true });
          localStorage.setItem("user", JSON.stringify(userData.user[0]));
          localStorage.setItem("authenticated", "true");
          history.push("/travels");
        })
        .catch((err) => history.push("/"));
    } else {
      const userLocal = JSON.parse(localStorage.getItem("user"));
      setUser({ user: userLocal, authenticated: true });
    }
  }, [setUser, history]);
 

  return (
    <div className="App">
      <UserContext.Provider value={{ user, setUser }}>
        <Header />
        <Body />
      </UserContext.Provider>
    </div>
  );
}

export default App;
