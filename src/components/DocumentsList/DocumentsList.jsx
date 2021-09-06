import React, {useEffect, useState} from "react";
import PreviewDocument from "components/PreviewDocument/PreviewDocument";
import "./documentsList.css"
import {deleteDocument} from "services/getDocuments";
import {getDocuments} from "services/getDocuments";
import {useParams} from "react-router-dom"
import swal from 'sweetalert'



function DocumentsList({documentAdded, isLoading }) {
  const [deleteThis, setDelete] = useState(false);
  const [documents, setDocuments] = useState([]);
  


  const {travelId} = useParams()

   function handleDelete (e) {

    const id = e.target.getAttribute('data-id')
     swal("¿Estás seguro que quieres eliminar el documento?",{
      buttons: ["Cancelar", "Sí, eliminar"],
    }).then(value => {
      if(value){
        deleteDocument(id)
        .then(res=>{
          swal(`Eliminaste el documento`,{
            icon: "success",
            
          }).then(value => {
            setDelete(true)
          })
        })
        .catch(res=>{
          swal(`No se pudo elimiar el documento.`,{
            icon: "error",
            
          })
        })

       
      }
    })  
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

  if(!(documents.length > 0)) return <h3>Aún no tienes documentos. !Agrega uno!</h3>

  return (
    <div className="DocumentList">
      {documents.map((document) => (
        <PreviewDocument url={document.url} key={document._id} id={document._id} handleDelete={handleDelete} name={document.name}/>
      ))}
    </div>
  );
}

export default DocumentsList;
