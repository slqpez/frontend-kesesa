import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import GoogleBtn from "components/GoogleBtn/GoogleBtn";
import UserContext from "context/userContext";
import "./header.css";
import hamburger from "images/hamburger-icon.svg";
import cerrar from "images/cerrar.svg";

const Header = () => {
  const {
    user: { authenticated, user },
  } = useContext(UserContext);

  function handleLogoutClick() {
    window.open("http://localhost:5000/auth/logout", "_self");
    localStorage.clear();
  }

  const [show, setShow] = useState("");

  function handleBurger() {
    setShow("show");
  }

  function handleClose() {
    setShow("");
  }



  return (
    <>
      <nav className="nav-bar">
        {authenticated ? (
          <>
            <div className="userInfo">
              <img
                className="profile-picture"
                src={user?.profileImage}
                alt="profile"
              />
              <span>{user?.name}</span>
            </div>
            <div className="nav-list-container">
              <ul className="nav-list">
                <li>
                  <Link to="/travels">Mis viajes</Link>
                </li>
                <li>
                  <Link to="/infoCountries">¿Dónde viajar?</Link>
                </li>
                <li>
                  <Link to="/travelTips">Tips de viaje</Link>
                </li>
              </ul>
            </div>
            <div className="btn-container">
              <button className="btn-logout" onClick={handleLogoutClick}>
                Salir
              </button>
            </div>
          </>
        ) : (
          <>
            <div className="logo-container">
              <a href="/">Kesesa S.A</a>
            </div>
            <div className="nav-list-container">
              <button className="btn-open-menu" onClick={handleBurger}>
                <img src={hamburger} alt="Abrir Menu" />
              </button>
              <ul className={`nav-list ${show}`}>
                <button className="btn-close-menu" onClick={handleClose}>
                  <img src={cerrar} alt="Cerrar Menu" />
                </button>
                <li>
                  <Link to="/" onClick={handleClose}>
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/about" onClick={handleClose}>
                    Acerca de
                  </Link>
                </li>
                <li>
                  <Link to="/travelTips" onClick={handleClose}>
                    Tips de Viaje
                  </Link>
                </li>
              </ul>
            </div>
            <div className="btn-container">
              <GoogleBtn
                text="Ingresar"
                typeBtn="nav-btn"
                typeIcon="nav-icon"
              />
            </div>
          </>
        )}
      </nav>
    </>
  );
};

export default Header;