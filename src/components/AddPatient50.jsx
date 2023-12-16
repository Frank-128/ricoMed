import React from "react";
import { countries } from "react-country-select/lib/data";
import CountrySelect from "react-country-select";
import { Button, Input, Option, Progress, Radio, Select, Typography } from "@material-tailwind/react";
import { Link, useNavigate } from "react-router-dom";
import { ArrowBack, ArrowBackIos, ArrowBackIosNewRounded, ArrowBackIosOutlined, ArrowBackIosRounded } from "@mui/icons-material";
import { useSelector } from "react-redux";
import Cookies from "js-cookie";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
const AddPatient50 = () => {
  const navigate = useNavigate()
  const is_add_patient = useSelector((state)=>state.patient.is_add_patient)
  const {register,handleSubmit,control} = useForm()

  const patient = Cookies.get("patient")
  console.log(JSON.parse(patient))

  const submitForm = (data)=>{

    const patient_details = JSON.parse(patient)
    Cookies.set("patient",JSON.stringify({...data,...patient_details}))
    navigate('75p')
  }

    return (
   <div className="flex flex-col gap-4 items-center justify-center">
    <Progress value={50} color="purple" />
   <div className="flex flex-start w-full ">
    <span onClick={()=>navigate(-1)} className="cursor-pointer h-fit">
    <ArrowBackIosNewRounded/>
    <span>Previous</span>
    </span>
    </div>
   <form onSubmit={handleSubmit(submitForm)} className="border w-fit ">
    <div className="flex justify-center p-3">
      <span className="font-bold text-3xl">Add New Patient</span>
    </div>
    
    
    <div className="flex flex-col">
      <div className="flex justify-center">
        <span className="underline font-bold">Contact Info</span>
      </div>
      <div className="flex gap-2 justify-between p-3">
        
        

          <Input label="Address" {...register('address')} />
        
        
         

          <Input label="Email address" {...register('email')} />
        
        
          <Input label="Phone Number" {...register('phonenumber')} />
        
      </div>
    </div>
    <div className="flex flex-col">
      <div className="flex justify-center">
        <span className="underline font-bold">Emergency Contact Info</span>
      </div>
      <div className="flex gap-2 justify-between p-3">
        
          <Input label="Name" {...register('emergency_contact_name')} />
       
        
          <Controller
          name="emergency_contact_relationship"
          control={control}
          defaultValue={""}
          render={({field})=>(

            <Select label="Relationship" {...field}>
            <Option value="mother">Mother</Option>
            <Option value="father">Father</Option>
            <Option value="sister">Sister </Option>
            <Option value="son">Son </Option>
            <Option value="daughter">Daughter </Option>
            <Option value="other">Other </Option>
          </Select>
     
     )}
       />

          <Input  label="Phone Number" {...register("emergency_contact_phonenumber")} />
        
      </div>
    </div>
   
    <div className="flex justify-center px-2 py-4">
      <Button type={"submit"} className="bg-purple-500  p-2 text-center rounded-sm text-gray-200 w-full ">
        NEXT
      </Button>
    </div>
  </form>
   
   </div>
  )
}

export default AddPatient50