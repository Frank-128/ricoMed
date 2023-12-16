import { PersonAdd } from '@mui/icons-material'
import { Button, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { Link,  Route, Routes, useLocation, useNavigate, useResolvedPath } from 'react-router-dom'
import AddPatient from './AddPatient'
import AddPatient50 from './AddPatient50'
import PatientList from './PatientList'
import PatientProfile from './PatientProfile'
import AddPatient75 from './AddPatient75'
import { useDispatch, useSelector } from 'react-redux'
import { remove_add_patient } from '../redux/patientSlice'
import { Alert } from '@material-tailwind/react'


function Patients() {
 
  const is_adding_patient = useSelector((state)=>state.patient.is_adding_patient)
  const navigate = useNavigate()
  const pathname = useLocation()
  const dispatch = useDispatch()
   
  const url = useResolvedPath("").pathname;


  
  return (
    <div className='flex flex-col'>
      <div className='flex-1 flex justify-between items-center '>
        <span>Patients</span>
       {!is_adding_patient && <button onClick={()=>navigate('add')} className='flex gap-4 p-2 bg-purple-500 text-gray-200 rounded shadow-lg ' ><PersonAdd/> Add Patient</button>}
      </div>
      <Routes>
        <Route path='/' element={<PatientList/>} />
         <Route path={`add`} element={<AddPatient/>} />
          <Route path='/add/50p' element={<AddPatient50/>} />
          <Route path='/add/50p/75p' element={<AddPatient75 url={url}/>} />
         <Route path={`/profile/:id`} element={<PatientProfile/>} />

      </Routes>
    
    </div>
  )
}

export default Patients