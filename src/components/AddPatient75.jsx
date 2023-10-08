import {
  Input,
  Option,
  Progress,
  Radio,
  Select,
  Typography,
} from "@material-tailwind/react";
import { ArrowBackIosNewRounded } from "@mui/icons-material";
import React from "react";
import { Link, useNavigate } from "react-router-dom";

const AddPatient75 = ({url}) => {
    const navigate = useNavigate()
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <Progress value={75} color="purple" />
      <div className="flex flex-start w-full ">
    <span onClick={()=>navigate(-1)} className="cursor-pointer h-fit">
    <ArrowBackIosNewRounded/>
    <span>Previous</span>
    </span>
    </div>
      <form action="" className="border w-fit ">
        <div className="flex justify-center p-3">
          <span className="font-bold text-3xl">Add New Patient</span>
        </div>

        <div className="flex flex-col gap-2 border-b-[0.8px]">
          <div className="flex justify-center">
            <span className="underline font-bold">Medical Issue</span>
          </div>
          <div className="flex justify-between gap-2 px-2">
            <Select label="Medical Issue">
              <Option value="counselling">Counselling</Option>
              <Option value="Medical Test">Medical Test</Option>
              <Option value="maternal">Maternal woman </Option>
              <Option value="radiology">Radiology </Option>
              <Option value="general">General Doctor </Option>
              <Option value="specialist">Specialist </Option>
            </Select>

            <Select label="Choose Doctor">
              <Option value="robert">Robert</Option>
              <Option value="sane">Sane Brown</Option>
              <Option value="moses">Moses Kelvin </Option>
              <Option value="trevor">Trevor Denis </Option>
              <Option value="frank">Frank Rico </Option>
              <Option value="mason">Mason Campbell </Option>
            </Select>
          </div>
          <div className="flex flex-col  p-2">
            <Typography className="text-sm mx-2">Patient Type</Typography>

            <div className="flex text-sm">
              <Radio value="inpatient" name="patient" label="Inpatient" />
              <Radio value="outpatient" name="patient" label="Outpatient" />
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
             <Radio name="payment" label="Insurance" />

              <Input label="Insurance Number" />
            </div>
            <div className="flex flex-col gap-y-2 items-start justify-center">
              <Radio name="payment" label="Pay By Card" />

              <Select label="Payment Method" name="" id="card">
                <Option value="visa">VISA</Option>
                <Option value="mastercard">MASTERCARD</Option>
                <Option value="paypal">PAYPAL </Option>
                <Option value="skrill">SKRILL </Option>
              </Select>
              <Input label="Card Number" className="p-2" />
            </div>
            <div className="flex flex-col gap-y-2  items-start justify-start">
             <Radio name="payment" label="Others" />

              <Input label="Others..."/>
            </div>
          </div>
        </div>
        <div className="flex justify-center py-4 px-2">
          <Link to={url+'/profile/2'} className="bg-purple-500 p-2 text-center rounded-sm text-gray-200 w-full ">
            ADD PATIENT
          </Link>
        </div>
      </form>
    </div>
  );
};

export default AddPatient75;
