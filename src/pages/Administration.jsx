import { Dashboard, Memory, Message, Notifications, Payment, People, PeopleAltOutlined, Person4, Search } from "@mui/icons-material";
import { Badge } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";

function Administration() {
    const [active,setActive] = useState("dashboard")
    const  location = useLocation();
    useEffect(()=>{
      var value = location.pathname.split("/")[2]
      if(value === undefined || value.length === 0){
        setActive("dashboard")
      }else{

        setActive(value)
      }
        

        
        
    },[location])

   console.log(active) 
  return (
    <div className="w-screen h-screen overflow-y-scroll flex flex-col font-mono">
      <nav className="bg-gray-200 flex z-50 justify-between p-2 basis-1/12 sticky top-0 left-0">
        <div>
          <img
            src="/ricoMed.jpg"
            className="w-16 h-16 object-cover rounded"
            alt="logo"
          />
        </div>
        <div className="flex items-center ">
          <form action="" className="bg-gray-50 flex justify-between items-center  rounded">
            <input
              type="text"
              className="bg-inherit rounded p-2 outline-none"
              placeholder="search here..."
              name=""
              id=""
            />
            <Search action="action" fontSize="large" />
          </form>
        </div>
        <div className="px-2 flex items-center gap-x-5">
          <Badge badgeContent={3} color="primary">
            <Notifications />
          </Badge>
          <img
            src="/olivia.webp"
            className="w-14 h-14 rounded-full object-cover outline outline-cyan-800 outline-offset-1"
            alt="profile pic"
          />
        </div>
      </nav>
      <main className="flex basis-11/12 ">
        <section className="basis-1/5 p-5  bg-slate-50">
          <ul className="flex flex-col gap-4">
            <Link to="/admin">
              <li className={`flex items-center  ${active==="dashboard"?'bg-blue-900 text-gray-200':'text-gray-700'}  p-2 rounded justify-center gap-3`}>
                <Dashboard /> <b> DashBoard</b>
              </li>
            </Link>
            <Link to="/admin/users">
              <li className={`flex items-center  ${active==="users"?'bg-blue-900 text-gray-200':'text-gray-700'} p-2 rounded justify-center gap-3`}>
                <PeopleAltOutlined /> <b> Users</b>
              </li>
            </Link>
            <Link to="/admin/staff">
              <li className={`flex items-center  ${active==="staff"?'bg-blue-900 text-gray-200':'text-gray-700'} p-2 rounded justify-center gap-3`}>
                <People /> <b> Staff</b>
              </li>
            </Link>
            <Link to="/admin/patients">
              <li className={`flex items-center  ${active==="patients"?'bg-blue-900 text-gray-200':'text-gray-700'} p-2 rounded justify-center gap-3`}>
                <Person4 /> <b> Patients</b>
              </li>
            </Link>
            <Link to="/admin/logs">
              <li className={`flex items-center  ${active==="logs"?'bg-blue-900 text-gray-200':'text-gray-700'} p-2 rounded justify-center gap-3`}>
                <Memory /> <b> Logs</b>
              </li>
            </Link>
            <Link to="/admin/payments">
              <li className={`flex items-center  ${active==="payments"?'bg-blue-900 text-gray-200':'text-gray-700'} p-2 rounded justify-center gap-3`}>
                <Payment /> <b> Payments</b>
              </li>
            </Link>
            <Link to="/admin/messages">
              <li className={`flex items-center  ${active==="messages"?'bg-blue-900 text-gray-200':'text-gray-700'} p-2 rounded justify-center gap-3`}>
                <Message /> <b> Messages</b>
              </li>
            </Link>
          </ul>
        </section>
        <section className="basis-4/5 bg-slate-100  p-3">
          <Outlet />
        </section>
      </main>
    </div>
  );
}

export default Administration;
