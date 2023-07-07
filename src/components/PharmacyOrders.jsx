import { Add } from '@mui/icons-material'
import { Accordion, AccordionDetails, AccordionSummary, Modal, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material'
import React, { useState } from 'react'
import { patients, pharmarcyOrders, users } from '../assets/data'

function PharmacyOrders() {
    const [openTable,setOpenTable] = useState(false)
    const handleClose = ()=>{
        setOpenTable(false)
    }
  return (
    <div>
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>ID</TableCell>
                    <TableCell>Doctor</TableCell>
                    <TableCell>Patient</TableCell>
                    <TableCell>Requirements</TableCell>
                    <TableCell>Status</TableCell>

                </TableRow>
            </TableHead>
            <TableBody>
                {pharmarcyOrders.map((item,i)=><OrderItem key={i} item={item} openTable={openTable}  setOpenTable={setOpenTable} />)}
            </TableBody>
           
        </Table>
    </div>
  )
}

export default PharmacyOrders

function OrderItem({setOpenTable,openTable,item}) {
   
    return <TableRow>
        <TableCell>{item.id}</TableCell>
        <TableCell className='cursor-pointer hover:text-blue-900' onClick={()=>setOpenTable(true)}>{users.filter((value)=>value.id == item.doctorId).map(aval=><div>{aval.name}</div>)}</TableCell>
        <TableCell>{patients.filter((value)=>value.id == item.patientId).map(aval=><div>{aval.name}</div>)}</TableCell>
        <TableCell>
            <Accordion className='w-1/2'>
                <AccordionSummary>
                    <Add /> <span>View the order</span>
                </AccordionSummary>
                <AccordionDetails className='w-full flex flex-col gap-3'>
                    <ul>
                       { item.requirements.map((val)=><li className='flex gap-3 items-center justify-between'>
                            <label htmlFor="item1">{val}</label>
                            <input type="checkbox" name="item1" id="item1" />
                        </li>)
                        }

                    </ul>
                   
                </AccordionDetails>
            </Accordion>
        </TableCell>
        <TableCell>complete</TableCell>
        <Modal open={openTable} className='flex opacity-30  items-center justify-center' onClose={()=>setOpenTable(false)}>
          <div className='w-2/5 flex flex-col justify-center items-center gap-3  rounded h-fit p-10 bg-slate-200/80'>
            <span className='font-bold text-3xl'>Update the status of the order</span>
          <div className='flex justify-between w-full '>
                
                <button className='bg-green-600 p-2 text-white rounded hover:bg-white hover:text-green-600'>complete</button>
                <button className='bg-orange-600 p-2 text-white rounded hover:bg-white hover:text-orange-600'>partial</button>
                <button className='bg-red-600 p-2 text-white rounded hover:bg-white hover:text-red-600'>unavailable</button>
            </div>
          </div>
            </Modal>
    </TableRow>
}
