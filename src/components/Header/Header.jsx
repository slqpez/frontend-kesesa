import { useContext } from "react";
import { Link } from "react-router-dom";
import GoogleBtn from "../GoogleBtn/GoogleBtn";
import UserContext from "../../context/userContext";
import "./header.css";

const Header = () => {
  const {
    user: { authenticated },
  } = useContext(UserContext);

  function handleLogoutClick() {
    window.open("http://localhost:5000/auth/logout", "_self");
    localStorage.clear();
  }

  return (
    <div>
      <nav className="nav-bar">
        {authenticated ? (
          <ul className="nav-list">
            <li>
              <Link to="/profile">Perfil</Link>
            </li>
            <li>
              <Link to="/infoCountries">¿Dónde viajar?</Link>
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
          <ul className="nav-list">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">Acerca de</Link>
            </li>
            <li>
              <GoogleBtn
                text="Ingresar"
                typeBtn="nav-btn"
                typeIcon="nav-icon"
              />
            </li>
          </ul>
        )}
      </nav>
    </div>
  );
};

export default Header;
