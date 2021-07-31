import React, { useContext, useState } from "react";
import "./documents.css";
import UserContext from "../../../context/userContext";
import { uploadDocument } from "../../../services/uploadDocument";
import PreviewDocument from "../../PreviewDocument/PreviewDocument"


function Documents() {

  const {
    user: { user },
  } = useContext(UserContext);

  const [name, setName] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);

  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleFile = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const addDocument = async (e) => {
    const userId = user._id;
    e.preventDefault();

    let formData = new FormData();
    formData.append("file", selectedFile);
    formData.append("name", name);
    formData.append("userId", userId);

    await uploadDocument(formData);
  };

  return (
    <div className="Documents">
      <section className="add-document-section">
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
      </section>
      <section className="documents-list-section">
        <PreviewDocument/>
      </section>
    </div>
  );
}

export default Documents;
