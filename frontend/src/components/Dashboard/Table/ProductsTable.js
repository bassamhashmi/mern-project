import * as React from "react";
import PropTypes from "prop-types";
import { alpha } from "@mui/material/styles";
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  TableSortLabel,
  Toolbar,
  Typography,
  Paper,
  Checkbox,
  IconButton,
  Tooltip,
  FormControlLabel,
  Switch,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import FilterListIcon from "@mui/icons-material/FilterList";
import { visuallyHidden } from "@mui/utils";

export default function ProductsTable({ productsData }) {
  const draftStyle = {
    backgroundColor: "#A4E8F2",
    borderRadius: "10px",
    padding: "3px",
  };

  const activeStyle = {
    backgroundColor: "#AEE9D1",
    borderRadius: "10px",
    padding: "3px",
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Paper sx={{ width: "100%", mb: 2 }}>
        <TableContainer>
          <Table
            sx={{ minWidth: 750 }}
            aria-labelledby="productsTable"
            size="medium"
            className="products-table"
          >
            <TableHead>
              <TableRow>
                <TableCell padding="checkbox">
                  <Checkbox color="primary" />
                </TableCell>
                <TableCell
                  className="col-1"
                  component="th"
                  scope="row"
                  padding="normal"
                  style={{
                    fontSize: "13px",
                    fontWeight: "600",
                    color: "#6d7175",
                  }}
                ></TableCell>
                <TableCell
                  className="col-3"
                  component="th"
                  scope="row"
                  style={{
                    fontSize: "13px",
                    fontWeight: "600",
                    color: "#6d7175",
                  }}
                >
                  Product
                </TableCell>
                <TableCell
                  className="col-1"
                  component="th"
                  scope="row"
                  style={{
                    fontSize: "13px",
                    fontWeight: "600",
                    color: "#6d7175",
                  }}
                >
                  Status
                </TableCell>
                <TableCell
                  className="col-3"
                  component="th"
                  scope="row"
                  style={{
                    fontSize: "13px",
                    fontWeight: "600",
                    color: "#6d7175",
                  }}
                >
                  Inventory
                </TableCell>
                <TableCell
                  className="col-2"
                  component="th"
                  scope="row"
                  style={{
                    fontSize: "13px",
                    fontWeight: "600",
                    color: "#6d7175",
                  }}
                >
                  Category
                </TableCell>
                <TableCell
                  className="col-2"
                  component="th"
                  scope="row"
                  style={{
                    fontSize: "13px",
                    fontWeight: "600",
                    color: "#6d7175",
                  }}
                >
                  Vendor
                </TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {productsData &&
                productsData.map((product) => {
                  const variants = product.variants;
                  const totalVariants = variants.length;
                  let totalInventory = 0;
                  variants.map((variant) => {
                    totalInventory += parseInt(variant.inventory);
                  });
                  return (
                    <TableRow hover role="checkbox" key={product._id}>
                      <TableCell padding="checkbox">
                        <Checkbox color="primary" />
                      </TableCell>
                      <TableCell component="td" scope="row" padding="normal">
                        <img
                          src={`${process.env.REACT_APP_API_URL}/backend/uploads/products/images/${product.featuredImage}`}
                          width="80px"
                          style={{
                            boxShadow:
                              "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px",
                          }}
                        />
                      </TableCell>
                      <TableCell component="td" scope="row">
                        {product.title}
                      </TableCell>
                      <TableCell
                        className="product-status"
                        component="td"
                        scope="row"
                      >
                        <span
                          style={
                            product.status === "Active"
                              ? activeStyle
                              : draftStyle
                          }
                        >
                          {product.status}
                        </span>
                      </TableCell>
                      <TableCell component="td" scope="row">
                        {totalInventory} in stock for {totalVariants} variants
                      </TableCell>
                      <TableCell component="td" scope="row">
                        {product.category}
                      </TableCell>
                      <TableCell component="td" scope="row">
                        {product.vendor}
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
