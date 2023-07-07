import { PersonAddAlt } from '@mui/icons-material'
import { Button, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material'
import React,{useState} from 'react'
import { users } from '../assets/data'
import UpdateUser from './UpdateUser'


function Users() {
    const [openForm,setOpenForm]= useState(false);
    const [type,setType]= useState(1)
    
  return (
    <div className='flex flex-col gap-5 '>
        <div className='flex w-full justify-end'>
            <Button onClick={()=>{setOpenForm(true);setType(1)}} className='flex mx-3 gap-2'><PersonAddAlt/> <span>Add User</span></Button>
        </div>
        <Table>
            <TableHead>
                <TableRow className='bg-slate-300'>
                    <TableCell>ID</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>Department</TableCell>
                    <TableCell>Role</TableCell>
                    
                </TableRow>
            </TableHead>
            <TableBody>
                {users.map((item,i)=><TableRow key={i} className={i%2==0?'bg-slate-100':'bg-slate-200'}>
                    <TableCell >{item.id}</TableCell>
                    <TableCell ><span onClick={()=>{setOpenForm(true);setType(2)}} className='hover:text-blue-900 cursor-pointer'>{item.name}</span></TableCell>
                    <TableCell>{item.department}</TableCell>
                    <TableCell>{item.role}</TableCell>
                </TableRow>)}
            </TableBody>
        </Table>
     {openForm &&   <UpdateUser close={setOpenForm} type={type} />}
    </div>
  )
}

export default Users