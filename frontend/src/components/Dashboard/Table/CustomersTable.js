import React from "react";

import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Checkbox,
} from "@mui/material";

export default function CustomersTable({ customersData, ordersData }) {
  return (
    <Box sx={{ width: "100%" }}>
      <Paper sx={{ width: "100%", mb: 2 }}>
        <TableContainer>
          <Table sx={{ minWidth: 750 }} size="medium" className="users-table">
            <TableHead>
              <TableRow>
                <TableCell padding="checkbox">
                  <Checkbox color="primary" />
                </TableCell>
                <TableCell component="th" scope="row" padding="normal">
                  image
                </TableCell>
                <TableCell component="th" scope="row">
                  Full Name
                </TableCell>
                <TableCell component="th" scope="row">
                  Username
                </TableCell>
                <TableCell component="th" scope="row">
                  Joined Date
                </TableCell>
                <TableCell component="th" scope="row">
                  Amount Spent
                </TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {customersData &&
                ordersData &&
                customersData.map((customer) => {
                  let amountSpent = 0;
                  const orders = ordersData.filter((order) => {
                    return customer._id === order.user;
                  });
                  orders.map((item) => {
                    amountSpent += item.totalBill;
                  });
                  return (
                    <TableRow hover role="checkbox" key={customer._id}>
                      <TableCell padding="checkbox">
                        <Checkbox color="primary" />
                      </TableCell>
                      <TableCell component="td" scope="row" padding="normal">
                        <img
                          src={`${process.env.REACT_APP_API_URL}/backend/uploads/users/images/${customer.avatar}`}
                          width="80px"
                        />
                      </TableCell>
                      <TableCell component="td" scope="row">
                        {customer.fullName}
                      </TableCell>
                      <TableCell component="td" scope="row">
                        {customer.username}
                      </TableCell>
                      <TableCell component="td" scope="row">
                        {customer.createdAt.slice(0, 10)}
                      </TableCell>
                      <TableCell component="td" scope="row">
                        ${amountSpent}
                      </TableCell>
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Box>
  );
}
