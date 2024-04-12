import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import React from "react";
import auth from "./../../services/firebase";
export const authContext = React.createContext(null);
const AuthProvider = ({ children }) => {
  const [user, setUser] = React.useState("user nai");
  //  create user with email and password
  function createUser(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
  }
  // login user
  function loginUser(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }
  // get user
  // onAuthStateChanged(auth)
  // authentication user info data
  const userInfo = { user, createUser, loginUser };
  return (
    <authContext.Provider value={userInfo}>{children}</authContext.Provider>
  );
};

export default AuthProvider;
