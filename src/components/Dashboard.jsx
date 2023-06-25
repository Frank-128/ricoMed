import { ArrowDownward, ArrowUpward, Bed, BedOutlined, EmojiPeople, GroupAddRounded, GroupWork, LocalHospital, PeopleAlt, Person } from '@mui/icons-material'
import React from 'react'
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'
import { stats } from '../assets/data'

function Dashboard() {
  return (
    <div className='flex flex-col h-full'>
        <h1 className=' text-3xl'>Overview</h1>
        <div className='basis-1/5 flex justify-around gap-x-3 my-1'>

        <div className='basis-1/3'>
                <span>Doctors</span>
                <div className='flex flex-col gap-3 bg-slate-200 shadow-md  p-6 justify-between h-4/5 '>
                    <Person style={{fontSize:'90px',backgroundColor:"cyan",borderRadius:"50%",padding:'10px'}}  color="action"  />
                    <span className='text-gray-400'>Total Doctors</span>
                    <div className='flex justify-between'>
                        <span className='font-bold text-4xl'>120</span>
                    
                    <div className='flex gap-4'>
                    <span className='font-bold text-lg text-green-400'>100</span>
                    <span className='font-bold text-lg text-red-400'>20</span>
                    </div>
                    </div>

                </div>
            </div>
            <div className='basis-1/3'>
                <span>Patients</span>
                <div className='flex flex-col gap-3 bg-slate-200 shadow-md  h-4/5 justify-between p-6 '>
                    <Person style={{fontSize:'90px',backgroundColor:"purple",borderRadius:"50%",padding:'10px'}}  color="action"  />
                    <span className='text-gray-400'>Total Patients</span>
                        <span className='font-bold text-4xl'>920</span>
                   

                </div>
            </div>
            <div className='basis-1/3 '>
                <span>Balance</span>
                <div className='flex flex-col gap-3 bg-slate-200 shadow-md   p-3 justify-between h-4/5 '>
                   <div className='flex flex-col '>
                    <span><ArrowUpward color="success"/> Income</span>
                    <span className='font-bold text-green-600'>4500000</span>
                   </div>
                   <div className='flex flex-col '>
                    <span><ArrowDownward color="warning"/> Expenses</span>
                    <span className='font-bold text-red-400'>30000</span>
                   </div>

                </div>
            </div>
        </div>
        <div className='basis-1/5 '>
            <span className='font-semibold'>Hospital Survey</span>
            <div className='flex gap-3 bg-slate-200 justify-evenly rounded shadow-sm'>

            <div className='flex flex-col p-3 items-center'>
                <PeopleAlt color='action' fontSize='large'/>
                <span className='font-bold text-3xl'>200</span>
                <span className='text-gray-600'>
                    Total staff
                </span>
            </div>
            <div className='flex flex-col p-3 items-center'>
                <Bed color='primary' fontSize='large'/>
                <span className='font-bold text-3xl'>800</span>
                <span className='text-gray-600'>
                    Total beds
                </span>
            </div>
            <div className='flex flex-col p-3 items-center'>
                <BedOutlined color='success' fontSize='large'/>
                <span className='font-bold text-3xl'>20</span>
                <span className='text-gray-600'>
                    Available beds
                </span>
            </div>
            <div className='flex flex-col p-3 items-center'>
                <LocalHospital style={{color:'purple'}} fontSize='large'/>
                <span className='font-bold text-3xl'>14</span>
                <span className='text-gray-600'>
                    Daily surgeries
                </span>
            </div>
            <div className='flex flex-col p-3 items-center'>
                <GroupAddRounded color='success' fontSize='large'/>
                <span className='font-bold text-3xl'>600</span>
                <span className='text-gray-600'>
                    Weekly New patients
                </span>
            </div>
            <div className='flex flex-col p-3 items-center'>
                <EmojiPeople color='warning' fontSize='large'/>
                <span className='font-bold text-3xl'>120</span>
                <span className='text-gray-600'>
                    Daily release
                </span>
            </div>
            
            </div>
        </div>
        <div className='basis-3/5 mt-2 p-2 bg-gray-200'>
            <span>Analysis</span>
            <ResponsiveContainer width="95%" height="90%">
                <AreaChart width={500} height={400} data={stats} margin={{top:10,left:0,right:50}}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="department" />
                    <YAxis />
                    <Tooltip/>
                    <Area type="monotone" dataKey="patients" stroke='#8884d8' fill='#8884c6' />
                </AreaChart>
            </ResponsiveContainer>
        </div>
    </div>
  )
}

export default Dashboard