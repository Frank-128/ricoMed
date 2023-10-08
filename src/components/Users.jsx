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
                <TableRow className='bg-gray-400 border-b-[0.4px]'>
                    <TableCell>ID</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>Department</TableCell>
                    <TableCell>Role</TableCell>
                    <TableCell>Status</TableCell>
                    <TableCell>Created At</TableCell>
                    
                </TableRow>
            </TableHead>
            <TableBody>
                {users.map((item,i)=><TableRow key={i} className={i%2==0?'bg-gray-100':'bg-gray-200'}>
                    <TableCell >{item.id}</TableCell>
                    <TableCell ><span onClick={()=>{setOpenForm(true);setType(2)}} className='hover:text-blue-900 cursor-pointer'>{item.name}</span></TableCell>
                    <TableCell>{item.department}</TableCell>
                    <TableCell>{item.role}</TableCell>
                    <TableCell>{item.status? <span className='p-2 bg-green-500 rounded text-white'>online</span>:<span className='p-2 text-white bg-red-500 rounded'>offline</span>}</TableCell>
                    <TableCell>{item.createdAt}</TableCell>

                </TableRow>)}
            </TableBody>
        </Table>
     {openForm &&   <UpdateUser close={setOpenForm} type={type} />}
    </div>
  )
}

export default Users