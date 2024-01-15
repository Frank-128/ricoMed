import React, { useState } from "react";
import { useSelector } from "react-redux";
import {  groupConv,  } from "../assets/data";
import { Person2, Send } from "@mui/icons-material";
import { Button, TextField } from "@mui/material";
import { useEffect,useMemo } from "react";
import { axios } from "../axios";
import { Input } from "@material-tailwind/react";
import Pusher from 'pusher-js';
import Cookies from "js-cookie";

function ChatHead({ user, handleClick,setChatPerson }) {

  
  return (
    <div
      onClick={() => {handleClick(user.id,user.username);}}
      className="flex gap-3 items-center cursor-pointer shadow-md bg-white p-2 rounded-md"
    >
      <img
        src={'http://localhost:8000'+user.pic}
        className="h-14 w-14 object-cover rounded-full"
        alt="avatar"
      />
      <div className="flex flex-col">
        <span className=" sm:text-sm md:text-lg">{user.username}</span>
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
 
  const [receiverId, setReceiverId] = useState();
  const [chatPerson,setChatPerson] = useState('');
  const [chatType,setChatType]= useState(false);
  const [message,setMessage] = useState();
  const [conversations,setConversations] = useState([])
  const [users,setUsers] = useState([])
  const [onlineUsers,setOnlineUsers] = useState([])

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

  const handleSendMessage = async(messageObj)=>{
    console.log(messageObj)
    console.log(id)
    await axios.post('/message/chat',messageObj).then((res)=>{
      console.log(res)
    }).catch((err)=>{
      console.log(err)
    })
  }

  

  useEffect(()=>{
    (
      async ()=>{
        await axios.get('/accounts/user').then((res)=>{
          setUsers(res.data)
        }).catch((err)=>{
          console.log(err)
        })
        await axios.get('/message/chat').then((res)=>{
          setConversations(res.data)
        }).catch((err)=>{
          console.log(err)
        })
      }
    )()
   
  },[])
const token = Cookies.get("authenticatedUser")
const access = JSON.parse(token).access

useEffect(()=>{
  const socket = new WebSocket(`ws://localhost:8000/chat/?token=${access}`)

  socket.onopen=()=>{
    console.log("connection open in the frontend")
  }



  socket.onclose = ()=>{
    console.log("connectiokn closed in the backend")
  }

  socket.onerror = ()=>{
    console.log("Error connecting the socket")
  }
 
  return ()=>{
    socket.close()
  }
},[])
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
            .filter((item) => item.id !== 1)
            .map((item) => (
              <ChatHead user={item} handleClick={handleClick} setChatPerson={setChatPerson} />
            ))} 
        </div>
      </div>
      <div className="basis-5/6 md:flex relative hidden p-10 flex-col min-h-4/5 max-h-5/6 gap-3  bg-gray-200">
                <div className="flex items-center font-bold justify-center sticky rounded bg-zinc-400 p-4">{chatPerson}</div>
        { !chatType?conversations
          .filter(
            (item) =>
              (item.sender === 1 && item.receiver === receiverId) ||
              (item.receiver === 1 && item.sender === receiverId) 
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
              }>{item.created_at}</span>
            </div>
          )):groupConv.filter((item)=>item.group === chatPerson).map((item)=><div>{item.message}</div>)}
          <div className="w-4/5 gap-x-5 items-center absolute bottom-3 p-2 flex justify-between">
            <Input label="Message" className="p-2  bg-gray-50 rounded" onChange={(e)=>setMessage(e.target.value)} />
            <span className="cursor-pointer" onClick={()=>handleSendMessage({sender:id,receiver:receiverId,message})}>
              <Send/>
            </span>
          </div>
      </div>
    </div>
  );
}

export default Messages;
