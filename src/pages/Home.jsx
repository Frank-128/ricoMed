import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Calendar, momentLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { events } from "../assets/data";
import moment from "moment";

function Home() {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex flex-col   font-mono h-screen bg-green-200  overflow-y-scroll ">
      <nav className="flex fixed  z-50 top-0 left-0 right-0 h-16 w-full px-10 bg-slate-200 items-center  justify-between">
        <div className="flex gap-2">
          <img src="/ricoMed.jpg" className="w-10 h-10 rounded" alt="" />
          <h1 className="font-bold text-4xl">RicoMed Health Centre</h1>
        </div>
        <ul className="flex justify-around flex-1 items-center h-full  ">
          <li className="cursor-pointer">Home</li>
          <li className="h-full cursor-pointer">
            <div
              onMouseEnter={() => setOpen(true)}
              onMouseLeave={() => setOpen(false)}
              className="cursor-pointer  p-2 items-center h-full  flex group"
            >
              <span>Services</span>

              {open && (
                <div className="absolute top-16  rounded bg-zinc-400/80 w-1/4 flex flex-col duration-300 ease-in-out transition-all">
                  <ul>
                    <li className="hover:bg-blue-800/30 w-full p-3">
                      Reception
                    </li>
                    <li className="hover:bg-blue-800/30 w-full p-3">
                      Laboratory
                    </li>
                    <li className="hover:bg-blue-800/30 w-full p-3">
                      Pharmarcy
                    </li>
                    <li className="hover:bg-blue-800/30 w-full p-3">
                      Radiology
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </li>
          <li className="cursor-pointer">About us</li>
          <li className="cursor-pointer">Contacts</li>
          <li>
            <Link to="/login" className="text-purple-600">
              Login
            </Link>
          </li>
        </ul>
      </nav>

      <main className="flex flex-col  relative w-full h-full overflow-y-scroll mt-16">
        <div className="flex gap-10 w-full flex-col ">
          <div className="  flex relative my-2 p-2 w-[100%] h-[800px] justify-center">
            <img
              src="/ricoHospital.webp"
              className="opacity-80 w-[80%]  rounded  object-cover"
              alt="rico Hospital"
            />
            <span className="absolute top-1/2 font-semibold text-5xl text-gray-800">
              Welcome to Rico Med Hospital
            </span>
          </div>

          <div className=" ">
            <span className="font-bold flex justify-center text-2xl ml-12 underline py-5">
              Our Services
            </span>
            <div className="flex justify-around">
              <div className="shadow-xl p-2 hover:opacity-80 cursor-pointer rounded-sm">
                <img
                  src="/nurse1.webp"
                  alt="nurse"
                  className="w-64 h-96 object-cover"
                />
                <span className="font-bold flex justify-center">
                  Inpatient service
                </span>
              </div>
              <div className="shadow-xl p-2 hover:opacity-80 cursor-pointer rounded-sm">
                <img
                  src="/nurse2.avif"
                  alt="nurse"
                  className="w-64 h-96 object-cover"
                />
                <span className="font-bold flex justify-center">
                  Consultation service
                </span>
              </div>
              <div className="shadow-xl p-2 hover:opacity-80 cursor-pointer rounded-sm">
                <img
                  src="/nurse3.jpg"
                  alt="nurse"
                  className="w-64 h-96 object-cover"
                />
                <span className="font-bold flex justify-center">
                  Patient care
                </span>
              </div>
              <div className="shadow-xl p-2 hover:opacity-80 cursor-pointer rounded-sm">
                <img
                  src="/doctor2.jpg"
                  alt="nurse"
                  className="w-64 h-96 object-cover"
                />
                <span className="font-bold flex justify-center">
                  Patient diagnosis
                </span>
              </div>
            </div>
          </div>
          <div className="m-5">
            <span className="flex justify-center font-bold text-xl underline py-5">
              Our Directors
            </span>
            <div className="flex justify-around">
              <div className="rounded-md shadow-lg p-2">
                <img
                  src="/specter.webp"
                  className="w-64 object-cover h-96"
                  alt=""
                />
                <span className="flex justify-center font-bold ">
                  Prof. Harvey Specter
                </span>
              </div>
              <div className="rounded-md shadow-lg p-2">
                <img
                  src="/ghost.webp"
                  className="w-64 object-cover h-96"
                  alt=""
                />
                <span className="flex justify-center font-bold ">
                  Prof. St Patrick
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="m-24 p-10 bg-green-200/75 border-t-2 border-slate-800 ">
          Our facilities are currently taking precautions to help keep patients
          and visitors safe, which may include conducting screenings,
          restricting visitors and practicing distancing for compassionate, safe
          care. We continuously monitor COVID-19 guidance from the Centers for
          Disease Control and Prevention (CDC) and adjust our safety practices
          and safeguards accordingly.
        </div>
      </main>

      <footer className="bg-slate-200  text-center text-black bottom-0 relative left-0 w-full p-5">
        {" "}
        &#169; 2023 ricoMed. All rights reserved.{" "}
      </footer>
    </div>
  );
}

export default Home;
