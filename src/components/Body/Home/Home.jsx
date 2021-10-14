import "./home.css";
import UserContext from "context/userContext";
import { useContext } from "react";
import masViajes from "images/masViajes.jpg";
import { Link } from "react-router-dom";
import GoogleBtn from "components/GoogleBtn/GoogleBtn";
import imgRight from "../../../images/home.jpg";

function Home() {
  const {
    user: { authenticated },
  } = useContext(UserContext);

  console.log(authenticated);

  return (
    <div className="home-container">
      <div className="home-container-left">
        <p>Haz tus viajes más sencillos</p>
        <h1>
          ¡Organiza tus <span>documentos</span> en un solo lugar!
        </h1>
        <h3>Dedica tiempo al viaje y no pierdas tus documentos.</h3>
        <div className="home-container-btn">
          {authenticated ? null : (
            <GoogleBtn
              text="Empieza con Google."
              typeBtn="btn-home"
              typeIcon="btn-icon "
            ></GoogleBtn>
          )}
          <Link to="/about" className="btn-right">
            Conocenos
          </Link>
        </div>
        <div className="destination-container">
          <Link to="#">
            <img src={masViajes} alt="Travels" />
          </Link>
          <div className="destination-container-text">
            <h4>Información de viajes</h4>
            <hr />
            <p>
              Conoce los consejos más importantes para realizar un viaje sin
              percances
            </p>
          </div>
        </div>
      </div>
      <div className="home-container-right">
        <img src={imgRight} alt="ImgTravel.jpg" />
      </div>
    </div>
  );
}

export default Home;
