import { auth } from "./firebase.js";
import { useAuthState } from "react-firebase-hooks/auth";

import SignIn from "./components/SignIn";
import Chat from "./components/Chat";

import "./App.css";

function App() {
  const [user] = useAuthState(auth);
  return <div className="App">{user ? <Chat /> : <SignIn />}</div>;
}

export default App;
