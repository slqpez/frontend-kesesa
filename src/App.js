import { useState, useEffect } from "react";
import Header from "./components/Header/Header"
import "./App.css";
import Body from "./components/Body/Body"


/* 
const Home = ()=> <h1>Welcome to home</h1>

 */

//travelbrifing.org
//http://localhost:5000
//https://backend-kesesa.herokuapp.com

function App() {
  /* const [value, setValue] = useState({
  user:{},
  error:null,
  authenticated:false,
})



console.log(value.authenticated)
useEffect(() => {
  fetch("http://localhost:5000/auth/login/success", {
      method: "GET",
      credentials: "include",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Credentials": true
      }
    })
      .then(response => {
        if (response.status === 200) return response.json();
        throw new Error("failed to authenticate user");
      })
      .then(responseJson => {
        setValue({
          authenticated: true,
          user: responseJson.user
        });
      })
      .catch(error => {
        setValue({
          authenticated: false,
          error: "Failed to authenticate user"
        });
      });
}, [])
 */

  return (
    <div className="App">
      <Header/>
      <Body/>
     
    </div>
  );
}

export default App;
