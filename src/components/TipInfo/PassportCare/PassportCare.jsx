import React from "react";
import "./passportCare.css";
import passport from "../../../images/tip-passport.jpg";

function PassportCare() {
  return (
    <div>
      <div className="title__container">
        <h3>Cuidado con el pasaporte</h3>
      </div>
      <div className="passportCare__container">
        <img src={passport} alt="passport.jpg" />
        <p>
          Asegúrate con tiempo de que tienes la documentación en regla. Por
          ejemplo, que tu pasaporte tiene una validez suficiente. En muchos
          países exigen que su vigencia sea superior a los seis meses, algo que
          podría suponer un contratiempo importante a la hora de renovarlo si es
          un momento del año con alta demanda.
          <br />
          <br />
        </p>
      </div>
    </div>
  );
}

export default PassportCare;
