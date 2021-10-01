import React from "react";
import "./travelDiseases.css";
import diseases from "../../../images/tip-diseases.jpg"


function TravelDiseases() {
  return (
    <div>
      <div className="title__container">
        <h3>Enfermedades en el extranjero</h3>
      </div>
      <div className="travelDiseases__container">
        <img src={diseases} alt="" />
        <p>
          No te arriesgues a viajar si estás enfermo o si padeces alguna
          enfermedad que no podrá ser controlada correctamente en el exterior.
          En cualquier caso, infórmate previamente del sistema sanitario del
          destino y de dónde podrás dirigirte en caso de necesidad. <br />
          <br />
          Si dispones de un seguro de salud, cerciórate de que cubra los gastos
          en el país y en caso afirmativo qué tipo de incidencias. Lee la letra
          pequeña, puedes llevarte más de un sobresalto. Y es que, en muchos
          países, la sanidad es cara y en otros, deficiente. Un seguro que cubra
          con todas las garantías, además de salvarte el viaje, puede salvar tu
          economía.
        </p>
      </div>
    </div>
  );
}

export default TravelDiseases;
