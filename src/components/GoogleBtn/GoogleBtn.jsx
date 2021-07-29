import React from 'react'
import googleIcon from "../../images/google_icon.png"
import "./googleBtn.css"

function GoogleBtn({text, typeBtn, typeIcon}) {
    return (
        <div>
            <button className={`${typeBtn} btn btn-google`}>
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

