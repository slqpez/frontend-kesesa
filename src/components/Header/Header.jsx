import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import GoogleBtn from "components/GoogleBtn/GoogleBtn";
import UserContext from "context/userContext";
import "./header.css";
import logo from "images/logo_size.png";
import hamburger from "images/hamburger-icon.svg";
import cerrar from "images/cerrar.svg";



const Header = () => {
  const {
    user: { authenticated, user },
  } = useContext(UserContext);

  function handleLogoutClick() {
    window.open("/auth/logout", "_self");
    localStorage.clear();
  }

const [show, setShow] = useState('');

function handleBurger(){
  setShow('show');
}

function handleClose(){
  setShow('');
}
  
  return (
    <div className="container-nav-bar">
      <nav className="nav-bar">
        {authenticated ? (
          <ul className="nav-list">
            <li>
              <Link to="/documents">Documentos</Link>
            </li>
            <li>
              <Link to="/infoCountries">¿Dónde viajar?</Link>
            </li>
            <li className="userInfo">
              <span>{user.name}</span>
              <img
                className="profile-picture"
                src={user.profileImage}
                alt="profile"
              />
            </li>
            <li>
              {authenticated ? (
                <button className="btn-logout" onClick={handleLogoutClick}>
                  Salir
                </button>
              ) : (
                <GoogleBtn
                  text="Ingresar"
                  typeBtn="nav-btn"
                  typeIcon="nav-icon"
                />
              )}
            </li>
          </ul>
        ) : (
          <div className="top-nav">
            <div className="logo-container">
              <a href="/"><img src={logo} alt="Kesesa.png" className="logo" /></a>
            </div>
            <button className="btn-open-menu" onClick={handleBurger}>
              <img src={hamburger} alt="Abrir Menu" />
            </button>
              <ul className={`nav-list ${show}`}>
              <button className="btn-close-menu" onClick={handleClose}>
                <img src={cerrar} alt="Cerrar Menu" />
              </button>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">Acerca de</Link>
              </li>
              <li>
                <Link to="/advice">Tips de Viaje</Link>
              </li>
              <li>
                <GoogleBtn
                  text="Ingresar"
                  typeBtn="nav-btn"
                  typeIcon="nav-icon"
                />
              </li>
            </ul>
   
          </div>
        )}
      </nav>
    </div>
  );
};

export default Header;
