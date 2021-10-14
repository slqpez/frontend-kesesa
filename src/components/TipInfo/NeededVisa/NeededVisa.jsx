import React from "react";
import "./neededVisa.css";
import visa from "../../../images/tip-neededVisa.png";

function NeededVisa() {
  return (
    <div>
      <div className="title__container">
        <h3>Verificar si necesitas Visado</h3>
      </div>
      <div className="neededVisa__container">
        <img src={visa} alt="" />
        <p>
          Aunque hayas viajado con anterioridad a tu destino, comprueba si es
          preciso disponer de un visado, ya que podría haber modificado su
          política de inmigración. Hazlo con tiempo. Mientras que en algunos
          países permiten solicitar la visa telemáticamente, en otros obligan a
          hacerlo de forma presencial en consulados o embajadas, y los trámites
          pueden prolongarse durante semanas. <br />
          <br />
          Es importante tener en cuenta cualquier detalle. Países como China,
          por ejemplo, son especialmente exigentes con los requisitos de la
          fotografía del visado, que deben ser cumplidos escrupulosamente.
          <br />
          <br />
        </p>
      </div>
    </div>
  );
}

export default NeededVisa;
