const BASE_URL = "http://localhost:5000/travels"

export async function addTravel(newTravel){
    return fetch(`${BASE_URL}/addTravel`, {
     method:"POST",
     headers: {
      'Content-Type': 'application/json',
    },
     body: JSON.stringify(newTravel)
   })
}

export async function getTravels(userId){
  return fetch(`${BASE_URL}/getTravels`, {
   method:"POST",
   headers: {
    'Content-Type': 'application/json',
  },
   body:JSON.stringify({userId})
 })
}

export async function deleteTravel(id){
  return fetch(`${BASE_URL}/deleteTravel/${id}`, {
   method:"DELETE",
   headers: {
    'Content-Type': 'application/json',
  }
 })
}