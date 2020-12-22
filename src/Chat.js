import React,{useState,useEffect} from 'react'
import "./Chat.css";
import Message from "./Message";
import {useParams} from "react-router-dom";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import StarBorderOutlinedIcon from "@material-ui/icons/StarBorderOutlined";
import db from "./firebase";
import ChatInput from "./ChatInput";

function Chat() {
    const {roomId} =useParams();
    const [roomDetails,setRoomDetails] =useState(null);
    const [roomsMessages,setroomsMessages] =useState([]);

    useEffect(()=>{
        if(roomId){
            db.collection("rooms")
            .doc(roomId)
            .onSnapshot((snapshot)=>setRoomDetails(snapshot.data())
            )

        }
        db.collection('rooms').doc(roomId)
        .collection('messages')
        .orderBy('timestamp','asc')
        .onSnapshot((snapshot)=>setroomsMessages(snapshot.docs.map(doc=>doc.data()))
        )
    },[roomId]);
    return (
        <div className="chat">
            <div className="chat_header">
              <div className="header_left">
              <h4 className="chat_channelName">
              <strong># {roomDetails?.name}</strong>
              <StarBorderOutlinedIcon/>
              </h4>
        </div>
        <div className="chat_headerRight">
         <p>
          <InfoOutlinedIcon/>Details
         </p>
        </div>
    </div>
    <div className="chat_messages">
      {roomsMessages.map(({message,timestamp,userImage,user})=>(
           <Message 
                message={message}
                timestamp={timestamp}
                user={user}
                userImage={userImage}
       />
      ))
      
      }
    </div>
    <ChatInput channelName={roomDetails?.name} channelId={roomId} /> 
</div>
    )
}

export default Chat
