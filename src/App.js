import {useState, useEffect} from 'react'
import {  Route, Switch } from "react-router-dom";
import Profile from "./Profile";
import axios from  'axios';
import "./App.css";


const Home = ()=> <h1>Welcome to home</h1>

const Header =({authenticated, setValue})=>{

  function handleSignInClick  () {
 
    window.open("https://backend-kesesa.herokuapp.com/auth/google", "_self");
  };

   function handleLogoutClick  () {
   
    window.open("https://backend-kesesa.herokuapp.com/auth/logout", "_self");
    setValue(false)
    //TODO hacer authenticated false.
  };

  return(
    <div>
      {authenticated ? (
          <li onClick={handleLogoutClick} style={{cursor: 'pointer', color:"green"}}>Logout</li>
        ) : (
          <li onClick={handleSignInClick}>Login</li>
        )}
    </div>
  )
}
//http://localhost:5000
//https://backend-kesesa.vercel.app
//https://backend-kesesa.herokuapp.com


function App() {
const [value, setValue] = useState({
  user:{},
  error:null,
  authenticated:false,
})



console.log(value.authenticated)
useEffect(() => {
  axios.get("https://backend-kesesa.herokuapp.com/auth/login/success", {
    credentials: "include",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "Access-Control-Allow-Credentials": true,
    }
  })
    .then(responseJson => {
      console.log(responseJson)
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


 
  

  return (
    <Switch>
      <Route path="/profile" component={App}>
        {" "}
        <Profile />
      </Route>
      <Route path="/">
        {" "}
        <div className="App">
         <Header authenticated={value.authenticated} setValue={setValue}></Header>
         {value.authenticated?<Home/>: "No estás logged."}
        </div>
      </Route>
    </Switch>
  );
}

export default App;
