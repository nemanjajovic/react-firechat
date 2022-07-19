import React, { useState } from "react";
import { db, auth } from "../firebase";
import firebase from "firebase";

const SendMessage = ({ scroll }) => {
  const [text, setText] = useState("");

  const sendMessage = async (e) => {
    e.preventDefault();
    const { uid, photoURL } = auth.currentUser;

    await db.collection("messages").add({
      text,
      photoURL,
      uid,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setText("");
    scroll.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <form onSubmit={sendMessage}>
        <div className="sendMsg">
          <input
            placeholder="Message..."
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <button type="submit">Send</button>
        </div>
      </form>
    </div>
  );
};

export default SendMessage;
