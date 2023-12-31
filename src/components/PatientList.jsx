import React,{useEffect, useState} from "react";
import { Button, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material'
// import { patients } from '../assets/data'
import { Link, Navigate, Route, Routes, useNavigate, useResolvedPath } from 'react-router-dom'
import { axios } from "../axios";
import { useDispatch } from "react-redux";
import { createNotification } from "../redux/notificationSlice";


const PatientList = () => {
    const [type,setType] = useState("all")
    const [patients,setPatients] = useState([])
    const navigate = useNavigate()
    const dispatch = useDispatch()

  useEffect(()=>{

    axios.get('patients/').then((res)=>{
      setPatients(res.data)
    }).catch((err)=>{
      dispatch(createNotification({type:"error",message:"Sorry, Network error occurred we will be back to you soon!!"}))
    })

  },[])

  return (
    <>
      <div className="flex-1 justify-center flex  ">
        <div className="flex  bg-slate-300  rounded">
          <span
            onClick={() => setType("all")}
            className={`border-r-2 p-2 ${
              type === "all" ? "bg-purple-500 text-gray-200" : ""
            } cursor-pointer py-2 border-slate-600 px-2`}
          >
            All
          </span>
          <span
            onClick={() => setType("inpatient")}
            className={`border-r-2 p-2 ${
              type === "inpatient" ? "bg-purple-500 text-gray-200" : ""
            } cursor-pointer py-2 border-slate-600 `}
          >
            Inpatient
          </span>
          <span
            onClick={() => setType("outpatient")}
            className={`border-r-2 p-2  ${
              type === "outpatient" ? "bg-purple-500 text-gray-200" : ""
            } cursor-pointer p-2 border-slate-600 px-2`}
          >
            Outpatient
          </span>
          <span
            onClick={() => setType("discharged")}
            className={` p-2 ${
              type === "discharged" ? "bg-purple-500 text-gray-200" : ""
            } cursor-pointer p-2 border-slate-600 px-2`}
          >
            Discharged
          </span>
        </div>
      </div>
      <div>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Doctor</TableCell>
              <TableCell>Type</TableCell>
              <TableCell>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {patients
              .filter(
                (item) =>
                  (item.is_inpatient_type && type=="inpatient" ) || (!item.is_inpatient_type && type=="outpatient")  || type === "all" || item.status === type
              )
              .map((item, i) => (
                <TableRow key={i}>
                  <TableCell>
                    <Link to={`profile/${item.id}`} className="text-blue-800">
                      {item.firstname}{" "+item.lastname}
                    </Link>
                  </TableCell>
                 
                  <TableCell>{item.assigned_doctor}</TableCell>
                  <TableCell>{item.is_inpatient_type   ? "Inpatient":"Outpatient"}</TableCell>
                  <TableCell>{item.status}</TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </div>
    </>
  );
};

export default PatientList;
