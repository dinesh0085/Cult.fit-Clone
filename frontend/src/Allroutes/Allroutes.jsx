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
import MindSinglePage from "../components/mind/MindSinglePage"

export const Allroutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/fitness" element={<Fitness />} />
        <Route path="/care" element={<Care />} />
        <Route path="/mind" element={<Mind />} />
        <Route path="/doctor" element={<Dcotors></Dcotors>} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/details/:id" element={<TestSinglePage />} />
        <Route path="/minddetails/:id" element={<MindSinglePage></MindSinglePage>} />
      </Routes>
      <SimpleSidebar>
        <Routes>
          <Route path={"/profile/orders"} element={<Orders />} />
          <Route path={"/profile/account"} element={<Account />} />
          <Route path={"/profile/address"} element={<Address />} />
          <Route
            path={"/profile/medical_records"}
            element={<MedicalRecords />}
          />
          <Route path={"/profile/support"} element={<Support />} />
        </Routes>
      </SimpleSidebar>
    </div>
  );
};
