import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  GithubAuthProvider,
  updateProfile,
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
  // login user with google
  const googleProvider = new GoogleAuthProvider();
  function signinWithGoogle() {
    return signInWithPopup(auth, googleProvider);
  }
  // login user with google

  const provider = new GithubAuthProvider();
  function githubLogin() {
    return signInWithPopup(auth, provider);
  }
  // logout user
  function logoutUser() {
    return signOut(auth);
  }
  // update profile
  function updateUserProfile(name, photo) {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
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
  const userInfo = {
    user,
    createUser,
    loginUser,
    logoutUser,
    updateUserProfile,
    signinWithGoogle,
    githubLogin,
  };
  return (
    <authContext.Provider value={userInfo}>{children}</authContext.Provider>
  );
};

export default AuthProvider;
