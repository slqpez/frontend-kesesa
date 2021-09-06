import React,{ useEffect, useState} from "react";
import {Link} from "react-router-dom"
import "./bubbleCountrie.css"

function BubbleCountrie({ name, id, handleDelete}) {



const [flag, setFlag]= useState("")


const style={
  backgroundImage:`url(${flag})`,
  backgroundSize:"100% 100%",
  backgroundRepeat:"no-repeat"
}
  useEffect(() => {
    fetch(`https://restcountries.eu/rest/v2/name/${name}`)
    .then((response) => response.json())
    .then(data => setFlag(data[0].flag))
    .catch((error) => console.error(error))
  },[name])

  return (
    <div className="bubble-countrie">
      <li >
        <Link className="travel-item" to={`/documents/${id}`} style={style}>
          {name}
        </Link>
      </li>
      <button className="btn-delete-travel" data-id={id} onClick={handleDelete}>Eliminar</button>
    </div>
  );
}

export default BubbleCountrie;
