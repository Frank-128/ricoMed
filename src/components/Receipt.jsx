import { Table, TableCell, TableHead, TableRow,TableBody } from '@mui/material';
import { QRCodeCanvas, QRCodeSVG } from 'qrcode.react';
import React from 'react'
import '../components/css/Receipt.css'

function Receipt({setGenerateBill,person}) {
    const handleClick = (e)=>{
        if(e.target.classList.contains("modal")){
            setGenerateBill(false);
        }
    }
    
  return (
    <div onClick={handleClick} className='absolute modal top-0 left-0 w-full h-full bg-gray-900/80 items-center justify-center flex'>
            <div className='w-fit h-fit p-3 bg-gray-200 rounded'>
               <div className='flex justify-center'> <span className='font-bold '>{person?.patient}</span></div>
                <Table>
            <TableHead>
              <TableRow>
                <TableCell>S/n</TableCell>
                <TableCell>Department</TableCell>
                <TableCell>Service</TableCell>
                <TableCell>Amount</TableCell>
                
              </TableRow>
            </TableHead>
            <TableBody>
          { person.bill.map((item,i)=>(<TableRow >
                <TableCell>{i+1}</TableCell>
                <TableCell>{item.department}</TableCell>
                <TableCell>{item.service}</TableCell>
                <TableCell>{item.amount}</TableCell>
                
                
              </TableRow>))}
              <TableRow color="action">
                <TableCell>Total</TableCell>
                <TableCell></TableCell>
                <TableCell></TableCell>
                <TableCell colSpan={3}><span className='font-bold text-lg'>{person.total}</span></TableCell>
              </TableRow>
            </TableBody>
          </Table>
          <div className='p-5 flex justify-between'>
            <img src="/ricoMed.jpg" className='w-36 h-36 rounded-md ' alt="" />
            <QRCodeCanvas  value={'frank'} />
          </div>
            <div className='w-full flex justify-center  items-center'>
                <button onClick={()=>{window.print();setGenerateBill(false)}} className='bg-blue-900 w-4/5 print-button text-gray-300 p-2 rounded-sm'>Print Bill</button>
            </div>
            </div>
    </div>
  )
}

export default Receipt