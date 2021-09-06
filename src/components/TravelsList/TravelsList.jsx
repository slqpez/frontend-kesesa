import React,{ useEffect, useState} from 'react'
import {getTravels} from "services/travels"
import BubbleCountrie from 'components/BubbleCountrie/BubbleCountrie'
import "./travelsList.css"

function TravelsList({travelAdded, userId}) {

const[travels, setTravels] = useState([])

  useEffect(() => {
    getTravels(userId)
      .then((res) => res.json())
      .then((data) => setTravels(data));
  }, [travelAdded, userId]);

  console.log(travelAdded)

  if(!(travels.length > 0)) return <h2>Aún no tienes viajes. !Agrega uno!</h2>
  return (
    <div>
       <ul className="travels-list">
          {travels.map((travel) => (
           <BubbleCountrie key={travel._id} name={travel.name} id={travel._id}/>
          ))}
        </ul>
    </div>
  )
}

export default TravelsList
