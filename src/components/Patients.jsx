import { PersonAdd } from '@mui/icons-material'
import { Button, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material'
import React, { useState } from 'react'
import { patients } from '../assets/data'
import { Link } from 'react-router-dom'
import AddPatient from './AddPatient'

function Patients() {
  const [type,setType] = useState("all")
  const [openAddPatient,setOpenAddPatient] = useState(false);
  return (
    <div className='flex flex-col'>
      <div className='flex-1 flex justify-between items-center '>
        <span>Patients</span>
        <Button onClick={()=>setOpenAddPatient(true)} className='flex gap-4 ' ><PersonAdd/> Add Patient</Button>
      </div>
      <div className='flex-1 justify-center flex  '>
        <div className='flex  bg-slate-300  rounded'>
          <span onClick={()=>setType("all")} className={`border-r-2 p-2 ${type==='all'?'bg-blue-800 text-slate-200':''} cursor-pointer py-2 border-slate-600 px-2`}>All</span>
          <span onClick={()=>setType("inpatient")} className={`border-r-2 p-2 ${type==='inpatient'?'bg-blue-800 text-slate-200':''} cursor-pointer py-2 border-slate-600 `}>Inpatient</span>
          <span onClick={()=>setType("outpatient")} className={`border-r-2 p-2  ${type==='outpatient'?'bg-blue-800 text-slate-200':''} cursor-pointer p-2 border-slate-600 px-2`}>Outpatient</span>
          <span onClick={()=>setType("discharged")} className={` p-2 ${type==='discharged'?'bg-blue-800 text-slate-200':''} cursor-pointer p-2 border-slate-600 px-2`}>Discharged</span>
        </div>
      </div>
      <div>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Id</TableCell>
              <TableCell>Doctor</TableCell>
              <TableCell>Type</TableCell>
              <TableCell>Status</TableCell>

            </TableRow>

          </TableHead>
          <TableBody>
         { patients.filter((item)=>item.type === type || type==="all" || item.status=== type).map((item,i)=>(<TableRow key={i}>
              <TableCell><Link to={`${item.id}`} className='text-blue-800'>{item.name}</Link></TableCell>
              <TableCell>{item.id}</TableCell>
              <TableCell>{item.doctor}</TableCell>
              <TableCell>{item.type}</TableCell>
              <TableCell>{item.status}</TableCell>

            </TableRow>))}

          </TableBody>
        </Table>

      </div>
       {openAddPatient &&   <AddPatient setOpenAddPatient={setOpenAddPatient} />}
    </div>
  )
}

export default Patients