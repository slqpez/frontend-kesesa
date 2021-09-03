import React, {useEffect, useState, useContext} from "react";
import PreviewDocument from "components/PreviewDocument/PreviewDocument";
import "./documentsList.css"
import {deleteDocument} from "services/getDocuments";
import UserContext from "context/userContext";
import {getDocuments} from "services/getDocuments";
import {useParams} from "react-router-dom"



function DocumentsList({documentAdded, isLoading }) {
  const [deleteThis, setDelete] = useState(false);
  const [documents, setDocuments] = useState([]);
  const {
    user: { user },
  } = useContext(UserContext);


  const {travelId} = useParams()

  console.log(travelId)
  async function handleDelete () {
    await deleteDocument(documents[0]._id);
    setDelete(true);
  }

  useEffect(() => {
    const data = { travelId };
    getDocuments(data)
      .then((response) => response.json())
      .then((data) => {
        setDocuments(data);
        setDelete(false);
      })
      .catch((err) => console.log(err));
  }, [travelId, documentAdded, isLoading, deleteThis]);


  return (
    <div className="DocumentList">
      {documents.map((document) => (
        <PreviewDocument url={document.url} key={document._id} id={document._id} handleDelete={handleDelete}/>
      ))}
    </div>
  );
}

export default DocumentsList;
