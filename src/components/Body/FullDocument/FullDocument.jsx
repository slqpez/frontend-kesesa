import React, { useEffect, useState } from "react";
import { useParams , useHistory} from "react-router-dom";
import { getDocument } from "services/getDocuments";
import { Document, pdfjs, Page } from "react-pdf";
import "./fullDocument.css"

function FullDocument() {
  pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

  const [document, setDocument] = useState({});
  const history = useHistory()

  const { id } = useParams();
  useEffect(() => {
    getDocument(id)
      .then((res) => res.json())
      .then((data) => setDocument(data))
      .catch((error) => console.log(error));
  }, [id]);
  return (
    <div>
      <Document
        file={document.url}
        noData={
          <div
            style={{ float: "left", marginLeft: "50%", marginTop: "10%" }}
          ></div>
        }
      >
        <Page pageNumber={1} style={{ width: "1000px" }} />
      </Document>
      <button className="back" onClick={() => history.goBack()}>Volver</button>
    </div>
  );
}

export default FullDocument;
