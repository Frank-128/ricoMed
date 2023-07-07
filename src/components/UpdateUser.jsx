import React from 'react'

function UpdateUser({close,type}) {
    const handleClick = (e)=>{
        if(e.target.classList.contains("modal")){
            close(false);
        }
    }
  return (
    <div onClick={handleClick} className='absolute z-50 modal top-0 left-0 bg-slate-900/80 w-full h-full flex items-center justify-center'>
            
        <form action="" className='w-2/5 flex p-5 flex-col gap-10 bg-slate-300 rounded-md'>
            <div className='flex justify-center text-3xl font-bold'>{type ==1?<h1>Add a new user</h1>:<h1>Update user</h1>}</div>
            <div className='flex flex-col'>
                <label className='font-bold' htmlFor="name">Name</label>
                <input type="text" className='p-3 w-1/2' name="name" id="name" />
            </div>
            <div className='flex gap-4 items-center'>
                <label className='font-bold' htmlFor="name">Department</label>
                <select className='p-3 rounded'>
                    <option value="emergency">Emergency</option>
                    <option value="inpatient">Inpatient </option>
                    <option value="outpatient">Oupatient</option>
                    <option value="icy">ICU</option>
                    <option value="laboratory">Laboratory</option>
                    <option value="pharmacy">Pharmacy</option>
                </select>
            </div>
            <div className='flex gap-4 items-center'>
                <label className='font-bold' htmlFor="name">Role</label>
                <select className='p-3 rounded'>
                    <option value="nurse">nurse</option>
                    <option value="doctor">doctor </option>
                    <option value="pharmacist">pharmacist</option>
                    <option value="lab-tech">lab-tech</option>
                    <option value="receptionist">receptionist</option>
                   
                </select>
            </div>
            <div className='flex gap-4'>
                <label className='font-bold' htmlFor="image">Profile Picture</label>
                <input type="file" className='' name="image" id="image"  />
            </div>
            <button className='bg-blue-950 p-3 rounded text blue text-white hover:bg-white hover:text-blue-950' type="submit">{type==1?"Add User":"Update User"}</button>
        </form>
    </div>
  )
}

export default UpdateUser