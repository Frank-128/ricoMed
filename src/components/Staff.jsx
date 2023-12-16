import { Link } from 'react-router-dom'
import React from 'react'
import { useSelector } from 'react-redux'

function Staff() {
  const user = useSelector((state)=>state.user.currentUser);
  console.log(user)
  return (
    <div className='flex justify-around items-center h-full'>
      
     {(user.role === "doctor" || user.role==="reception" || user.role==="admin") && <Link to='doctors'>
      <div className='hover:opacity-90 flex  gap-1 flex-col items-center cursor-pointer'>
        <img src="/doctor.jpg" alt="doctor" className='w-96 h-96 object-cover' />
        <span className='text-blue-700 '>Doctors</span>
      </div>
        </Link>}
      { (user.role==="nurse"|| user.role ==="reception" || user.role==="admin") && <Link to='nurses'>
        <div className='hover:opacity-90 flex gap-1 flex-col items-center cursor-pointer'>
        <img src="/nurse.jpeg" alt="doctor" className='w-96 h-96 object-cover' />
        <span>Nurses</span>
      </div>
        </Link>}
    { user.role ==="reception" || user.role ==="admin" &&  <Link to='inventory'>
      <div className='hover:opacity-90 flex gap-1 flex-col items-center cursor-pointer'>
        <img src="/inventory.jpg" alt="doctor" className='w-96 h-96 object-cover' />
        <span>Inventory</span>
      </div>
        </Link>}
    </div>
  )
}

export default Staff