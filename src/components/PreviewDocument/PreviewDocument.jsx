import React from "react";
import { Link } from "react-router-dom";
import { Document, pdfjs, Page } from "react-pdf";
import "./previewDocument.css";
import swal from 'sweetalert'

function PreviewDocument({ url, id, handleDelete,name }) {
  pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

  return (
    <div>
      <div>
      <button onClick={handleDelete} className="btn-delete" data-id ={id}>
        Eliminar
      </button>
       
        <Link to={`/document/${id}`}>
          <Document
            file={url}
            noData={
              <div
                style={{ float: "left", marginLeft: "50%", marginTop: "10%" }}
              ></div>
            }
          >
            <Page pageNumber={1} style={{ width: "300px" }} />
          </Document>
        </Link>
      </div>
      <p className="name-document">{name}</p>
    </div>
  );
}

export default PreviewDocument;
