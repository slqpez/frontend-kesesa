import React from "react";
import { Link } from "react-router-dom";
import { Document, pdfjs, Page } from "react-pdf";
import "./previewDocument.css";

function PreviewDocument({ url, id, handleDelete }) {
  pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

  return (
    <div>
      <div>
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
      <button onClick={handleDelete} className="btn-delete">
        Eliminar
      </button>
    </div>
  );
}

export default PreviewDocument;
