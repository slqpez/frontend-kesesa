import React from "react";
import PreviewDocument from "../PreviewDocument/PreviewDocument";
import "./documentsList.css"

function DocumentsList({ documents }) {
  return (
    <div className="DocumentList">
      {documents.map((document) => (
        <PreviewDocument url={document.url} key={document._id} />
      ))}
    </div>
  );
}

export default DocumentsList;
