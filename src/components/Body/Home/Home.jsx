import "./home.css";
import masViajes from "images/masViajes.jpg";
import { Link } from "react-router-dom";
import GoogleBtn from "components/GoogleBtn/GoogleBtn";

function Home() {
  /*   const {user:{authenticated}}=useContext(UserContext)
   */ return (
    <div className="home-container">
      <div className="home-container-left">
        <p>Haz tus viajes más sencillos</p>
        <h1>
        ¡Organiza tus <span>documentos</span> en un solo lugar!
        </h1>
        <h3>Dedica tiempo al viaje y no pierdas tus documentos.</h3>
        <div className="home-container-btn">
          <GoogleBtn
            text="Empieza con Google."
            typeBtn="btn-home"
            typeIcon="btn-icon "
          ></GoogleBtn>
          <Link to="/about" className="btn-right">
            Conocenos
          </Link>
        </div>
        <div className="destination-container">
          <Link to="#">
            <img src={masViajes} alt="Travels" />
          </Link>
          <div className="destination-container-text">
            <h4>Lugares populares.</h4>
            <hr />
            <p>Conoce más de 5.000 lugares turisticos y obten los mejores consejos.</p>
          </div>
        </div>
      </div>
      <div className="home-container-right"></div>
    </div>
  );
}

export default Home;