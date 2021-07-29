import React from "react";
import plane from "../../images/plane.png";
import googleIcon from "../../images/google_icon.png"
import GoogleBtn from "../GoogleBtn/GoogleBtn";
import "./home.css"

function Home() {
  return (
    <div>
      <div className="container">
        <div className="text-section">
          <h1>GESTIONA TUS DOCUMENTOS</h1>
          <p className="text-section-paragraph">
            Almacena, gestiona y organiza bien tus viajes a solo un click de
            distancia.
          </p>
          <GoogleBtn text="Ingresar con Google" typeBtn="btn-home" typeIcon="btn-icon"/>
        </div>
        <div className="image-section">
          <img className="plane-image" src={plane} alt="plane"></img>
        </div>
      </div>
    </div>
  );
}

export default Home;
