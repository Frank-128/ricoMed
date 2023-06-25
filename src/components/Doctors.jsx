import React from "react";

function Doctors() {
  return (
    <div className="overflow-y-scroll h-[50rem]">
      <div className="flex flex-col gap-4 border-b-2 m-16">
        <span className="font-bold text-3xl border-b-2 m-1">
          General Doctors
        </span>
        <div className="flex justify-around">
          <div className="flex flex-col items-center gap-3 justify-center">
            <img
              src="/cane.jpeg"
              className="w-48 h-48 outline rounded-full object-cover  outline-offset-4 outline-green-700"
              alt="doctor1"
            />
            <span>Cane Mclain</span>
            <span className="font-semibold">General Doctor</span>
          </div>
          <div className="flex flex-col items-center gap-3 justify-center">
            <img
              src="/spencer.jpg"
              className="w-48 h-48 outline rounded-full object-cover  outline-offset-4 outline-green-700"
              alt="doctor1"
            />
            <span>Daniel Spencer</span>
            <span className="font-semibold">General Doctor</span>
          </div>
          <div className="flex flex-col items-center gap-3 justify-center">
            <img
              src="/ghost.webp"
              className="w-48 h-48 outline rounded-full object-cover  outline-offset-4 outline-green-700"
              alt="doctor1"
            />
            <span>Dr St Patrick</span>
            <span className="font-semibold">General Doctor</span>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4 border-b-2 m-16">
        <span className="font-bold text-3xl border-b-2">Surgical Doctors</span>
        <div className="flex justify-around">
          <div className="flex flex-col items-center gap-3 justify-center">
            <img
              src="/west.jpg"
              className="w-48 h-48 outline rounded-full object-cover  outline-offset-4 outline-red-700"
              alt="doctor1"
            />
            <span>Dr West</span>
            <span className="font-semibold">Pediatric Surgeon</span>
          </div>
          <div className="flex flex-col items-center gap-3 justify-center">
            <img
              src="/kendrick.jpeg"
              className="w-48 h-48 outline rounded-full object-cover  outline-offset-4 outline-red-700"
              alt="doctor1"
            />
            <span>Dr Kendrick</span>
            <span className="font-semibold">Cerebral Surgeon</span>
          </div>
          <div className="flex flex-col items-center gap-3 justify-center">
            <img
              src="/swift.jpeg"
              className="w-48 h-48 outline rounded-full object-cover  outline-offset-4 outline-red-700"
              alt="doctor1"
            />
            <span>Dr Taylor</span>
            <span className="font-semibold">Cardiac Surgeon</span>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4 m-16">
        <span className="font-bold text-3xl border-b-2">
          Specialist Doctors
        </span>
        <div className="flex justify-around">
          <div className="flex flex-col items-center gap-3 justify-center">
            <img
              src="/drake.jpeg"
              className="w-48 h-48 outline rounded-full object-cover  outline-offset-4 outline-violet-700"
              alt="doctor1"
            />
            <span>Dr Drake</span>
            <span className="font-semibold">Eye Specialist</span>
          </div>
          <div className="flex flex-col items-center gap-3 justify-center">
            <img
              src="/kendrick.jpeg"
              className="w-48 h-48 outline rounded-full object-cover  outline-offset-4 outline-violet-700"
              alt="doctor1"
            />
            <span>Dr Kendrick</span>
            <span className="font-semibold">Cerebral Surgeon</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Doctors;
