import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import LoginModal from "../../../components/UserComponent/Login/LoginModal";
// import { getUser } from "../../../redux/User/Login/login.action";

// This page has no use but can be used in show alert the user is unauthenticated
const Login = () => {
  const { isAuth } = useSelector((store) => store.login);

  useEffect(()=>{
    
  }, [isAuth]);

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
