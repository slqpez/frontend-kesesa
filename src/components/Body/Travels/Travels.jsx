import React, { useState, useContext } from "react";
import UserContext from "context/userContext";
import TravelsList from "components/TravelsList/TravelsList";
import { addTravel } from "services/travels";
import "./travels.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const customId = "custom-id-yes";
function Travels() {
  
  const [place, setPlace] = useState("");
  const [isSearch, setIsSearch] = useState(false);

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

  const handleSubmit = async (e) => {
    setIsSearch(true);
    e.preventDefault();
    if (place) {
      try {
        await addTravel(newTravel);
        setIsSearch(false);
        setPlace("");
        setIsSearch(!isSearch);
      } catch (error) {
        console.log(error);
      }
    }
    toast.error("Ingrese un lugar de destino!", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      toastId: customId,

    });
  };

  return (
    <div className="travels-body">
      
      <ToastContainer></ToastContainer>
      <h2>Mis viajes</h2>
      <div className="travels-content">
        <aside className="travels-aside">
          <div className="travelsList"></div>
          <div className="travelContainer">
            <h3>Crea un nuevo viaje</h3>
            <form action="POST" onSubmit={handleSubmit}>
              <label htmlFor="placeName">Nombre del sitio:</label>
              <input
                type="text"
                id="placeName"
                onChange={handleInput}
                placeholder="Nombre"
                value={place}
              />
              <button>Crear</button>
            </form>
          </div>
        </aside>
        <TravelsList travelAdded={isSearch} userId={userId} />
      </div>
    </div>
  );
}

export default Travels;
