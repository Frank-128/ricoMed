import { ArrowDropDown, ArrowDropUp, Dangerous, PersonAddAlt } from "@mui/icons-material";
import {
  Button,
  CircularProgress,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { users } from "../assets/data";
import UpdateUser from "./UpdateUser";
import { axios } from "../axios";
import { useForm } from "react-hook-form";
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  Input,
} from "@material-tailwind/react";
import Cookies from "js-cookie";
import { useSelector } from "react-redux";
import moment from "moment";

function Users() {
  const [openForm, setOpenForm] = useState(false);
  const [type, setType] = useState(1);
  const [users, setUsers] = useState(null);
  const [openAccordion, setAccordion] = useState(false);
  const [loading, setLoading] = useState(false);

  const token = Cookies.get("authenticatedUser");
  const access = JSON.parse(token).access;
  const user = useSelector((state)=>state.user.currentUser)
  const { register, handleSubmit } = useForm();

  const handleSubmitDepartment = async (data) => {
    console.log(data);
    setLoading(true);
    await axios
      .post("/accounts/department", data)
      .then((res) => {
        console.log(res.data);
        setAccordion(false);
      })
      .catch((error) => {
        console.log(error);
      });
    setLoading(false);
  };

  const formatDate = (rawDate)=>{
    console.log(moment(rawDate).format('MMMM Do YYYY, h:mm:ss a'))
    return moment(rawDate).format('MMMM Do YYYY, h:mm:ss a')
  }

  // useEffect(() => {
  //   (async () => {
  //     await axios
  //       .get("/accounts/user")
  //       .then((res) => {
  //         setUsers(res.data);
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //   })();
  // }, []);

  useEffect(() => {
    const socket = new WebSocket(`ws://localhost:8000/chat/?token=${access}`);

    socket.onopen = () => {
      socket.send(
        JSON.stringify({
          source: "users.list",
          username:user.username
        })
      );
      socket.send(
        JSON.stringify({
          source: "online_users",
          username:user.username
        })
      );
      console.log("connection opened")
    };

    socket.onmessage = (e) => {
      const response = JSON.parse(e.data);
      console.log(response)
      if (response.source == 'users.list'){
          setUsers(response.data)
      }
    };

    socket.onclose = () => {
     
      console.log("connection closed in the backend");
    };

    socket.onerror = () => {
      setUsers("error")
      console.log("Error connecting the socket");
    };

    return () => {
     socket.close()
    };
  }, []);


  
  
  return (
    <div className="flex flex-col gap-5 ">
      <div className="flex w-full justify-between">
        <Accordion open={openAccordion} className="w-1/4">
          <AccordionHeader onClick={() => setAccordion(!openAccordion)}>
            Add Department {openAccordion ? <ArrowDropDown /> : <ArrowDropUp />}
          </AccordionHeader>
          <AccordionBody>
            <form onSubmit={handleSubmit(handleSubmitDepartment)}>
              <Input {...register("department_name")} label="Department Name" />
              <Button disabled={loading} type="submit">
                {loading ? <CircularProgress /> : "Add Department"}
              </Button>
            </form>
          </AccordionBody>
        </Accordion>
        <Button
          onClick={() => {
            setOpenForm(true);
            setType(1);
          }}
          className="flex mx-3 gap-2"
        >
          <PersonAddAlt /> <span>Add User</span>
        </Button>
      </div>
      <Table>
        <TableHead>
          <TableRow className="bg-gray-400 border-b-[0.4px]">
            <TableCell>ID</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Department</TableCell>
            <TableCell>Role</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Created At</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users == null ? 'Loading.....' :users == "error" ? <span className="text-red-500"> <Dangerous/> Error fetching users please try again later</span> : users.map((item, i) => (
            <TableRow
              key={i}
              className={i % 2 == 0 ? "bg-gray-100" : "bg-gray-200"}
            >
              <TableCell>{item?.id}</TableCell>
              <TableCell>
                <span
                  onClick={() => {
                    setOpenForm(true);
                    setType(2);
                  }}
                  className="hover:text-blue-900 cursor-pointer"
                >
                  {item?.username}
                </span>
              </TableCell>
              <TableCell>{item?.department?.department_name}</TableCell>
              <TableCell>{item?.role}</TableCell>
              <TableCell>
                {item?.status ? (
                  <span className="p-2 bg-green-500 rounded text-white">
                    online
                  </span>
                ) : (
                  <span className="p-2 text-white bg-red-500 rounded">
                    offline
                  </span>
                )}
              </TableCell>
              <TableCell>{formatDate(item?.created_at)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      {openForm && <UpdateUser close={setOpenForm} type={type} />}
    </div>
  );
}

export default Users;
