import React from 'react'
import "./Message.css";
import {Avatar} from '@material-ui/core'
function Message({message,timestamp,user,userImage}) {
    return (
        <>
        <div className="message">
            <Avatar className="avatar" src={userImage} alt=""/>
            <div className="message_info">
              <h4>{user}<span className="user_timestamp">{new Date(timestamp?.toDate()).toUTCString()}</span></h4>
              <p>{message}</p>
            </div>
        </div>
        
        </>
    )
}

export default Message
