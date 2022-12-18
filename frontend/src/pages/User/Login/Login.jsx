import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import LoginModal from "../../../components/UserComponent/Login/LoginModal";

// This page has no use but can be used in show alert the user is unauthenticated
const Login = () => {
  const { isAuth } = useSelector((store) => store.login);
  if (isAuth) {
    return <Navigate to={"/"} />;
  }
  return (
    <>
      <LoginModal />
    </>
  );
};

export default Login;
