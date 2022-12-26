import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import Account from "../../../components/UserComponent/Profile/ProfileAllPages/Account";
import Address from "../../../components/UserComponent/Profile/ProfileAllPages/Address";
import MedicalRecords from "../../../components/UserComponent/Profile/ProfileAllPages/MedicalRecords";
import Orders from "../../../components/UserComponent/Profile/ProfileAllPages/Orders";
import Support from "../../../components/UserComponent/Profile/ProfileAllPages/Support";
import SimpleSidebar from "../../../components/UserComponent/Profile/ProfileComponent";

const Profile = () => {
  return (
    <>
      <SimpleSidebar>
        <Routes>
          <Route path={"/account"} element={<Account />} />
          <Route path={"/orders"} element={<Orders />} />
          <Route path={"/address"} element={<Address />} />
          <Route path={"/medical_records"} element={<MedicalRecords />} />
          <Route path={"/support"} element={<Support />} />
        </Routes>
      </SimpleSidebar>
    </>
  );
};

export default Profile;
