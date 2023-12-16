import { Dashboard, Message, Notifications, Payment, People, Person4, Search } from "@mui/icons-material";
import { Badge } from "@mui/material";
import React from "react";
import Layout from "../components/Layout";
import {  Outlet } from "react-router-dom";

function Receptionist() {
     return (
    <Layout children={<Outlet/>} /> 
  );
}

export default Receptionist;
