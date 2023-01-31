import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";


const ProtectedRoute = ({ children }) => {
  const store = useSelector((store) => store.login);
  if (!store.isAuth) {
    return <Navigate to={"/"} />;
  }
  return children;
};

export default ProtectedRoute;
