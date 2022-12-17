import React from "react";
import style from "./Navbar.module.css";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Nimg } from "./nimg";
import { Location } from "./Location";
import Login from "../Pages/User/Login/Login";

export default function Navbar() {
  return (
    <>
      <nav className={style.Navbar}>
        <Link to="/">
          <div className={style.logo}>
            <Nimg /> <h4>CARE&FIT</h4>
          </div>{" "}
        </Link>

        <div className={style.middle}>
          <Link to="/">
            <div className={style.logo1}>
              <Nimg /> <h4>CARE&FIT</h4>{" "}
            </div>
          </Link>
          <Link to="/fitness">
            <h5>FITNESS</h5>
          </Link>
          <Link to="/care">
            <h5>CARE</h5>
          </Link>
          <Link to="/mind">
            {" "}
            <h5>MIND</h5>
          </Link>
          <Link to="/store">
            <h5>STORE</h5>
          </Link>
        </div>

        <div className={style.right}>
          <span>
            <Location />
          </span>
          <div>
            <button className={style.getapp}>GET APP</button>
          </div>
          <div>
            <PermIdentityIcon/>
          </div>
          <div>
            <Link to="/cart">
              <ShoppingCartIcon />
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}
