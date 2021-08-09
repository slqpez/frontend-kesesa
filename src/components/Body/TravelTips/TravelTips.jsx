import React, {useState} from 'react';
import "./travelTips.css";
import TipInfo from "components/TipInfo/TipInfo";

function TravelTips(){

    const [toShow, setToShow] = useState("");
      
    function handleShow(e){
        setToShow(e.target.id);
    }



    return(
        <div className="tips-container">
            <aside className="aside__tip-list">
                <ul className="aside__tip-list-ul">
                    <li onClick={handleShow} id="1" name="1">1- Atención con la maleta</li>
                    <li onClick={handleShow} id="2" name="2">2- Cuidado con el pasaporte</li>
                    <li onClick={handleShow} id="3" name="3">3- Verifica si necesitas visado</li>
                    <li onClick={handleShow} id="4" name="4">4- Enfermedades en el extranjero</li>
                    <li onClick={handleShow} id="5" name="5">5- ¿Agua potable?</li>
                </ul>
            </aside>
            <div className="tip-detailed">
                <TipInfo number={toShow}></TipInfo>
            </div>

        </div>
    )
}

export default TravelTips;