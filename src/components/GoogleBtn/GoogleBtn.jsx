import React from 'react'
import googleIcon from "images/google_icon.png"
import "./googleBtn.css"

function GoogleBtn({text, typeBtn, typeIcon}) {

    function handleSignInClick  () {
   
        window.open("http://localhost:5000/auth/google", "_self");
      };

    return (
        <div>
            <button className={`${typeBtn} btn btn-google`} onClick={handleSignInClick}>
            <img
              className={typeIcon}
              src={googleIcon}
              alt="google-icon"
            ></img>
            {text}
          </button>
        </div>
    )
}

export default GoogleBtn

