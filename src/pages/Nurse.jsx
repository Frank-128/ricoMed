// import {
//   Dashboard,
//   Message,
//   Notifications,
//   Payment,
//   People,
//   Person4,
//   Search,
//   Timer,
// } from "@mui/icons-material";
// import { Badge } from "@mui/material";
// import React, { useEffect, useState } from "react";
// import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
// import "./Nurse.css";
// import { users } from "../assets/data";
// function Nurse() {
//   const [active, setActive] = useState("dashboard");
//   const [search, setSearch] = useState("");
//   const [toggleSearch, setToggleSearch] = useState(false);
//   const [searchArray, setSearchArray] = useState([]);
//   const navigate = useNavigate();
//   const location = useLocation();
//   useEffect(() => {
//     var value = location.pathname.split("/")[2];
//     if (value === undefined || value.length === 0) {
//       setActive("dashboard");
//     } else {
//       setActive(value);
//     }
//   }, [location]);
//   useEffect(() => {
//     setSearchArray(
//       users.filter(
//         (item) =>
//           item.name.toLocaleLowerCase().includes(search.toLocaleLowerCase()) &&
//           search !== ""
//       )
//     );
//   }, [search]);
//   const handleClick = () => {
//     navigate("/nurse/staff/4");
//     setToggleSearch(false);
//     setSearch("");
//   };
//   return (
//     <div className="w-screen overflow-y-scroll flex flex-col font-mono">
//       <nav className="bg-gray-200 flex justify-between items-center  p-2 z-50 basis-1/12 sticky top-0 left-0">
//         <div>
//           <img
//             src="/ricoMed.jpg"
//             className="w-16 h-16 object-cover rounded"
//             alt="logo"
//           />
//         </div>

//         <div className="flex items-center relative">
//           <form
//             action=""
//             className="bg-gray-50 flex  justify-between items-center  rounded"
//           >
//             <input
//               type="text"
//               className="bg-inherit rounded search p-2 outline-none"
//               placeholder="search here..."
//               onChange={(e) => setSearch(e.target.value)}
//               value={search}
//               onFocus={() => setToggleSearch(true)}
//               name=""
//               id=""
//             />
//             <Search action="action" fontSize="large" />
//           </form>
//         </div>
//         {toggleSearch && (
//           <div className="absolute flex items-center flex-col searchResult bg-slate-50 top-20 w-1/4 left-[35%]">
//             {searchArray.length !== 0 ? (
//               searchArray.map((item, i) => (
//                 <div
//                   onClick={handleClick}
//                   className="cursor-pointer p-2 hover:opacity-30"
//                 >
//                   {item.name}
//                 </div>
//               ))
//             ) : (
//               <div>
//                 <i>There is nothing to show</i>
//               </div>
//             )}
//           </div>
//         )}
//         <div className="px-2 flex  items-center gap-x-5">
//           <Badge badgeContent={3} color="primary">
//             <Notifications />
//           </Badge>
//           <img
//             src="/amandla.jpeg"
//             className="w-14 h-14 rounded-full object-cover outline outline-cyan-800 outline-offset-1"
//             alt="profile pic"
//           />
//         </div>
//       </nav>
//       <main className="  w-full ">
//         <section className="w-96 fixed p-5  bg-slate-50">
//           <ul className="flex flex-col gap-4">
//             <Link to="/nurse">
//               <li
//                 className={`flex items-center  ${
//                   active === "dashboard"
//                     ? "bg-blue-900 text-gray-200"
//                     : "text-gray-700"
//                 }  p-2 rounded justify-center gap-3`}
//               >
//                 <Dashboard /> <b> DashBoard</b>
//               </li>
//             </Link>
//             <Link to="/nurse/staff">
//               <li
//                 className={`flex items-center  ${
//                   active === "staff"
//                     ? "bg-blue-900 text-gray-200"
//                     : "text-gray-700"
//                 } p-2 rounded justify-center gap-3`}
//               >
//                 <People /> <b> Staff</b>
//               </li>
//             </Link>
//             <Link to="/nurse/patients">
//               <li
//                 className={`flex items-center  ${
//                   active === "patients"
//                     ? "bg-blue-900 text-gray-200"
//                     : "text-gray-700"
//                 } p-2 rounded justify-center gap-3`}
//               >
//                 <Person4 /> <b> Patients</b>
//               </li>
//             </Link>
//             <Link to="/nurse/schedule">
//               <li
//                 className={`flex items-center  ${
//                   active === "schedule"
//                     ? "bg-blue-900 text-gray-200"
//                     : "text-gray-700"
//                 } p-2 rounded justify-center gap-3`}
//               >
//                 <Timer /> <b> Schedule</b>
//               </li>
//             </Link>
//             <Link to="/nurse/messages">
//               <li
//                 className={`flex items-center  ${
//                   active === "messages"
//                     ? "bg-blue-900 text-gray-200"
//                     : "text-gray-700"
//                 } p-2 rounded justify-center gap-3`}
//               >
//                 <Message /> <b> Messages</b>
//               </li>
//             </Link>
//           </ul>
//         </section>
//         <section className="ml-96  bg-slate-100  p-3">
//           <Outlet />
//         </section>
//       </main>
//     </div>
//   );
// }

// export default Nurse;

import React from 'react'
import Layout from '../components/Layout'
import { Outlet } from 'react-router-dom'

const Nurse = () => {
  return (
    <Layout children={<Outlet/>} />
  )
}

export default Nurse
