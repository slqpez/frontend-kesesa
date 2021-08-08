//const BASE_URL = "http://localhost:5000"

export async function getDocuments(data){
    return fetch(`/documents/getDocuments`, {
     method:"POST",
     headers: {
      'Content-Type': 'application/json',
    },
     body: JSON.stringify(data)
   })
}

export async function getDocument(id){
  return fetch(`/documents/getDocument`, {
   method:"POST",
   headers: {
    'Content-Type': 'application/json',
  },
   body:JSON.stringify({id})
 })
}

export async function deleteDocument(id){
  return fetch(`${BASE_URL}/documents/deleteDocument/${id}`, {
   method:"DELETE",
   headers: {
    'Content-Type': 'application/json',
  }
 })
}