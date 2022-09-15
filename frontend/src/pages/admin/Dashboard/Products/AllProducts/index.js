import React from "react";
import { useNavigate, Link } from "react-router-dom";

import SearchBar from "../../../../../components/Searchbar";
import ProductsTable from "../../../../../components/Dashboard/Table/ProductsTable";

import Button from "@mui/material/Button";
import { Dropdown, DropdownButton } from "react-bootstrap";
import "../index.css";

const Products = () => {
  const navigate = useNavigate();
  const [toggle, setToggle] = React.useState(false);
  const [productsData, setProductsData] = React.useState([]);
  const [productsToShow, setProductsToShow] = React.useState([]);
  const [vendorsData, setVendorsData] = React.useState([]);

  const getProducts = async () => {
    try {
      const api_url = `${process.env.REACT_APP_API_URL}/api/products/all`;

      const response = await fetch(api_url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const products = await response.json();

      setProductsData(products);
      setProductsToShow(products);
    } catch (error) {
      console.log("Error fetching products from server!");
    }
  };

  const getVendors = async () => {
    try {
      const api_url = `${process.env.REACT_APP_API_URL}/api/vendor/all`;

      const response = await fetch(api_url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const vendors = await response.json();

      setVendorsData(vendors);
    } catch (error) {
      console.log("Error fetching Vendors from server!");
    }
  };

  React.useEffect(() => {
    getProducts();
    getVendors();
  }, [toggle]);

  const filterByProductStatus = (status) => {
    if (status === "Active" || status === "Draft") {
      const filtered = productsData.filter((product) => {
        return product.status === status;
      });

      setProductsToShow(filtered);
      return;
    }
    setProductsToShow(productsData);
  };

  return (
    <div className="products-container">
      <div className="products-header-row">
        <div className="col-2">
          <h1>Products</h1>
        </div>
        <div className="col-2 offset-8">
          <Button
            variant="contained"
            color="success"
            onClick={() => {
              navigate("new");
            }}
          >
            Add product
          </Button>
        </div>
      </div>

      <div className="Polaris-Card">
        <ul className="Polaris-Tabs">
          <Link to="/admin/products">
            <li onClick={() => filterByProductStatus("All")}>All</li>
          </Link>
          <Link to="/admin/products">
            <li onClick={() => filterByProductStatus("Active")}>Active</li>
          </Link>
          <Link to="/admin/products">
            <li onClick={() => filterByProductStatus("Draft")}>Draft</li>
          </Link>
        </ul>
        <div className="Polaris-Head">
          <div className="col-6" style={{ paddingRight: "20px" }}>
            <SearchBar placeholder="Search Products" />
          </div>
          <div className="col-2 offset-3">
            <DropdownButton id="dropdown-product-vendor" title="Product Vendor">
              {vendorsData &&
                vendorsData.map((item, index) => {
                  return <Dropdown.Item key={index}>{item.name}</Dropdown.Item>;
                })}
            </DropdownButton>
          </div>
          <div className="col-1">
            <DropdownButton id="dropdown-sort" title="Sort">
              <Dropdown.Item href="#/vendor-1">Product title A-Z</Dropdown.Item>
              <Dropdown.Item href="#/vendor-2">Product title Z-A</Dropdown.Item>
              <Dropdown.Item href="#/vendor-3">
                Created (oldest first)
              </Dropdown.Item>
              <Dropdown.Item href="#/vendor-3">
                Created (newest first)
              </Dropdown.Item>
              <Dropdown.Item href="#/vendor-3">Low inventory</Dropdown.Item>
              <Dropdown.Item href="#/vendor-3">High inventory</Dropdown.Item>
              <Dropdown.Item href="#/vendor-1">Category A-Z</Dropdown.Item>
              <Dropdown.Item href="#/vendor-1">Category Z-A</Dropdown.Item>
              <Dropdown.Item href="#/vendor-1">Vendor A-Z</Dropdown.Item>
              <Dropdown.Item href="#/vendor-1">Vendor Z-A</Dropdown.Item>
            </DropdownButton>
          </div>
        </div>

        <ProductsTable productsData={productsToShow} />
      </div>
    </div>
  );
};

export default Products;
