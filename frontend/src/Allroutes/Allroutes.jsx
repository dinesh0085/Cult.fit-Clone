import React from "react";
import { Route, Routes } from "react-router-dom";

import Care from "../pages/care";
import { Fitness } from "../pages/Fitness";

import { Home } from "../pages/Home/Home";
import Mind from "../pages/mind";
import { Store } from "../pages/Store";
import TestSinglePage from "../pages/testSinglePage";
import Admin from "../pages/Admin";
import Orders from "../components/UserComponent/Profile/ProfileAllPages/Orders";
import Account from "../components/UserComponent/Profile/ProfileAllPages/Account";
import Address from "../components/UserComponent/Profile/ProfileAllPages/Address";
import MedicalRecords from "../components/UserComponent/Profile/ProfileAllPages/MedicalRecords";
import Support from "../components/UserComponent/Profile/ProfileAllPages/Support";
import SimpleSidebar from "../components/UserComponent/Profile/ProfileComponent";
import Dcotors from "../pages/Dcotors";

import MindSinglePage from "../components/mind/MindSinglePage";
import Cart from "../pages/Cart";
import Profile from "../pages/User/Profile/Profile";

export const Allroutes = ({ setc }) => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home setc={setc} />} />
        <Route path="/fitness" element={<Fitness setc={setc} />} />
        <Route path="/care" element={<Care setc={setc} />} />
        <Route path="/mind" element={<Mind setc={setc} />} />
        <Route path="/cart" element={<Cart setc={setc} />} />
        <Route path="/doctor" element={<Dcotors setc={setc} />} />
        <Route path="/admin" element={<Admin setc={setc} />} />
        <Route path="/details/:id" element={<TestSinglePage setc={setc} />} />
        <Route
          path="/minddetails/:id"
          element={<MindSinglePage setc={setc} />}
        />
        <Route path={"/profile/*"} element={<Profile />} />
      </Routes>
    </div>
  );
};
