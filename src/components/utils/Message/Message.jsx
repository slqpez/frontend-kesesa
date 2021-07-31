import React from 'react'
import "./message.css"

function Message({content, type, showMessage}) {
    return (
        <div className={type}>
            {showMessage?<p>{content}</p>:null}
        </div>
    )
}

export default Message
