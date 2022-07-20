import React, { useState, useEffect, useRef } from "react";

import { db } from "../firebase";

import SignOut from "./SignOut";
import Message from "./Message";

const Chat = () => {
  const scroll = useRef();
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    db.collection("messages")
      .orderBy("createdAt")
      .limit(50)
      .onSnapshot((snapshot) => {
        setMessages(snapshot.docs.map((doc) => doc.data()));
      });
  }, []);

  return (
    <div className="chat">
      <SignOut />
      <div className="messages">
        {messages.map(({ text, photoURL, displayName }, index) => (
          <div key={index}>
            <div className="single-message-container">
              <img src={photoURL} alt={displayName} />
              <h2>{displayName}</h2>
              <p>{text}</p>
            </div>
          </div>
        ))}
        <div ref={scroll}></div>
      </div>
      <Message scroll={scroll} />
    </div>
  );
};

export default Chat;
