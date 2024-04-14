import React from "react";
import { Navigate } from "react-router-dom";
import useUserContext from "../../hooks/useUserContext";

const PrivateRoute = ({ children }) => {
  const { loading, user } = useUserContext();
  if (loading) {
    return <div>Loading...</div>;
  }
  if (user) {
    return children;
  }
  return <Navigate to={"/login"}></Navigate>;
};

export default PrivateRoute;
