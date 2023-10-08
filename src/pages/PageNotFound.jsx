import React from 'react'
import { Link } from 'react-router-dom'

function PageNotFound() {
  return (
    <div className='absolute top-0 left-0 w-full flex flex-col items-center justify-center h-full bg-slate-400'>
        <span className='md:text-9xl text-3xl text-blue-600 font-bold '>404 not found</span>
        <Link to='/' className='text-slate-700 animate-bounce'>return back home</Link>
    </div>
  )
}

export default PageNotFound