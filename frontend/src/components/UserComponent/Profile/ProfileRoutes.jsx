import React from "react";
import { Route, Routes } from "react-router-dom";
import Account from "./ProfileAllPages/Account";
import Address from "./ProfileAllPages/Address";
import MedicalRecords from "./ProfileAllPages/MedicalRecords";
import Orders from "./ProfileAllPages/Orders";
import Support from "./ProfileAllPages/Support";
import SimpleSidebar from "./ProfileComponent";

const ProfileRoutes = () => {
  return (
    <div>
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

export default ProfileRoutes;
