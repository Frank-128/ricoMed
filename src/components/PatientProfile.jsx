import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { patients } from '../assets/data';
import { Button, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';
import PatientVitals from './PatientVitals';
import UpdatePatient from './UpdatePatient';
import PatientBill from './PatientBill';

function PatientProfile() {
    const location = useLocation();
    const [id,setId] = useState(location.pathname.split("/")[3] || 0)
    const [pat,setPat] = useState()
    const [patientVitals,setPatientVitals] = useState(false)
    const [updatePatient,setUpdatePatient] = useState(false);
    const [patientBill,setPatientBill] = useState(false);

useEffect(()=>{

    
    const patient = patients.find((item)=>{item.id.toString() === id;if(item.id.toString() === id){setPat(item);}});
    
},[location])
console.log(pat)
  return (
    <div className='flex h-full w-full items-center  justify-around'>
      
        <div className='flex flex-col gap-3 bg-gray-400 p-5'>
            <span>Name: {pat?.name}</span>
            <span>Status: {pat?.status}</span>
            <span>Ward: N/A</span>
            <span>Medical Report: {pat?.name}</span>
            <span>Type: {pat?.type}</span>
                <button onClick={()=>setPatientBill(true)} className='bg-violet-300 rounded'>Add Service</button>
                <div className='flex gap-3'>
                  <button onClick={()=>setUpdatePatient(true)} className='bg-blue-900 text-gray-300 rounded p-2'>Update Details</button>
                  {pat?.status !=='discharged'?<button className='bg-green-900 text-gray-300 rounded p-2'>Discharge</button>:<button className='bg-red-900 text-gray-200 p-2 rounded'>Delete Record</button>}
                </div>
        </div>
        <div>
          <span className='text-3xl font-semibold'>Patient Vital's</span>
          <Table>
            <TableHead>
              <TableRow style={{backgroundColor:'lightgrey',}}>
                <TableCell><span className='font-bold'>Vital</span></TableCell>
                <TableCell><span className='font-bold'>Current value</span></TableCell>
                <TableCell><span className='font-bold'>Previous value</span></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
            <TableRow>
                <TableCell>Temperature</TableCell>
                <TableCell>22.4</TableCell>
                <TableCell>N/A</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Blood Pressure</TableCell>
                <TableCell>22.4</TableCell>
                <TableCell>N/A</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Blood glucose level</TableCell>
                <TableCell>22.4</TableCell>
                <TableCell>N/A</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Oxygen flow rate</TableCell>
                <TableCell>22.4</TableCell>
                <TableCell>N/A</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Urine Output</TableCell>
                <TableCell>22.4</TableCell>
                <TableCell>N/A</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Respiratory rate</TableCell>
                <TableCell>22.4</TableCell>
                <TableCell>N/A</TableCell>
              </TableRow>
             
            </TableBody>
          </Table>
          <Button onClick={()=>setPatientVitals(true)} className='float-right'>Update Vitals</Button>
        </div>
        <div>
          <span className='text-3xl font-semibold'>Patient Bill</span>
          <Table>
            <TableRow>
              <TableCell>S/N</TableCell>
              <TableCell>Service</TableCell>
              <TableCell>Department</TableCell>
            </TableRow>

            {pat?.bill.map((item,i)=>(<TableRow key={i}>
             <TableCell>{i+1}</TableCell>
             <TableCell>{item.service}</TableCell>
              <TableCell>{item.department}</TableCell>
              </TableRow>))}

          </Table>
        </div>
        {patientVitals && <PatientVitals setPatientVitals={setPatientVitals}/>}
        {updatePatient && <UpdatePatient setUpdatePatient={setUpdatePatient} pat={pat}/>}
        {patientBill && <PatientBill setPatientBill={setPatientBill} name={pat?.name} />}
    </div>
  )
}

export default PatientProfile