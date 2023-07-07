import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { logs, users } from "../assets/data";

function Logs() {
  const [user, setUser] = useState([]);
  useEffect(() => {
    setUser(users);
  }, []);
  return (
    <div>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>USER</TableCell>
            <TableCell>DEPARTMENT</TableCell>
            <TableCell>ACTION</TableCell>
            <TableCell>TIMESTAMP</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {logs.map((item) => (
            <TableRow>
                <TableCell>{item.id}</TableCell>
              <TableCell>
                {" "}
                {user
                  .filter((val) => val.id == item.id)
                  .map((item) => (
                   <div className="flex gap-2 items-center">
                    <img src={item.pic} className="w-10 h-10 object-cover rounded-full" alt="" />

                     <span>{item.name}</span>
                   </div>
                  ))}
              </TableCell>
              <TableCell>
                {user
                  .filter((val) => val.id == item.id)
                  .map((item) => (
                    <span>{item.department}</span>
                  ))}
              </TableCell>
              <TableCell>{item.action}</TableCell>
              <TableCell>{item.timestamp}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

export default Logs;
