import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import DocumentsList from "components/DocumentsList/DocumentsList";
import FormAddCocument from "components/FormAddDocument/FormAddCocument";
import Spinner from "components/Spinner/Spinner";
import Message from "components/utils/Message/Message";
import UserContext from "context/userContext";
import { uploadDocument } from "services/uploadDocument";

import "./documents.css";
import InfoCountries from "../InfoCountries/InfoCountries";

function Documents() {
  const {
    user: { user },
  } = useContext(UserContext);

  let { travelId, contryname } = useParams();

  const [name, setName] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [documentAdded, setDocumentAdded] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState({
    show: false,
    type: "",
    content: "",
  });

  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleFile = (e) => {
    setSelectedFile(e.target.files[0]);
  };


  const addDocument = async (e) => {
    e.preventDefault();
    if (!selectedFile) {
      setMessage({
        show: true,
        type: "error",
        content: "No seleccionaste ningún archivo.",
      });
      setTimeout(() => {
        setMessage({
          show: false,
          ...message,
        });
      }, 3000);
      return;
    }
    const userId = user._id;

    
    
    let formData = new FormData();
    formData.append("file", selectedFile);
    formData.append("name", name);
    formData.append("userId", userId);
    formData.append("travelId", travelId);
    if (name.length > 0 && selectedFile.type === "application/pdf") {
      try {
        setIsLoading(true);
        setDocumentAdded(true);
        await uploadDocument(formData);
        setIsLoading(false);
        setDocumentAdded(false);
        setName("");
        setMessage({
          show: true,
          type: "success",
          content: "Documento agregado correctamente.",
        });
      } catch (error) {
        setMessage({
          show: true,
          type: "error",
          content: `No se pudo agregar el documento`,
        });
      }
    } else if(selectedFile.type !== "application/pdf"){
      setMessage({
        show: true,
        type: "error",
        content: `Formato de documento invalido. Solo .PDF`,
      });
    }else {
      setMessage({
        show: true,
        type: "error",
        content: `Ingresa un nombre para el documento`,
      });
    }
    setTimeout(() => {
      setMessage({
        show: false,
        ...message,
      });
    }, 3000);
  };

  return (
    <div className="Documents">
      <section className="add-document-section">
        <FormAddCocument
          addDocument={addDocument}
          handleFile={handleFile}
          handleName={handleName}
          value={name}
        />
        {isLoading ? <Spinner /> : null}
        <Message
          showMessage={message.show}
          content={message.content}
          type={message.type}
        ></Message>
        <InfoCountries contryname={contryname} />
      </section>
      <section className="documents-list-section">
        <DocumentsList isLoading={isLoading} documentAdded={documentAdded} />
      </section>
    </div>
  );
}

export default Documents;
