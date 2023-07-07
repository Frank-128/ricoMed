import React from 'react'

function PatientVitals({setPatientVitals}) {
    const handleClick = (e)=>{
        if(e.target.classList.contains('modal')){
            setPatientVitals(false)
        }
    }
  return (
    <div onClick={handleClick} className='w-full h-full absolute modal flex items-center justify-center top-0 left-0 bg-gray-900/60'>
        <form action="" className='w-1/3 h-4/5 flex flex-col justify-around bg-gray-300 p-5'>
            <span className='text-center border-b-2 border-slate-800 font-semibold'>Firdaus Khalid Vital's records</span>
            <div className='flex flex-col'>
                <label htmlFor='temperature'>temperature</label>
                <input className='p-3' type="text" id='temperature' />
            </div>
            <div className='flex flex-col'>
                <label htmlFor='weight'>Weight</label>
                <input className='p-3' type="text" id='weight' />
            </div>
            <div className='flex flex-col'>
                <label htmlFor='height'>Height</label>
                <input className='p-3' type="text" id='height' />
            </div>
            <div className='flex flex-col'>
                <label htmlFor='glucose'>Blood glucose level</label>
                <input className='p-3' type="text" id='glucose' />
            </div>
            <div className='flex flex-col'>
                <label htmlFor='oxygen'>Oxygen Flow rate</label>
                <input className='p-3' type="text" id='oxygen' />
            </div>
            <div className='flex flex-col'>
                <label htmlFor='urine'>Urine Output</label>
                <input className='p-3' type="text" id='urine' />
            </div>
            <div className='flex flex-col'>
                <label htmlFor='respiratory'>Respiratory rate</label>
                <input className='p-3' type="text" id='respiratory' />
            </div>
           <button className='bg-blue-900 p-3 rounded text-gray-300'>Update Details</button>
        </form>
    </div>
  )
}

export default PatientVitals