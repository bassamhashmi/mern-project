import React from "react";
import { useNavigate } from "react-router-dom";
import SearchBar from "../../../../components/Searchbar";
import CustomersTable from "../../../../components/Dashboard/Table/CustomersTable";
import { Button, Dropdown, DropdownButton } from "react-bootstrap";

const Customers = () => {
  const navigate = useNavigate();

  const [customersData, setCustomersData] = React.useState([]);
  const [ordersData, setOrdersData] = React.useState([]);

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

  React.useEffect(() => {
    getCustomers();
    getOrders();
  }, []);

  return (
    <div className="users-container">
      <div className="users-header-row">
        <div className="col-2">
          <h1>All customers</h1>
        </div>
        {/* <div className="col-2 offset-8">
          <Button
            onClick={() => {
              navigate("new");
            }}
          >
            Add product
          </Button>
        </div> */}
      </div>

      {customersData !== [] ? (
        <div className="Polaris-Card">
          <div className="Polaris-Head">
            <div className="col-6" style={{ paddingRight: "20px" }}>
              <SearchBar placeholder="Search Username" />
            </div>
            {/* <div className="col-2 offset-3">
            <DropdownButton id="dropdown-product-vendor" title="Product Vendor">
              <Dropdown.Item href="#/vendor-1">Vendor</Dropdown.Item>
              <Dropdown.Item href="#/vendor-2">Another vendor</Dropdown.Item>
              <Dropdown.Item href="#/vendor-3">Something else</Dropdown.Item>
            </DropdownButton>
          </div> */}
            <div className="col-1 offset-5">
              <DropdownButton id="dropdown-sort" title="Sort">
                <Dropdown.Item href="#/vendor-1">Vendor</Dropdown.Item>
                <Dropdown.Item href="#/vendor-2">Another vendor</Dropdown.Item>
                <Dropdown.Item href="#/vendor-3">Something else</Dropdown.Item>
              </DropdownButton>
            </div>
          </div>

          <CustomersTable
            customersData={customersData}
            ordersData={ordersData}
          />
        </div>
      ) : (
        alert("You don't have rights to view this!")
      )}
    </div>
  );
};

export default Customers;
