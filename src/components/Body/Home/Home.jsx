
import { useContext } from "react";
import GoogleBtn from "components/GoogleBtn/GoogleBtn";
import UserContext from "context/userContext";
import plane from "images/plane.png";
import "./home.css";

function Home() {
  const {user:{authenticated}}=useContext(UserContext)
  return (
    <div>
      <div className="container">
        <div className="text-section">
          <h1>GESTIONA TUS DOCUMENTOS</h1>
          <p className="text-section-paragraph">
            Almacena, gestiona y organiza bien tus viajes a solo un click de
            distancia.
          </p>
         {authenticated?null: <GoogleBtn
            text="Ingresar con Google"
            typeBtn="btn-home"
            typeIcon="btn-icon"
          />} 
        </div>
        <div className="image-section">
          <img className="plane-image" src={plane} alt="plane"></img>
        </div>
      </div>
    </div>
  );
}

export default Home;
