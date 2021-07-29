import { useContext } from "react";
import GoogleBtn from "../GoogleBtn/GoogleBtn";
import UserContext from "../../context/userContext";
import "./header.css";

const Header = () => {
  const {
    user: { authenticated },
  } = useContext(UserContext);

  function handleLogoutClick() {
    window.open("http://localhost:5000/auth/logout", "_self");
  }

  return (
    <div>
      <nav className="nav-bar">
        <ul className="nav-list">
          <li>
            <a href="#!">Home</a>
          </li>
          <li>
            <a href="#!">Acerca de</a>
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
      </nav>
    </div>
  );
};

export default Header;
