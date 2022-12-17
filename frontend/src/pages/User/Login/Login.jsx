import { Box } from "@chakra-ui/react";
import React from "react";
import LoginModal from "../../../components/UserComponent/Login/LoginModal";

// This page has no use but can be used in show alert the user is unauthenticated
const Login = () => {
  return (
    <>
      <LoginModal />
    </>
  );
};

export default Login;
