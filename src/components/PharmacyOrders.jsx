import { Add } from '@mui/icons-material'
import { Table, TableCell, TableHead, TableRow } from '@mui/material'
import React from 'react'

function PharmacyOrders() {
  return (
    <div>
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>ID</TableCell>
                    <TableCell>Patient</TableCell>
                    <TableCell>Requirements</TableCell>
                    <TableCell>Status</TableCell>

                </TableRow>
            </TableHead>
            <TableRow>
                    <TableCell>ID</TableCell>
                    <TableCell>Patient</TableCell>
                    <TableCell><Add/></TableCell>
                    <TableCell>Status</TableCell>

                </TableRow>
        </Table>
    </div>
  )
}

export default PharmacyOrders