import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { patients } from "../assets/data";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import PatientVitals from "./PatientVitals";
import UpdatePatient from "./UpdatePatient";
import PatientBill from "./PatientBill";
import { axios } from "../axios";
import { useDispatch } from "react-redux";
import { createNotification } from "../redux/notificationSlice";
import { Card, Typography,Button } from "@material-tailwind/react";
import { Receipt, Report } from "@mui/icons-material";

function PatientProfile() {
  const location = useLocation();
  const [id, setId] = useState(location.pathname.split("/")[4] || 0);
  const [pat, setPat] = useState();
  const [vitals, setVitals] = useState([]);
  const [bills, setBills] = useState([]);
  const [patientVitals, setPatientVitals] = useState(false);
  const [generateBillSwitch,setGenerateBill] = useState(false)
  const [updatePatient, setUpdatePatient] = useState(false);
  const [patientBill, setPatientBill] = useState(false);
  const dispatch = useDispatch();


  const generateBill = async()=>{
    setGenerateBill(true)
    await axios.get('bills/generate_bill/'+id,{responseType:'blob'}).then((res)=>{
      console.log(res)
      const blob = res.data
      const url = URL.createObjectURL(blob)
      window.open(url,'_blank')
    }).catch((err)=>{
      console.log(err)
    })
    setGenerateBill(false)
  }

  useEffect(() => {
    axios
      .get("patients/vitals/" + id)
      .then((res) => {
        setVitals(res.data);
      })
      .catch((err) => {
        dispatch(
          createNotification({
            type: "error",
            message: "Error fetching vitals",
          })
        );
      });
  }, [patientVitals]);

  useEffect(() => {
    axios
      .get("bills/patient/" + id)
      .then((res) => {
        setBills(res.data);
      })
      .catch((err) => {
        dispatch(
          createNotification({
            type: "error",
            message: "Error fetching patient bills",
          })
        );
      });
  }, [patientBill]);

  useEffect(() => {
    axios
      .get("patients/" + id)
      .then((res) => {
        setPat(res.data);
      })
      .catch((err) => {
        dispatch(
          createNotification({
            type: "error",
            message: "Error fetching patient",
          })
        );
      });
  }, [location,generateBillSwitch]);
  console.log(pat)
  return (
    <div className="flex flex-col h-full gap-5 w-full items-center  justify-around">
     
     <div className="flex justify-between w-full mt-2">
     <Card className="p-4 shadow-lg">
        <span>
          Patient Name: {pat?.firstname} {pat?.lastname}
        </span>
        <span>Status: {pat?.status}</span>
        <span>Ward: N/A</span>
        <span>Medical Report: {pat?.firstname}</span>
        <span>Type: {pat?.type}</span>
       
        <div className="flex gap-3 justify-between">
        <Button
            onClick={() => setUpdatePatient(true)}
            className="bg-purple-500 hover:bg-white hover:text-purple-500"
          >
            Update Details
          </Button>
        </div>
      </Card>
      <Card className="flex flex-col justify-around p-4">
      <Button
            onClick={() => setPatientVitals(true)}
            className="bg-purple-500 hover:bg-white hover:text-purple-500 "
          >
            Add Patient Vitals
          </Button>

          <Button
          onClick={() => setPatientBill(true)}
          className="bg-purple-500 hover:text-purple-500 hover:bg-white duration-500"
        >
          Add Service
        </Button>
          {pat?.status !== "discharged" ? (
            <Button className="hover:bg-white hover:text-purple-500 bg-[#5f55ca]">
              Discharge
            </Button>
          ) : (
            <Button className="hover:bg-white hover:text-purple-500 bg-[#aa3632]">
              Delete Record
            </Button>
          )}
      </Card>
     </div>
      <div className="flex  flex-col  justify-between w-full ">
        <div>
          <span className="text-3xl font-semibold">Patient Vital's</span>
          <Card className="h-full w-full overflow-scroll">
            <table className="w-full min-w-max table-auto text-left">
              <thead>
                <tr>
                  
                  <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal leading-none opacity-70"
                    >
                      Vital
                    </Typography>
                  </th>
                  <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal leading-none opacity-70"
                    >
                      Current Vital
                    </Typography>
                  </th>
                  <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal leading-none opacity-70"
                    >
                      Previous Vital
                    </Typography>
                  </th>
                 
                </tr>
              </thead>
              <tbody>
                {vitals.length !== 0 &&
                Object.entries(vitals[0])
                  .filter(
                    ([key, value]) => key !== "id" && key !== "created_at"
                  )
                  .map(([key, value],index) => (
                 
                    <tr key={index} className="even:bg-blue-gray-50/50">
                      <td className="p-4">
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {key}
                        </Typography>
                      </td>
                      <td className="p-4">
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {value == null ? "N/A" : value}
                        </Typography>
                      </td>
                    
                      <td className="p-4">
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-medium"
                        >
                          N/A
                        </Typography>
                      </td>
                    </tr>
                  )
                )}
              </tbody>
            </table>
          </Card>
         
         
        </div>
        <div>
<div className="flex justify-between items-center">
<span className="text-3xl font-semibold">Patient Bill</span>
<span className="flex cursor-pointer" onClick={generateBill}>
  <Receipt /> <p>{pat?.is_billed?"View":"Generate"} patient Bill</p>
</span>
</div>
          <Card className="h-full w-full overflow-scroll">
            <table className="w-full min-w-max table-auto text-left">
              <thead>
                <tr>
                
                  <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal leading-none opacity-70"
                    >
                      Service
                    </Typography>
                  </th>
                  <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal leading-none opacity-70"
                    >
                      Service Provider
                    </Typography>
                  </th>
                  <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal leading-none opacity-70"
                    >
                      Price
                    </Typography>
                  </th>
                  <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal leading-none opacity-70"
                    >
                      Created At
                    </Typography>
                  </th>
                </tr>
              </thead>
              <tbody>
                {bills?.map(
                  ({ service, service_provider, price, created_at }, index) => (
                    <tr key={index} className="even:bg-blue-gray-50/50">
                      <td className="p-4">
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {service}
                        </Typography>
                      </td>
                      <td className="p-4">
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {service_provider}
                        </Typography>
                      </td>
                      <td className="p-4">
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {price}
                        </Typography>
                      </td>
                      <td className="p-4">
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-medium"
                        >
                          {created_at}
                        </Typography>
                      </td>
                    </tr>
                  )
                )}
              </tbody>
            </table>
          </Card>
        </div>
      </div>
      {
        <PatientVitals
          patientVitals={patientVitals}
          setPatientVitals={setPatientVitals}
        />
      }
      {updatePatient && (
        <UpdatePatient setUpdatePatient={setUpdatePatient} pat={pat} />
      )}
      {
        <PatientBill
          patientBill={patientBill}
          setPatientBill={setPatientBill}
          pat={pat}
        />
      }
    </div>
  );
}

export default PatientProfile;
