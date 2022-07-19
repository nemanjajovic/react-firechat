import React, { useState, useEffect, useRef } from "react";

import { db, auth } from "../firebase";

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
    <div>
      <SignOut />
      <div>
        {messages.map(({ id, text, photoURL }) => (
          <div>
            <div key={id}>
              <img src={photoURL} alt="profileImage" />
              <p>{text}</p>
            </div>
          </div>
        ))}
      </div>
      <Message scroll={scroll} />
      <div ref={scroll}></div>
    </div>
  );
};

export default Chat;
