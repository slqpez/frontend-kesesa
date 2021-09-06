import React,{ useEffect, useState} from 'react'
import {getTravels} from "services/travels"
import BubbleCountrie from 'components/BubbleCountrie/BubbleCountrie'
import {deleteTravel} from 'services/travels'
import swal from 'sweetalert'
import "./travelsList.css"

function TravelsList({travelAdded, userId}) {

const[travels, setTravels] = useState([])
const [isDelete, setDelete] = useState(false)

  useEffect(() => {
    getTravels(userId)
      .then((res) => res.json())
      .then((data) => {
        setTravels(data)
        setDelete(false);
      });
  }, [travelAdded, userId,isDelete]);

  function handleDelete (e) {

    const id = e.target.getAttribute('data-id')

     swal("¿Estás seguro que quieres eliminar el Viaje?",{
      buttons: ["Cancelar", "Sí, eliminar"],
    }).then(value => {
      if(value){
        deleteTravel(id)
        .then(res=>{
          swal(`Eliminaste el viaje 🚉.`,{
            icon: "success",
            
          }).then(value => {
            setDelete(true)
          })
        })
        .catch(res=>{
          swal(`No se pudo elimiar el viaje.`,{
            icon: "error",
            
          })
        })

       
      }
    })  
  }

  if(!(travels.length > 0)) return <h2>Aún no tienes viajes. !Agrega uno!</h2>
  return (
    <div>
       <ul className="travels-list">
          {travels.map((travel) => (
           <BubbleCountrie key={travel._id} name={travel.name} id={travel._id} handleDelete={handleDelete}/>
          ))}
        </ul>
    </div>
  )
}

export default TravelsList
