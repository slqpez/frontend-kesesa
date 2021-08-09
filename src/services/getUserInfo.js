const BASE_URL = "http://localhost:5000"

export function getUserLogged(){
    return fetch(`${BASE_URL}/auth/login/success`, {
        method: "GET",
        credentials: "include",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Access-Control-Allow-Credentials": true
        }
      })
        .then(response => {
          if (response.status === 200) return response.json();
          throw new Error("failed to authenticate user");
        })
        .then(responseJson => {
            return responseJson
        })
        .catch(error => {
         console.log(error)
        });
}