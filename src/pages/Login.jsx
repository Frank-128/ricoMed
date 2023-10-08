import React from 'react'
import '../components/css/Login.css';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { users } from '../assets/data';
import { setCurrentUser, setError } from '../redux/userSlice';
import { useDispatch } from 'react-redux';
import { TextField } from '@mui/material';


function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

 const handleSuccess = (res)=>{
  dispatch(setCurrentUser({res,navigate}))
  
 }

  const handleLogin = async(e)=>{
    e.preventDefault();
    const body = {
      name:e.target.elements.username.value,
      password:e.target.elements.password.value
    }
    
    const res = await users.find((user)=>user.name === body.name)
    res === undefined ?  dispatch(setError(true)):handleSuccess(res);
    
  }

  return (
    <div className='login w-screen font-mono h-screen flex  items-center justify-center'>
        <div className='xl:w-1/3 md:w-2/3 w-4/5 h-2/3  p-5 flex rounded-sm flex-col gap-4 bg-white/80'>
          <div className='flex flex-col items-center w-full'>
          <img src="/ricoMed.jpg" className='w-24 rounded-md  h-24' alt="logo" /><h1 className=' text-lg md:text-3xl'>STAFF LOGIN</h1>
          </div>
          <form onSubmit={handleLogin} action="" className='flex flex-col  h-full items-center justify-evenly'>
            <TextField className='p-2 md:w-2/3 rounded' label="Username" name='username' />
            
            <TextField className='p-2 md:w-2/3 rounded ' label="Password" name='password' />
            <button className='bg-purple-500 text-gray-300 p-2 rounded w-2/3' type='submit'>Login</button>
            <Link to='/'><p className='text-red-800 underline'>Forgot password?</p></Link>
          </form>
        </div>
    </div>
  )
}

export default Login