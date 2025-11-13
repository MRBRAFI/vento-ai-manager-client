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
  const [loading, setLoading] = useState(true);
  //   Google Sign In

  const googleSignIn = () => {
    setLoading(true);
    return signInWithPopup(auth, Provider);
  };

  //   signing a user
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //   signing Out a user

  const userSignOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  //   Logging In A User

  const userLogIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  //   observer

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
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
    setLoading,
    loading,
  };
  return <AuthContext value={authData}>{children}</AuthContext>;
};

export default AuthProvider;
