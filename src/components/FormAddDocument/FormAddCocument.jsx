import React from "react";
import "./formAddDocument.css"
function FormAddCocument({addDocument, handleName, handleFile}) {
  return (
    <div>
      <form className="form-document" action="" onSubmit={addDocument}>
        <label className="label-name-document" htmlFor="document-name">
          Ingrese el nombre del documento
        </label>
        <input
          className="input-name-document"
          id="document-name"
          type="text"
          name="document-name"
          onChange={handleName}
        />
        <label htmlFor="file" className="label">
          Selecciona un archivo
        </label>
        <input
          className=" file"
          id="file"
          type="file"
          name="file"
          onChange={handleFile}
        />
        <button className="btn-save-document">Guardar documento</button>
      </form>
    </div>
  );
}

export default FormAddCocument;
