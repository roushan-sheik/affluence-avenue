import React from "react";

const authContext = React.createContext(null);
const AuthProvider = ({ children }) => {
  const [user, setUser] = React.useState("user nai");

  const userInfo = { user };
  return (
    <authContext.Provider value={userInfo}>{children}</authContext.Provider>
  );
};

export default AuthProvider;
