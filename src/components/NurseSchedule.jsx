import {Calendar,momentLocalizer} from 'react-big-calendar'
import 'react-big-calendar/lib/css/react-big-calendar.css';
import React from "react";
import moment from 'moment';
import { events } from '../assets/data';

function NurseSchedule() {
  var date = new Date();
  const localizer = momentLocalizer(moment);
  const startTime = moment().hour(8).minute(0)
  const endTime = moment().hour(18).minute(0)
  console.log(date.getFullYear());
  return (
    <div>
        <Calendar 
      
      events={events}
      startAccessor="start"
      endAccessor="end"
      localizer={localizer}
      style={{height:'100vh'}}
      defaultView='day'
      min={startTime.toDate()}
      max={endTime.toDate()}
      
      />
     
      
    </div>
  );
}

export default NurseSchedule;
