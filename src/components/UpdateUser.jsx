import { Input, Option,Select} from '@material-tailwind/react';
import { MenuItem } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { useForm, Controller } from 'react-hook-form';
import { axios } from '../axios';

function UpdateUser({close,type}) {
    const {register,handleSubmit,control} = useForm()
    const [departments,setDepartments] = useState([])
    const [pic,setPic] = useState(null)
    const handleClick = (e)=>{
        if(e.target.classList.contains("modal")){
            close(false);
        }
    }
    const submitProperty= async(data)=>{
        
        const formdata = new FormData()

        formdata.append("username",data.username)
        formdata.append("pic",pic)
        formdata.append("department",data.department)
        formdata.append("role",data.role)
        formdata.append("password",123456)
        await axios.post('/accounts/user',formdata).then((res)=>{
            close(false)
        }).catch((err)=>{
            console.log(err)
            close(false)

        })
    }

    useEffect(()=>{
        (
            async()=>{
                await axios.get('/accounts/department').then((res)=>{
                    setDepartments(res.data)
                }).catch((err)=>{
                    console.log(err)
                })
            }
        )()
    },[])

  return (
    <div onClick={handleClick} className='absolute z-50 modal top-0 left-0 bg-gray-900/80 w-full h-full flex items-center justify-center'>
            
        <form onSubmit={handleSubmit(submitProperty)}  className='md:w-2/5 w-4/5 flex p-5 flex-col gap-10 bg-gray-300 rounded-md'>
            <div className='flex justify-center text-3xl font-bold'>{type ==1?<h1>Add a new user</h1>:<h1>Update user</h1>}</div>
            <div className='flex'>
               <Input label="Name" {...register('username')} />
            </div>
            <div className='flex gap-4 items-center'>
                <Controller
                name='department'
                control={control}
                rules={{required:'Please choose the department'}}
                render={({field})=>(
                    <Select label='Department'  className='w-full' {...field}>
                   
                   { departments?.map((item,index)=><Option value={item.id} key={index} >{item.department_name}</Option>)
                  }  
                </Select>
                )}

                />
              
            </div>
            <div className='flex gap-4 items-center'>
               <Controller
                name='role'  
                control={control}
                rules={{required:'Please Choose a role'}}  
               render={({field})=>(
                <Select label='Role'  className='w-full' {...field}>
                    <Option value="nurse" >nurse</Option>
                    <Option value="doctor">doctor </Option>
                    <Option value="pharmacist">pharmacist</Option>
                    <Option value="lab-tech">lab-tech</Option>
                    <Option value="receptionist">receptionist</Option>
                </Select>)
               }

               />
              
            </div>
            <div className='flex gap-4'>
               <Input label='Profile Picture' type='file' onChange={(e)=>setPic(e.target.files[0])} />
            </div>
            <button className='bg-purple-500 p-3 rounded text blue text-white hover:bg-white hover:text-purple-500' type="submit">{type==1?"Add User":"Update User"}</button>
        </form>
    </div>
  )
}

export default UpdateUser