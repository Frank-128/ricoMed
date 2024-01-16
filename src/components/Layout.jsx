import {
  Avatar,
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
  Typography,
} from "@material-tailwind/react";
import {
  Close,
  Dashboard,
  List,
  Memory,
  Message,
  Notifications,
  Payment,
  People,
  PeopleAltOutlined,
  Person4,
  PieChart,
  Search,
  Timer,
} from "@mui/icons-material";
import MenuIcon from '@mui/icons-material/Menu'
import { Alert, Badge, Snackbar } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import { users } from "../assets/data";
import { removeNotification } from "../redux/notificationSlice";
import Cookies from "js-cookie";
import { setUsers } from "../redux/userSlice";


function Layout({ children }) {
  const [active, setActive] = useState("dashboard");
  const location = useLocation();
  var sidebar_item = location.pathname.split("/")[1];
  const loggedUser = useSelector((state) => state.user.currentUser);
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [toggleSearch, setToggleSearch] = useState(false);
  const [searchArray, setSearchArray] = useState([]);
  const [openSidebar,setOpenSidebar] = useState(false)

  const notification = useSelector((state)=>state.notification)
  const dispatch = useDispatch()
  const token = Cookies.get("authenticatedUser");
  const access = JSON.parse(token).access;

  useEffect(() => {
    var value = location.pathname.split("/")[2];
    if (value === undefined || value.length === 0) {
      setActive("dashboard");
    } else {
      setActive(value);
    }
  }, [location]);
  useEffect(() => {
    setSearchArray(
      users.filter(
        (item) =>
          item.name.toLocaleLowerCase().includes(search.toLocaleLowerCase()) &&
          search !== ""
      )
    );
  }, [search]);
  const handleClick = () => {
    navigate("/nurse/staff/4");
    setToggleSearch(false);
    setSearch("");
  };

  useEffect(() => {
    var value = location.pathname.split("/")[2];
    if (value === undefined || value.length === 0) {
      setActive("dashboard");
    } else {
      setActive(value);
    }
  }, [location]);
  
  useEffect(() => {
    const socket = new WebSocket(`ws://localhost:8000/chat/?token=${access}`);

    socket.onopen = () => {
      socket.send(
        JSON.stringify({
          source: "users.list",
         
        })
      );
      socket.send(
        JSON.stringify({
          source: "online_users",
         
        })
      );
      console.log("connection opened")
    };

    socket.onmessage = (e) => {
      const response = JSON.parse(e.data);
      console.log(response)
      if (response.source == 'users.list'){
          dispatch(setUsers(response.data))
      }
    };

    socket.onclose = () => {
     
      console.log("connection closed in the backend");
    };

    socket.onerror = () => {
      dispatch(setUsers("error"))
      console.log("Error connecting the socket");
    };

    return () => {
     socket.close()
    };
  }, []);



  return (
    <div className="w-screen  flex flex-col ">
       <Snackbar
    anchorOrigin={{ vertical:'top', horizontal:'right' }}
    open={notification.status} autoHideDuration={4000} onClose={()=>dispatch(removeNotification())}>
    <Alert onClose={()=>dispatch(removeNotification())} severity={notification.type} sx={{ width: '100%' }}>
     {notification.message}
     
    </Alert> 
    </Snackbar>
      {/* Navabar for small devices */}
      <nav className="md:hidden fixed inset-0 z-50 bg-white h-16 flex flex-col">
      <div className="flex justify-between px-4 items-center">
          <img
            src="/ricoMed.jpg"
            className="w-8 h-8 object-cover rounded"
            alt="logo"
          />
         { openSidebar ? <Close fontSize="large" onClick={()=>setOpenSidebar(false)}/>: <MenuIcon fontSize="large" onClick={()=>setOpenSidebar(true)}/>}
        </div>
        <div className="flex items-center w-full bg-green-400 relative">
          <form
            action=""
            className="bg-gray-50 w-full flex  justify-between items-center  "
          >
            <input
              type="text"
              className="bg-inherit basis-10/12 rounded search p-2 outline-none"
              placeholder="search here..."
              onChange={(e) => setSearch(e.target.value)}
              value={search}
              onFocus={() => setToggleSearch(true)}
              onBlur={() => setToggleSearch(false)}
              name=""
              id="search"
            />
            <label htmlFor="search">
            <Search action="action" className="basis-2/12" fontSize="small" />
            </label>
          </form>
        </div>
        {toggleSearch && (
          <div className="absolute flex items-center flex-col searchResult bg-gray-50 border shadow-sm top-20 w-full px-3">
            {searchArray.length !== 0 ? (
              searchArray.map((item, i) => (
                <div
                  onClick={handleClick}
                  className="cursor-pointer p-2 hover:opacity-30"
                >
                  {item.name}
                </div>
              ))
            ) : (
              <div>
                <i>There is nothing to show</i>
              </div>
            )}
          </div>
        )}

      </nav>
      {/* Navbar for large devices */}
      <nav className="bg-gray-200 md:flex hidden justify-between h-16 items-center p-2 z-50 basis-1/12 w-full fixed top-0 left-0">
        <div>
          <img
            src="/ricoMed.jpg"
            className="w-16 h-16 object-cover rounded"
            alt="logo"
          />
        </div>

        <div className="flex items-center relative">
          <form
            action=""
            className="bg-gray-50 flex  justify-between items-center  rounded"
          >
            <input
              type="text"
              className="bg-inherit rounded search p-2 outline-none"
              placeholder="search here..."
              onChange={(e) => setSearch(e.target.value)}
              value={search}
              onFocus={() => setToggleSearch(true)}
              onBlur={() => setToggleSearch(false)}
              name=""
              id=""
            />
            <Search action="action" fontSize="large" />
          </form>
        </div>
        {toggleSearch && (
          <div className="absolute flex items-center flex-col searchResult bg-gray-50 border shadow-sm top-20 w-1/4 left-[35%]">
            {searchArray.length !== 0 ? (
              searchArray.map((item, i) => (
                <div
                  onClick={handleClick}
                  className="cursor-pointer p-2 hover:opacity-30"
                >
                  {item.name}
                </div>
              ))
            ) : (
              <div>
                <i>There is nothing to show</i>
              </div>
            )}
          </div>
        )}
        <div className="px-2 flex items-center gap-x-5">
          <Badge badgeContent={3} color="primary">
            <Notifications />
          </Badge>
          <Menu placement="top-end" className="mr-20">
            <MenuHandler>
              <Avatar
                variant="circular"
                alt="tania andrew"
                className="cursor-pointer outline outline-offset-2"
                src={'http://localhost:8000'+loggedUser.profile_picture}
              />
            </MenuHandler>
            <MenuList>
              <MenuItem>
                <Typography variant="small" className="font-normal">
                  My Profile
                </Typography>
              </MenuItem>

              <MenuItem className="flex items-center gap-2">
                <Typography variant="small" className="font-normal">
                  Inbox
                </Typography>
              </MenuItem>

              <hr className="my-2 border-blue-gray-50" />
              <MenuItem
                onClick={() => navigate("/login")}
                className="flex items-center gap-2 "
              >
                <Typography variant="small" className="font-normal">
                  Sign Out
                </Typography>
              </MenuItem>
            </MenuList>
          </Menu>
        </div>
      </nav>
      <main className="mt-16">
        <section className={`md:w-64 w-full p-5 h-full z-40 fixed  ${openSidebar?"":"hidden md:block"} bg-gray-50 border-r-[.8px]`}>
          <ul className="flex flex-col gap-4">
            <Link onClick={()=>setOpenSidebar(false)} to={`/${sidebar_item}`}>
              <li
                className={`flex items-center  ${
                  active === "dashboard"
                    ? "bg-purple-500 text-gray-200"
                    : "text-gray-700"
                }  p-2 rounded justify-center gap-3`}
              >
                <Dashboard /> <b> DashBoard</b>
              </li>
            </Link>
            {sidebar_item == "admin" && (
              <Link onClick={()=>setOpenSidebar(false)} to={`/${sidebar_item}/users`}>
                <li
                  className={`flex items-center  ${
                    active === "users"
                      ? "bg-purple-500 text-gray-200"
                      : "text-gray-700"
                  } p-2 rounded justify-center gap-3`}
                >
                  <PeopleAltOutlined /> <b> Users</b>
                </li>
              </Link>
            )}
            {sidebar_item == "admin" ||
              (sidebar_item == "reception" && (
                <Link onClick={()=>setOpenSidebar(false)} to={`/${sidebar_item}/staff`}>
                  <li
                    className={`flex items-center  ${
                      active === "staff"
                        ? "bg-purple-500 text-gray-200"
                        : "text-gray-700"
                    } p-2 rounded justify-center gap-3`}
                  >
                    <People /> <b> Staff</b>
                  </li>
                </Link>
              ))}
            <Link onClick={()=>setOpenSidebar(false)} to={`/${sidebar_item}/patients`}>
              <li
                className={`flex items-center  ${
                  active === "patients"
                    ? "bg-purple-500 text-gray-200"
                    : "text-gray-700"
                } p-2 rounded justify-center gap-3`}
              >
                <Person4 /> <b> Patients</b>
              </li>
            </Link>
            {(sidebar_item == "admin" ||
              sidebar_item == "pharmacy" ||
              sidebar_item == "nurse") && (
              <Link onClick={()=>setOpenSidebar(false)} to={`/${sidebar_item}/inventory`}>
                <li
                  className={`flex items-center  ${
                    active === "inventory"
                      ? "bg-purple-500 text-gray-200"
                      : "text-gray-700"
                  } p-2 rounded justify-center gap-3`}
                >
                  <PieChart /> <b> Inventory</b>
                </li>
              </Link>
            )}
            {sidebar_item == "admin" && (
              <Link onClick={()=>setOpenSidebar(false)} to={`/${sidebar_item}/logs`}>
                <li
                  className={`flex items-center  ${
                    active === "logs"
                      ? "bg-purple-500 text-gray-200"
                      : "text-gray-700"
                  } p-2 rounded justify-center gap-3`}
                >
                  <Memory /> <b> Logs</b>
                </li>
              </Link>
            )}
            {sidebar_item == "pharmacy" && (
              <Link onClick={()=>setOpenSidebar(false)} to="/pharmacy/orders">
                <li
                  className={`flex items-center  ${
                    active === "orders"
                      ? "bg-purple-500 text-gray-200"
                      : "text-gray-700"
                  } p-2 rounded justify-center gap-3`}
                >
                  <List /> <b>Pharmacy Orders</b>
                </li>
              </Link>
            )}
            {(sidebar_item == "admin" || sidebar_item == "reception") && (
              <Link onClick={()=>setOpenSidebar(false)} to={`/${sidebar_item}/payments`}>
                <li
                  className={`flex items-center  ${
                    active === "payments"
                      ? "bg-purple-500 text-gray-200"
                      : "text-gray-700"
                  } p-2 rounded justify-center gap-3`}
                >
                  <Payment /> <b> Payments</b>
                </li>
              </Link>
            )}
            {(sidebar_item == "doctor" || sidebar_item == "nurse") && (
              <Link onClick={()=>setOpenSidebar(false)} to={`/${sidebar_item}/schedule`}>
                <li
                  className={`flex items-center  ${
                    active === "schedule"
                      ? "bg-purple-500 text-gray-200"
                      : "text-gray-700"
                  } p-2 rounded justify-center gap-3`}
                >
                  <Timer /> <b> Schedule</b>
                </li>
              </Link>
            )}
            <Link onClick={()=>setOpenSidebar(false)} to={`/${sidebar_item}/messages`}>
              <li
                className={`flex items-center  ${
                  active === "messages"
                    ? "bg-purple-500 text-gray-200"
                    : "text-gray-700"
                } p-2 rounded justify-center gap-3`}
              >
                <Message /> <b> Messages</b>
              </li>
            </Link>
          </ul>
        </section>
        <section className="md:ml-64  overflow-y-scroll p-3">
          {children}
        </section>
      </main>
    </div>
  );
}

export default Layout;
