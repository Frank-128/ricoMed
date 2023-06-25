import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Receptionist from "./pages/Receptionist";
import Login from "./pages/Login";
import Home from "./pages/Home";
import './App.css'
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
function App() {
  return (
    <BrowserRouter >
      <Routes>
        <Route element={<Login/>} path="/login" />
        <Route element={<Receptionist />} path="/reception">
          <Route element={<Dashboard/>} path="/reception" />
          <Route element={<Staff/>} path="/reception/staff" />
          <Route element={<Profile/>} path="/reception/staff/:id" />
          <Route element={<Doctors/>} path="/reception/staff/doctors" />
          <Route element={<Nurses/>} path="/reception/staff/nurses" />
          <Route element={<Inventory/>} path="/reception/staff/inventory" />
          <Route element={<Patients/>} path="/reception/patients" />
          <Route element={<PatientProfile/>} path="/reception/patients/:id" />
          <Route element={<Payments/>} path="/reception/payments" />
          <Route element={<Messages/>} path="/reception/messages" />

        </Route>
        <Route element={<Home/>} path="/" />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
