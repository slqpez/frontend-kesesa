import React,{ useEffect, useState} from "react";
import {Link} from "react-router-dom"
import "./bubbleCountrie.css"
import flag from "../../images/flag.png"

function BubbleCountrie({ name, id, handleDelete}) {



const [hasImage, setHasImage] = useState(true)

   const style={
    backgroundImage:`url(${flag})`,
    backgroundSize:"100% 100%",
    backgroundRepeat:"no-repeat",
    width:"100px",
    height: "100px"
  }


  return (
    <div className="bubble-countrie">
      <li >
        <h4 className="countrie-name">{name}</h4>
        <Link className="travel-item" to={`/documents/${id}/${name}`} style={style}>
        </Link>
      </li>
      <button className="btn-delete-travel" data-id={id} onClick={handleDelete}>Eliminar</button>
    </div>
  );
}

export default BubbleCountrie;
