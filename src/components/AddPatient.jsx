import React, { useEffect } from "react";
import {useCountries} from 'use-react-countries'
import {
  Button,
  Input,
  Option,
  Progress,
  Radio,
  Select,
  Typography,
} from "@material-tailwind/react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { add_patient, remove_add_patient } from "../redux/patientSlice";
import { Controller, useForm } from "react-hook-form";
import Cookies from "js-cookie";
import { element } from "prop-types";

function AddPatient({ setOpenAddPatient }) {
  const dispatch = useDispatch()
  const {register,handleSubmit,control} = useForm()
  const patient = useSelector((state)=>state.patient)
  const location = useLocation() 
  const navigate = useNavigate()
  const {countries} = useCountries()

  
  useEffect(()=>{
     dispatch(add_patient())
          
  },[])


  const submitData = (data)=>{
    Cookies.set("patient",JSON.stringify(data))
    console.log(data)
    navigate('50p')
  }


  return (
    <div className="w-full h-full flex flex-col items-center justify-center gap-4">
      <Progress value={25} color="purple" />
      <form onSubmit={handleSubmit(submitData)} className="border flex items-center justify-center  flex-col w-fit h-full  ">
        <div className="flex justify-center p-3">
          <span className="font-bold text-3xl">Add New Patient</span>
        </div>
        <div className="flex flex-col gap-y-4">
          <div className="flex justify-center flex-1">
            {" "}
            <span className="underline font-semibold">Personal Info</span>
          </div>
          <div className="flex gap-2 px-2">
            <Input label="FirstName" {...register("firstname")} />
            <Input label="MiddleName" {...register("middlename")} />
            <Input label="LastName" {...register("lastname")} />
          </div>
          <div className="flex items-center gap-2 justify-center text-sm px-2">
            
            <Input type="date" label="Date Of Birth" {...register("date_of_birth")} />
            <div className="flex flex-col basis-1/3">
              <Controller
                name="marital_status"
                defaultValue={""}
                control={control}
                render={({field})=>(

              <Select label="Marital Status" {...field}>
                <Option value="S">Single</Option>
                <Option value="M">Married</Option>
              </Select>

                )}

                />
            </div>
            <div className="flex basis-1/3 flex-col">
             <Controller 
              name="nationality"
              control={control}
              defaultValue={""}
              render={
               ({field})=>(
                <Select label="Nationality" name="nationality" className="flex justify-between" selected={(element)=>element && React.cloneElement(element,{
                  disabled:true,
                  className:"flex items-center justify-between gap-x-3"
                })} 
                {...field}
                >
                  {countries.map(({name,flags}, i) => (
                    <Option key={i} className="flex  justify-between" value={name}>
                      {name}
                      <img src={flags.svg} alt={flags} className="w-6 h-4" />
                    </Option>
                  ))}
                </Select>
               ) 
              }

              />
            </div>
          </div>
          <div className="flex p-3 gap-2 items-center justify-around">
           <Controller
              name="identification_type"
              defaultValue={""}
              control={control}
              render={({field})=>(

            <Select label="Identification Type" name="identification_type" {...field}>
              <Option value="DL">Driver's License</Option>
              <Option value="VI">Voter's Id</Option>
              <Option value="ND">NIDA</Option>
            </Select>
              )}
           />
            <Input className="p-2" label="Identification Number" {...register("identification_no")}/>

           
          </div>
          <div className="flex  flex-col basis-1/3">
              <Typography className="text-sm mx-4">Gender</Typography>
              <div className="flex">
                <Radio value="M" label="Male" name="gender" {...register('gender')} />
                <Radio value="F" label="Female" name="gender" {...register('gender')} />
              </div>
            </div>
        </div>
    
        <div className="flex w-full p-3 ">
          <Button  type="submit"  className="bg-purple-500 flex-1 p-2 text-center rounded-sm text-gray-200">
            NEXT
          </Button>
        </div>
      </form>
    </div>
  );
}

export default AddPatient;
