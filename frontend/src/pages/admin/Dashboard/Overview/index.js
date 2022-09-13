import React from "react";
import { Link, useNavigate } from "react-router-dom";

import { Row, Col, Button, Dropdown, DropdownButton } from "react-bootstrap";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

import "./index.css";

const Overview = () => {
  const navigate = useNavigate();

  return (
    <div className="overview-container">
      <div className="overview-header-row">
        <div className="col-2">
          <h1>Dashboard</h1>
        </div>
      </div>

      <Row className="Polaris-two-col">
        <Link
          className="Polaris-Card col-3"
          as={Col}
          to="products"
          style={{ textDecoration: "none", color: "#000" }}
        >
          <h5>
            <ArrowForwardIosIcon fontSize="small" />
            Active Products
          </h5>
          <h3>count</h3>
        </Link>
        <Link
          className="Polaris-Card col-3"
          as={Col}
          to="products"
          style={{ textDecoration: "none", color: "#000" }}
        >
          <h5>
            <ArrowForwardIosIcon fontSize="small" />
            Total Sales
          </h5>
          <h3>$</h3>
        </Link>
        <Link
          className="Polaris-Card col-3"
          as={Col}
          to="products"
          style={{ textDecoration: "none", color: "#000" }}
        >
          <h5>
            <ArrowForwardIosIcon fontSize="small" />
            Active Products
          </h5>
          <h3>count</h3>
        </Link>
      </Row>
    </div>
  );
};

export default Overview;
