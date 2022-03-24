import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useState } from "react";
import initializeFirebase from "../pages/firebase/firebase.init";

initializeFirebase();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [error, setError] = useState("");

  const provider = new GoogleAuthProvider();

  const auth = getAuth();

  const googleSignIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        setUser(user);
        console.log(user);
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  return {
    user,
    error,
    googleSignIn,
  };
};

export default useFirebase;
