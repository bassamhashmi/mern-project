import React from "react";

import { useNavigate, Link } from "react-router-dom";

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
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";

export default function OrdersTable({ ordersData, customersData }) {
  const navigate = useNavigate();
  return (
    <Box sx={{ width: "100%" }}>
      <Paper sx={{ width: "100%", mb: 2 }}>
        <TableContainer>
          <Table sx={{ minWidth: 750 }} size="medium" className="users-table">
            <TableHead>
              <TableRow>
                <TableCell padding="checkbox" className="col-1">
                  <Checkbox color="primary" />
                </TableCell>
                <TableCell component="th" scope="row" className="col-1">
                  Order
                </TableCell>
                <TableCell
                  component="th"
                  scope="row"
                  className="col-1"
                ></TableCell>
                <TableCell component="th" scope="row" className="col-2">
                  Date
                </TableCell>
                <TableCell component="th" scope="row" className="col-3">
                  Customer
                </TableCell>
                <TableCell component="th" scope="row" className="col-2">
                  Status
                </TableCell>
                <TableCell component="th" scope="row" className="col-2">
                  Total
                </TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {customersData &&
                ordersData &&
                ordersData.map((order) => {
                  const customer = customersData.filter(
                    (customer) => order.user === customer._id
                  );
                  return (
                    <TableRow hover role="checkbox" key={order._id}>
                      <TableCell padding="checkbox">
                        <Checkbox color="primary" />
                      </TableCell>
                      <TableCell component="td" scope="row">
                        #{order._id.slice(0, 7)}
                      </TableCell>
                      <Link to="/admin/orders/details">
                        <TableCell component="td" scope="row">
                          <ReceiptLongIcon fontSize="small" />
                        </TableCell>
                      </Link>
                      <TableCell component="td" scope="row">
                        {order.createdAt.slice(0, 10)} at{" "}
                        {order.createdAt.slice(11, 19)}
                      </TableCell>
                      <TableCell component="td" scope="row">
                        {customer.map((item) => {
                          return item.email;
                        })}
                      </TableCell>
                      <TableCell component="td" scope="row">
                        {order.status}
                      </TableCell>
                      <TableCell component="td" scope="row">
                        ${order.totalBill}
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
