import React, { useContext, useState, useEffect } from "react";
import "./documents.css";
import UserContext from "../../../context/userContext";
import { uploadDocument } from "../../../services/uploadDocument";
import DocumentsList from "../../DocumentsList/DocumentsList";
import FormAddCocument from "../../FormAddDocument/FormAddCocument";
import { getDocuments } from "../../../services/getDocuments";
import Spinner from "../../Spinner/Spinner";
import Message from "../../utils/Message/Message"

function Documents() {
  const {
    user: { user },
  } = useContext(UserContext);

  const [name, setName] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [documents, setDocuments] = useState([]);
  const [documentAdded, setDocumentAdded] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState({
    show: false,
    type: "error",
    content: ""
  });

  useEffect(() => {
    const data = { userId: user._id };
    getDocuments(data)
      .then((response) => response.json())
      .then((data) => {
        setDocuments(data);
      })
      .catch((err) => console.log(err));
  }, [user._id, documentAdded, isLoading]);

  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleFile = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const addDocument = async (e) => {
    const userId = user._id;
    e.preventDefault();
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
      setName("")
      setMessage({ 
        show: true,
        type: "success",
        content: "Documento agregado correctamente."
      })
       setTimeout(() => {
        setMessage({ 
          show: false,
          ...message
        })
      }, 3000); 
      
    } catch (error) {
      setMessage({ 
        show: true,
        type: "error",
        content: "No se pudo agregar el documento."
      })
    }
    

  };
  console.log(isLoading);
  return (
    <div className="Documents">
      
      <section className="add-document-section">
      
        <FormAddCocument
          addDocument={addDocument}
          handleFile={handleFile}
          handleName={handleName}
        />
        {isLoading ? <Spinner /> : null}
        <Message showMessage={message.show} content={message.content} type={message.type}></Message>
      </section>
      <section className="documents-list-section">
        <DocumentsList documents={documents} />
      </section>
    </div>
  );
}

export default Documents;
