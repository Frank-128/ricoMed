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
        <Button onClick={inputFunction} className="float-right" color="primary">
          <Add /> Add Order
        </Button>
      </div>
      <div className="h-5/6 items-center justify-evenly gap-4 flex flex-col p-4">
        <div className="flex  justify-between w-full  items-center ">
          <div className="bg-yellow-200  items-center  w-1/6 flex flex-col p-5 justify-center rounded-md shadow-md">
            <Vaccines fontSize="large" color="warning" />
            <span className="font-light text-lg ">Syringes</span>
            <span className="font text-3xl">50</span>
          </div>
          <div className="bg-yellow-200  w-1/6 flex flex-col items-center p-5 justify-center rounded-md shadow-md">
            <Medication fontSize="large" color="warning" />
            <span className="font-light text-lg ">Bandage</span>
            <span className="font text-3xl">50</span>
          </div>
          <div className="bg-yellow-200  w-1/6 flex p-5 items-center flex-col justify-center rounded-md shadow-md">
            <WaterDrop fontSize="large" color="warning" />
            <span className="font-light text-lg ">Drip</span>
            <span className="font text-3xl">50</span>
          </div>
        </div>
        <div className="flex w-full justify-between ">
          <div className="bg-yellow-200  w-1/6 flex p-5 flex-col items-center justify-center rounded-md shadow-md">
            <MedicationLiquidOutlined fontSize="large" color="warning" />
            <span className="font-light text-lg ">Liquid suppliments</span>
            <span className="font text-3xl">50</span>
          </div>
          <div className="bg-yellow-200  w-1/6 flex p-5 items-center flex-col justify-center rounded-md shadow-md">
            <ContentCut fontSize="large" color="warning" />
            <span className="font-light text-lg ">Surgical utilities</span>
            <span className="font text-3xl">50</span>
          </div>
          <div className="bg-yellow-200  w-1/6 flex p-5 items-center flex-col justify-center rounded-md shadow-md">
            <LocalHospital fontSize="large" color="warning" />
            <span className="font-light text-lg ">Gloves</span>
            <span className="font text-3xl">50</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Inventory;
