import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Row, Col, Button, Dropdown, DropdownButton } from "react-bootstrap";

import "../index.css";

const Settings = () => {
  const navigate = useNavigate();

  return (
    <div className="settings-container">
      <div className="settings-header-row">
        <div className="col-2">
          <h1>Dashboard</h1>
        </div>
      </div>

      <Row className="Polaris-two-col">
        <div className="Polaris-Card col-3" as={Col}>
          <Link to="products" style={{ textDecoration: "none", color: "#000" }}>
            <h5>Total Products</h5>
            <h3>5</h3>
          </Link>
        </div>
        <div className="Polaris-Card col-3" as={Col}>
          <Link to="users" style={{ textDecoration: "none", color: "#000" }}>
            <h5>Active Users</h5>
            <h3>2</h3>
          </Link>
        </div>
      </Row>
    </div>
  );
};

export default Settings;
