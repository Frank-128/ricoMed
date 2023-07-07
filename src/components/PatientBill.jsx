
import { Button } from '@mui/material'
import React from 'react'

function PatientBill({setPatientBill,name}) {
    const handleClick = (e)=>{
        
        console.log(e.target.classList.contains("modal"))
        if(e.target.classList.contains("modal")){
            setPatientBill(false);
        }
    }
  return (
    <div onClick={handleClick} className='bg-slate-900/80 absolute top-0 modal left-0 w-full h-full flex items-center justify-center '>
        <form className='w-1/3 rounded h-1/4 flex gap-4 flex-col bg-slate-300'>
            <div className='p-2 flex justify-center'><b className='mr-1'>{name}'s </b> <span> Services</span></div>
            <div className='flex gap-2 justify-center items-center'>
            <label htmlFor='department'>Choose  department</label>
            <select className='p-2'>
                <option>General Doctor</option>
                <option>Specialist Doctor</option>
                <option>Diagnostic Imaging</option>
                <option>Operation Room</option>
                <option>Radiology</option>
                <option>Laboratory </option>
                <option>Pharmarcy</option>
                <option>ICU</option>
            </select>

            </div>
            <div className='flex gap-3 justify-center'>
                <label htmlFor="service">Service</label>
                <textarea className='p-2 w-1/3' type="text" placeholder='service provided' />
            </div>
            <Button>add service</Button>
        </form>
        
    </div>
  )
}

export default PatientBill