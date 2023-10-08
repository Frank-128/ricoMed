import { PersonAdd } from '@mui/icons-material'
import { Button, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material'
import React, { useState } from 'react'
import { Link, Navigate, Route, Routes, useNavigate, useResolvedPath } from 'react-router-dom'
import AddPatient from './AddPatient'
import AddPatient50 from './AddPatient50'
import PatientList from './PatientList'
import PatientProfile from './PatientProfile'
import AddPatient75 from './AddPatient75'

function Patients() {
 
  const [openAddPatient,setOpenAddPatient] = useState(false);
  const navigate = useNavigate()
  const url = useResolvedPath("").pathname;
  return (
    <div className='flex flex-col'>
      <div className='flex-1 flex justify-between items-center '>
        <span>Patients</span>
        <button onClick={()=>navigate('add')} className='flex gap-4 p-2 bg-purple-500 text-gray-200 rounded shadow-lg ' ><PersonAdd/> Add Patient</button>
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