import axios from "axios";

//const BASE_URL = "http://localhost:5000";

function uploadDocument(data) {
  return axios.post(`/documents/add`, data, {
    headers: {
      "content-type": "multipart/form-data",
    },
  });
}
export { uploadDocument };
