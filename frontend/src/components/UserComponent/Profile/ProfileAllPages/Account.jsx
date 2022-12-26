import React from "react";
import { useSelector } from "react-redux";

const Account = () => {
  const { userInfo } = useSelector((store) => store.login);
  console.log(userInfo);
  return <div></div>;
};

export default Account;
