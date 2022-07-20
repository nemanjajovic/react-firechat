import firebase from "firebase";

import { auth } from "../firebase";

const SignIn = () => {
  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  };

  return (
    <div className="signin-container">
      <button onClick={signInWithGoogle}>Sign In with Google</button>
    </div>
  );
};

export default SignIn;
