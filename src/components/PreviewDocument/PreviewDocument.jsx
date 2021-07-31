import React from "react";
import { Document, pdfjs, Page } from "react-pdf";
import "./previewDocument.css"


function PreviewDocument({url}) {
  pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

  return (
    <div>
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
    </div>
  );
}

export default PreviewDocument;
