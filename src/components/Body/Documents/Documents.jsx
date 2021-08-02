import React, { useContext, useState, useEffect } from "react";
import DocumentsList from "components/DocumentsList/DocumentsList";
import FormAddCocument from "components/FormAddDocument/FormAddCocument";
import Spinner from "components/Spinner/Spinner";
import Message from "components/utils/Message/Message";
import UserContext from "context/userContext";
import { uploadDocument } from "services/uploadDocument";
import "./documents.css";

function Documents() {
  const {
    user: { user },
  } = useContext(UserContext);

  const [name, setName] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [documentAdded, setDocumentAdded] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
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
      }) 
      setTimeout(() => {
        setMessage({ 
          show: false,
          ...message
        })
      }, 3000); 
      return
    }
    const userId = user._id;

    setIsLoading(true);
    setDocumentAdded(true);
    let formData = new FormData();
    formData.append("file", selectedFile);
    formData.append("name", name);
    formData.append("userId", userId);
    try {
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
        content: "No se pudo agregar el documento.",
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
      </section>
      <section className="documents-list-section">
        <DocumentsList isLoading={isLoading} documentAdded={documentAdded}  />

      </section>
    </div>
  );
}

export default Documents;
