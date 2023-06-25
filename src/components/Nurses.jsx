import React from 'react'

function Nurses() {
  return (
    <div className='overflow-y-scroll h-[50rem]'>
     <div className='flex flex-col gap-4 border-b-2 m-16'>
      <span className='font-bold text-3xl border-b-2 m-1'>OPD Nurses</span>
      <div className='flex justify-around'>
      <div className='flex flex-col items-center gap-3 justify-center'>
        <img src="/olivia.webp" className='w-48 h-48 outline rounded-full object-cover  outline-offset-4 outline-pink-700' alt="doctor1"  />
        <span>Olivia Baker</span>
        <span className='font-semibold'>Out Patient Nurse</span>
      </div>
      <div className='flex flex-col items-center gap-3 justify-center'>
        <img src="/nurse.jpeg" className='w-48 h-48 outline rounded-full object-cover  outline-offset-4 outline-pink-700' alt="doctor1"  />
        <span>Candice Royce</span>
        <span className='font-semibold'>Out Patient Nurse</span>
      </div>
      <div className='flex flex-col items-center gap-3 justify-center'>
        <img src="/yara.jpg" className='w-48 h-48 outline rounded-full object-cover  outline-offset-4 outline-pink-700' alt="doctor1"  />
        <span>Yara Shahidi</span>
        <span className='font-semibold'>Out Patient Nurse</span>
      </div>
      </div>
     </div>
     <div className='flex flex-col gap-4 border-b-2 m-16'>
      <span className='font-bold text-3xl border-b-2'>Surgical Assistant Nurses</span>
      <div className='flex justify-around'>
      <div className='flex flex-col items-center gap-3 justify-center'>
        <img src="/ayra.jpeg" className='w-48 h-48 outline rounded-full object-cover  outline-offset-4 outline-teal-700' alt="doctor1"  />
        <span>Ayra Star</span>
        <span className='font-semibold'>Surgical assistant nurse</span>
      </div>
      <div className='flex flex-col items-center gap-3 justify-center'>
        <img src="/markle.jpeg" className='w-48 h-48 outline rounded-full object-cover  outline-offset-4 outline-teal-700' alt="doctor1"  />
        <span>Meghan Markle</span>
        <span className='font-semibold'>Cardiac surgery nurse</span>
      </div>
      <div className='flex flex-col items-center gap-3 justify-center'>
        <img src="/swift.jpeg" className='w-48 h-48 outline rounded-full object-cover  outline-offset-4 outline-teal-700' alt="doctor1"  />
        <span>Taylor Swift</span>
        <span className='font-semibold'>Cardiac surgery nurse</span>
      </div>
      </div>
     </div>
     <div className='flex flex-col gap-4 m-16'>
      <span className='font-bold text-3xl border-b-2'>Emergency Room nurses</span>
      <div className='flex justify-around'>
      <div className='flex flex-col items-center gap-3 justify-center'>
        <img src="/amandla.jpeg" className='w-48 h-48 outline rounded-full object-cover  outline-offset-4 outline-yellow-700' alt="doctor1"  />
        <span>Amandla Sternburg</span>
        <span className='font-semibold'>Emergency room nurse</span>
      </div>
      <div className='flex flex-col items-center gap-3 justify-center'>
        <img src="/ortega.jpg" className='w-48 h-48 outline rounded-full object-cover  outline-offset-4 outline-yellow-700' alt="doctor1"  />
        <span>Jenna Ortega</span>
        <span className='font-semibold'>Emergency room nurse</span>
      </div>
    
      </div>
     </div>
    </div>
  )
}

export default Nurses