import React, { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import { Calendar, momentLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { events, services } from "../assets/data";
import moment from "moment";
import { Carousel, Menu, MenuHandler, MenuItem, MenuList, Typography } from "@material-tailwind/react";
import { Facebook, Instagram, Twitter } from "@mui/icons-material";

function Home() {
  const [open, setOpen] = useState(false);
  const [serviceMessage,setServiceMessage] = useState({})
  // useEffect(()=>{
  //  const socket = new WebSocket('ws://127.0.0.1:8000/chat/')
  
  //   socket.onopen = ()=>{
  //     console.log('websocket connection open')
  //   }
  //    socket.onmessage = (e)=>{
  //     console.log('websocket incoming messages from the server',e.data)
  //   }
  //   return ()=>{
  //     socket.close()
  //   }
  // },[])
  

  return (
    <div className="flex flex-col ">
      <nav className="flex fixed  border-b-[1px]  z-50 top-0 left-0 right-0 h-16 w-full md:px-10 px-1 bg-white items-center  justify-between">
        <div className="flex gap-2">
          <img src="/ricoMed.jpg" className="w-10 h-10 rounded" alt="" />
        </div>
        <ul className="md:flex justify-around hidden flex-1 items-center h-full  ">
          <li  className="cursor-pointer">
            <Link to='/'>
            Home
            </Link>
          </li>
          <li className="cursor-pointer">
            <Menu
              animate={{
                mount: { y: 0 },
                unmount: { y: 25 },
              }}
              open={open} handler={setOpen} allowHover
            >
              <MenuHandler>
                <span>Services</span>
              </MenuHandler>
              <MenuList className="bg-white p-0 w-1/6 mt-6">
               {services.map((item,index)=> <MenuItem key={index} onClick={()=>setServiceMessage(item)} className="p-2 hover:text-purple-500">{item.title}</MenuItem>)}
               
              </MenuList>
            </Menu>
           
          </li>
          <li className="cursor-pointer">About us</li>
          <li className="cursor-pointer">Contacts</li>
          
        </ul>
        <h1 className="font-bold md:hidden">RicoMed Health Facility</h1>
        <Link to="/login" className="text-white text-xs rounded bg-purple-500 p-2">
              Login
            </Link>
      </nav>

      <main className="flex flex-col   w-full h-full  mt-16">
        <div className="flex gap-10 w-full flex-col ">
          <Carousel loop autoplay transition={{duration:2}} >
         
            <div className="relative w-full h-full">
              <img
                src="/ricoHospital.webp"
                alt="rico hospital"
                className="w-full h-[650px] object-cover"
              />
              <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
                <div className="w-3/4 text-center md:w-2/4">
                  <Typography variant="h1" color="white">
                    Welcome To RicoMed
                  </Typography>
                  <Typography
                    variant="lead"
                    color="white"
                    className="mb-12 opacity-80"
                  >
                    Welcome to our health facility with the best patient care
                    and oustanding services your wellbeing is our primarily
                    concern, our stafff will kindly take care of all your concerns
                  </Typography>
                </div>
              </div>
            </div>
            <div className="relative w-full h-full">
              <img
                src="/theatre.jpeg"
                alt="rico hospital"
                className="w-full h-[650px] object-cover"
              />
              <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
                <div className="w-3/4 text-center md:w-2/4">
                  <Typography variant="h1" color="white">
                    Get Services with the best facilities
                  </Typography>
                  <Typography
                    variant="lead"
                    color="white"
                    className="mb-12 opacity-80"
                  >
                   RicoMed has the modern and outstanding new technology facilities 
                   which will aid the patient treatment process 
                  </Typography>
                </div>
              </div>
            </div>
            <div className="relative w-full h-full">
              <img
                src="/inventory.jpg"
                alt="rico hospital"
                className="w-full h-[650px] object-cover"
              />
              <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
                <div className="w-3/4 text-center md:w-2/4">
                  <Typography variant="h1" color="white">
                    All of medications available
                  </Typography>
                  <Typography
                    variant="lead"
                    color="white"
                    className="mb-12 opacity-80"
                  >
                    At RicoMed we are fully equiped with all the medications and auxilliary 
                    tools needed for your treatment everything in one place! Our Medical experts
                    will do everything in their power to make sure you get better
                  </Typography>
                </div>
              </div>
            </div>
          </Carousel>

          <div className=" ">
            <span className="font-bold flex justify-center text-2xl ml-12 underline py-5">
              Our Services
            </span>
            <div className="flex md:justify-around overflow-x-scroll">
             {services.map((item,index)=> <div key={index} onClick={()=>setServiceMessage(item)} className="shadow-xl p-2 hover:opacity-80 flex-shrink-0 cursor-pointer rounded-sm">
                <img
                  src={item.image}
                  alt={item.image}
                  className="md:w-64 md:h-96 w-48 h-64 object-cover"
                />
                <span className={` ${serviceMessage.title == item.title? 'text-purple-500':''} font-bold flex justify-center`}>
                  {item.title}
                </span>
              </div>)}
           
            </div>
          </div>
          <div className="py-3 px-6">
              {serviceMessage.message}
          </div>
          <div className="m-5">
            <span className="flex justify-center font-bold text-xl underline py-5">
              Our Directors
            </span>
            <div className="flex md:justify-around overflow-x-scroll">
              <div className="rounded-md shadow-lg flex-shrink-0 p-2">
                <img
                  src="/specter.webp"
                  className="w-64 object-cover h-96"
                  alt=""
                />
                <span className="flex justify-center font-bold ">
                  Prof. Harvey Specter
                </span>
              </div>
              <div className="rounded-md flex-shrink-0 shadow-lg p-2">
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
        <div className="md:m-24 p-10">
          <h2 className="underline text-xl text-center py-4">About us</h2>
          <p className="">RicoMed is a health facility established in 2023 by Rico Hernandes the C.E.O of Rico Entreprises, he assembled a team of experts in different health aspects and came up with the 
            best team we have today our team is higly dedicated with the primary goal of providing the best health services to our patients. You are all welcome at RicoMed, Patient Support care and comfortable services is our motto.
          </p>
        </div>
        <div className="md:mx-24 p-10  border-t-2 border-slate-800 ">
          Our facilities are currently taking precautions to help keep patients
          and visitors safe, which may include conducting screenings,
          restricting visitors and practicing distancing for compassionate, safe
          care. We continuously monitor COVID-19 guidance from the Centers for
          Disease Control and Prevention (CDC) and adjust our safety practices
          and safeguards accordingly.
        </div>
       
      </main>

      <footer className="bg-gray-200 border-t-[0.8px] gap-y-4 flex md:items-end md:flex-row flex-col-reverse items-start md:justify-around  text-center text-black w-full p-5">
       <span> &#169; 2023 ricoMed. All rights reserved.</span>

       <span className="flex items-start md:items-center flex-col">
        <h3 className="font-bold ">Contacts</h3> 
        <ul className="flex flex-col gap-y-2 justify-center items-start">
          <li>Phone Number : 202-047-990-23</li>
          <li>Email : info@ricoMed</li>
          <li className="space-x-4">
            <Twitter className="text-blue-300"/>
            <Instagram className="text-red-600" />
            <Facebook className="text-blue-600" />
          </li>
        </ul>
       </span>
      </footer>
    </div>
  );
}

export default Home;
