import React, { useState } from "react";
import "./travelTips.css";
import TipInfo from "components/TipInfo/TipInfo";
import travelTipsBtnMenu from "images/travel-tips-menu.svg";

function TravelTips() {
  const [toShow, setToShow] = useState("");

  function handleShowTip(e) {
    setToShow(e.target.id);
    handleTipsBtnMenuClose();
  }

  const [showTip, setShowTip] = useState("");

  function handleTipsBtnMenu() {
    if (showTip === "showTip") {
      handleTipsBtnMenuClose();
      return;
    }
    setShowTip("showTip");
  }

  function handleTipsBtnMenuClose() {
    setShowTip("");
  }

  return (
    <>
      <div className="tips-container">
        <button className="aside__tip-list-btn" onClick={handleTipsBtnMenu}>
          <img src={travelTipsBtnMenu} alt="Abrir tips Menu" />
        </button>
        <aside className={`aside__tip-list ${showTip}`}>
          <div className="title_tips-list-mobile-conteiner">
            <h2 className="title__tip-list-mobile">Conoce algunos tips: </h2>
          </div>
          <ul className="aside__tip-list-ul">
            <li onClick={handleShowTip} id="1" name="1">
              Atención con la maleta
            </li>
            <li onClick={handleShowTip} id="2" name="2">
              Cuidado con el pasaporte
            </li>
            <li onClick={handleShowTip} id="3" name="3">
              Verifica si necesitas visado
            </li>
            <li onClick={handleShowTip} id="4" name="4">
              Enfermedades en el extranjero
            </li>
          </ul>
        </aside>
        <div className="tip-detailed">
          <TipInfo number={toShow}></TipInfo>
        </div>
      </div>

      <div className="travelTips-ref">
        <b>Informaicón tomada de</b>:
        https://www.lavanguardia.com/ocio/viajes/20191202/471928081941/consejos-antes-viajar-extranjero.html
      </div>
    </>
  );
}

export default TravelTips;
