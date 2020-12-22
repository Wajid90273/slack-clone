import React ,{useState} from 'react'
import db from './firebase';
import {useStateValue} from './StateProvider';
import firebase from 'firebase';
import "./ChatInput.css";
function ChatInput({channelName,channelId}) {
    const [Input,setInput]=useState('');
    const [{user}]=useStateValue();
    const sendMessage=(e)=>{
        e.preventDefault();
        if(channelId){
            db.collection("rooms").doc(channelId).collection("messages").add({
                message:Input,
                timestamp:firebase.firestore.FieldValue.serverTimestamp(),
                username:user.displayName,
                userImage:user.photoURL,
            });
        }
        setInput("");
    }
    return (
        <div className="chatInput">
            <form>
               <input
                value={Input}
                onChange={e=>setInput(e.target.value)}
                placeholder={`Message:  #${channelName}`} />
                <button type="submit" onClick={sendMessage} >SEND</button>
            </form>
        </div>
    )
}

export default ChatInput
