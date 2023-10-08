import React from "react";
import { countries } from "react-country-select/lib/data";
import CountrySelect from "react-country-select";
import {
  Input,
  Option,
  Progress,
  Radio,
  Select,
  Typography,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
function AddPatient({ setOpenAddPatient }) {
  const handleClick = (e) => {
    if (e.target.classList.contains("modal")) {
      setOpenAddPatient(false);
    }
  };
  return (
    <div className="w-full h-full flex flex-col items-center justify-center gap-4">
      <Progress value={25} color="purple" />
      <form  className="border flex items-center justify-center  flex-col w-fit h-full  ">
        <div className="flex justify-center p-3">
          <span className="font-bold text-3xl">Add New Patient</span>
        </div>
        <div className="flex flex-col gap-y-4">
          <div className="flex justify-center flex-1">
            {" "}
            <span className="underline font-semibold">Personal Info</span>
          </div>
          <div className="flex gap-2 px-2">
            <Input label="FirstName" />
            <Input label="MiddleName" />
            <Input label="LastName" />
          </div>
          <div className="flex items-center gap-2 justify-center text-sm px-2">
            
            <Input type="date" label="Date Of Birth" />
            <div className="flex flex-col basis-1/3">
              <Select label="Marital Status">
                <Option value="single">Single</Option>
                <Option value="married">Married</Option>
              </Select>
            </div>
            <div className="flex basis-1/3 flex-col">
              <Select label="Nationality">
                {countries.map((item, i) => (
                  <option key={i} value={item.label}>
                    {item.label}
                  </option>
                ))}
              </Select>
            </div>
          </div>
          <div className="flex p-3 gap-2 items-center justify-around">
            <Select label="Identification Type">
              <Option value="driver">Driver's License</Option>
              <Option value="voter">Voter's Id</Option>
              <Option value="nida">NIDA </Option>
            </Select>
            <Input className="p-2" label="Identification Number" />

           
          </div>
          <div className="flex  flex-col basis-1/3">
              <Typography className="text-sm mx-4">Gender</Typography>
              <div className="flex">
                <Radio value="male" label="Male" name="gender" />
                <Radio value="female" label="Female" name="gender" />
              </div>
            </div>
        </div>
    
        <div className="flex w-full p-3 ">
          <Link to='50p' className="bg-purple-500 flex-1 p-2 text-center rounded-sm text-gray-200  ">
            NEXT
          </Link>
        </div>
      </form>
    </div>
  );
}

export default AddPatient;
