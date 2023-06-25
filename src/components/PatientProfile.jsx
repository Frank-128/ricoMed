import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { patients } from '../assets/data';

function PatientProfile() {
    const location = useLocation();
    const [id,setId] = useState(location.pathname.split("/")[3] || 0)
    const [pat,setPat] = useState()

useEffect(()=>{

    
    const patient = patients.find((item)=>{item.id.toString() === id;if(item.id.toString() === id){setPat(item);}});
    
},[location])
console.log(pat)
  return (
    <div className='flex h-full w-full items-center justify-center'>
      
        <div className='flex flex-col bg-gray-400 p-5'>
            <span>Name: {pat?.name}</span>
            <span>Status: {pat?.status}</span>
            <span>Medical Report: {pat?.name}</span>
            <span>Type: {pat?.type}</span>
                {pat?.status !=='discharged'?<button className='bg-blue-900'>Discharge</button>:<button className='bg-red-900 text-gray-200'>Delete Record</button>}
        </div>
    </div>
  )
}

export default PatientProfile