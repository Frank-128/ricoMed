import React from 'react'

function UpdatePatient({setUpdatePatient,pat}) {
    const handleClick = (e)=>{
        if(e.target.classList.contains('modal')){
            setUpdatePatient(false)
        }
    }
  return (
    <div onClick={handleClick} className='w-full h-full absolute modal flex items-center justify-center top-0 left-0 bg-gray-900/60'>
        <form action="" className='w-1/3 h-4/5 flex flex-col justify-around bg-gray-300 p-5'>
            <span className='text-center border-b-2 border-slate-800 font-semibold'>Firdaus Khalid Patient's records</span>
            <div className='flex flex-col'>
                <label htmlFor='temperature'>Name</label>
                <input className='p-3' type="text" placeholder={pat.name} id='temperature' />
            </div>
            <div className='flex flex-col'>
                <label htmlFor='weight'>Type</label>
                <input className='p-3' type="text" placeholder={pat.type} id='weight' />
            </div>
            <div className='flex flex-col'>
                <label htmlFor='height'>Ward</label>
                <input className='p-3' type="text" placeholder='N/A' id='height' />
            </div>
           
           <button className='bg-blue-900 p-3 rounded text-gray-300'>Update Details</button>
        </form>
    </div>
  )
}

export default UpdatePatient