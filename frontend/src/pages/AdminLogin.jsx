import React from "react";
import { useState } from "react";
import axios from "axios";

const AdminLogin = ({ setLogin }) => {
  const style = {
    height: "30px",
    boxShadow: "1px 1px 8px black",
    padding: "10px",
  };

  const [state, setState] = useState("Enter your credentials");
  const [obj, setObj] = useState({ email: "", password: "" });
  const submit = () => {
    axios
      .post("https://sore-erin-sockeye-tam.cyclic.app/login", obj)
      .then((r) => localStorage.setItem("admin", r.data));
    setState("your have successfully logged in");
    setLogin(0);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "40%",
        margin: "auto",
        marginTop: "150px",
        gap: "20px",
        boxShadow: "2px 2px 10px black",
        padding: "20px",
        marginBottom: "50px",
      }}
    >
      <h1>{state}</h1>
      <input
        style={style}
        type="email"
        name=""
        placeholder="email"
        onChange={(e) => setObj({ ...obj, email: e.target.value })}
      />
      <input
        style={style}
        type="password"
        name=""
        placeholder="password"
        id=""
        onChange={(e) => setObj({ ...obj, password: e.target.value })}
      />
      <button style={{ backgroundColor: "teal" }} onClick={submit}>
        submit
      </button>
    </div>
  );
};

export default AdminLogin;
