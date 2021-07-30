import React, { useContext } from "react";
import "./documents.css";
import UserContext from "../../../context/userContext";

function Documents() {
  const {
    user: { user },
  } = useContext(UserContext);
  return (
    <div className="Documents">

      
      <section className="add-document-section">
        <form className="form-document" action="">
          <label className="label-name-document" htmlFor="document-name">
            Ingrese el nombre del documento
          </label>
          <input
            className="input-name-document"
            id="document-name"
            type="text"
            name="document-name"
          />
          <label htmlFor="file" className="label">Selecciona un archivo</label>
          <input className=" file" id="file" type="file" name="file"/>
          <button className="btn-save-document">Guardar documento</button>
          
        </form>
      </section>
      <section className="documents-list-section">Aún no tienes documentos.<br/> !Empieza a guardarlos!</section>
    </div>
  );
}

export default Documents;
