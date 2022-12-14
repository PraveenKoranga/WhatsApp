import React, { useEffect, useState } from 'react';
import { Avatar } from '@material-ui/core';
import './SidebarChat.css';
import db from './firebase';
import { Link } from 'react-router-dom';

function SidebarChat({ id, name, addNEwChat }) {
    const [seed, setSeed] = useState("");
    const [messages,setMessages] = useState('');

    useEffect(()=>{
        if (id){
            db.collection('rooms')
            .doc(id)
            .collection('messages')
            .orderBy('timestamp','desc')
            .onSnapshot((snapshot) =>
                setMessages(snapshot.docs.map((doc)=> doc.data()))
            )
        }
    },[id]);

    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000));
    }, []);

    const createChat = () => {
        const roomName = prompt("Please Enter Name for Chat");
        if (roomName) {
            db.collection("rooms").add({
                name: roomName,
            });
        }
    };

    return !addNEwChat ? (
        <Link to={`/rooms/${id}`}>
            <div className="sidebarChat">
                <Avatar src={`https://avatars.dicebear.com/api/human/
                ${seed}.svg`} />
                <div className="sidebarChat__info">
                    <h3>{name}</h3>
                    <p>{messages[0]?.message}</p>
                </div>
            </div>
        </Link>

    ) : (
        <div onClick={createChat} className="sidebarChat">
            <h3>add new Chat</h3>
        </div>
    )
}

export default SidebarChat
