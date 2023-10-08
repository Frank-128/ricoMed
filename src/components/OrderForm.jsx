import { Option, Select } from "@material-tailwind/react";
import {
  Add,
  AddCircle,
  AddOutlined,
  RemoveCircle,
  RemoveCircleOutline,
  StopCircle,
} from "@mui/icons-material";
import React, { useState } from "react";

function OrderForm({ setOrder }) {
  const [orders, setOrders] = useState({
    syringes: 0,
    bandages: 0,
    gloves: 0,
    liquids: 0,
    iv_bag: 0,
    surgicals: 0,
  });
  const handleClick = (e) => {
    if (e.target.classList.contains("modal")) {
      setOrder(false);
    }
  };
  console.log(orders);
  return (
    <div
      onClick={handleClick}
      className="bg-gray-900/40 modal justify-center items-center w-full h-full top-0 left-0 fixed z-[80] flex "
    >
      <form
        action=""
        className="bg-gray-200 rounded p-4 w-1/3 h-3/4 flex flex-col justify-around items-center"
      >
        <div className="font-bold text-xl">Add new order</div>
        <div className="flex w-full justify-between border-b-[0.8px] border-gray-700 py-2 items-center">
          <span>Syringes</span>
          <div className="rounded-md   w-24 flex justify-between">
            <RemoveCircleOutline
              className="cursor-pointer"
              onClick={() => {
                orders.syringes > 0 &&
                  setOrders({ ...orders, syringes: orders.syringes - 1 });
              }}
            />
            <span>{orders.syringes}</span>

            <AddCircle
              className="cursor-pointer"
              onClick={() => {
                setOrders({ ...orders, syringes: orders.syringes + 1 });
              }}
            />
          </div>
        </div>
        <div className="flex w-full justify-between border-b-[0.8px] border-gray-700 py-2 items-center">
          <div>IV Bags</div>
          <div className="rounded-md   w-24 flex justify-between">
            <RemoveCircleOutline
              className="cursor-pointer"
              onClick={() => {
                orders.iv_bag > 0 &&
                  setOrders({ ...orders, iv_bag: orders.iv_bag - 1 });
              }}
            />
            <span>{orders.iv_bag}</span>
            <AddCircle  className="cursor-pointer"  onClick={() => {
                setOrders({ ...orders, iv_bag: orders.iv_bag + 1 });
              }} />
          </div>
        </div>
        <div className="flex w-full justify-between border-b-[0.8px] border-gray-700 py-2 items-center">
          <div>Gloves</div>
          <div className="rounded-md   w-24 flex justify-between">
            <RemoveCircleOutline
              className="cursor-pointer"
              onClick={() => {
                orders.gloves > 0 &&
                  setOrders({ ...orders, gloves: orders.syringes - 1 });
              }}
            />
            <span>{orders.gloves}</span>
            <AddCircle  className="cursor-pointer"  onClick={() => {
                setOrders({ ...orders, gloves: orders.gloves + 1 });
              }} />
          </div>
        </div>
        <div className="flex w-full justify-between border-b-[0.8px] border-gray-700 py-2 items-center">
          <div>Surgical Equiqments</div>
          <div className="rounded-md   w-24 flex justify-between">
            <RemoveCircleOutline
              className="cursor-pointer"
              onClick={() => {
                orders.surgicals > 0 &&
                  setOrders({ ...orders, surgicals: orders.syringes - 1 });
              }}
            />
            <span>{orders.surgicals}</span>
            <AddCircle  className="cursor-pointer"  onClick={() => {
                setOrders({ ...orders, surgicals: orders.surgicals + 1 });
              }} />
          </div>
        </div>
        <div className="flex w-full justify-between border-b-[0.8px] border-gray-700 py-2 items-center">
          <div>Bandages </div>
          <div className="rounded-md   w-24 flex justify-between">
            <RemoveCircleOutline
              className="cursor-pointer"
              onClick={() => {
                orders.bandages > 0 &&
                  setOrders({ ...orders, bandages: orders.syringes - 1 });
              }}
            />
            <span>{orders.bandages}</span>
            <AddCircle  className="cursor-pointer"  onClick={() => {
                setOrders({ ...orders, bandages: orders.bandages + 1 });
              }} />
          </div>
        </div>
        <div className="flex w-full justify-between border-b-[0.8px] border-gray-700 py-2 items-center">
          <div>Liquid Suppliments</div>
          <div className="rounded-md   w-24 flex justify-between">
            <RemoveCircleOutline
              className="cursor-pointer"
              onClick={() => {
                orders.liquids > 0 &&
                  setOrders({ ...orders, liquids: orders.syringes - 1 });
              }}
            />
            <span>{orders.liquids}</span>
            <AddCircle  className="cursor-pointer"  onClick={() => {
                setOrders({ ...orders, liquids: orders.liquids + 1 });
              }} />
          </div>
        </div>

        <Select label="Choose Doctor ">
          <Option value="md1">Dr Anorld</Option>
          <Option value="md1">Dr Peach</Option>
          <Option value="md1">Dr Rachel</Option>
          <Option value="md1">Dr Julius</Option>
          <Option value="md1">Dr Reece</Option>
          <Option value="md1">Dr Karius</Option>
        </Select>

        <button className="bg-purple-500 text-white w-full m-3 p-3 rounded">
          Add Order
        </button>
      </form>
    </div>
  );
}

export default OrderForm;
