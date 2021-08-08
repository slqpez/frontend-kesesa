import { useContext } from "react";
import { Link } from "react-router-dom";
import GoogleBtn from "components/GoogleBtn/GoogleBtn";
import UserContext from "context/userContext";
import "./header.css";

const Header = () => {
  const {
    user: { authenticated, user },
  } = useContext(UserContext);

  function handleLogoutClick() {
    window.open("/auth/logout", "_self");
    localStorage.clear();
  }

  return (
    <div>
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
