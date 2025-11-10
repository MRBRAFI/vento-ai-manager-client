import React, { createContext, useEffect, useState } from "react";
import app from "../Firebase/Firebase.config";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";

const auth = getAuth(app);

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const Provider = new GoogleAuthProvider();
  const [user, setUser] = useState(null);
  //   Google Sign In

  const googleSignIn = () => {
    return signInWithPopup(auth, Provider);
  };

  //   signing a user
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //   signing Out a user

  const userSignOut = () => {
    return signOut(auth);
  };

  //   Logging In A User

  const userLogIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  //   observer

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const authData = {
    user,
    setUser,
    createUser,
    userSignOut,
    userLogIn,
    googleSignIn,
  };
  return <AuthContext value={authData}>{children}</AuthContext>;
};

export default AuthProvider;
