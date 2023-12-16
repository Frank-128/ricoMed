import {
  Button,
  Input,
  Option,
  Progress,
  Radio,
  Select,
  Typography,
} from "@material-tailwind/react";
import { ArrowBackIosNewRounded } from "@mui/icons-material";
import Cookies from "js-cookie";
import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { axios } from "../axios";
import { useDispatch } from "react-redux";
import { createNotification } from "../redux/notificationSlice";

const AddPatient75 = ({url}) => {
    const navigate = useNavigate()
    const [paymentType,setPaymentType] = useState("insurance")
    const {register,handleSubmit,control} = useForm()
    const patient = Cookies.get("patient")
    const dispatch = useDispatch()


    const submitData = async(data)=>{
      const patient_data = JSON.parse(patient)
      await axios.post('patients/',{...patient_data,...data}).then((res)=>{
        if (res.status == 201){

          dispatch(createNotification({type:"success",message:"Patient created successfully"}))
          navigate(url)
        }else{
          dispatch(createNotification({type:"error",message:"Error occurred when creating a patient"}))

        }
      }).catch((err)=>{
        
        dispatch(createNotification({type:"error",message:"Error occurred when creating a patient"}))
      })
    }

  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <Progress value={75} color="purple" />
      <div className="flex flex-start w-full ">
    <span onClick={()=>navigate(-1)} className="cursor-pointer h-fit">
    <ArrowBackIosNewRounded/>
    <span>Previous</span>
    </span>
    </div>
      <form onSubmit={handleSubmit(submitData)} className="border w-fit ">
        <div className="flex justify-center p-3">
          <span className="font-bold text-3xl">Add New Patient</span>
        </div>

        <div className="flex flex-col gap-2 border-b-[0.8px]">
          <div className="flex justify-center">
            <span className="underline font-bold">Medical Issue</span>
          </div>
          <div className="flex justify-between gap-2 px-2">
            <Controller
            name="medical_issue"
            defaultValue={""}
            control={control}
            render={({field})=>(

              <Select label="Medical Issue" {...field}>
              <Option value="CL">Counselling</Option>
              <Option value="MT">Medical Test</Option>
              <Option value="MW">Maternal woman </Option>
              <Option value="RD">Radiology </Option>
              <Option value="GD">General Doctor </Option>
              <Option value="SL">Specialist </Option>
            </Select>
              )}
              />
             <Controller
            name="assigned_doctor"
            defaultValue={""}
            control={control}
            render={({field})=>(

            <Select label="Choose Doctor" {...field}>
              <Option value="7">Robert</Option>
              <Option value="8">Sane Brown</Option>
              
            </Select>)}
            />
          </div>
          <div className="flex flex-col  p-2">
            <Typography className="text-sm mx-2">Patient Type</Typography>

            <div className="flex text-sm">
              <Radio value={true} name="patient" label="Inpatient" {...register('is_inpatient_type')} />
              <Radio value={false} name="patient" label="Outpatient" {...register('is_inpatient_type')} />
            </div>
          </div>
        </div>
        <div className="flex flex-col border-b-[0.8px]">
          <div className="flex justify-center">
            <span className="underline font-bold">
              Insurance and Financial Info
            </span>
          </div>
          <div className="flex justify-between gap-2 p-3">
            <div className="flex flex-col gap-y-2 items-start justify-start">
             <Radio name="payment" label="Insurance" value={"IN"} {...register('payment_method')} defaultChecked onClick={()=>setPaymentType("insurance")} />
           
            </div>
            <div className="flex flex-col gap-y-2 items-start justify-center">
              <Radio name="payment" value={"CD"} label="Pay By Card" {...register('payment_method')} onClick={()=>setPaymentType("card")} />

          
            </div>
            <div className="flex flex-col gap-y-2  items-start justify-start">
             <Radio name="payment" value={"OT"} label="Others" {...register('payment_method')} onClick={()=>setPaymentType("others")} />

             
            </div>
          </div>
          <div className="px-5 space-y-4">
          { paymentType == "insurance" && <>
            <Controller
            name="insurance_company"
            defaultValue={""}
            control={control}
            render={({field})=>(

              <Select label="Insurance Company" {...field}>
                <Option value="N">NHIF</Option>
                <Option value="A">AAR</Option>
                <Option value="J">JUBILEE </Option>
              </Select>
              )}
              />
              <Input label="Insurance Number" {...register('insurance_no')} defaultValue={null} />
            </>}
 { paymentType == "card" && <>
          <Controller
            name="card_type"
            defaultValue={""}
            control={control}
            render={({field})=>(

             <Select label="Payment Method" {...field}>
                <Option value="V">VISA</Option>
                <Option value="M">MASTERCARD</Option>
                <Option value="P">PAYPAL </Option>
                <Option value="S">SKRILL </Option>
              </Select>
            )}
            />
              <Input label="Card Number" {...register('card_no')}  type="number" className="p-2" />
             
             </>}
             {
              paymentType=="others" &&
              <Input label="Others description" {...register('others_description')} className="p-2" />

             }

          </div>
        </div>
        <div className="flex justify-center py-4 px-2">
          <Button type="submit" className="bg-purple-500 p-2 text-center rounded-sm text-gray-200 w-full ">
            ADD PATIENT
          </Button>
        </div>
      </form>
    </div>
  );
};

export default AddPatient75;
