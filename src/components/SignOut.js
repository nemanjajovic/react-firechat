import { auth } from "../firebase";

const SignOut = () => {
  return (
    <div className="signout-container">
      <button onClick={() => auth.signOut()}>Sign Out</button>
    </div>
  );
};

export default SignOut;
