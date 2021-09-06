import React,{ useEffect, useState} from "react";
import {Link} from "react-router-dom"
import "./bubbleCountrie.css"
import bg from "images/bg-travel.png"

function BubbleCountrie({ name, id, handleDelete}) {



const [flag, setFlag]= useState("")
const [hasImage, setHasImage] = useState(true)


let style = {}

if(hasImage){
    style={
    backgroundImage:`url(${flag})`,
    backgroundSize:"100% 100%",
    backgroundRepeat:"no-repeat"
  }
}else{
  style={
    backgroundImage:`url(${bg})`,
    backgroundSize:"100% 100%",
    backgroundRepeat:"no-repeat"
  }
}


  useEffect(() => {
    fetch(`https://restcountries.eu/rest/v2/name/${name}`)
    .then((response) => response.json())
    .then(data => setFlag(data[0].flag))
    .catch((error) => {
      setHasImage(false)
    })
  },[name])

  return (
    <div className="bubble-countrie">
      <li >
        <h4 className="countrie-name">{name}</h4>
        <Link className="travel-item" to={`/documents/${id}`} style={style}>
        </Link>
      </li>
      <button className="btn-delete-travel" data-id={id} onClick={handleDelete}>Eliminar</button>
    </div>
  );
}

export default BubbleCountrie;
