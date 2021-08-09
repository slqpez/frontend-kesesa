import React from 'react';
import { Slide } from "react-slideshow-image";
import 'react-slideshow-image/dist/styles.css';
import "./slider.css";
import GoogleBtn from "components/GoogleBtn/GoogleBtn";
import { useContext } from "react";
import UserContext from "context/userContext";


const Slider = () => {

  const {user:{authenticated}}=useContext(UserContext);

  return (
      <div className="slide-container">
        <Slide autoplay={true}>
          <div className="slide-item">
              <h1>GESTIONA TUS DOCUMENTOS</h1>
              <p className="text-section-paragraph">
                Almacena, gestiona y organiza bien tus viajes a solo un click de
                distancia.
              </p>
            {authenticated ? null: <GoogleBtn
                text="Ingresar con Google"
                typeBtn="btn-home"
                typeIcon="btn-icon"
              />} 
          </div>
          <div className="slide-item">
            Second Slide
          </div>
          <div className="slide-item">
            Third Slide
          </div>
        </Slide>
      </div>
  );
};

export default Slider;