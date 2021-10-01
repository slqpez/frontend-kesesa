import React from "react";
import "./backPackInfo.css";
import backPack from "../../../images/tip-backPack.jpg"

function BackPackInfo() {
  return (
    <div>
      <div className="title__container">
        <h3>Atención con la maleta</h3>
      </div>
      <div className="backPackInfo__container">
        <img src={backPack} alt="backPack.jpg" />
        <p>
        Se trata de un consejo básico, aunque solemos pasar de él: no viajes con
        exceso de equipaje. Mete en la maleta aquello que consideres necesario,
        pero olvídate de acarrear artículos que posiblemente ni siquiera
        utilizarás. Una vez allás identificado lo necesario para el viaje,
        asegurate de poner un distintivo a tu maleta, ya que lo más probable es
        que te encuentres con maletas identicas a la tuya en la cintas
        transportadoras. <br /><br />
        Tambien será muy importante que investigues previamente con tu aerolinea
        seleccionada cual es la cantidad en peso del equipaje que cubre tu
        tickete de avión ó si quizá presente un costo adicional. Este mismo
        metodo deberías aplicarlo si piensas llevar equipaje de mano, ya que
        muchas aerolineas cuentan con ciertos topes permitidos
      </p>
      </div>
    </div>
  );
}

export default BackPackInfo;
