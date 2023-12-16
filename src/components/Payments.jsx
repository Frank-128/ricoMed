import React, { useEffect, useState } from 'react'
import { patients } from '../assets/data'
import { Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material'
import Receipt from './Receipt';
import { useSelector } from 'react-redux';

function Payments() {
  const [patient,setPatient] = useState(null);
  const [total,setTotal] = useState(0)
  const [bill,setBill] = useState([]);
  const [generateBill,setGenerateBill]= useState(false)
  const user = useSelector((state)=>state.user.currentUser);
  useEffect(()=>{
    var valueZ = patients.find((obj)=>obj.name === patient);
   setBill(valueZ?.bill);
   var total=0;
   bill?.forEach((item)=>{
    total = total + item?.amount
   })
   setTotal(total);
  },[patient,bill])
  
  return (
    <div className='flex items-center flex-col justify-center'>
    {user.role =='reception' && <>
    
      <div className='flex gap-3 flex-col items-center'>
        <label htmlFor="patient" className='text-semibold text-3xl'>Patient name</label>
        <select name="" onChange={(e)=>setPatient(e.target.value) } className='p-2' id="patient">
          <option value={null}>choose patient</option>
          {patients.map((item,i)=>(<option key={i} value={item.name}>{item.name}</option>))}

        </select>
      </div>
      <div className='flex mt-10 flex-col items-center'>
        <span className='font-semibold text-xl'>Bill</span>
        <div>
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
           {bill?.map((item,i)=>(<TableRow key={i}>
                <TableCell>{i+1}</TableCell>
                <TableCell>{item.department}</TableCell>
                <TableCell>{item.service}</TableCell>
                <TableCell>{item.amount}</TableCell>
                
                
              </TableRow>)) }
              <TableRow color="action">
                <TableCell>Total</TableCell>
                <TableCell></TableCell>
                <TableCell></TableCell>
                <TableCell colSpan={3}><span className='font-bold text-lg'>{total}</span></TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </div>
            <div>
              <button disabled={total === 0} className='bg-blue-800 m-3 p-3 text-slate-300 rounded disabled:cursor-not-allowed' onClick={()=>setGenerateBill(true)}>Generate bill</button>
            </div>
            {generateBill && <Receipt setGenerateBill={setGenerateBill} person={{bill:bill,patient:patient,total:total}} />}
            <div>{patient?.name}</div>
    
     </>}
            <div className=' w-full'>
              <span className='font-bold text-lg underline'>Todays bills</span>
              <Table className='w-full h-2/3 overflow-scroll'>
                <TableHead>
                  <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell>Amount</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
               {Array(3).fill().map((_,i)=>(
                 <TableRow>
                 <TableCell>Frank</TableCell>
                 <TableCell>200000</TableCell>
               </TableRow>
               ))}
                </TableBody>
              </Table>
            </div>
    </div>
  )
}

export default Payments