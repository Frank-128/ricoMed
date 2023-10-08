import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Receptionist from "./pages/Receptionist";
import Login from "./pages/Login";
import Home from "./pages/Home";
import "./App.css";
import Dashboard from "./components/Dashboard";
import Staff from "./components/Staff";
import Patients from "./components/Patients";
import Payments from "./components/Payments";
import Messages from "./components/Messages";
import Doctors from "./components/Doctors";
import Nurses from "./components/Nurses";
import Inventory from "./components/Inventory";
import Profile from "./components/Profile";
import PatientProfile from "./components/PatientProfile";
import Nurse from "./pages/Nurse";
import NurseSchedule from "./components/NurseSchedule";
import Doctor from "./pages/Doctor";
import { useSelector } from "react-redux";
import Swal from "sweetalert2";
import PageNotFound from "./pages/PageNotFound";
import Administration from "./pages/Administration";
import Users from "./components/Users";
import Logs from "./components/Logs";
import PharmacyOrders from "./components/PharmacyOrders";
import Pharmacy from "./pages/Pharmacy";
function App() {
  const user = useSelector((state) => state.currentUser);
  const [loggedUser, setLoggedUser] = useState(null);
  const handleUnsigned = () => {
    Swal.fire({
      icon: "error",
      title: "Unathorized",
      text: "You are not logged in",
    });
    return <Route element={<Home />} path="/" />;
  };

  useEffect(() => {
    setLoggedUser(user);
  }, [user]);
  console.log(loggedUser);
  return (
    <BrowserRouter>
      <Routes>
        
        <Route element={<Login />} path="/login" />
        {loggedUser?.role === "reception" && (
          <Route element={<Receptionist />} path="/reception">
            <Route element={<Dashboard />} path="/reception" />
            <Route element={<Staff />} path="/reception/staff" />
            <Route element={<Profile />} path="/reception/staff/:id" />
            <Route element={<Doctors />} path="/reception/staff/doctors" />
            <Route element={<Nurses />} path="/reception/staff/nurses" />
            <Route element={<Inventory />} path="/reception/staff/inventory" />
            <Route element={<Patients />} path="/reception/patients" />
            <Route
              element={<PatientProfile />}
              path="/reception/patients/:id"
            />
            <Route element={<Payments />} path="/reception/payments" />
            <Route element={<Messages />} path="/reception/messages" />
          </Route>
        )}
        {loggedUser?.role === "nurse" && (
          <Route element={<Nurse />} path="/nurse">
            <Route element={<Dashboard />} path="/nurse" />
            <Route element={<Staff />} path="/nurse/staff" />
            <Route element={<Inventory />} path="/nurse/inventory" />
            <Route element={<Profile />} path="/nurse/staff/:id" />
            <Route element={<Nurses />} path="/nurse/staff/nurses" />
            <Route element={<Doctors />} path="/nurse/staff/doctors" />
            <Route element={<Patients />} path="/nurse/patients" />
            <Route element={<PatientProfile />} path="/nurse/patients/:id" />
            <Route element={<NurseSchedule />} path="/nurse/schedule" />
            <Route element={<Messages />} path="/nurse/messages" />
          </Route>
        )}
        {loggedUser?.role === "doctor" && (
          <Route element={<Doctor />} path="/doctor">
            <Route element={<Dashboard />} path="/doctor" />
            <Route element={<Staff />} path="/doctor/staff" />
            <Route element={<Profile />} path="/doctor/staff/:id" />
            <Route element={<Doctors />} path="/doctor/staff/doctors" />
            <Route element={<Patients />} path="/doctor/patients" />
            <Route element={<PatientProfile />} path="/doctor/patients/:id" />
            <Route element={<NurseSchedule />} path="/doctor/schedule" />
            <Route element={<Messages />} path="/doctor/messages" />
          </Route>
        )}
        {loggedUser?.role === "pharmacy" && (
          <Route element={<Pharmacy />} path="/pharmacy">
            <Route element={<Dashboard />} path="/pharmacy" />
            
            <Route element={<Inventory />} path="/pharmacy/inventory" />
            <Route element={<PharmacyOrders />} path="/pharmacy/orders" />
            <Route element={<PatientProfile />} path="/pharmacy/patients/:id" />
            <Route element={<Messages />} path="/pharmacy/messages" />
          </Route>
        )}
        {loggedUser?.role === "admin" && (
          <Route element={<Administration />} path="/admin">
            <Route element={<Dashboard />} path="/admin" />
            <Route element={<Users />} path="/admin/users" />
            <Route element={<Staff />} path="/admin/staff" />
            <Route element={<Logs />} path="/admin/logs" />
            <Route element={<Profile />} path="/admin/staff/:id" />
            <Route element={<Doctors />} path="/admin/staff/doctors" />
            <Route element={<Nurses />} path="/admin/staff/nurses" />
            <Route element={<Inventory />} path="/admin/inventory" />
            <Route element={<Patients />} path="/admin/patients" />
            <Route element={<PatientProfile />} path="/admin/patients/:id" />
            <Route element={<Payments />} path="/admin/payments" />
            <Route element={<Messages />} path="/admin/messages" />
          </Route>
        )}
        <Route element={<Home />} path="/" />
        <Route element={<PageNotFound />} path="*" />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
