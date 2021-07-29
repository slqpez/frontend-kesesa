import "./header.css"
import GoogleBtn from "../GoogleBtn/GoogleBtn"

const Header =()=>{

/*     function handleSignInClick  () {
   
      window.open("http://localhost:5000/auth/google", "_self");
    };
  
     function handleLogoutClick  () {
     
      window.open("http://localhost:5000/auth/logout", "_self");
      setValue(false)
      //TODO hacer authenticated false.
    }; */
  
    return(
      <div>
          <nav className="nav-bar">
              <ul className="nav-list">
                  <li><a href="#!">Home</a></li>
                  <li><a href="#!">Acerca de</a></li>
                  <GoogleBtn text="Ingresar" typeBtn="nav-btn" typeIcon="nav-icon"/>
              </ul>
          </nav>
      </div>
    )
  }

export default Header