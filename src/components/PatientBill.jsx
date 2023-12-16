import { Button,Dialog, DialogBody, Input, Option, Select } from "@material-tailwind/react";
import React, { useEffect, useState } from "react";
import { axios } from "../axios";
import { useDispatch, useSelector } from "react-redux";
import { createNotification } from "../redux/notificationSlice";
import { Controller, useForm } from "react-hook-form";

function PatientBill({ setPatientBill, pat, patientBill }) {
        const [services,setServices] = useState([])
        const dispatch = useDispatch()
        const {register,handleSubmit,control} = useForm()
        const loggedUser = useSelector((state)=>state.user.currentUser)

    const submitData = (data)=>{
      axios.post('bills/',{...data,patient:pat?.id,service_provider:loggedUser.id}).then((res)=>{
        if (res.status == 201){
          dispatch(createNotification({type:"success",message:"Service billed to the patient successfully"}))
 
        }
        else{
          dispatch(createNotification({type:"error",message:"Service billing failed please try again later"}))

        }
        setPatientBill(false)
      }).catch((err)=>{
        dispatch(createNotification({type:"error",message:"Network error please try again later"}))
        setPatientBill(false)
      })
    }


    useEffect(()=>{
        axios.get('bills/service').then((res)=>{
          console.log(res.data)
          if(res.status == 200){
             setServices(res.data)
           }
           else{
            dispatch(createNotification({type:"error",message:"Network error please try again later"}))

           }
        })
    },[])
  return (
    <Dialog
      open={patientBill}
      handler={() => setPatientBill(false)}
      size="sm"
     
    >
      <DialogBody>
        <div
          className=" w-full h-full flex items-center justify-center "
        >
          <form onSubmit={handleSubmit(submitData)} className="w-full h-full flex gap-4 flex-col">
            <div className="p-2 flex justify-center">
              <b className="mr-1">{pat?.firstname}'s </b> <span> Services</span>
            </div>

           <Controller
            control={control}
            name="service"
            render ={ (({field})=>
            <Select label="Choose Service" {...field} className="p-2">
              {
                services?.map(({id,service_name},index)=>(

                  <Option key={index} value={id}>{service_name}</Option>
                ))
              }
            </Select>
            )}
            />
            <Input  {...register('description')} label="Description" />

            <Button type="submit">add service</Button>
          </form>
        </div>
      </DialogBody>
    </Dialog>
  );
}

export default PatientBill;
