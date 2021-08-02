import React from "react";
import PreviewDocument from "components/PreviewDocument/PreviewDocument";
import "./documentsList.css"

function DocumentsList({ documents }) {
  return (
    <div className="DocumentList">
      {documents.map((document) => (
        <PreviewDocument url={document.url} key={document._id} id={document._id}/>
      ))}
    </div>
  );
}

export default DocumentsList;
