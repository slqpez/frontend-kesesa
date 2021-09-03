import React, { useEffect, useState, useContext } from "react";
import {Link} from "react-router-dom"
import UserContext from "context/userContext";
import "./travels.css";

function Travels() {
  const [place, setPlace] = useState("");
  const [travels, setTravels] = useState([]);
  const [isSearch, setIsSearch] = useState(false)

  const {
    user: { user },
  } = useContext(UserContext);
  const userId = user._id;

  const newTravel = {
    name: place,
    userId,
  };

  const handleInput = (e) => {
    setPlace(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if(place){
        fetch("http://localhost:5000/travels/addTravel", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newTravel),
    });
    setPlace("");
    setIsSearch(!isSearch);
    }
    console.log("ingrese algo, perro")
    
  };

  useEffect(() => {
    fetch("http://localhost:5000/travels/getTravels", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userId }),
    }).then(res=>res.json()).then(data=> setTravels(data))
  },[isSearch, userId]);

  console.log(travels)
  return (
      
    <div>
      <aside>
        <h3>Mis viajes</h3>
        <div className="travelsList"></div>
        <div className="travelContainer">
          <h3>Crea un nuevo viaje</h3>
          <form action="POST" onSubmit={handleSubmit}>
            <label htmlFor="placeName">Nombre del sitio:</label>
            <input
              type="text"
              id="placeName"
              onChange={handleInput}
              value={place}
            />
            <button>Crear</button>
          </form>
          <ul>
               {travels.map(travel => <li key={travel._id}><Link to={`/documents/${travel._id}`}>{travel.name}</Link></li>)} 
          </ul>
        </div>
      </aside>
    </div>
  );
}

export default Travels;
