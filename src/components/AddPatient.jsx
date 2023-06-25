import React from "react";
import { countries } from "react-country-select/lib/data";
import CountrySelect from "react-country-select";
function AddPatient({ setOpenAddPatient }) {
  const handleClick = (e) => {
    if (e.target.classList.contains("modal")) {
      setOpenAddPatient(false);
    }
  };
  return (
    <div
      onClick={handleClick}
      className="absolute top-0 left-0 p-2 flex justify-center w-screen h-screen modal bg-gray-900/75"
    >
      <form action="" className="bg-slate-100 w-4/5 lg:w-2/4">
        <div className="flex justify-center p-3">
          <span className="font-bold text-3xl">Add New Patient</span>
        </div>
        <div>
          <div className="flex justify-center flex-1">
            {" "}
            <span className="underline font-semibold">Personal Info</span>
          </div>
          <div className="flex justify-between p-5">
            <div className="flex flex-col">
              <label htmlFor="first">FirstName</label>
              <input className="p-2" type="text" id="first" />
            </div>
            <div className="flex flex-col">
              <label htmlFor="middle">MiddleName</label>
              <input className="p-2" type="text" id="middle" />
            </div>
            <div className="flex flex-col">
              <label htmlFor="last">LastName</label>
              <input className="p-2" type="text" id="last" />
            </div>
          </div>
          <div className="flex   p-5">
            <div className="basis-1/3">
              <span>Gender</span>
              <div className="flex gap-4">
                <div className="flex gap-2">
                  <label htmlFor="male">male</label>
                  <input type="radio" value="male" id="male" name="gender" />
                </div>
                <div className="flex gap-2">
                  <label htmlFor="male">female</label>
                  <input
                    type="radio"
                    value="female"
                    id="female"
                    name="gender"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col basis-1/3">
              <label htmlFor="">Marital Status</label>
              <select name="" id="" className="w-1/2">
                <option value="single">Single</option>
                <option value="married">Married</option>
              </select>
            </div>
            <div className="flex basis-1/3 flex-col">
              <label htmlFor="">Nationality</label>
              <select name="" id="" className="w-1/2">
                {countries.map((item, i) => (
                  <option key={i} value={item.label}>
                    {item.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="flex p-3 items-center justify-around">
            <div className="flex flex-col ">
              <label htmlFor="middle">Identification</label>
              <div className="flex gap-3">
                <select name="" id="">
                  <option value="driver">Driver's License</option>
                  <option value="voter">Voter's Id</option>
                  <option value="nida">NIDA </option>
                </select>
                <input
                  className="p-2"
                  type="text"
                  placeholder="enter the identification number"
                />
              </div>
            </div>
            <div className="flex flex-col  items-center justify-center">
              <label htmlFor="last">Date Of Birth</label>

              <input
                type="date"
                className="p-2 rounded bg-slate-300"
                name=""
                id=""
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="flex justify-center">
            <span className="underline font-bold">Contact Info</span>
          </div>
          <div className="flex justify-between p-3">
            <div className="flex flex-col  items-center justify-center">
              <label htmlFor="last">Address</label>

              <input type="text" className="p-2 rounded" name="" id="" />
            </div>
            <div className="flex flex-col  items-center justify-center">
              <label htmlFor="last">Email address</label>

              <input type="text" className="p-2 rounded" name="" id="" />
            </div>
            <div className="flex flex-col  items-center justify-center">
              <label htmlFor="last">Phone Number</label>

              <input type="text" className="p-2 rounded" name="" id="" />
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="flex justify-center">
            <span className="underline font-bold">Emergency Contact Info</span>
          </div>
          <div className="flex justify-between p-3">
            <div className="flex flex-col  items-center justify-center">
              <label htmlFor="last">Name</label>

              <input type="text" className="p-2 rounded" name="" id="" />
            </div>
            <div className="flex flex-col  items-center justify-center">
              <label htmlFor="last">Relationship</label>

              <select className="p-2" name="" id="">
                <option value="mother">Mother</option>
                <option value="father">Father</option>
                <option value="sister">Sister </option>
                <option value="son">Son </option>
                <option value="daughter">Daughter </option>
                <option value="other">Other </option>
              </select>
            </div>
            <div className="flex flex-col  items-center justify-center">
              <label htmlFor="last">Phone Number</label>

              <input type="text" className="p-2 rounded" name="" id="" />
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="flex justify-center">
            <span className="underline font-bold">Medical Issue</span>
          </div>
          <div className="flex justify-between p-3">
            <div className="flex flex-col  items-center justify-center">
              <label htmlFor="last">Patient type</label>

              <div className="flex gap-3">
                <div className="flex gap-2">
                  <label htmlFor="inpatient">Inpatient</label>
                  <input
                    type="radio"
                    className="p-2 rounded"
                    value="inpatient"
                    name="patient"
                    id="inpatient"
                  />
                </div>
                <div className="flex gap-2">
                  <label htmlFor="outpatient">Outpatient</label>
                  <input
                    type="radio"
                    className="p-2 rounded"
                    value="outpatient"
                    name="patient"
                    id="outpatient"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col  items-center justify-center">
              <label htmlFor="last">medical issue</label>

              <select className="p-2" name="" id="">
                <option value="counselling">Counselling</option>
                <option value="Medical Test">Medical Test</option>
                <option value="maternal">Maternal woman </option>
                <option value="radiology">Radiology </option>
                <option value="general">General Doctor </option>
                <option value="specialist">Specialist </option>
              </select>
            </div>
            <div className="flex flex-col  items-center justify-center">
              <label htmlFor="last">Choose Appropiate Doctor</label>

              <select className="p-2" name="" id="">
                <option value="robert">Robert</option>
                <option value="sane">Sane Brown</option>
                <option value="moses">Moses Kelvin </option>
                <option value="trevor">Trevor Denis </option>
                <option value="frank">Frank Rico </option>
                <option value="mason">Mason Campbell </option>
              </select>
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="flex justify-center">
            <span className="underline font-bold">Insurance and Financial Info</span>
          </div>
          <div className="flex justify-between p-3">
            <div className="flex flex-col  items-center justify-center">
            <div className="flex gap-1">
             <label htmlFor="last">Insurance</label>
             <input type="radio" name="payment" value="insurance" id="" />
             </div>

              <input type="text" className="p-2 rounded" name="" id="insurance" />
            </div>
            <div className="flex flex-col  items-center justify-center">
            <div className="flex gap-1">
             <label htmlFor="last">Pay By Card</label>
             <input type="radio" name="payment" value="card" id="" />
             </div>

             <div className="flex gap-2">
                
             <select className="p-2" name="" id="card">
                <option value="visa">VISA</option>
                <option value="mastercard">MASTERCARD</option>
                <option value="paypal">PAYPAL </option>
                <option value="skrill">SKRILL </option>
               
              </select>
              <input type="text" name="" className="p-2" placeholder="enter card number" id="" />
             </div>

            </div>
            <div className="flex flex-col  items-start justify-start">
             <div className="flex gap-1">
             <label htmlFor="last">Others</label>
             <input type="radio" name="payment" value="others" id="" />
             </div>

              <input type="hidden" className="p-2 rounded" name="" id="" />
            </div>
          </div>
        </div>
       <div className="flex justify-center ">
       <button className="bg-blue-800 p-2 rounded-sm text-gray-200 w-4/5 ">SAVE PATIENT</button>
       </div>
      </form>
    </div>
  );
}

export default AddPatient;
