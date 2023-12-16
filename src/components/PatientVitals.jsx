import { Dialog, DialogBody, Input } from '@material-tailwind/react'
import React from 'react'
import { useForm } from 'react-hook-form'
import { axios } from '../axios'
import { useDispatch } from 'react-redux'
import { createNotification } from '../redux/notificationSlice'

function PatientVitals({setPatientVitals,patientVitals}) {
    const {register,handleSubmit} = useForm()
    const dispatch = useDispatch()
    const id = location.pathname.split("/")[4]


    const handleClick = ()=>{
       
            setPatientVitals(false)
        
    }

    const submitData = (data)=>{
        console.log(data)
        let first = 1
        Object.entries(data).forEach(([key,value]) => {
            if(value == ""){
               
                data[key] = null
            }

        });
       axios.post('patients/vitals',{...data,patient:id}).then((res)=>{
        if(res.status == 201){
            dispatch(createNotification({type:"success",message:"Patient vitals added successfully"}))
            
        }else{
            dispatch(createNotification({type:"error",message:"Error when adding patient vitals "}))
        }
        setPatientVitals(false)
       }).catch((err)=>{
        dispatch(createNotification({type:"error",message:"Error when adding patient vitals "}))
        setPatientVitals(false)
       })
    }
  return (
    <Dialog open={patientVitals} handler={handleClick} size='sm'>
        <DialogBody>

        <form onSubmit={handleSubmit(submitData)} className='w-full space-y-4'>
            <span className='flex justify-center border-b-[0.5px] w-full border-black font-semibold'>Firdaus Khalid Vital's records</span>
          
            <div className='flex gap-2'>
            <Input label='temperature' className='p-3' {...register('temperature')} type='number' />
            <Input className='p-3'  label='weight' {...register('weight')} type='number' />
            </div>
            <div className='flex gap-2'>
                <Input className='p-3'  label='height' {...register('height')} />
                <Input className='p-3'  label='Blood glucose level' {...register('blood_glucose_level')} />

            </div>
            <div className='flex gap-2'>
                <Input className='p-3'  label='Oxygen Flow rate' {...register('oxygen_flow_rate')} />
                <Input className='p-3'  label='Heart rate' {...register('heart_rate')} />

            </div>
           
           <button className='bg-purple-700 justify-center  p-3 flex w-full items-center rounded text-gray-300'>Add Vitals</button>
        </form>
        </DialogBody>
    </Dialog>
  )
}

export default PatientVitals