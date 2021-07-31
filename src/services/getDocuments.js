const BASE_URL = "http://localhost:5000"

export function getDocuments(data){
    return fetch(`${BASE_URL}/documents/getDocuments`, {
     method:"POST",
     headers: {
      'Content-Type': 'application/json',
    },
     body: JSON.stringify(data)
   })
}