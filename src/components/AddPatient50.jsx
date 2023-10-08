import React from "react";
import { countries } from "react-country-select/lib/data";
import CountrySelect from "react-country-select";
import { Input, Option, Progress, Radio, Select, Typography } from "@material-tailwind/react";
import { Link, useNavigate } from "react-router-dom";
import { ArrowBack, ArrowBackIos, ArrowBackIosNewRounded, ArrowBackIosOutlined, ArrowBackIosRounded } from "@mui/icons-material";
const AddPatient50 = () => {
  const navigate = useNavigate()
    return (
   <div className="flex flex-col gap-4 items-center justify-center">
    <Progress value={50} color="purple" />
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
    
    
    <div className="flex flex-col">
      <div className="flex justify-center">
        <span className="underline font-bold">Contact Info</span>
      </div>
      <div className="flex gap-2 justify-between p-3">
        
        

          <Input label="Address"  />
        
        
         

          <Input label="Email address"  />
        
        
          <Input label="Phone Number" />
        
      </div>
    </div>
    <div className="flex flex-col">
      <div className="flex justify-center">
        <span className="underline font-bold">Emergency Contact Info</span>
      </div>
      <div className="flex gap-2 justify-between p-3">
        
          <Input label="Name" />
       
        

          <Select label="Relationship">
            <option value="mother">Mother</option>
            <option value="father">Father</option>
            <option value="sister">Sister </option>
            <option value="son">Son </option>
            <option value="daughter">Daughter </option>
            <option value="other">Other </option>
          </Select>
     
       

          <Input  label="Phone Number" />
        
      </div>
    </div>
   
    <div className="flex justify-center px-2 py-4">
      <Link to='75p' className="bg-purple-500  p-2 text-center rounded-sm text-gray-200 w-full ">
        NEXT
      </Link>
    </div>
  </form>
   
   </div>
  )
}

export default AddPatient50