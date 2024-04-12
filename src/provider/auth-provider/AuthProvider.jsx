import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from "firebase/auth";
import React from "react";
import auth from "./../../services/firebase";
export const authContext = React.createContext(null);
const AuthProvider = ({ children }) => {
  const [user, setUser] = React.useState(null);
  //  create user with email and password
  function createUser(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
  }
  // login user
  function loginUser(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }
  // on auth state changed get current login user
  React.useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => {
      unsubscribe();
    };
  }, []);
  // authentication user info data
  const userInfo = { user, createUser, loginUser };
  return (
    <authContext.Provider value={userInfo}>{children}</authContext.Provider>
  );
};

export default AuthProvider;
