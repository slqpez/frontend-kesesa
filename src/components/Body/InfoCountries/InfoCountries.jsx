import React, { useState, useEffect } from "react";
import { getInfoCountries } from "services/infoCountry";
import "./infoCountries.css";

function InfoCountries({ contryname }) {
  const [info, setInfo] = useState({});

  useEffect(() => {
    getInfoCountries(contryname)
      .then((data) => setInfo(data))
      .catch((error) => console.log(error));
  }, [contryname]);

  return (
    <div className="containerInfo">
      <div className="titleContainer">
        <h2>Información del país de destino</h2>

        <form action="" >
          <div className="info">
            {Object.keys(info).length !== 0 ? (
              <div className="info-ps">
                <p><b>Nombre completo:</b>{info.names.full} </p>
                <p><b>Continente:</b> {info.names.continent} </p>
                <p><b>Moneda:</b> {info.currency.name} </p>
                <p><b>Lenguaje: </b>{info.language[0].language} </p>
                <p><b>Teléfonos importantes:</b> </p>
                <p className="numberPhones">
                  <b>Ambulancia</b> --- {info.telephone.ambulance}
                </p>
                <p className="numberPhones">
                  <b>Policia</b> --- {info.telephone.police}
                </p>
                <p className="numberPhones">
                  <b>Código de llamada </b>--- {info.telephone.calling_code}
                </p>
                <p><b>Zona horaria:</b> {info.timezone.name}</p>
                <p><b>Agua: </b>{info.water.short}</p>
                <p><b>Electrícidad: </b></p>
                <p><b>Frecuencia:</b>{info.electricity.frequency}</p>
                <p>
                  <b>Tipos de entrada:</b>
                  {info.electricity.plugs.map((type, index) => (
                    <span key={index}>{type}</span>
                  ))}
                </p>
              </div>
            ) : null}
          </div>
        </form>
      </div>
    </div>
  );
}

export default InfoCountries;
