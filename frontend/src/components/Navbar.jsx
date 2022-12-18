import React from "react";
import style from "./Navbar.module.css";
import { Link, NavLink } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Nimg } from "./nimg";
import { Location } from "./Location";
import Login from "../pages/User/Login/Login";
import { FaUserCircle } from "react-icons/fa";
import { useSelector } from "react-redux";
import { Icon } from "@chakra-ui/icon";

export default function Navbar({ c }) {
  const { isAuth } = useSelector((store) => store.login);
  return (
    <>
      <nav className={style.Navbar} style={{ backgroundColor: c }}>
        <NavLink to="/">
          <div className={style.logo}>
            <Nimg /> <h4>CARE&FIT</h4>
          </div>
        </NavLink>

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
          <Link to="/doctor">
            <h5>DOCTOR</h5>
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
            {isAuth ? (
              <Link to={"/profile/account"}>
                <Icon w={5} h={5} as={FaUserCircle} />
              </Link>
            ) : (
              <Login />
            )}
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
