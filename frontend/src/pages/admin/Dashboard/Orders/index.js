import React from "react";
import { useNavigate, Link } from "react-router-dom";

import SearchBar from "../../../../components/Searchbar";
import OrdersTable from "../../../../components/Dashboard/Table/OrdersTable";

import { Button, Dropdown, DropdownButton } from "react-bootstrap";

import "./index.css";

const Orders = () => {
  const navigate = useNavigate();
  const [ordersData, setOrdersData] = React.useState([]);
  const [customersData, setCustomersData] = React.useState([]);
  const [orderModal, setOrderModal] = React.useState({
    isVisible: false,
  });

  const handleShowOrderModal = () => {
    setOrderModal({ isVisible: true });
  };

  const getOrders = async () => {
    const token = localStorage.getItem("token");
    try {
      const api_url = "http://localhost:3001/api/order/all";

      const response = await fetch(api_url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          auth_token: token,
        },
      });

      const orders = await response.json();

      setOrdersData(orders);
    } catch (error) {
      console.log("Error fetching Orders from server!");
    }
  };

  const getCustomers = async () => {
    const token = localStorage.getItem("token");
    try {
      const api_url = `${process.env.REACT_APP_API_URL}/api/auth/user/all`;

      const response = await fetch(api_url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          auth_token: token,
        },
      });

      const customers = await response.json();

      setCustomersData(customers);
    } catch (error) {
      console.log("Error fetching Customers from server!");
    }
  };

  React.useEffect(() => {
    getOrders();
    getCustomers();
  }, []);

  const handlefilterByOrderStatus = (status) => {
    console.log();
  };

  return (
    <div className="orders-container">
      <div className="orders-header-row">
        <div className="col-2">
          <h1>All Orders</h1>
        </div>
        <div className="col-2 offset-8">
          <Button onClick={handleShowOrderModal}>Manage Order</Button>
        </div>
      </div>

      <div className="Polaris-Card">
        <div className="orders-head">
          <ul className="Polaris-Tabs">
            <Link to="/admin/products">
              <li onClick={() => handlefilterByOrderStatus("All")}>All</li>
            </Link>
            <Link to="/admin/products">
              <li onClick={() => handlefilterByOrderStatus("In Processing")}>
                Orders To Fulfill
              </li>
            </Link>
            <Link to="/admin/products">
              <li onClick={() => handlefilterByOrderStatus("Delivered")}>
                Delivered
              </li>
            </Link>
          </ul>

          <div className="Polaris-Head ">
            <div className="col-10">
              <SearchBar placeholder="Filter customer's orders" />
            </div>

            <div className="col-1 offset-1">
              <DropdownButton id="dropdown-sort" title="Sort">
                <Dropdown.Item>Vendor</Dropdown.Item>
                <Dropdown.Item>Another vendor</Dropdown.Item>
                <Dropdown.Item>Something else</Dropdown.Item>
              </DropdownButton>
            </div>
          </div>
        </div>

        <OrdersTable ordersData={ordersData} customersData={customersData} />
      </div>
    </div>
  );
};

export default Orders;
