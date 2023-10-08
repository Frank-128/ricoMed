import { Input, Option, Select } from '@material-tailwind/react';

import React from 'react'

function UpdateUser({close,type}) {
    const handleClick = (e)=>{
        if(e.target.classList.contains("modal")){
            close(false);
        }
    }
  return (
    <div onClick={handleClick} className='absolute z-50 modal top-0 left-0 bg-gray-900/80 w-full h-full flex items-center justify-center'>
            
        <form action="" className='md:w-2/5 w-4/5 flex p-5 flex-col gap-10 bg-gray-300 rounded-md'>
            <div className='flex justify-center text-3xl font-bold'>{type ==1?<h1>Add a new user</h1>:<h1>Update user</h1>}</div>
            <div className='flex'>
               <Input label="Name" />
            </div>
           
            <div className='flex gap-4 items-center'>
                <Select label='Role'>
                   
                    <Option value="nurse">nurse</Option>
                    <Option value="doctor">doctor </Option>
                    <Option value="pharmacist">pharmacist</Option>
                    <Option value="lab-tech">lab-tech</Option>
                    <Option value="receptionist">receptionist</Option>
                </Select>
              
            </div>
            <div className='flex gap-4'>
               <Input label='Profile Picture' type='file' />
            </div>
            <button className='bg-purple-500 p-3 rounded text blue text-white hover:bg-white hover:text-purple-500' type="submit">{type==1?"Add User":"Update User"}</button>
        </form>
    </div>
  )
}

export default UpdateUser