import { Table, TableCell, TableHead, TableRow,TableBody } from '@mui/material'
import React, { useState } from 'react'

function Profile() {
    const time = new Date()
    const [date,setDate] = useState({
        day:time.toLocaleString('default',{weekday:'long'}),
        dayDate:time.getDate(),
        month:time.toLocaleString('default',{month:'long'}),
        year:time.getFullYear(),
    })

    
    console.log(time)
  return (
    <div className='flex flex-col gap-10'>
        <div className='flex justify-between items-center border-b-2'>
        <span className='font-bold text-3xl'>Schedule</span>
        <span>{date.day+", "+date.dayDate+"-"+date.month+"-"+date.year}</span>
        </div>
        <div className='w-full'>
            <div className='flex items-center flex-col gap-3 justify-center w-full'>
                <img src="/amandla.jpeg" className='w-96 h-96 outline outline-offset-4 outline-violet-900 rounded-full' alt="" />
                <span className='font-light'>Amandla Stenberg</span>
                <span className='font-bold '>General Doctor</span>
            </div>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell> Day</TableCell>
                        <TableCell> Attended</TableCell>
                        <TableCell> Pending</TableCell>
                        <TableCell> Current Patient</TableCell>
                        <TableCell> Next Patient</TableCell>

                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow>
                        <TableCell> {date.day+","+date.dayDate}</TableCell>
                        <TableCell> 20</TableCell>
                        <TableCell> 15</TableCell>
                        <TableCell> ID32</TableCell>
                        <TableCell> ID33</TableCell>

                    </TableRow>
                </TableBody>
            </Table>
        </div>
    </div>
  )
}

export default Profile