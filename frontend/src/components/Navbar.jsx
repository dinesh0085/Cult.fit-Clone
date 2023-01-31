import React from "react";
import style from "./Navbar.module.css";
import { Link, NavLink } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Nimg } from "./nimg";
import { Location } from "./Location";
import Login from "../pages/User/Login/Login";
import { useSelector } from "react-redux";
import { ProfileModal } from "../pages/User/Profile/ProfileModal";

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
           <Link to="/admin"><button className={style.getapp}>ADMIN PAGE</button></Link> 
          </div>
          <div>
            {isAuth ? (
              <ProfileModal />
              
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
