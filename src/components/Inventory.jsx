import {
  Add,
  ContentCut,
  LocalHospital,
  Medication,
  MedicationLiquidOutlined,
  Vaccines,
  Water,
  WaterDrop,
} from "@mui/icons-material";
import { Button } from "@mui/material";
import React from "react";
import { useState } from "react";
import OrderForm from "./OrderForm";

function Inventory() {
  const [order,setOrder] = useState(false);

  const inputFunction = ()=>{
   setOrder(true)
  }
  return (
    <div className="h-full flex  flex-col">
      {order && <OrderForm setOrder={setOrder}/>}
      <div>
        <span className="font-bold text-2xl">Inventory</span>
        <button onClick={inputFunction} className="float-right bg-purple-500 rounded shadow-lg p-2 text-white hover:bg-white  hover:text-purple-500 " >
          <Add /> Add Order
        </button>
      </div>
      <div className="h-5/6 items-center justify-evenly gap-4 flex flex-col p-4">
        <div className="flex  justify-between gap-x-4 md:gap-0 w-full overflow-x-scroll items-center ">
          <div className=" flex-shrink-0 border  items-center   flex flex-col p-5 justify-center rounded-md shadow-md">
            <img src="/syringe_png.png" alt="syringe" className=" w-32 md:w-48 h-28 md:h-32  object-contain" />
           <div className="border-t-[0.8px] w-full justify-between flex items-center">
           <span className="font-light text-lg ">Syringes</span>
            <span className="font text-3xl">50</span>
           </div>
          </div>
          <div className="flex-shrink-0 border  items-center   flex flex-col p-5 justify-center rounded-md shadow-md">
            <img src="/bandage.png" alt="bandage" className=" w-32 md:w-48 h-28 md:h-32  object-contain" />
           <div className="border-t-[0.8px] w-full justify-between flex items-center">
           <span className="font-light text-lg ">Bandages</span>
            <span className="font text-3xl">68</span>
           </div>
          </div>
          <div className="flex-shrink-0 border items-center   flex flex-col p-5 justify-center rounded-md shadow-md">
            <img src="/iv_bag_alt.jpeg" alt="iv bag" className=" w-32 md:w-48 h-28 md:h-32 object-contain" />
           <div className="border-t-[0.8px] w-full justify-between flex items-center">
           <span className="font-light text-lg ">IV Bag</span>
            <span className="font text-3xl">200</span>
           </div>
          </div>
          
        </div>
        <div className="flex w-full gap-x-4 overflow-x-scroll justify-between ">
        <div className="border  items-center flex-shrink-0  flex flex-col p-5 justify-center rounded-md shadow-md">
            <img src="/liquid_antiseptic.png" alt="liquid antiseptic" className="w-32 md:w-48 h-28 md:h-32  object-contain" />
           <div className="border-t-[0.8px] w-full justify-between flex items-center">
           <span className="font-light text-lg ">Liquid suppliments</span>
            <span className="font text-3xl">150</span>
           </div>
          </div>
          <div className="border items-center flex-shrink-0  flex flex-col p-5 justify-center rounded-md shadow-md">
            <img src="/surgical_items.png" alt="Surgical utilities" className=" w-32 md:w-48 h-28 md:h-32  object-contain" />
           <div className="border-t-[0.8px] w-full justify-between flex items-center">
           <span className="font-light text-lg ">Surgical Items</span>
            <span className="font text-3xl">450</span>
           </div>
          </div>
          <div className="border items-center flex-shrink-0  flex flex-col p-5 justify-center rounded-md shadow-md">
            <img src="/gloves.png" alt="gloves" className=" w-32 md:w-48 h-28 md:h-32  object-contain" />
           <div className="border-t-[0.8px] w-full justify-between flex items-center">
           <span className="font-light text-lg ">Gloves</span>
            <span className="font text-3xl">620</span>
           </div>
          </div>
         
        </div>
      </div>
    </div>
  );
}

export default Inventory;
