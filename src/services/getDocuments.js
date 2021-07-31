export function getDocuments(data){
    return fetch("http://localhost:5000/documents/getDocuments", {
     method:"POST",
     headers: {
      'Content-Type': 'application/json',
    },
     body: JSON.stringify(data)
   })
}