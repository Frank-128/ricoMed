import React, { useState } from "react";
import { useSelector } from "react-redux";
import { conversations, groupConv, users } from "../assets/data";
import { Person2 } from "@mui/icons-material";
import { Button } from "@mui/material";

function ChatHead({ user, handleClick,setChatPerson }) {
  return (
    <div
      onClick={() => {handleClick(user.id,user.name);}}
      className="flex gap-3 items-center cursor-pointer shadow-md bg-white p-2 rounded-md"
    >
      <img
        src={user.pic}
        className="h-14 w-14 object-cover rounded-full"
        alt="avatar"
      />
      <div className="flex flex-col">
        <span className=" sm:text-sm md:text-lg">{user.name}</span>
      </div>
    </div>
  );
}
function GroupHead({ group,handleClick,setChatPerson }) {
  return (
    <div onClick={()=>{handleClick(group.id,group.name);}} className="flex gap-10 items-center cursor-pointer shadow-lg bg-white p-2 rounded-md">
      <Person2
        color="action"
        sx={{
          backgroundColor: group.color,
          height: "40px",
          width: "40px",
          borderRadius: "50%",
        }}
      />
      <b>{group.name}</b>
    </div>
  );
}

function Messages() {
  const id = useSelector((state) => state.currentUser.id);
  const [receiverId, setReceiverId] = useState();
  const [chatPerson,setChatPerson] = useState('');
  const [chatType,setChatType]= useState(false);

  const handleClick = (val,name) => {
    setReceiverId(val);
    setChatPerson(name);
  };
  const groups = [
    {
      id: 1,
      name: "doctors",
      color: "red",
    },
    {
      id: 2,
      name: "nurses",
      color: "cyan",
    },
    {
      id: 3,
      name: "pharmarcy",
      color: "green",
    },
    {
      id: 4,
      name: "laboratory",
      color: "purple",
    },
    {
      id: 5,
      name: "reception",
      color: "violet",
    },
  ];
  return (
    <div className="overflow-y-scroll w-full   flex h-full">
      <div className="bg-gray-100   w-full md:basis-2/6">
        <div className="flex justify-around">
          <Button onClick={()=>{setChatType(false);setChatPerson("")}}>Inbox</Button>
          <Button onClick={()=>{setChatType(true);setChatPerson("")}}>Group</Button>
        </div>
        <div className="p-3 gap-4 flex h-4/5 flex-col overscroll-y-scroll">
           {chatType? groups.map((item) => (
            <GroupHead group={item} handleClick={handleClick} setChatPerson={setChatPerson} />
          ))
          :users
            .filter((item) => item.id !== id)
            .map((item) => (
              <ChatHead user={item} handleClick={handleClick} setChatPerson={setChatPerson} />
            ))} 
        </div>
      </div>
      <div className="basis-5/6 md:flex hidden p-10 flex-col h-full gap-3  bg-gray-200">
                <div className="flex items-center font-bold justify-center sticky rounded bg-zinc-400 p-4">{chatPerson}</div>
        { !chatType?conversations
          .filter(
            (item) =>
              (item.sender === id && item.receiver === receiverId) ||
              (item.receiver === id && item.sender === receiverId) 
          )
          .map((item) => (
            <div
              className={
                item.sender === id
                  ? "self-end p-2 flex flex-col bg-blue-100 rounded"
                  : "self-start p-2 bg-blue-100 flex flex-col rounded"
              }
            >
              {item.message}
              <span className={
                item.sender === id
                  ? "self-end p-2 font-bold bg-blue-100 rounded"
                  : "self-start p-2 bg-blue-100 font-bold rounded"
              }>{item.timeSent}</span>
            </div>
          )):groupConv.filter((item)=>item.group === chatPerson).map((item)=><div>{item.message}</div>)}
      </div>
    </div>
  );
}

export default Messages;
