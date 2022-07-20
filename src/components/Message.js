import React, { useState, useRef, useEffect } from "react";
import { db, auth } from "../firebase";
import firebase from "firebase";

const SendMessage = ({ scroll }) => {
  const [text, setText] = useState("");
  const inputFocusRef = useRef();

  useEffect(() => {
    inputFocusRef.current.focus();
  }, []);

  const sendMessage = async (e) => {
    e.preventDefault();
    const { uid, photoURL, displayName } = auth.currentUser;
    if (text !== "") {
      await db.collection("messages").add({
        text,
        photoURL,
        displayName,
        uid,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      });
    }
    setText("");
    scroll.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="send-message">
      <form onSubmit={sendMessage}>
        <div className="input-container">
          <input
            placeholder="Message..."
            type="text"
            value={text}
            ref={inputFocusRef}
            onChange={(e) => setText(e.target.value)}
          />
          <button className="send-btn" type="submit">
            Send
          </button>
        </div>
      </form>
    </div>
  );
};

export default SendMessage;
